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
    icon: "📍",
    label: "오시는 길",
    sub: "경기도 평택시 목천로 74-28",
    href: "https://maps.google.com/maps?q=경기도+평택시+목천로+74-28",
  },
];

// 브랜드 소셜 아이콘 (이미지형 버튼)
function YouTubeGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor" aria-hidden>
      <path d="M9.5 16.5v-9l7 4.5-7 4.5z" />
    </svg>
  );
}
function InstagramGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const socials: { name: string; href: string; bg: string; node: React.ReactNode }[] =
  [
    {
      name: "YouTube",
      href: "https://www.youtube.com/@wooin_co",
      bg: "bg-[#FF0000]",
      node: <YouTubeGlyph />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/wooin_corp/",
      bg: "bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5]",
      node: <InstagramGlyph />,
    },
    {
      name: "네이버 블로그",
      href: "https://blog.naver.com/wooin-in",
      bg: "bg-[#03C75A]",
      node: <span className="text-white font-extrabold text-xs">blog</span>,
    },
  ];

export default function LinkPage() {
  return (
    <div className="min-h-screen bg-navy-dark flex justify-center sm:py-10">
      <div className="w-full max-w-md bg-gradient-to-b from-navy via-navy to-navy-light sm:rounded-3xl overflow-hidden shadow-2xl">
        {/* 커버 사진 */}
        <div className="relative h-44 sm:h-52">
          <Image
            src="/images/building.png"
            alt="(주)우인산업 사옥"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 448px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
        </div>

        <div className="px-5 pb-12">
          {/* 프로필 */}
          <div className="-mt-14 relative flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-white shadow-xl ring-4 ring-navy/40 flex items-center justify-center p-4">
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

          {/* 홍보영상 (자동재생 없음) */}
          <div className="mt-8 rounded-2xl overflow-hidden shadow-lg aspect-video bg-black">
            <iframe
              src="https://www.youtube.com/embed/FIkuBe-KMnw"
              title="(주)우인산업 홍보영상"
              allow="clipboard-write; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          {/* 링크 버튼 */}
          <div className="mt-6 space-y-3.5">
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

          {/* 소셜 브랜드 아이콘 */}
          <div className="mt-8 flex justify-center gap-5">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className={`w-14 h-14 rounded-full ${s.bg} text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform`}
              >
                {s.node}
              </a>
            ))}
          </div>

          {/* 푸터 */}
          <p className="mt-8 text-center text-xs text-blue-100/50">
            © (주)우인산업 WOOIN Construction Industry
          </p>
        </div>
      </div>
    </div>
  );
}
