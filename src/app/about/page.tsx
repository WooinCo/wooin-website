import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "회사소개 | (주)우인산업",
  description: "우인산업 대표이사 인사말, 회사 정보, 오시는 길을 안내합니다.",
};

const companyInfo = [
  { label: "회사명", value: "(주)우인산업" },
  { label: "영문명", value: "WOOIN Construction Industry" },
  { label: "대표이사", value: "조안다" },
  { label: "사업분야", value: "판넬공사 · 지붕공사 · 강판공사" },
  { label: "소재지", value: "경기도 평택시 목천로 74-28" },
  { label: "대표번호", value: "031-662-7890" },
  { label: "팩스", value: "031-662-7891" },
];

const values = [
  { icon: "🤝", title: "신뢰", desc: "약속한 것을 지키고, 보이지 않는 곳까지 정직하게 시공합니다." },
  { icon: "🛠️", title: "전문성", desc: "각 분야 숙련된 시공 인력과 검증된 자재로 완성도를 높입니다." },
  { icon: "💙", title: "책임", desc: "시공 완료 후에도 끝까지 책임지는 사후관리를 약속합니다." },
];

export default function About() {
  return (
    <div>
      <PageBanner
        eyebrow="About Us"
        title="회사소개"
        subtitle="내일을 짓는 기술, 사람을 향한 우인(佑人) — (주)우인산업을 소개합니다."
        current="회사소개"
        imageSrc="/images/building.png"
      />

      {/* ── 대표이사 인사말 ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <Reveal>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/building.png"
                  alt="우인산업"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-navy font-bold text-sm tracking-[0.2em] uppercase mb-4">
                CEO Message
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug tracking-tight">
                고객의 신뢰를 짓는
                <br />
                기업이 되겠습니다
              </h2>
              <div className="mt-7 space-y-4 text-gray-500 leading-relaxed">
                <p>
                  안녕하십니까, <strong className="text-navy">(주)우인산업</strong>{" "}
                  홈페이지를 찾아주셔서 진심으로 감사드립니다.
                </p>
                <p>
                  저희 우인산업은 판넬공사, 지붕공사, 강판공사를 전문으로 하는
                  건설 기업으로, 고객 여러분의 소중한 공간을 최고의 기술과
                  성실함으로 완성하기 위해 끊임없이 노력하고 있습니다.
                </p>
                <p>
                  <span className="text-navy font-semibold">
                    &ldquo;내일을 짓는 기술, 사람을 향한 우인(佑人)&rdquo;
                  </span>
                  라는 슬로건처럼, 단순히 건축물을 짓는 것을 넘어 사람과 사람
                  사이의 신뢰를 짓는 기업이 되고자 합니다.
                </p>
                <p>앞으로도 변함없는 신뢰로 보답하겠습니다. 감사합니다.</p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <span className="text-gray-400 text-sm">(주)우인산업 대표이사</span>
                <div className="text-xl font-extrabold text-navy mt-0.5">
                  조 안 다
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 핵심 가치 ── */}
      <section className="relative py-28 md:py-36 bg-navy-dark overflow-hidden">
        {/* 배경 장식 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-[36rem] h-[36rem] rounded-full bg-navy/60 blur-3xl" />
          <div className="absolute -bottom-20 right-0 w-[28rem] h-[28rem] rounded-full bg-sky/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <p className="text-sky font-bold text-sm tracking-[0.25em] uppercase mb-4">
              Core Value
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              우인산업이 지키는 가치
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.14}>
                <div className="bg-white/[0.06] rounded-3xl p-9 md:p-10 flex flex-col gap-6 h-full ring-1 ring-white/10">
                  {/* 번호 + 구분선 */}
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-black text-white/20 leading-none select-none tabular-nums">
                      0{i + 1}
                    </span>
                    <div className="flex-1 h-px bg-white/10" />
                    <div className="w-6 h-0.5 bg-sky" />
                  </div>
                  {/* 제목 */}
                  <h3 className="text-2xl font-extrabold text-white tracking-tight">
                    {v.title}
                  </h3>
                  {/* 설명 */}
                  <p className="text-blue-200/60 text-sm leading-relaxed mt-auto">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 조직도 ── */}
      <section className="py-24 md:py-32 bg-mist">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <p className="text-navy font-bold text-sm tracking-[0.2em] uppercase mb-3">
              Organizational Chart
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              조직도
            </h2>
          </Reveal>

          {/* 대표이사 */}
          <Reveal>
            <div className="flex justify-center mb-4">
              <div className="px-10 py-4 rounded-2xl bg-navy text-white font-extrabold text-lg shadow-lg">
                대표이사
              </div>
            </div>
            <div className="w-px h-8 bg-gray-300 mx-auto" />
          </Reveal>

          {/* 대표이사 직속: 사업조정실 / 총괄 / 기술연구소 */}
          <Reveal>
            <div className="grid grid-cols-3 gap-3 sm:gap-5 max-w-2xl mx-auto mb-4">
              <div className="flex items-center justify-center px-3 py-3.5 rounded-xl bg-white ring-1 ring-gray-200 text-gray-800 font-bold text-xs sm:text-sm text-center shadow-sm">
                사업조정실
              </div>
              <div className="flex items-center justify-center px-3 py-3.5 rounded-xl bg-navy-light text-white font-bold text-xs sm:text-sm text-center shadow-sm">
                총괄
              </div>
              <div className="flex items-center justify-center px-3 py-3.5 rounded-xl bg-white ring-1 ring-gray-200 text-gray-800 font-bold text-xs sm:text-sm text-center shadow-sm">
                기술연구소
              </div>
            </div>
            <div className="w-px h-8 bg-gray-300 mx-auto" />
          </Reveal>

          {/* 총괄 산하 3개 본부 */}
          <Reveal>
            <div className="grid md:grid-cols-3 gap-5">
              {/* 건축사업본부 */}
              <div className="rounded-3xl bg-white ring-1 ring-gray-100 shadow-[0_8px_30px_rgba(15,31,77,0.06)] overflow-hidden">
                <div className="bg-navy text-white font-extrabold text-center py-4 px-4">
                  건축사업본부
                </div>
                <div className="p-5 space-y-4">
                  {[
                    { pt: "건축 Pt.", teams: ["건축1팀", "건축2팀", "금속창호팀"] },
                    { pt: "공무 Pt.", teams: ["공무관리팀", "설계기술팀"] },
                    { pt: "영업 Pt.", teams: ["TS팀", "AM팀"] },
                  ].map((group) => (
                    <div key={group.pt}>
                      <p className="text-xs font-bold text-navy tracking-wide mb-2">
                        {group.pt}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {group.teams.map((team) => (
                          <span
                            key={team}
                            className="px-2.5 py-1.5 rounded-lg bg-sky text-navy text-xs font-semibold"
                          >
                            {team}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 태양광사업본부 */}
              <div className="rounded-3xl bg-white ring-1 ring-gray-100 shadow-[0_8px_30px_rgba(15,31,77,0.06)] overflow-hidden">
                <div className="bg-navy text-white font-extrabold text-center py-4 px-4">
                  태양광사업본부
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-1.5">
                    {["태양광사업개발팀", "태양광시공기술팀"].map((team) => (
                      <span
                        key={team}
                        className="px-2.5 py-1.5 rounded-lg bg-sky text-navy text-xs font-semibold"
                      >
                        {team}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 전략사업지원본부 */}
              <div className="rounded-3xl bg-white ring-1 ring-gray-100 shadow-[0_8px_30px_rgba(15,31,77,0.06)] overflow-hidden">
                <div className="bg-navy text-white font-extrabold text-center py-4 px-4">
                  전략사업지원본부
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-1.5">
                    {["MARCOM팀", "경영지원팀"].map((team) => (
                      <span
                        key={team}
                        className="px-2.5 py-1.5 rounded-lg bg-sky text-navy text-xs font-semibold"
                      >
                        {team}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 약어 안내 */}
          <Reveal>
            <div className="mt-10 text-xs text-gray-400 leading-relaxed max-w-2xl mx-auto">
              <p>* AM : Account Management (고객관리 중심 일반영업)</p>
              <p>* TS : Technical Sales (기술중심영업)</p>
              <p>
                * marcom : Marketing Communication (마케팅 목적 달성을 위한
                고객 및 대중과의 모든 홍보, 소통 활동)
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 회사 정보 ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <p className="text-navy font-bold text-sm tracking-[0.2em] uppercase mb-3">
              Company Info
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              회사 정보
            </h2>
          </Reveal>
          <Reveal>
            <div className="rounded-3xl border border-gray-100 overflow-hidden shadow-[0_8px_30px_rgba(15,31,77,0.06)]">
              {companyInfo.map((info, idx) => (
                <div
                  key={info.label}
                  className={`flex ${
                    idx !== companyInfo.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <div className="w-28 sm:w-44 bg-mist px-5 sm:px-7 py-5 font-bold text-navy text-sm shrink-0">
                    {info.label}
                  </div>
                  <div className="px-5 sm:px-7 py-5 text-gray-700 text-sm flex items-center">
                    {info.value}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 오시는 길 ── */}
      <section className="py-24 md:py-32 bg-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <p className="text-navy font-bold text-sm tracking-[0.2em] uppercase mb-3">
              Location
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              오시는 길
            </h2>
          </Reveal>

          <Reveal>
            <div className="rounded-3xl overflow-hidden shadow-xl mb-8">
              <iframe
                src="https://maps.google.com/maps?q=경기도+평택시+목천로+74-28&output=embed&z=16"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="우인산업 위치"
              />
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: "📍", title: "주소", content: "경기도 평택시 목천로 74-28" },
              { icon: "☎", title: "대표번호", content: "031-662-7890" },
              { icon: "📠", title: "팩스", content: "031-662-7891" },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-7 text-center shadow-[0_8px_30px_rgba(15,31,77,0.06)] h-full">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="font-bold text-navy text-sm mb-1.5">
                    {item.title}
                  </div>
                  <div className="text-gray-600 text-sm">{item.content}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-navy text-white font-bold hover:bg-navy-dark transition-colors"
            >
              견적 문의하기 <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
