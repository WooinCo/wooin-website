import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "(주)우인산업 — 모든 채널 한눈에",
  description:
    "판넬·지붕·강판공사 전문 (주)우인산업. 견적문의·유튜브·인스타그램·블로그를 한 곳에서.",
  openGraph: {
    title: "(주)우인산업 — 모든 채널 한눈에",
    description: "판넬·지붕·강판공사 전문 (주)우인산업. 견적문의·채널 바로가기.",
  },
};

type LinkItem = {
  icon: string;
  label: string;
  sub?: string;
  href: string;
  primary?: boolean;
};

const links: LinkItem[] = [
  {
    icon: "📝",
    label: "무료 견적문의",
    sub: "온라인으로 빠르게 신청",
    href: "https://quote.wooin-j.co.kr",
    primary: true,
  },
  {
    icon: "📞",
    label: "전화 상담",
    sub: "031-662-7890",
    href: "tel:031-662-7890",
  },
  {
    icon: "▶️",
    label: "YouTube",
    sub: "시공 영상 보기",
    href: "https://www.youtube.com/@wooin_co",
  },
  {
    icon: "📷",
    label: "Instagram",
    sub: "@wooin_corp",
    href: "https://www.instagram.com/wooin_corp/",
  },
  {
    icon: "📰",
    label: "네이버 블로그",
    sub: "시공 사례·소식",
    href: "https://blog.naver.com/wooin-in",
  },
  {
    icon: "📍",
    label: "오시는 길",
    sub: "경기도 평택시 목천로 74-28",
    href: "https://maps.google.com/maps?q=경기도+평택시+목천로+74-28",
  },
];

export default function LinkPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-dark via-navy to-navy-light px-5 py-12">
      <div className="max-w-md mx-auto">
        {/* 프로필 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center p-4">
            <Image
              src="/images/logo-navy.png"
              alt="(주)우인산업 로고"
              width={1183}
              height={382}
              className="w-full h-auto"
              priority
            />
          </div>
          <h1 className="mt-5 text-2xl font-extrabold text-white">
            (주)우인산업
          </h1>
          <p className="mt-2 text-blue-100/80 text-sm leading-relaxed">
            내일을 짓는 기술, 사람을 향한 우인(友人)
            <br />
            판넬 · 지붕 · 강판공사 전문 기업
          </p>
        </div>

        {/* 링크 버튼 */}
        <div className="mt-9 space-y-3.5">
          {links.map((link) => {
            const isExternal = link.href.startsWith("http");
            return (
              <a
                key={link.label}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className={`flex items-center gap-4 rounded-2xl px-5 py-4 transition-all active:scale-[0.98] ${
                  link.primary
                    ? "bg-white text-navy shadow-lg hover:bg-blue-50"
                    : "bg-white/10 text-white border border-white/15 hover:bg-white/20 backdrop-blur-sm"
                }`}
              >
                <span className="text-2xl shrink-0">{link.icon}</span>
                <span className="flex-1 text-left">
                  <span className="block font-bold leading-tight">
                    {link.label}
                  </span>
                  {link.sub && (
                    <span
                      className={`block text-xs mt-0.5 ${
                        link.primary ? "text-navy/50" : "text-blue-100/60"
                      }`}
                    >
                      {link.sub}
                    </span>
                  )}
                </span>
                <span
                  className={`shrink-0 ${
                    link.primary ? "text-navy/40" : "text-white/40"
                  }`}
                >
                  ›
                </span>
              </a>
            );
          })}
        </div>

        {/* 푸터 */}
        <p className="mt-10 text-center text-xs text-blue-100/50">
          © (주)우인산업 WOOIN Construction Industry
        </p>
      </div>
    </div>
  );
}
