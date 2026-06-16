"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

/**
 * 사이트 공통 헤더/풋터 래퍼.
 * 독립 견적문의 페이지(/quote)처럼 헤더·풋터 없이 폼만 보여줘야 하는
 * 경로에서는 크롬(헤더/풋터)을 렌더하지 않는다.
 */
const BARE_PREFIXES = ["/quote"];

export default function SiteChrome({
  children,
  footer,
}: {
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  const pathname = usePathname();
  const bare = BARE_PREFIXES.some((p) => pathname?.startsWith(p));

  if (bare) {
    return <main className="flex-1">{children}</main>;
  }

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      {footer}
    </>
  );
}
