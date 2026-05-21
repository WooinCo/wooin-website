import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0d1b4b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* 회사 소개 */}
          <div>
            <div className="font-black text-xl mb-1">(주)우인산업</div>
            <div className="text-blue-300 text-xs tracking-widest mb-5">
              WOOIN construction industry
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              내일을 짓는 기술,
              <br />
              사람을 향한 우인(友人)
            </p>
          </div>

          {/* 연락처 */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-blue-200">
              연락처
            </h3>
            <ul className="space-y-2.5 text-sm text-blue-100">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <span>경기도 평택시 목천로 74-28</span>
              </li>
              <li>
                <a
                  href="tel:031-662-7890"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <span>☎</span>
                  <span>031-662-7890</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📠</span>
                <span>031-662-7891</span>
              </li>
              <li className="flex items-center gap-2">
                <span>👤</span>
                <span>대표이사 조안다</span>
              </li>
            </ul>
          </div>

          {/* 바로가기 */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-blue-200">
              바로가기
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "회사소개" },
                { href: "/business", label: "사업소개" },
                { href: "/portfolio", label: "포트폴리오" },
                { href: "/contact", label: "견적문의" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-100 hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span className="text-blue-400">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* SNS */}
            <div className="mt-6">
              <h3 className="font-semibold text-base mb-3 text-blue-200">SNS</h3>
              <div className="flex flex-col gap-2">
                <a
                  href="https://blog.naver.com/wooin-in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-100 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span className="text-blue-400">›</span>네이버 블로그
                </a>
                <a
                  href="https://www.youtube.com/@wooin_co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-100 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span className="text-blue-400">›</span>YouTube
                </a>
                <a
                  href="https://www.instagram.com/wooin_corp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-100 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span className="text-blue-400">›</span>Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 저작권 */}
        <div className="mt-10 pt-8 border-t border-blue-900 text-center text-blue-400 text-xs">
          © {new Date().getFullYear()} (주)우인산업. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
