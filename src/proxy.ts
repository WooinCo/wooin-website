import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * 소프트 런치 게이트.
 * 견적문의 페이지(/quote)만 공개하고, 그 외 모든 페이지(새 홈페이지 포함)는
 * /quote 로 보낸다. 폼 전송용 API(/api/contact)와 정적 파일은 그대로 통과한다.
 *
 * 정식 오픈 시 이 파일(src/proxy.ts)만 삭제하면 전체 사이트가 공개된다.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

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
