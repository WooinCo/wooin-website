import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import HeroBackdrop from "@/components/HeroBackdrop";
import { youtubeVideos } from "@/lib/portfolio-data";

const services = [
  {
    img: "/portfolio/1.png",
    eng: "NEW CONSTRUCTION",
    title: "신축공사",
    desc: "신축 현장의 외벽·지붕 판넬 시공을 주력으로, 창호와 (현장에 따라) 철골 구조까지 담당합니다.",
    href: "/business#newbuild",
  },
  {
    img: "/portfolio/2.png",
    eng: "EXTENSION & REMODELING",
    title: "증축·리모델링",
    desc: "운영 중인 건물의 증축과 리모델링. 외벽·지붕 교체와 단열 보강으로 공간을 확장하고 되살립니다.",
    href: "/business#remodel",
  },
  {
    img: "/images/roof.jpg",
    eng: "REPAIR & MAINTENANCE",
    title: "보수·개보수",
    desc: "노후 지붕·외벽의 누수·부식을 근본부터 해결하는 건물 맞춤 보수 솔루션을 제공합니다.",
    href: "/business#repair",
  },
];

const strengths = [
  {
    no: "01",
    title: "풍부한 시공 경험",
    desc: "다양한 현장에서 축적한 노하우로 어떤 조건에서도 최적의 시공 방법을 제시합니다.",
  },
  {
    no: "02",
    title: "정직한 시공",
    desc: "보이지 않는 곳까지 원칙대로 시공하여 오래도록 믿을 수 있는 결과를 만듭니다.",
  },
  {
    no: "03",
    title: "신속한 일정 관리",
    desc: "체계적인 공정 관리로 약속한 납기를 준수하며 빠르고 정확하게 시공합니다.",
  },
  {
    no: "04",
    title: "책임 있는 사후관리",
    desc: "시공 완료 후에도 지속적인 점검과 A/S로 고객의 공간을 끝까지 책임집니다.",
  },
];

const processSteps = [
  { no: "01", title: "상담 및 견적", desc: "전화 또는 온라인으로 문의 접수 후 견적을 안내합니다." },
  { no: "02", title: "현장 실측", desc: "담당자가 현장을 방문하여 정확한 시공 범위를 확인합니다." },
  { no: "03", title: "전문 시공", desc: "숙련된 시공팀이 공정 계획에 따라 정밀하게 시공합니다." },
  { no: "04", title: "검수 및 사후관리", desc: "꼼꼼한 검수 후 인계하며 지속적인 A/S를 제공합니다." },
];

