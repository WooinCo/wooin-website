import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "사업영역 | (주)우인산업",
  description:
    "우인산업의 신축공사, 증축·보수·리모델링, 태양광(솔라루프) 사업을 소개합니다. 철골·판넬·지붕·강판까지 전 공정 직접 시공.",
};

const services = [
  {
    id: "newbuild",
    detailHref: "/newbuild",
    img: "/portfolio/mokdong.png",
    eng: "NEW CONSTRUCTION",
    title: "신축공사",
    desc: "신축 현장에서 외벽·지붕 판넬 시공을 주력으로 담당합니다. 창호 시공도 함께 진행하며, 현장 여건에 따라 철골 구조물 시공까지 책임집니다. 공장·창고·물류센터 등 산업용 건축물 신축을 전문으로 합니다.",
    features: [
      "외벽 샌드위치 판넬",
      "지붕 판넬 시공",
      "창호(샤시) 시공",
      "강판 외장·마감",
      "철골 구조물 시공 (현장에 따라)",
      "단열·방수 마감",
    ],
  },
  {
    id: "remodel",
    detailHref: "/remodel",
    img: "/portfolio/2.png",
    eng: "EXTENSION, REPAIR & REMODELING",
    title: "증축·보수·리모델링",
    desc: "운영 중인 건물의 증축·리모델링부터 노후 지붕·외벽의 누수·부식 보수까지 함께 진행합니다. 기존 구조와의 연결을 고려한 철골 증축, 외벽·지붕 교체, 단열 보강, 정밀 진단 후 방수·부분 보수까지 건물 상태에 맞는 최적의 솔루션을 제공합니다.",
    features: [
      "철골 증축 골조",
      "외벽 판넬 교체·보강",
      "지붕 개량·교체",
      "지붕 누수·방수 보수",
      "강판·외벽 보수",
      "정밀 사전 진단",
    ],
  },
  {
    id: "solar",
    detailHref: "/solar",
    img: "/images/solar/hero-main.png",
    eng: "SOLAR ROOF",
    title: "태양광(솔라루프)",
    desc: "지붕 방수와 태양광 발전을 하나의 시스템으로 해결하는 우인솔라루프 WP-sr330. 볼트리스 구조로 누수 문제를 원천 차단하고, 자체 성형기를 보유해 현장에서 바로 생산·시공하는 NON-STOP 공정을 제공합니다.",
    features: [
      "볼트리스 구조 (누수 원천 차단)",
      "태양광 발전 일체형",
      "현장 생산·즉시 시공",
      "KCL 인증 내구성",
      "풍동 50m/s 이상 통과",
      "인발력 10kN 이상 통과",
    ],
  },
];

export default function Business() {
  return (
    <div>
      <PageBanner
        eyebrow="Our Business"
        title="사업영역"
        subtitle="신축부터 증축·보수·리모델링, 태양광(솔라루프)까지 — 철골·판넬·지붕·강판 전 공정을 직접 시공합니다."
        current="사업영역"
        imageSrc="/images/solar/ba-after-1.jpg"
      />

      {/* 사업분야 요약 */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.1}>
                <a
                  href={`#${s.id}`}
                  className="block rounded-2xl bg-mist hover:bg-navy hover:text-white transition-colors p-7 text-center group"
                >
                  <div className="text-xs font-bold text-navy-light group-hover:text-blue-300 tracking-widest">
                    0{i + 1}
                  </div>
                  <div className="text-xl font-extrabold text-gray-900 group-hover:text-white mt-2">
                    {s.title}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 서비스 상세 */}
      {services.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          className={`scroll-mt-20 py-24 md:py-32 ${
            idx % 2 === 1 ? "bg-mist" : "bg-white"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
              <Reveal className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.15} className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-navy font-bold text-sm tracking-[0.18em] uppercase mb-3">
                  {service.eng}
                </p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                  {service.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mt-6">
                  {service.desc}
                </p>

                <div className="mt-8">
                  <h3 className="font-bold text-gray-900 mb-4 text-sm">
                    주요 시공 범위
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feat) => (
                      <div
                        key={feat}
                        className="flex items-center gap-2.5 text-sm text-gray-700"
                      >
                        <span className="w-5 h-5 rounded-full bg-sky text-navy flex items-center justify-center text-xs font-bold shrink-0">
                          ✓
                        </span>
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-9">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-navy text-white font-bold text-sm hover:bg-navy-dark transition-colors"
                  >
                    {service.title} 견적 문의하기 <span>→</span>
                  </Link>
                  <Link
                    href={service.detailHref}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-navy text-navy font-bold text-sm hover:bg-sky transition-colors"
                  >
                    {service.title} 자세히 보기 <span>→</span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <Image src="/images/solar/솔라애프터.png" alt="" fill className="object-cover object-top" />
        <div className="absolute inset-0 bg-navy-dark/85" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              어떤 공사든 우인산업과 함께하세요
            </h2>
            <p className="text-blue-100/80 mt-5 text-lg">
              풍부한 시공 경험과 전문 기술로 최적의 결과를 제공합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link
                href="/contact"
                className="px-9 py-4 rounded-full bg-white text-navy font-bold hover:bg-blue-50 transition-colors shadow-lg"
              >
                무료 견적 문의
              </Link>
              <a
                href="tel:031-662-7890"
                className="px-9 py-4 rounded-full border-2 border-white/40 text-white font-bold hover:bg-white/10 transition-colors"
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
