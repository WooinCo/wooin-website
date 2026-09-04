import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

interface UploadedFile {
  name: string;
  url: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      phone,
      email,
      serviceType,
      location,
      message,
      files,
      _hp,
      _t,
    }: {
      name: string;
      phone: string;
      email: string;
      serviceType: string;
      location?: string;
      message: string;
      files?: UploadedFile[];
      _hp?: string;
      _t?: number;
    } = body;

    // 스팸 방지: 허니팟 필드가 채워졌거나 3초 미만 제출이면 무시
    if (_hp) {
      return NextResponse.json({ success: true }); // 봇에게 성공처럼 보여줌
    }
    if (_t && Date.now() - _t < 3000) {
      return NextResponse.json({ success: true });
    }

    // 스팸 키워드 필터 (투자사기·영문 광고성 메일 차단)
    const SPAM_KEYWORDS = [
      "investment", "invest", "roi", "return on investment",
      "financial consultant", "loan funding", "funding program",
      "collaboration", "capital returns", "diversified",
      "sir/madam", "attn:", "dear sir", "dear madam",
      "gulf cooperation", "saudi arabia", "cryptocurrency",
      "bitcoin", "forex", "binary option", "wire transfer",
      "inheritance", "beneficiary", "next of kin",
    ];
    const msgLower = (message + " " + name + " " + email).toLowerCase();
    const isSpam = SPAM_KEYWORDS.some((kw) => msgLower.includes(kw));
    if (isSpam) {
      console.warn("Spam detected, silently dropping:", { name, email });
      return NextResponse.json({ success: true }); // 스패머에게 성공처럼 보여줌
    }

    if (!name || !phone || !email || !serviceType || !message) {
      return NextResponse.json(
        { error: "필수 항목을 모두 입력해주세요." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "메일 설정 오류가 발생했습니다. 잠시 후 다시 시도해주세요." },
        { status: 500 }
      );
    }
    const resend = new Resend(apiKey);

    // 첨부파일은 서버를 거치지 않고 브라우저에서 Vercel Blob으로 바로 업로드됨.
    // 여기선 그 결과 URL만 받아 메일 본문에 다운로드 링크로 넣는다
    // (직접 첨부하지 않으므로 서버리스 함수 요청 본문 크기 제한에 걸리지 않음).
    const uploadedFiles = Array.isArray(files) ? files : [];

    const toList = (process.env.EMAIL_TO || "info@wooin-j.co.kr")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    // Blob 스토어가 Private라 원본 URL은 토큰 없이 열람 불가 — 우리 서버가 인증을
    // 대신 처리하는 다운로드 프록시(/api/attachment) 링크를 메일에 넣는다.
    const origin = new URL(request.url).origin;
    const fileListHtml =
      uploadedFiles.length > 0
        ? uploadedFiles
            .map((f) => {
              const proxyUrl = `${origin}/api/attachment?url=${encodeURIComponent(
                f.url
              )}&name=${encodeURIComponent(f.name)}`;
              return `<a href="${proxyUrl}" style="color:#1c3177;text-decoration:underline;" target="_blank" rel="noopener noreferrer">📎 ${f.name}</a>`;
            })
            .join("<br/>")
        : "없음";

    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || "우인산업 홈페이지 <onboarding@resend.dev>",
      to: toList,
      replyTo: email,
      subject: `[우인산업 견적문의] ${name}님 / ${serviceType}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:12px;">
          <h2 style="color:#1c3177;margin-bottom:24px;border-bottom:2px solid #1c3177;padding-bottom:12px;">
            📋 새 견적 문의가 접수되었습니다
          </h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr style="background:#f3f6ff;">
              <td style="padding:10px 14px;font-weight:bold;color:#1c3177;width:120px;">이름</td>
              <td style="padding:10px 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px 14px;font-weight:bold;color:#1c3177;">연락처</td>
              <td style="padding:10px 14px;">${phone}</td>
            </tr>
            <tr style="background:#f3f6ff;">
              <td style="padding:10px 14px;font-weight:bold;color:#1c3177;">이메일</td>
              <td style="padding:10px 14px;">${email}</td>
            </tr>
            <tr>
              <td style="padding:10px 14px;font-weight:bold;color:#1c3177;">공사 종류</td>
              <td style="padding:10px 14px;">${serviceType}</td>
            </tr>
            <tr style="background:#f3f6ff;">
              <td style="padding:10px 14px;font-weight:bold;color:#1c3177;">공사 위치</td>
              <td style="padding:10px 14px;">${location || "-"}</td>
            </tr>
            <tr>
              <td style="padding:10px 14px;font-weight:bold;color:#1c3177;">첨부파일</td>
              <td style="padding:10px 14px;">${fileListHtml}</td>
            </tr>
          </table>
          <div style="margin-top:20px;background:#f9fafb;border-radius:8px;padding:16px;">
            <p style="font-weight:bold;color:#1c3177;margin:0 0 8px;">문의 내용</p>
            <p style="margin:0;white-space:pre-wrap;color:#374151;">${message}</p>
          </div>
          <p style="margin-top:24px;font-size:12px;color:#9ca3af;">
            접수 시각: ${new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "메일 발송에 실패했습니다." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
