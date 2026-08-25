import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "연혁 | (주)우인산업",
  description: "(주)우인산업의 설립부터 인증·등록 취득까지의 연혁을 소개합니다.",
};

const history = [
  { year: "2024", items: ["(주)우인산업으로 법인명 변경", "벤처기업 인증 취득"] },
  {
    year: "2023",
    items: [
      "메인비즈(경영혁신형 중소기업) 취득",
      "안전보건경영시스템 인증 (ISO 45001)",
      "연구전담부서 설립",
    ],
  },
  {
    year: "2021",
    items: [
      "건축공사업 등록 (등록번호 제21-08-0001)",
      "특허 등록",
      "기술역량 우수기업 인증",
    ],
  },
  { year: "2020", items: ["본점 이전 (광명 → 평택)"] },
  {
    year: "2019",
    items: [
      "품질경영시스템 인증 (ISO 9001)",
      "환경경영시스템 인증 (ISO 14004)",
    ],
  },
  { year: "2018", items: ["(주)아이엔지글로벌 설립"] },
];

export default function History() {
  return (
    <div>
      <PageBanner
        eyebrow="History"
        title="연혁"
        subtitle="설립부터 지금까지, (주)우인산업이 걸어온 길입니다."
        current="연혁"
        imageSrc="/images/building.png"
      />

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-20">
            <p className="text-navy font-bold text-sm tracking-[0.2em] uppercase mb-3">
              Our History
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              (주)우인산업 연혁
            </h2>
          </Reveal>

          <div className="relative pl-10 sm:pl-14">
            {history.map((h, i) => (
              <Reveal key={h.year} delay={i * 0.05} className="relative">
                {/* 연결선 — 마지막 항목 제외, 위 항목과 이어짐 */}
                {i !== history.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="timeline-line absolute -left-[27px] sm:-left-[35px] top-3 w-px bg-gradient-to-b from-navy to-navy/20"
                    style={{ height: "calc(100% + 2.5rem)" }}
                  />
                )}
                {/* 점 */}
                <span
                  aria-hidden="true"
                  className="absolute -left-10 sm:-left-14 top-1.5 w-4 h-4 rounded-full bg-navy ring-4 ring-white shadow-md"
                />

                <div className="pb-14">
                  <span className="inline-block text-2xl font-extrabold text-navy tracking-tight mb-3">
                    {h.year}
                  </span>
                  <ul className="space-y-1.5">
                    {h.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm sm:text-base text-gray-600 leading-relaxed"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
