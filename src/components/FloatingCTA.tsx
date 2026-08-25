"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

/** 이 버튼이 가리키는 페이지 자체이거나, 폼만 보여주는 독립 페이지에서는 숨긴다 */
const HIDDEN_PREFIXES = ["/contact", "/quote", "/link"];

export default function FloatingCTA() {
  const pathname = usePathname();
  const hidden = HIDDEN_PREFIXES.some((p) => pathname?.startsWith(p));

  if (hidden) return null;

  return (
    <Link
      href="/contact"
      aria-label="온라인 견적문의 바로가기"
      className="fixed bottom-6 right-6 z-[60] flex items-center gap-2 pl-5 pr-4 py-4 rounded-full bg-navy text-white font-extrabold text-sm shadow-2xl shadow-navy/30 hover:bg-navy-dark hover:-translate-y-0.5 hover:shadow-navy/50 transition-all"
    >
      바로 견적문의
      <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-base shrink-0">
        →
      </span>
    </Link>
  );
}
