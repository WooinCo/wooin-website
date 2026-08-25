import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * 견적문의 첨부파일을 브라우저에서 곧장 Vercel Blob으로 업로드하기 위한
 * 토큰 발급 엔드포인트. 파일 자체는 이 서버를 거치지 않으므로 Vercel
 * 서버리스 함수의 요청 본문 크기 제한(약 4.5MB)에 걸리지 않는다.
 */
export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody;

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        return {
          allowedContentTypes: [
            "image/*",
            "application/pdf",
            "application/dxf",
            "application/x-dwg",
            "application/octet-stream",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "application/vnd.ms-excel",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "application/msword",
            "application/zip",
          ],
          addRandomSuffix: true,
          maximumSizeInBytes: 20 * 1024 * 1024, // 20MB per file
          tokenPayload: JSON.stringify({ pathname }),
        };
      },
      onUploadCompleted: async () => {
        // 별도 후처리 필요 없음 — 완료된 파일 URL은 클라이언트가 폼 제출에 포함시킴
      },
    });

    return NextResponse.json(jsonResponse);
  } catch (error) {
    console.error("Blob upload token error:", error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }
    );
  }
}
