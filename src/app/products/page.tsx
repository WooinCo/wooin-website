import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import { ProductCard } from "@/components/ProductLightbox";

export const metadata: Metadata = {
  title: "제품소개 | (주)우인산업",
  description:
    "우인산업이 취급하는 샌드위치 패널, 성형강판, 부자재 제품을 소개합니다.",
};

const categories = [
  {
    name: "샌드위치 패널",
    eng: "Sandwich Panel",
    desc: "다양한 용도와 환경에 맞는 고품질 샌드위치 패널 라인업",
    products: [
      { slug: "zinc-panel", name: "징크패널", desc: "고급스러운 외관과 내구성을 갖춘 징크 소재 패널" },
      { slug: "zinc-steel", name: "징크강판", desc: "징크 도금 처리로 내식성이 뛰어난 강판" },
      { slug: "line-metal-panel", name: "라인메탈패널", desc: "선명한 라인 디자인의 금속 외장 패널" },
      { slug: "marble-exposed-concrete", name: "대리석·노출콘크리트", desc: "대리석 및 노출콘크리트 질감을 구현한 패널" },
      { slug: "eps-panel", name: "EPS패널", desc: "경량 단열재를 적용한 범용 샌드위치 패널" },
      { slug: "glass-wool-panel", name: "그라스울패널", desc: "유리섬유 단열재 적용, 우수한 방화·단열 성능" },
      { slug: "urethane-panel", name: "우레탄패널", desc: "고발포 우레탄 심재로 단열 성능이 탁월한 패널" },
      { slug: "sound-absorbing-panel", name: "흡음패널", desc: "소음 차단이 필요한 공간에 적합한 흡음 패널" },
    ],
  },
  {
    name: "성형강판",
    eng: "Formed Steel",
    desc: "현장 맞춤 성형이 가능한 다양한 강판 제품",
    products: [
      { slug: "formed-steel", name: "성형강판", desc: "현장에서 직접 성형하여 이음새 없이 시공 가능한 강판" },
      { slug: "traditional-tile", name: "전통기와", desc: "전통 기와 형태를 현대적으로 재현한 금속 기와" },
      { slug: "polycarbonate", name: "폴리카보네이트", desc: "채광이 필요한 지붕·벽면에 적합한 투명 패널" },
    ],
  },
  {
    name: "부자재",
    eng: "Accessories",
    desc: "시공 완성도를 높이는 각종 부자재",
    products: [
      { slug: "flashing", name: "후레싱", desc: "외벽·지붕 마감에 사용되는 금속 마감재" },
      { slug: "accessories", name: "부속자재", desc: "시공에 필요한 각종 연결·고정 부속 자재" },
      { slug: "cleanroom-al-accessories", name: "크린룸AL부속자재", desc: "클린룸 환경에 적합한 알루미늄 전용 부속자재" },
    ],
  },
];

const sectionBg = ["bg-white", "bg-navy-dark", "bg-white"];

// 샌드위치 패널의 핵심 심재 3종 — 페이지 상단에 비교 테이블로 노출
const keyMaterials = [
  {
    name: "EPS 패널",
    eng: "EPS Panel",
    desc: "일명 스티로폼패널로 불리며 가장 널리 사용되는 건축외장용 패널입니다. 경제적인 가격과 우수한 단열성능은 물론, 건물의 구조체 역할을 겸할 수 있을 만큼 높은 강도로 두루 사용됩니다. 우인산업은 EPS 알갱이에 난연재를 주입하여 일반 EPS 제품보다 화재 안정성을 높인 난연 EPS를 생산하고 있습니다.",
    features: ["편리한 시공성", "미려한 외관", "화재 안정성"],
  },
  {
    name: "그라스울 패널",
    eng: "Glasswool Panel",
    desc: "내외피재인 도장용융아연도금강판 사이에 무기질 단열재인 글라스울을 심재로 한 건축외장용 패널로, 화재 안전성이 매우 우수하며 오랜 시간이 지나도 열화에 강한 내구성을 갖춘 고성능 제품입니다.",
    features: ["흡음 효과 우수", "탁월한 내구성", "화재 안정성", "뛰어난 단열성"],
  },
  {
    name: "우레탄 패널",
    eng: "Urethane Panel",
    desc: "열전도율(0.020W/mK)이 최대 강점인 우레탄을 내부 단열재로 사용하는 PIR/PUR 패널은 열전도율이 글라스울이나 스티로폼의 절반 수준(50%)에 불과해 단열 성능이 매우 우수합니다. 뛰어난 단열 및 결로 방지 효과를 지닌 친환경 건축자재로, 고객의 요구에 맞춰 다양한 타입의 패널을 제공합니다.",
    features: ["편리한 시공성", "화재 안정성", "뛰어난 단열성"],
  },
];

