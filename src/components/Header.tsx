"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const socialLinks = [
  {
    href: "https://www.youtube.com/@wooin_co",
    label: "YouTube",
    bg: "bg-[#FF0000]",
    hoverBg: "hover:bg-[#FF0000]",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
        <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.55 3.5 12 3.5 12 3.5s-7.55 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.45 20.5 12 20.5 12 20.5s7.55 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.75 15.52V8.48L15.8 12l-6.05 3.52z"/>
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/wooin_corp/",
    label: "Instagram",
    bg: "bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737]",
    hoverBg:
      "hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#F77737]",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
  {
    href: "https://blog.naver.com/wooin-in",
    label: "네이버 블로그",
    bg: "bg-[#03C75A]",
    hoverBg: "hover:bg-[#03C75A]",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM7 7h3v1H7V7zm10 10H7v-1h10v1zm0-3H7v-1h10v1zm0-3H7v-1h10v1z"/>
      </svg>
    ),
  },
];

type NavChild = { href: string; label: string; sub?: boolean };
type NavGroup = { title: string; items: NavChild[] };
type NavLink = { href: string; label: string; mega?: NavGroup[] };

const navLinks: NavLink[] = [
  { href: "/", label: "홈" },
  {
    href: "/about",
    label: "회사소개",
    mega: [
      {
        title: "회사소개",
        items: [
          { href: "/about", label: "회사소개" },
          { href: "/partners", label: "협력사" },
        ],
      },
    ],
  },
  {
    href: "/business",
    label: "사업영역",
    mega: [
      {
        title: "건축공사",
        items: [
          { href: "/business#newbuild", label: "신축공사" },
        ],
      },
      {
        title: "증축·보수·리모델링",
        items: [
          { href: "/business#remodel", label: "증축·보수·리모델링" },
        ],
      },
      {
        title: "태양광(솔라루프)",
        items: [
          { href: "/solar", label: "솔라루프" },
        ],
      },
    ],
  },
  { href: "/products", label: "제품소개" },
  { href: "/portfolio", label: "포트폴리오" },
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
              // ── 메가메뉴 ──
              if (link.mega) {
                const subHrefs = link.mega.flatMap((col) => col.items.map((i) => i.href.split("#")[0]));
                const active = pathname === link.href || subHrefs.includes(pathname);
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
                        className={`absolute left-4 right-4 -bottom-0.5 h-[3px] rounded-full transition-transform duration-300 origin-left ${
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
                              return item.sub ? (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className={`flex items-center gap-1.5 pl-5 pr-3 py-1.5 text-xs rounded-lg transition-colors ${
                                    cActive
                                      ? "text-navy font-semibold"
                                      : "text-gray-400 hover:text-navy"
                                  }`}
                                >
                                  <span className="text-gray-300">└</span>
                                  {item.label}
                                </Link>
                              ) : (
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
                    className={`absolute left-4 right-4 -bottom-0.5 h-[3px] rounded-full transition-transform duration-300 origin-left ${
                      transparent ? "bg-white" : "bg-navy"
                    } ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* 우측 CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* SNS 아이콘 */}
            <div className="flex items-center gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 hover:scale-110 transition-all ${
                    transparent
                      ? "bg-white/20 hover:bg-white/35"
                      : `bg-gray-400 ${s.hoverBg}`
                  }`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
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
            // ── 모바일 아코디언 ──
            if (link.mega) {
              const subHrefs = link.mega.flatMap((col) => col.items.map((i) => i.href.split("#")[0]));
              const active = pathname === link.href || subHrefs.includes(pathname);
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
