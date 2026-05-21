import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";

export const metadata: Metadata = {
  title: "사업소개 | (주)우인산업",
  description: "우인산업의 판넬공사, 지붕공사, 강판공사 사업을 소개합니다.",
};

const services = [
  {
    id: "panel",
    icon: "🏗️",
    title: "판넬공사",
    subtitle: "Panel Construction",
    description:
      "샌드위치 판넬은 단열재를 두 장의 강판 사이에 넣어 만든 건축 자재로, 뛰어난 단열성·내구성·시공성을 자랑합니다. 우인산업은 공장, 창고, 물류센터 등 산업용 건축물부터 소규모 건물까지 다양한 현장에서 최적의 판넬 시공 솔루션을 제공합니다.",
    features: [
      "외벽 판넬 시공",
      "내벽 판넬 시공",
      "지붕 판넬 시공",
      "단열 판넬 시공",
      "컬러 강판 시공",
      "방음·방화 판넬",
    ],
    color: "from-blue-500 to-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-200",
    tag: "bg-blue-100 text-blue-700",
  },
  {
    id: "roof",
    icon: "🏠",
    title: "지붕공사",
    subtitle: "Roof Construction",
    description:
      "건축물의 지붕은 외부 환경으로부터 건물을 보호하는 가장 중요한 요소입니다. 우인산업은 절곡 지붕, 금속 지붕, 아스팔트 슁글 등 다양한 지붕재를 활용하여 건축물의 특성과 고객의 요구에 맞는 최적의 지붕 시공을 제공합니다.",
    features: [
      "절곡 금속 지붕",
      "아이보리 지붕 시공",
      "기존 지붕 보수",
      "방수 처리",
      "단열 보강",
      "채광창 설치",
    ],
    color: "from-green-500 to-green-700",
    bg: "bg-green-50",
    border: "border-green-200",
    tag: "bg-green-100 text-green-700",
  },
  {
    id: "steel",
    icon: "🔩",
    title: "강판공사",
    subtitle: "Steel Plate Construction",
    description:
      "고강도 강판은 내구성이 뛰어나고 다양한 형태로 가공이 가능하여 산업용 건축물에 폭넓게 활용됩니다. 우인산업은 철골 구조물 외벽, 공장 지붕, 각종 산업 시설의 강판 시공을 전문으로 하며, 경제적이고 견고한 결과물을 제공합니다.",
    features: [
      "외벽 강판 시공",
      "지붕 강판 시공",
      "내부 칸막이",
      "철골 패널 마감",
      "방청 도장 처리",
      "유지보수 및 보수",
    ],
    color: "from-orange-500 to-orange-700",
    bg: "bg-orange-50",
    border: "border-orange-200",
    tag: "bg-orange-100 text-orange-700",
  },
];

export default function Business() {
  return (
    <div>
      <PageBanner title="사업소개" subtitle="우인산업의 전문 시공 서비스를 소개합니다" />

      {/* 서비스 섹션들 */}
      {services.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 ${idx % 2 === 1 ? "bg-gray-50" : "bg-white"}`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col ${idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}>
              {/* 아이콘 영역 */}
              <div className="lg:w-2/5 w-full">
                <div
                  className={`bg-gradient-to-br ${service.color} rounded-3xl p-12 flex flex-col items-center justify-center text-white min-h-72`}
                >
                  <div className="text-8xl mb-6">{service.icon}</div>
                  <div className="text-2xl font-black">{service.title}</div>
                  <div className="text-sm opacity-75 mt-1">{service.subtitle}</div>
                </div>
              </div>

              {/* 내용 영역 */}
              <div className="lg:w-3/5 w-full">
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${service.tag}`}>
                  {service.subtitle}
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5">
                  {service.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8 text-base">
                  {service.description}
                </p>

                {/* 시공 범위 */}
                <div className={`${service.bg} border ${service.border} rounded-2xl p-6`}>
                  <h3 className="font-bold text-gray-800 mb-4">시공 범위</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="text-green-500 font-bold">✓</span>
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-block bg-[#1C3177] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-[#0d1b4b] transition-colors"
                  >
                    {service.title} 견적 문의하기 →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <section className="py-20 bg-[#1C3177] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            어떤 공사든 우인산업과 함께하세요
          </h2>
          <p className="text-blue-200 text-lg mb-10">
            풍부한 시공 경험과 전문 기술로 최적의 결과를 제공합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#1C3177] px-10 py-4 rounded-xl font-black hover:bg-gray-100 transition-colors"
            >
              무료 견적 문의
            </Link>
            <a
              href="tel:031-662-7890"
              className="border-2 border-white/60 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors"
            >
              ☎ 031-662-7890
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
