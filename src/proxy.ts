import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * 소프트 런치 게이트.
 * 공개 서브도메인은 각자의 단독 페이지만 노출한다.
 *   - quote.wooin-j.co.kr  → /quote (견적문의)
 *   - link.wooin-j.co.kr   → /link  (링크 모음)
 * 그 외 경로는 해당 페이지로 돌려보내, 작업 중인 홈페이지는 숨긴다.
 * vercel.app 미리보기 등 그 외 호스트에서는 전체 사이트를 볼 수 있다.
 *
 * 정식 오픈 시 이 파일(src/proxy.ts)만 삭제하면 전체 사이트가 공개된다.
 */
const GATED_HOSTS: { prefix: string; page: string }[] = [
  { prefix: "quote.", page: "/quote" },
  { prefix: "link.", page: "/link" },
];

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const { pathname } = request.nextUrl;

  const gate = GATED_HOSTS.find((g) => host.startsWith(g.prefix));

  // 게이트 대상 호스트가 아니면(예: vercel.app 미리보기) 전체 열람 허용
  if (!gate) {
    return NextResponse.next();
  }

  // 해당 단독 페이지는 그대로 노출
  if (pathname === gate.page || pathname.startsWith(`${gate.page}/`)) {
    return NextResponse.next();
  }

  // 그 외 경로는 단독 페이지로 리다이렉트(임시 307)
  const url = request.nextUrl.clone();
  url.pathname = gate.page;
  url.search = "";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // api·next 내부·정적 파일(확장자 포함)·public 이미지는 게이트에서 제외
    "/((?!api|_next/static|_next/image|favicon.ico|images|.*\\.[\\w]+$).*)",
  ],
};
