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

const topLinks: LinkItem[] = [
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
];

const YOUTUBE_CHANNEL = "https://www.youtube.com/@wooin_co";
const INSTAGRAM = "https://www.instagram.com/wooin_corp/";
const BLOG = "https://blog.naver.com/wooin-in";
const MAP =
  "https://maps.google.com/maps?q=경기도+평택시+목천로+74-28";

function LinkButton({ link }: { link: LinkItem }) {
  const isExternal = link.href.startsWith("http");
  return (
    <a
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
        <span className="block font-bold leading-tight">{link.label}</span>
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
      <span className={`shrink-0 ${link.primary ? "text-navy/40" : "text-white/40"}`}>
        ›
      </span>
    </a>
  );
}

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

          {/* 견적문의 · 전화 */}
          <div className="mt-9 space-y-3.5">
            {topLinks.map((link) => (
              <LinkButton key={link.label} link={link} />
            ))}
          </div>

          {/* 유튜브 홍보영상 (자동재생 없음) */}
          <div className="mt-5 rounded-2xl overflow-hidden shadow-lg aspect-video bg-black">
            <iframe
              src="https://www.youtube.com/embed/FIkuBe-KMnw"
              title="(주)우인산업 홍보영상"
              allow="clipboard-write; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          {/* 유튜브 배너 (채널 바로가기) */}
          <a
            href={YOUTUBE_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="우인산업 유튜브 채널"
            className="mt-3.5 block rounded-2xl overflow-hidden shadow-lg transition-transform active:scale-[0.98] hover:brightness-105"
          >
            <Image
              src="/images/link-youtube.png"
              alt="우인산업 유튜브 채널"
              width={1600}
              height={900}
              sizes="(max-width: 768px) 100vw, 448px"
              className="w-full h-auto"
            />
          </a>

          {/* 인스타그램 + 블로그 배너 */}
          <div className="mt-3.5 grid grid-cols-2 gap-3.5">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="우인산업 인스타그램"
              className="block rounded-2xl overflow-hidden shadow-lg transition-transform active:scale-[0.98] hover:brightness-105"
            >
              <Image
                src="/images/link-insta.png"
                alt="우인산업 인스타그램"
                width={1656}
                height={1294}
                sizes="(max-width: 768px) 50vw, 224px"
                className="w-full h-auto"
              />
            </a>
            <a
              href={BLOG}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="우인산업 네이버 블로그"
              className="block rounded-2xl overflow-hidden shadow-lg transition-transform active:scale-[0.98] hover:brightness-105"
            >
              <Image
                src="/images/link-blog.png"
                alt="우인산업 네이버 블로그"
                width={1605}
                height={1277}
                sizes="(max-width: 768px) 50vw, 224px"
                className="w-full h-auto"
              />
            </a>
          </div>

          {/* 오시는 길 */}
          <div className="mt-3.5">
            <LinkButton
              link={{
                icon: "📍",
                label: "오시는 길",
                sub: "경기도 평택시 목천로 74-28",
                href: MAP,
              }}
            />
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
