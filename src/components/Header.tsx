"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* 로고 */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative w-10 h-10">
              <Image
                src="/logo.png"
                alt="우인산업 로고"
                fill
                className="object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <div className="text-[#1C3177]">
              <div className="font-black text-lg leading-tight">(주)우인산업</div>
              <div className="text-[10px] text-gray-500 font-light tracking-wider">
                WOOIN construction industry
              </div>
            </div>
          </Link>

          {/* 데스크탑 네비게이션 */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-[#1C3177] bg-blue-50 font-semibold"
                    : "text-gray-700 hover:text-[#1C3177] hover:bg-blue-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:031-662-7890"
              className="ml-3 bg-[#1C3177] text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-[#0f1f5c] transition-colors"
            >
              ☎ 031-662-7890
            </a>
          </nav>

          {/* 모바일 햄버거 */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="메뉴 열기/닫기"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-gray-700 transition-all duration-300 origin-center ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-gray-700 transition-all duration-300 origin-center ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="border-t border-gray-100 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  pathname === link.href
                    ? "text-[#1C3177] bg-blue-50"
                    : "text-gray-700 hover:text-[#1C3177] hover:bg-blue-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:031-662-7890"
              className="block px-4 py-3 text-sm font-semibold text-[#1C3177]"
            >
              ☎ 031-662-7890
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
