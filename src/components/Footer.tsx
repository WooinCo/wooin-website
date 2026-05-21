import Link from "next/link";
import Logo from "./Logo";

const sitemap = [
  { href: "/about", label: "회사소개" },
  { href: "/business", label: "사업소개" },
  { href: "/solar", label: "솔라루프" },
  { href: "/portfolio", label: "포트폴리오" },
  { href: "/contact", label: "견적문의" },
];

const sns = [
  { href: "https://blog.naver.com/wooin-in", label: "네이버 블로그" },
  { href: "https://www.youtube.com/@wooin_co", label: "YouTube" },
  { href: "https://www.instagram.com/wooin_corp/", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      {/* 상단 CTA 바 */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-extrabold">
              판넬·지붕·강판공사, 우인산업과 함께하세요
            </h3>
            <p className="text-blue-200/70 text-sm mt-1.5">
              전문 상담원이 무료로 견적을 안내해 드립니다.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:031-662-7890"
              className="px-6 py-3 rounded-full border border-white/30 text-white font-bold text-sm hover:bg-white/10 transition-colors"
            >
              ☎ 031-662-7890
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-white text-navy font-bold text-sm hover:bg-blue-50 transition-colors"
            >
              온라인 견적문의
            </Link>
          </div>
        </div>
      </div>

      {/* 본문 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* 회사 정보 */}
          <div className="md:col-span-5">
            <Logo light />
            <p className="text-blue-200/70 text-sm mt-5 leading-relaxed">
              내일을 짓는 기술, 사람을 향한 우인(友人).
              <br />
              정직한 시공과 책임감으로 고객의 신뢰에 보답하겠습니다.
            </p>
            <div className="mt-6 space-y-1.5 text-sm text-blue-100/80">
              <p>경기도 평택시 목천로 74-28</p>
              <p>
                대표이사 조안다 &nbsp;|&nbsp; TEL 031-662-7890 &nbsp;|&nbsp; FAX
                031-662-7891
              </p>
            </div>
          </div>

          {/* 사이트맵 */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-sm tracking-wider text-blue-300 mb-4">
              SITEMAP
            </h4>
            <ul className="space-y-2.5">
              {sitemap.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-blue-100/80 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SNS */}
          <div className="md:col-span-4">
            <h4 className="font-bold text-sm tracking-wider text-blue-300 mb-4">
              SNS CHANNEL
            </h4>
            <ul className="space-y-2.5">
              {sns.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-100/80 hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    {item.label}
                    <span className="text-xs">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center text-blue-300/50 text-xs">
          © {new Date().getFullYear()} (주)우인산업 WOOIN Construction Industry. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