// products 폴더에 slug(2, 3...)와 일치하는 이미지 파일이 있으면 그 경로들을 붙여준다.
// (제품 이미지가 카탈로그 통이미지라 규격이 통일되지 않아, 있는 제품만 클릭 시
// 확대해서 보여줌. slug2.jpg, slug3.jpg처럼 번호를 붙이면 한 제품에 여러 장도 가능)
const PRODUCTS_DIR = path.join(process.cwd(), "public", "products");
const IMAGE_EXTS = ["jpg", "jpeg", "png", "webp"];
const MAX_IMAGES_PER_PRODUCT = 6;

function findFile(name: string): string | undefined {
  const ext = IMAGE_EXTS.find((e) =>
    fs.existsSync(path.join(PRODUCTS_DIR, `${name}.${e}`))
  );
  return ext ? `/products/${name}.${ext}` : undefined;
}

function findProductImages(slug: string): string[] {
  const images: string[] = [];
  // 첫 장은 slug.jpg 또는 slug1.jpg 둘 다 허용
  const first = findFile(slug) ?? findFile(`${slug}1`);
  if (!first) return images;
  images.push(first);
  for (let i = 2; i <= MAX_IMAGES_PER_PRODUCT; i++) {
    const next = findFile(`${slug}${i}`);
    if (!next) break;
    images.push(next);
  }
  return images;
}

export default function Products() {
  return (
    <div>
      <PageBanner
        eyebrow="Products"
        title="제품소개"
        subtitle="샌드위치 패널부터 성형강판, 부자재까지 — 건축 외장에 필요한 모든 제품을 공급합니다."
        current="제품소개"
        imageSrc="/images/solar/ba-after-1.jpg"
      />

      {/* ── 주요 단열재 한눈에 보기 ── */}
      <section className="py-24 md:py-32 bg-mist">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <p className="text-navy font-bold text-sm tracking-[0.2em] uppercase mb-3">
              Key Materials
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              주요 단열재 한눈에 보기
            </h2>
            <p className="text-gray-500 mt-3">
              EPS·그라스울·우레탄 — 샌드위치 패널의 핵심 심재를 비교해보세요.
            </p>
          </Reveal>

          <Reveal>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-[0_8px_30px_rgba(15,31,77,0.06)]">
              <table className="w-full text-sm border-collapse min-w-[720px]">
                <thead>
                  <tr className="bg-mist text-left">
                    <th className="p-4 font-bold text-navy w-40">구분</th>
                    <th className="p-4 font-bold text-navy">설명</th>
                    <th className="p-4 font-bold text-navy w-64">주요 특징</th>
                  </tr>
                </thead>
                <tbody>
                  {keyMaterials.map((m, i) => (
                    <tr
                      key={m.name}
                      className={
                        i !== keyMaterials.length - 1
                          ? "border-b border-gray-100"
                          : ""
                      }
                    >
                      <td className="p-4 align-top">
                        <p className="font-bold text-gray-900">{m.name}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{m.eng}</p>
                      </td>
                      <td className="p-4 align-top text-gray-600 leading-relaxed">
                        {m.desc}
                      </td>
                      <td className="p-4 align-top">
                        <div className="flex flex-wrap gap-1.5">
                          {m.features.map((f) => (
                            <span
                              key={f}
                              className="text-xs font-semibold px-2.5 py-1 rounded-full bg-mist text-navy whitespace-nowrap"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {categories.map((cat, ci) => {
        const isDark = ci === 1;
        return (
          <section key={cat.name} className={`py-24 md:py-32 ${sectionBg[ci]}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* 카테고리 헤더 */}
              <Reveal>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-14 pb-6 border-b border-current/10">
                  <div className="flex items-center gap-5">
                    <span
                      className={`text-6xl md:text-7xl font-black leading-none select-none ${
                        isDark ? "text-white/10" : "text-gray-900/[0.06]"
                      }`}
                    >
                      0{ci + 1}
                    </span>
                    <div>
                      <p
                        className={`text-xs font-bold tracking-[0.2em] uppercase mb-1 ${
                          isDark ? "text-sky" : "text-navy"
                        }`}
                      >
                        {cat.eng}
                      </p>
                      <h2
                        className={`text-2xl md:text-3xl font-extrabold tracking-tight ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {cat.name}
                      </h2>
                    </div>
                  </div>
                  <p
                    className={`text-sm md:text-base ${
                      isDark ? "text-blue-200/60" : "text-gray-400"
                    }`}
                  >
                    {cat.desc}
                  </p>
                </div>
              </Reveal>

              {/* 제품 카드 */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cat.products.map((product, pi) => (
                  <Reveal key={product.name} delay={pi * 0.04}>
                    <ProductCard
                      product={{
                        name: product.name,
                        desc: product.desc,
                        images: findProductImages(product.slug),
                      }}
                      pi={pi}
                      isDark={isDark}
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

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
