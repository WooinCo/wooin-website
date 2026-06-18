import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * 소프트 런치 게이트.
 * 공개 도메인(quote.wooin-j.co.kr)에서만 /quote(견적문의)만 노출하고
 * 나머지는 전부 /quote 로 보낸다.
 * 그 외 호스트(vercel.app 미리보기 등)에서는 게이트를 적용하지 않아
 * 관리자가 작업 중인 전체 사이트를 미리볼 수 있다.
 *
 * 정식 오픈 시 이 파일(src/proxy.ts)만 삭제하면 전체 사이트가 공개된다.
 */
export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const { pathname } = request.nextUrl;

  // 공개 도메인이 아니면(예: vercel.app 미리보기) 게이트 미적용 → 전체 열람 가능
  const isPublicGatedHost = host.startsWith("quote.");
  if (!isPublicGatedHost) {
    return NextResponse.next();
  }

  // 견적문의 페이지는 그대로 노출
  if (pathname === "/quote" || pathname.startsWith("/quote/")) {
    return NextResponse.next();
  }

  // 그 외 경로는 견적문의 페이지로 리다이렉트(임시 307)
  const url = request.nextUrl.clone();
  url.pathname = "/quote";
  url.search = "";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // api·next 내부·정적 파일(확장자 포함)·public 이미지는 게이트에서 제외
    "/((?!api|_next/static|_next/image|favicon.ico|images|.*\\.[\\w]+$).*)",
  ],
};
