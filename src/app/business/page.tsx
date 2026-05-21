import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "사업소개 | (주)우인산업",
  description: "우인산업의 판넬공사, 지붕공사, 강판공사 사업을 소개합니다.",
};

const services = [
  {
    id: "panel",
    img: "/images/panel.jpg",
    eng: "PANEL CONSTRUCTION",
    title: "판넬공사",
    desc: "샌드위치 판넬은 단열재를 두 장의 강판 사이에 넣어 만든 건축 자재로, 뛰어난 단열성·내구성·시공성을 자랑합니다. 우인산업은 공장, 창고, 물류센터 등 산업용 건축물부터 소규모 건물까지 다양한 현장에서 최적의 판넬 시공 솔루션을 제공합니다.",
    features: [
      "외벽 판넬 시공",
      "내벽 판넬 시공",
      "지붕 판넬 시공",
      "단열 판넬 시공",
      "컬러 강판 시공",
      "방음·방화 판넬",
    ],
  },
  {
    id: "roof",
    img: "/images/roof.jpg",
    eng: "ROOF CONSTRUCTION",
    title: "지붕공사",
    desc: "건축물의 지붕은 외부 환경으로부터 건물을 보호하는 가장 중요한 요소입니다. 우인산업은 절곡 지붕, 금속 지붕 등 다양한 지붕재를 활용하여 건축물의 특성과 고객의 요구에 맞는 최적의 지붕 시공을 제공하며, 완벽한 방수와 단열을 책임집니다.",
    features: [
      "절곡 금속 지붕",
      "지붕 판넬 시공",
      "기존 지붕 보수",
      "방수 처리",
      "단열 보강",
      "채광창 설치",
    ],
  },
  {
    id: "steel",
    img: "/images/steel.jpg",
    eng: "STEEL PLATE CONSTRUCTION",
    title: "강판공사",
    desc: "고강도 강판은 내구성이 뛰어나고 다양한 형태로 가공이 가능하여 산업용 건축물에 폭넓게 활용됩니다. 우인산업은 철골 구조물 외벽, 공장 지붕, 각종 산업 시설의 강판 시공을 전문으로 하며, 경제적이면서도 견고한 결과물을 제공합니다.",
    features: [
      "외벽 강판 시공",
      "지붕 강판 시공",
      "내부 칸막이 시공",
      "철골 패널 마감",
      "방청 도장 처리",
      "유지보수 및 보수",
    ],
  },
];

export default function Business() {
  return (
    <div>
      <PageBanner
        eyebrow="Our Business"
        title="사업소개"
        subtitle="판넬·지붕·강판, 우인산업의 전문 시공 서비스를 소개합니다."
        current="사업소개"
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