export default function Home() {
  return (
    <div>
      {/* ───────── 히어로 ───────── */}
      <section className="relative h-screen min-h-[640px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <HeroBackdrop />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy-dark/60 to-navy-dark/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-navy-dark/30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <p
            className="hero-fade text-blue-300 font-bold text-sm sm:text-base tracking-[0.25em] uppercase mb-6"
            style={{ animationDelay: "0.1s" }}
          >
            WOOIN Construction Industry
          </p>
          <h1
            className="hero-fade text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.18] tracking-tight"
            style={{ animationDelay: "0.25s" }}
          >
            내일을 짓는 기술,
            <br />
            <span className="text-blue-200">사람</span>을 향한 우인
            <span className="text-blue-200">(友人)</span>
          </h1>
          <p
            className="hero-fade text-base sm:text-lg text-blue-50/80 mt-7 max-w-xl leading-relaxed"
            style={{ animationDelay: "0.4s" }}
          >
            판넬공사 · 지붕공사 · 강판공사 전문 기업.
            <br />
            정직한 시공과 책임감으로 고객의 신뢰에 보답합니다.
          </p>
          <div
            className="hero-fade flex flex-col sm:flex-row gap-4 mt-10"
            style={{ animationDelay: "0.55s" }}
          >
            <Link
              href="/business"
              className="px-8 py-4 rounded-full bg-white text-navy font-bold text-base hover:bg-blue-50 transition-colors text-center shadow-lg"
            >
              사업분야 둘러보기
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full border-2 border-white/40 text-white font-bold text-base hover:bg-white/10 transition-colors text-center"
            >
              무료 견적 문의하기
            </Link>
          </div>
        </div>

        {/* 스크롤 인디케이터 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
          <span className="text-[0.7rem] tracking-[0.2em] font-medium">SCROLL</span>
          <span className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </section>

      {/* ───────── 회사 소개 ───────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <Reveal>
              <p className="text-navy font-bold text-sm tracking-[0.2em] uppercase mb-4">
                About Us
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug tracking-tight">
                신뢰로 짓는 공간,
                <br />
                (주)우인산업입니다
              </h2>
              <p className="text-gray-500 leading-relaxed mt-6">
                우인산업은 판넬공사, 지붕공사, 강판공사를 전문으로 하는
                건설 기업입니다. 작은 시공 하나에도 정직함과 책임감을 담아,
                고객이 안심하고 오래 사용할 수 있는 공간을 만듭니다.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "현장 맞춤형 시공 솔루션 제공",
                  "검증된 자재와 숙련된 시공 인력",
                  "시공 후 책임지는 사후관리 시스템",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-sky text-navy flex items-center justify-center text-sm font-bold shrink-0">
                      ✓
                    </span>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-9 px-7 py-3.5 rounded-full bg-navy text-white font-bold text-sm hover:bg-navy-dark transition-colors"
              >
                회사소개 자세히 보기 <span>→</span>
              </Link>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/warehouse.jpg"
                    alt="우인산업 시공 현장"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* 슬로건 카드 */}
                <div className="absolute -bottom-8 -left-4 sm:-left-8 bg-navy text-white rounded-2xl px-7 py-6 shadow-xl max-w-[260px]">
                  <p className="text-blue-300 text-xs font-bold tracking-widest mb-1.5">
                    SLOGAN
                  </p>
                  <p className="font-bold leading-snug">
                    내일을 짓는 기술,
                    <br />
                    사람을 향한 우인(友人)
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────── 사업분야 ───────── */}
      <section className="py-24 md:py-32 bg-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <p className="text-navy font-bold text-sm tracking-[0.2em] uppercase mb-3">
              Our Business
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              우인산업의 전문 사업분야
            </h2>
            <p className="text-gray-500 mt-4">
              신축부터 증축·리모델링, 보수까지 책임지는 전문 시공 서비스를 제공합니다.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-7">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.12}>
                <Link
                  href={service.href}
                  className="group block bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(15,31,77,0.06)] hover:shadow-[0_16px_50px_rgba(15,31,77,0.14)] transition-all duration-300 hover:-translate-y-1.5 h-full"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 to-transparent" />
                    <span className="absolute top-4 left-4 text-white/80 text-xs font-bold tracking-[0.15em]">
                      {service.eng}
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-extrabold text-gray-900 mb-2.5">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                    <span className="inline-flex items-center gap-1.5 mt-5 text-navy font-bold text-sm group-hover:gap-3 transition-all">
                      자세히 보기 <span>→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 우인산업의 강점 ───────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <p className="text-navy font-bold text-sm tracking-[0.2em] uppercase mb-3">
              Why Wooin
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              우인산업을 선택하는 이유
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((s, i) => (
              <Reveal key={s.no} delay={i * 0.1}>
                <div className="group h-full rounded-3xl border border-gray-100 bg-mist p-8 hover:bg-navy hover:border-navy transition-all duration-300">
                  <div className="text-4xl font-extrabold text-blue-200 group-hover:text-blue-300 transition-colors">
                    {s.no}
                  </div>
                  <h3 className="text-lg font-extrabold text-gray-900 mt-4 group-hover:text-white transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mt-3 group-hover:text-blue-100/80 transition-colors">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 시공 프로세스 ───────── */}
      <section className="py-24 md:py-32 bg-navy-dark relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-navy-light/20 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <p className="text-blue-300 font-bold text-sm tracking-[0.2em] uppercase mb-3">
              Process
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              체계적인 시공 프로세스
            </h2>
            <p className="text-blue-100/70 mt-4">
              문의부터 사후관리까지, 4단계로 책임지고 진행합니다.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <Reveal key={step.no} delay={i * 0.12}>
                <div className="relative rounded-3xl bg-white/5 border border-white/10 p-8 h-full backdrop-blur-sm">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white text-navy text-xl font-extrabold">
                    {step.no}
                  </div>
                  <h3 className="text-lg font-extrabold text-white mt-5">
                    {step.title}
                  </h3>
                  <p className="text-blue-100/70 text-sm leading-relaxed mt-2.5">
                    {step.desc}
                  </p>
                  {i < processSteps.length - 1 && (
                    <span className="hidden lg:block absolute top-1/2 -right-3 text-white/30 text-2xl">
                      ›
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 포트폴리오 미리보기 ───────── */}
      <section className="py-24 md:py-32 bg-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-14">
            <div>
              <p className="text-navy font-bold text-sm tracking-[0.2em] uppercase mb-3">
                Portfolio
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                우인산업 시공 사례
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-navy font-bold text-sm hover:gap-3 transition-all shrink-0"
            >
              전체 시공 사례 보기 <span>→</span>
            </Link>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-7">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.12}>
                <Link
                  href="/portfolio"
                  className="group relative block aspect-[4/5] rounded-3xl overflow-hidden shadow-lg"
                >
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <span className="text-blue-300 text-xs font-bold tracking-[0.15em]">
                      {service.eng}
                    </span>
                    <h3 className="text-xl font-extrabold text-white mt-1.5">
                      {service.title} 시공 사례
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── YouTube ───────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <p className="text-navy font-bold text-sm tracking-[0.2em] uppercase mb-3">
              YouTube
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              영상으로 보는 우인산업
            </h2>
            <p className="text-gray-500 mt-4">
              실제 시공 과정과 현장의 생생한 모습을 영상으로 만나보세요.
            </p>
          </Reveal>

          {youtubeVideos.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-7">
              {youtubeVideos.slice(0, 4).map((video) => (
                <Reveal key={video.id}>
                  <div className="rounded-2xl overflow-hidden shadow-lg aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="grid md:grid-cols-2 gap-7">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-mist border border-gray-100 aspect-video flex flex-col items-center justify-center text-gray-400"
                  >
                    <div className="w-16 h-16 rounded-full bg-white shadow flex items-center justify-center text-navy text-2xl mb-3">
                      ▶
                    </div>
                    <span className="text-sm font-semibold text-gray-500">
                      YouTube 영상 준비중
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          <div className="text-center mt-10">
            <a
              href="https://www.youtube.com/@wooin_co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-navy text-navy font-bold hover:bg-navy hover:text-white transition-colors"
            >
              YouTube 채널 바로가기 <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* ───────── 견적 문의 CTA ───────── */}
      <section className="relative py-28 overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-dark/85" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
              어떤 공사든, 우인산업이 함께합니다
            </h2>
            <p className="text-blue-100/80 mt-5 text-lg">
              지금 바로 무료 견적을 받아보세요. 전문 상담원이 신속하게 답변드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link
                href="/contact"
                className="px-9 py-4 rounded-full bg-white text-navy font-bold text-base hover:bg-blue-50 transition-colors shadow-lg"
              >
                온라인 견적 문의
              </Link>
              <a
                href="tel:031-662-7890"
                className="px-9 py-4 rounded-full border-2 border-white/40 text-white font-bold text-base hover:bg-white/10 transition-colors"
              >
                ☎ 031-662-7890
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
