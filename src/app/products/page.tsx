import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "제품소개 | (주)우인산업",
  description:
    "우인산업이 취급하는 샌드위치 패널, 성형강판, 부자재 제품을 소개합니다.",
};

const categories = [
  {
    name: "샌드위치 패널",
    desc: "다양한 용도와 환경에 맞는 고품질 샌드위치 패널 라인업",
    icon: "🧱",
    products: [
      { name: "징크패널", desc: "고급스러운 외관과 내구성을 갖춘 징크 소재 패널" },
      { name: "징크강판", desc: "징크 도금 처리로 내식성이 뛰어난 강판" },
      { name: "라인메탈패널", desc: "선명한 라인 디자인의 금속 외장 패널" },
      { name: "대리석·노출콘크리트", desc: "대리석 및 노출콘크리트 질감을 구현한 패널" },
      { name: "EPS패널", desc: "경량 단열재를 적용한 범용 샌드위치 패널" },
      { name: "그라스울패널", desc: "유리섬유 단열재 적용, 우수한 방화·단열 성능" },
      { name: "우레탄패널", desc: "고발포 우레탄 심재로 단열 성능이 탁월한 패널" },
      { name: "흡음패널", desc: "소음 차단이 필요한 공간에 적합한 흡음 패널" },
    ],
  },
  {
    name: "성형강판",
    desc: "현장 맞춤 성형이 가능한 다양한 강판 제품",
    icon: "🏗️",
    products: [
      { name: "성형강판", desc: "현장에서 직접 성형하여 이음새 없이 시공 가능한 강판" },
      { name: "전통기와", desc: "전통 기와 형태를 현대적으로 재현한 금속 기와" },
      { name: "폴리카보네이트", desc: "채광이 필요한 지붕·벽면에 적합한 투명 패널" },
    ],
  },
  {
    name: "부자재",
    desc: "시공 완성도를 높이는 각종 부자재",
    icon: "🔧",
    products: [
      { name: "후레싱", desc: "외벽·지붕 마감에 사용되는 금속 마감재" },
      { name: "부속자재", desc: "시공에 필요한 각종 연결·고정 부속 자재" },
      { name: "크린룸AL부속자재", desc: "클린룸 환경에 적합한 알루미늄 전용 부속자재" },
    ],
  },
];

export default function Products() {
  return (
    <div>
      {/* 히어로 */}
      <section className="bg-navy-dark text-white py-28 pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-blue-300 font-bold text-sm tracking-[0.2em] uppercase mb-4">
              Products
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              제품소개
            </h1>
            <p className="text-blue-100/70 text-lg max-w-xl mx-auto">
              샌드위치 패널부터 성형강판, 부자재까지
              <br />
              건축 외장에 필요한 모든 제품을 공급합니다.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 카테고리별 제품 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {categories.map((cat, ci) => (
            <Reveal key={cat.name} delay={ci * 0.1}>
              <div>
                {/* 카테고리 헤더 */}
                <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-navy/10">
                  <span className="text-4xl">{cat.icon}</span>
                  <div>
                    <h2 className="text-2xl font-extrabold text-gray-900">{cat.name}</h2>
                    <p className="text-gray-500 text-sm mt-1">{cat.desc}</p>
                  </div>
                </div>

                {/* 제품 카드 */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {cat.products.map((product, pi) => (
                    <Reveal key={product.name} delay={pi * 0.05}>
                      <div className="rounded-2xl bg-mist p-6 hover:bg-navy hover:text-white transition-colors duration-300 group h-full">
                        <h3 className="font-bold text-gray-900 group-hover:text-white mb-2">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-500 group-hover:text-blue-100/70 leading-relaxed">
                          {product.desc}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-mist py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
              제품 견적이 필요하신가요?
            </h2>
            <p className="text-gray-500 mb-8">
              원하시는 제품과 규격을 알려주시면 빠르게 견적을 드립니다.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 rounded-full bg-navy text-white font-bold hover:bg-navy-dark transition-colors shadow-lg"
            >
              무료 견적 문의하기
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
