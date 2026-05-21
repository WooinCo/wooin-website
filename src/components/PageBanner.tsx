import Link from "next/link";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  /** 영문 라벨 (작은 상단 텍스트) */
  eyebrow?: string;
  /** 현재 페이지명 (브레드크럼) */
  current: string;
}

export default function PageBanner({
  title,
  subtitle,
  eyebrow,
  current,
}: PageBannerProps) {
  return (
    <div className="relative pt-20 overflow-hidden bg-navy-dark">
      {/* 배경 장식 */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-navy-light/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-navy/40 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        {eyebrow && (
          <p className="text-blue-300 font-bold text-sm tracking-[0.2em] uppercase mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-blue-100/80 text-base md:text-lg mt-4 max-w-2xl">
            {subtitle}
          </p>
        )}

        {/* 브레드크럼 */}
        <nav className="flex items-center gap-2 mt-8 text-sm text-blue-200/70">
          <Link href="/" className="hover:text-white transition-colors">
            홈
          </Link>
          <span>›</span>
          <span className="text-white font-medium">{current}</span>
        </nav>
      </div>
    </div>
  );
}
