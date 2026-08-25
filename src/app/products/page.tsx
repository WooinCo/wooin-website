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
