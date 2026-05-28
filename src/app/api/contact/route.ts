import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const serviceType = formData.get("serviceType") as string;
    const location = formData.get("location") as string;
    const message = formData.get("message") as string;
    const files = formData.getAll("files") as File[];

    if (!name || !phone || !serviceType || !message) {
      return NextResponse.json(
        { error: "필수 항목을 모두 입력해주세요." },
        { status: 400 }
      );
    }

    // 첨부파일 처리
    const attachments = await Promise.all(
      files
        .filter((f) => f.size > 0)
        .map(async (file) => ({
          filename: file.name,
          content: Buffer.from(await file.arrayBuffer()),
        }))
    );

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"우인산업 홈페이지" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
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
              <td style="padding:10px 14px;">${email || "-"}</td>
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
              <td style="padding:10px 14px;">${
                attachments.length > 0
                  ? attachments.map((a) => a.filename).join(", ")
                  : "없음"
              }</td>
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
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
