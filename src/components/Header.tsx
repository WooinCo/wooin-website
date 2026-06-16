"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

type NavChild = { href: string; label: string };
type NavGroup = { title: string; items: NavChild[] };
type NavLink = { href: string; label: string; mega?: NavGroup[] };

const navLinks: NavLink[] = [
  { href: "/", label: "홈" },
  { href: "/about", label: "회사소개" },
  {
    href: "/business",
    label: "사업영역",
    mega: [
      {
        title: "공사 유형",
        items: [
          { href: "/business#newbuild", label: "신축공사" },
          { href: "/business#remodel", label: "증축·리모델링" },
          { href: "/business#repair", label: "보수·개보수" },
        ],
      },
      {
        title: "전문 시공",
        items: [
          { href: "/business#frame", label: "철골공사" },
          { href: "/business#panel", label: "판넬공사" },
          { href: "/business#roof", label: "지붕공사" },
          { href: "/business#steel", label: "강판공사" },
        ],
      },
    ],
  },
  { href: "/solar", label: "솔라루프" },
  { href: "/portfolio", label: "포트폴리오" },
  { href: "/contact", label: "견적문의" },
];

// 드롭다운 화살표
function Caret({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-3 h-3 shrink-0 ${className}`}
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.5 4.5 6 8 9.5 4.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isFullHero = pathname === "/" || pathname === "/solar";
  const transparent = isFullHero && !scrolled && !isMenuOpen;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setMobileSubOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-white shadow-[0_2px_20px_rgba(15,31,77,0.08)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* 로고 */}
          <Link href="/" className="shrink-0">
            <Logo light={transparent} />
          </Link>

          {/* 데스크탑 네비게이션 */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              // ── 사업영역: 2단 메가메뉴 ──
              if (link.mega) {
                const active = pathname === "/business";
                return (
                  <div key={link.label} className="relative group">
                    <Link
                      href={link.href}
                      className={`relative inline-flex items-center gap-1 px-4 py-2 text-[0.95rem] font-semibold transition-colors ${
                        transparent
                          ? "text-white/90 hover:text-white"
                          : active
                            ? "text-navy"
                            : "text-gray-600 hover:text-navy"
                      }`}
                    >
                      {link.label}
                      <Caret className="transition-transform duration-200 group-hover:rotate-180" />
                      <span
                        className={`absolute left-4 right-4 -bottom-0.5 h-0.5 rounded-full transition-transform duration-300 origin-left ${
                          transparent ? "bg-white" : "bg-navy"
                        } ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                      />
                    </Link>

                    {/* 메가메뉴 패널 */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0">
                      <div className="flex divide-x divide-gray-100 bg-white rounded-2xl border border-gray-100 shadow-[0_16px_50px_rgba(15,31,77,0.16)] p-2">
                        {link.mega.map((col) => (
                          <div key={col.title} className="px-2 min-w-[148px]">
                            <p className="px-3 pt-2 pb-1 text-[0.7rem] font-bold tracking-wider text-gray-400">
                              {col.title}
                            </p>
                            {col.items.map((item) => {
                              const cActive =
                                !item.href.includes("#") && pathname === item.href;
                              return (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className={`block px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                                    cActive
                                      ? "text-navy bg-sky"
                                      : "text-gray-600 hover:text-navy hover:bg-mist"
                                  }`}
                                >
                                  {item.label}
                                </Link>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // ── 일반 메뉴 항목 (기존과 동일) ──
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-[0.95rem] font-semibold transition-colors group ${
                    transparent
                      ? "text-white/90 hover:text-white"
                      : active
                        ? "text-navy"
                        : "text-gray-600 hover:text-navy"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-4 right-4 -bottom-0.5 h-0.5 rounded-full transition-transform duration-300 origin-left ${
                      transparent ? "bg-white" : "bg-navy"
                    } ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* 우측 CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:031-662-7890"
              className={`flex items-center gap-1.5 text-sm font-bold transition-colors ${
                transparent ? "text-white" : "text-navy"
              }`}
            >
              <span className="text-base">☎</span>
              031-662-7890
            </a>
            <Link
              href="/contact"
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                transparent
                  ? "bg-white text-navy hover:bg-blue-50"
                  : "bg-navy text-white hover:bg-navy-dark"
              }`}
            >
              견적문의
            </Link>
          </div>

          {/* 모바일 햄버거 */}
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="메뉴 열기/닫기"
          >
            <div className="w-6 flex flex-col gap-1.5">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`block h-0.5 rounded-full transition-all duration-300 origin-center ${
                    transparent ? "bg-white" : "bg-navy"
                  } ${
                    isMenuOpen && i === 0 ? "rotate-45 translate-y-2" : ""
                  } ${isMenuOpen && i === 1 ? "opacity-0 scale-x-0" : ""} ${
                    isMenuOpen && i === 2 ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              ))}
            </div>
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      <div
        className={`lg:hidden bg-white overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-[760px] border-t border-gray-100" : "max-h-0"
        }`}
      >
        <nav className="px-4 py-3">
          {navLinks.map((link) => {
            // ── 사업영역: 모바일 아코디언 ──
            if (link.mega) {
              const active = pathname === "/business";
              return (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileSubOpen(!mobileSubOpen)}
                    aria-expanded={mobileSubOpen}
                    className={`w-full flex items-center justify-between px-4 py-3 text-[0.95rem] font-semibold rounded-lg transition-colors ${
                      active
                        ? "text-navy bg-sky"
                        : "text-gray-600 hover:text-navy hover:bg-mist"
                    }`}
                  >
                    {link.label}
                    <Caret
                      className={`transition-transform duration-200 ${
                        mobileSubOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileSubOpen ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="pl-3 py-1">
                      {link.mega.map((col) => (
                        <div key={col.title} className="mb-1">
                          <p className="px-4 pt-2 pb-1 text-[0.7rem] font-bold tracking-wider text-gray-400">
                            {col.title}
                          </p>
                          {col.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block px-4 py-2.5 text-[0.9rem] font-medium text-gray-500 hover:text-navy hover:bg-mist rounded-lg transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            // ── 일반 메뉴 항목 (기존과 동일) ──
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 text-[0.95rem] font-semibold rounded-lg transition-colors ${
                  pathname === link.href
                    ? "text-navy bg-sky"
                    : "text-gray-600 hover:text-navy hover:bg-mist"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="tel:031-662-7890"
            className="block mt-2 px-4 py-3 text-center text-sm font-bold text-white bg-navy rounded-lg"
          >
            ☎ 031-662-7890 견적문의
          </a>
        </nav>
      </div>
    </header>
  );
}
