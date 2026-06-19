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

function LinkButton({ link }: { link: LinkItem }) {
  const isExternal = link.href.startsWith("http");
  return (
    <a
      href={link.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`block rounded-2xl px-5 py-4 text-center transition-all active:scale-[0.98] ${
        link.primary
          ? "bg-navy text-white shadow-lg hover:bg-navy-dark"
          : "bg-mist text-gray-800 border border-gray-200 hover:bg-gray-100"
      }`}
    >
      <span className="font-bold">
        <span className="mr-1.5">{link.icon}</span>
        {link.label}
      </span>
      {link.sub && (
        <span
          className={`block text-xs mt-0.5 ${
            link.primary ? "text-blue-100/70" : "text-gray-400"
          }`}
        >
          {link.sub}
        </span>
      )}
    </a>
  );
}

export default function LinkPage() {
  return (
    <div className="min-h-screen bg-navy-dark flex justify-center sm:py-10 sm:px-4">
      <div className="w-full max-w-md sm:bg-gray-100 sm:rounded-[2.75rem] sm:p-2.5 sm:shadow-2xl">
        <div className="bg-white sm:rounded-[2.25rem] overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
        </div>

        <div className="px-5 pb-12">
          {/* 프로필 */}
          <div className="-mt-14 relative flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-white shadow-xl ring-4 ring-white flex items-center justify-center p-4">
              <Image
                src="/images/logo-navy.png"
                alt="(주)우인산업 로고"
                width={1183}
                height={382}
                className="w-full h-auto"
                priority
              />
            </div>
            <h1 className="mt-5 text-2xl font-extrabold text-gray-900">
              (주)우인산업
            </h1>
            <p className="mt-2 text-gray-500 text-sm leading-relaxed">
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

          {/* 인스타그램 배너 */}
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="우인산업 인스타그램"
            className="mt-3.5 block rounded-2xl overflow-hidden shadow-lg transition-transform active:scale-[0.98] hover:brightness-105"
          >
            <Image
              src="/images/link-insta.png"
              alt="우인산업 인스타그램"
              width={1656}
              height={1294}
              sizes="(max-width: 768px) 100vw, 448px"
              className="w-full h-auto"
            />
          </a>

          {/* 블로그 배너 */}
          <a
            href={BLOG}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="우인산업 네이버 블로그"
            className="mt-3.5 block rounded-2xl overflow-hidden shadow-lg transition-transform active:scale-[0.98] hover:brightness-105"
          >
            <Image
              src="/images/link-blog.png"
              alt="우인산업 네이버 블로그"
              width={1605}
              height={1277}
              sizes="(max-width: 768px) 100vw, 448px"
              className="w-full h-auto"
            />
          </a>

          {/* 푸터 */}
          <p className="mt-8 text-center text-xs text-gray-400">
            © (주)우인산업 WOOIN Construction Industry
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}
