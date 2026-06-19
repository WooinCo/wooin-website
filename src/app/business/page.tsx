import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "사업영역 | (주)우인산업",
  description:
    "우인산업의 신축공사, 증축·리모델링, 보수·개보수 사업을 소개합니다. 철골·판넬·지붕·강판까지 전 공정 직접 시공.",
};

const services = [
  {
    id: "newbuild",
    img: "/portfolio/1.png",
    eng: "NEW CONSTRUCTION",
    title: "신축공사",
    desc: "공장·창고·물류센터 신축을 골조부터 마감까지 한 번에 책임집니다. 철골 구조물 제작·설치부터 샌드위치 판넬 외벽, 금속 지붕, 강판 마감까지 전 공정을 직접 시공하여 공기를 단축하고 품질을 보장합니다.",
    features: [
      "철골 구조물 제작·설치",
      "외벽 샌드위치 판넬",
      "금속(절곡) 지붕 시공",
      "강판 외장·마감",
      "데크 플레이트 시공",
      "채광·환기 설비",
    ],
  },
  {
    id: "remodel",
    img: "/portfolio/2.png",
    eng: "EXTENSION & REMODELING",
    title: "증축·리모델링",
    desc: "운영 중인 건물의 증축과 리모델링을 안전하게 진행합니다. 기존 구조와의 연결을 고려한 철골 증축, 외벽·지붕 교체, 단열 보강 등으로 공간을 확장하고 노후 건물을 새것처럼 되살립니다.",
    features: [
      "철골 증축 골조",
      "외벽 판넬 교체·보강",
      "지붕 개량·교체",
      "단열 성능 개선",
      "내부 구조 변경",
      "무중단(NON-STOP) 시공",
    ],
  },
  {
    id: "repair",
    img: "/images/roof.jpg",
    eng: "REPAIR & MAINTENANCE",
    title: "보수·개보수",
    desc: "노후된 지붕과 외벽의 누수·부식 문제를 근본부터 해결합니다. 정밀 진단 후 지붕 방수, 판넬·강판 교체, 부분 보수까지 건물 상태에 맞는 최적의 보수 솔루션을 제공합니다.",
    features: [
      "지붕 누수·방수 보수",
      "노후 판넬 교체",
      "강판·외벽 보수",
      "부식·도장 보수",
      "부분 구조 보강",
      "정기 유지보수",
    ],
  },
];

export default function Business() {
  return (
    <div>
      <PageBanner
        eyebrow="Our Business"
        title="사업영역"
        subtitle="신축부터 증축·리모델링, 보수까지 — 철골·판넬·지붕·강판 전 공정을 직접 시공합니다."
        current="사업영역"
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

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-9 px-7 py-3.5 rounded-full bg-navy text-white font-bold text-sm hover:bg-navy-dark transition-colors"
                >
                  {service.title} 견적 문의하기 <span>→</span>
                </Link>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <Image src="/images/warehouse.jpg" alt="" fill className="object-cover" />
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
