import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * 견적문의 첨부파일 다운로드 프록시.
 *
 * Blob 스토어가 Private로 생성되어(생성 후 변경 불가) 블롭 URL은 토큰 없이는
 * 열람할 수 없다. 이메일 알림에는 이 프록시 링크를 넣고, 클릭 시 서버가
 * BLOB_READ_WRITE_TOKEN으로 인증해서 파일을 대신 받아와 전달한다.
 */
export async function GET(request: NextRequest) {
  const blobUrl = request.nextUrl.searchParams.get("url");
  const filename = request.nextUrl.searchParams.get("name") || "attachment";

  if (!blobUrl) {
    return NextResponse.json({ error: "url이 필요합니다." }, { status: 400 });
  }

  // 우리 Private Blob 스토어가 아닌 임의의 URL을 이 라우트로 프록시하지 못하도록 제한
  let parsed: URL;
  try {
    parsed = new URL(blobUrl);
  } catch {
    return NextResponse.json({ error: "잘못된 url입니다." }, { status: 400 });
  }
  if (!parsed.hostname.endsWith(".private.blob.vercel-storage.com")) {
    return NextResponse.json({ error: "허용되지 않은 주소입니다." }, { status: 403 });
  }

  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    console.error("BLOB_READ_WRITE_TOKEN is not set");
    return NextResponse.json(
      { error: "서버 설정 오류가 발생했습니다." },
      { status: 500 }
    );
  }

  const res = await fetch(parsed.toString(), {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok || !res.body) {
    return NextResponse.json(
      { error: "파일을 불러올 수 없습니다." },
      { status: res.status || 502 }
    );
  }

  return new NextResponse(res.body, {
    status: 200,
    headers: {
      "Content-Type": res.headers.get("content-type") || "application/octet-stream",
      "Content-Disposition": `attachment; filename*=UTF-8''${encodeURIComponent(
        filename
      )}`,
      "Cache-Control": "private, no-store",
    },
  });
}
