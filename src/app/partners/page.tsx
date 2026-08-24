import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "협력사 | (주)우인산업",
  description: "우인산업의 협력기업 현황입니다.",
};

const partners = [
  { name: "LG화학", group: "LG그룹", logo: null },
  { name: "코오롱글로벌(주)", group: "코오롱그룹", logo: null },
  { name: "(주) 티시스", group: "태광그룹", logo: null },
  { name: "(주) 동원건설산업", group: "동원그룹", logo: null },
  { name: "(주) 아이마켓코리아", group: null, logo: null },
  { name: "아벤종합건설(주)", group: "동아쏘시오그룹", logo: null },
  { name: "(주) 벨이앤씨", group: "중근당그룹", logo: null },
  { name: "(주) 화성산업", group: null, logo: null },
  { name: "(주) 보미건설", group: null, logo: null },
  { name: "(주) 세웅종합건설", group: null, logo: null },
  { name: "(주) 현승종합건설", group: null, logo: null },
  { name: "에스엠디자인", group: null, logo: null },
];

export default function Partners() {
  return (
    <div>
      <PageBanner
        eyebrow="Partnership"
        title="협력사"
        subtitle="우인산업은 신뢰할 수 있는 파트너사와 함께 더 견고한 건축 솔루션을 완성해 나갑니다."
        current="협력사"
        imageSrc="/images/building.png"
      />

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <p className="text-navy font-bold text-sm tracking-[0.2em] uppercase mb-3">
              Partnership Status
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              (주)우인산업 협력기업 현황
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {partners.map((partner, i) => (
              <Reveal key={partner.name} delay={i * 0.05}>
                <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md transition-shadow aspect-[4/3]">
                  {partner.logo ? (
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={120}
                      height={48}
                      className="object-contain max-h-12 w-auto"
                    />
                  ) : (
                    <div className="w-28 h-10 bg-gray-100 rounded-lg" />
                  )}
                  <div className="text-center">
                    <p className="font-bold text-gray-800 text-sm leading-snug">
                      {partner.name}
                    </p>
                    {partner.group && (
                      <p className="text-xs text-gray-400 mt-0.5">{partner.group}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-20 text-center">
              <p className="text-gray-500 leading-relaxed">
                우인산업은 우수한 파트너사들과 함께 더 견고한 건축 솔루션을 완성해 나갑니다.
              </p>
              <p className="font-bold text-gray-800 mt-2">
                최고의 기술력과 최적의 공정 효율을 위해 신뢰할 수 있는 파트너사와 동행합니다.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
