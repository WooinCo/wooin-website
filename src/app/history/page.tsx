import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "연혁 | (주)우인산업",
  description: "(주)우인산업의 설립부터 인증·등록 취득까지의 연혁을 소개합니다.",
};

type Tag = "설립" | "인증" | "등록·특허" | "이전" | "조직";

const tagColor: Record<Tag, string> = {
  설립: "bg-navy text-white",
  인증: "bg-sky text-navy",
  "등록·특허": "bg-amber-100 text-amber-700",
  이전: "bg-gray-100 text-gray-600",
  조직: "bg-indigo-100 text-indigo-700",
};

const history = [
  {
    year: "2024",
    items: [
      { text: "(주)우인산업으로 법인명 변경", tag: "조직" as Tag },
      { text: "벤처기업 인증 취득", tag: "인증" as Tag },
    ],
  },
  {
    year: "2023",
    items: [
      { text: "메인비즈(경영혁신형 중소기업) 취득", tag: "인증" as Tag },
      { text: "안전보건경영시스템 인증 (ISO 45001)", tag: "인증" as Tag },
      { text: "연구전담부서 설립", tag: "조직" as Tag },
    ],
  },
  {
    year: "2021",
    items: [
      { text: "건축공사업 등록 (등록번호 제21-08-0001)", tag: "등록·특허" as Tag },
      { text: "특허 등록", tag: "등록·특허" as Tag },
      { text: "기술역량 우수기업 인증", tag: "인증" as Tag },
    ],
  },
  {
    year: "2020",
    items: [{ text: "본점 이전 (광명 → 평택)", tag: "이전" as Tag }],
  },
  {
    year: "2019",
    items: [
      { text: "품질경영시스템 인증 (ISO 9001)", tag: "인증" as Tag },
      { text: "환경경영시스템 인증 (ISO 14004)", tag: "인증" as Tag },
    ],
  },
  {
    year: "2018",
    items: [{ text: "(주)아이엔지글로벌 설립", tag: "설립" as Tag }],
  },
];

const stats = [
  { value: "2018", label: "설립연도" },
  { value: "8건", label: "인증·등록·특허" },
  { value: "3건", label: "ISO 국제인증" },
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

      {/* ── 한눈에 보기 ── */}
      <section className="bg-navy-dark py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="text-center px-2">
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {s.value}
                </div>
                <div className="text-blue-200/60 text-xs sm:text-sm mt-2">
                  {s.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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
                  <ul className="space-y-2.5">
                    {h.items.map((item) => (
                      <li
                        key={item.text}
                        className="flex items-center gap-2.5 flex-wrap"
                      >
                        <span
                          className={`shrink-0 text-[11px] font-bold px-2 py-0.5 rounded-full ${tagColor[item.tag]}`}
                        >
                          {item.tag}
                        </span>
                        <span className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {item.text}
                        </span>
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
