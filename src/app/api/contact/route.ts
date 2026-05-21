import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, serviceType, location, message } = body;

    if (!name || !phone || !serviceType || !message) {
      return NextResponse.json(
        { error: "필수 항목을 모두 입력해주세요." },
        { status: 400 }
      );
    }

    // ─────────────────────────────────────────────────────────
    // TODO: 이메일 발송 설정
    //
    // 아래 주석을 해제하고 Nodemailer로 이메일을 발송할 수 있습니다.
    // 먼저 npm install nodemailer @types/nodemailer 를 실행하세요.
    //
    // import nodemailer from "nodemailer";
    //
    // const transporter = nodemailer.createTransport({
    //   service: "gmail",  // 또는 다른 SMTP 서비스
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS,
    //   },
    // });
    //
    // await transporter.sendMail({
    //   from: process.env.EMAIL_USER,
    //   to: "수신할이메일@example.com",
    //   subject: `[우인산업] ${name}님의 ${serviceType} 견적 문의`,
    //   text: [
    //     `이름: ${name}`,
    //     `연락처: ${phone}`,
    //     `이메일: ${email || "-"}`,
    //     `공사종류: ${serviceType}`,
    //     `공사위치: ${location || "-"}`,
    //     `문의내용: ${message}`,
    //   ].join("\n"),
    // });
    // ─────────────────────────────────────────────────────────

    console.log("[문의 접수]", {
      name,
      phone,
      email,
      serviceType,
      location,
      message,
      receivedAt: new Date().toISOString(),
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
