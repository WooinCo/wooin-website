"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "홈" },
  { href: "/about", label: "회사소개" },
  { href: "/business", label: "사업소개" },
  { href: "/portfolio", label: "포트폴리오" },
  { href: "/contact", label: "견적문의" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !isMenuOpen;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
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
          isMenuOpen ? "max-h-[400px] border-t border-gray-100" : "max-h-0"
        }`}
      >
        <nav className="px-4 py-3">
          {navLinks.map((link) => (
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
          ))}
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
