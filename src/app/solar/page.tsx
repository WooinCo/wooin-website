import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "우인솔라루프 WP-sr330 | (주)우인산업",
  description:
    "지붕방수와 태양광을 위한 완벽한 솔루션. 우인솔라루프 WP-sr330. 공장·물류창고 전문 시공업체 (주)우인산업.",
};

const features = [
  {
    icon: "🔩",
    title: "볼트레스 구조",
    desc: "볼트의 외부노출이 없어 지붕 패널의 구조적 누수 문제를 원천 해결합니다.",
  },
  {
    icon: "⚡",
    title: "태양광 일체형",
    desc: "지붕 방수와 태양광 발전을 하나의 시스템으로 해결하는 통합 솔루션입니다.",
  },
  {
    icon: "🏭",
    title: "현장 생산 시공",
    desc: "성형기를 직접 보유하여 현장에서 바로 생산, NON STOP 시공이 가능합니다.",
  },
  {
    icon: "🛡️",
    title: "KCL 인증 내구성",
    desc: "풍동·하중·인발력 테스트 통과. 강풍과 폭설에도 흔들리지 않는 내구성.",
  },
];


const testResults = [
  {
    label: "풍동",
    value: "50m/s 이상",
    desc: "KCL 풍동 테스트 환경 조건 합격",
  },
  {
    label: "인발력",
    value: "10kN(약 1톤)",
    desc: "안정적 결합 인장 강도 유지 테스트 통과",
  },
  {
    label: "하중",
    value: "약 3t 균등하중",
    desc: "솔라루프 강판 외관상 큰 변형 없음 확인",
  },
];

export default function Solar() {
  return (
    <div>
      {/* ── 히어로 ── */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        <Image
          src="/images/solar/hero.jpg"
          alt="우인솔라루프 WP-sr330"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy-dark/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-navy-dark/30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-36">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                공장·물류창고 전문 시공업체 Since 2018
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
              지붕방수와 태양광을
              <br />
              위한{" "}
              <span className="text-sky">완벽한 솔루션</span>
            </h1>

            <div className="mt-6 inline-block">
              <span className="text-2xl sm:text-3xl font-extrabold text-white/90 tracking-tight">
                우인솔라루프{" "}
                <span className="text-sky font-black">WP-sr330</span>
              </span>
            </div>

            <p className="text-blue-100/70 text-lg mt-6 max-w-lg leading-relaxed">
              누수 걱정 없는 구조적 시공과 태양광 발전을 하나로.
              <br />
              우인산업만의 기술력으로 완성합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-white text-navy font-bold text-center hover:bg-blue-50 transition-colors shadow-lg"
              >
                무료 견적 문의하기
              </Link>
              <a
                href="tel:031-662-7890"
                className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-bold text-center hover:bg-white/10 transition-colors"
              >
                ☎ 031-662-7890
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-7 h-12 rounded-full border-2 border-white/40 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-white/60" />
          </div>
        </div>
      </section>

      {/* ── 핵심 특장점 ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <p className="text-navy font-bold text-sm tracking-[0.2em] uppercase mb-3">
              Key Features
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              우인솔라루프가 다른 이유
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.1}>
                <div className="rounded-3xl bg-mist p-8 text-center h-full hover:bg-navy hover:text-white transition-colors duration-300 group">
                  <div className="text-4xl mb-5">{f.icon}</div>
                  <h3 className="text-lg font-extrabold text-gray-900 group-hover:text-white mb-3">
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover:text-blue-100/70 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 구조적 솔루션 ── */}
      <section className="py-24 md:py-32 bg-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <Reveal>
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-white">
                <Image
                  src="/images/solar/page-2.png"
                  alt="우인솔라루프 구조 상세"
                  width={595}
                  height={842}
                  className="w-full h-auto"
                />
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-navy font-bold text-sm tracking-[0.18em] uppercase mb-3">
                Structural Solution
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-snug">
                누수는 보수가 아니라,
                <br />
                <span className="text-navy">구조로 해결합니다</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mt-6">
                전용 태양광 클램프를 사용하여 볼트 외부 노출 없이 지붕 패널을
                결합합니다. 클램프 결합으로 강력한 안밀력을 확보하고, 산높이
                61mm의 정밀한 구조로 완벽한 방수 성능을 실현합니다.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "볼트 외부 노출 없는 결합 구조",
                  "전용 태양광 클램프로 강력한 고정력",
                  "지붕 패널 구조적 누수 문제 원천 해결",
                  "산높이 61mm 정밀 성형",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-navy text-white flex items-center justify-center text-xs font-bold shrink-0">
                      ✓
                    </span>
                    <span className="text-gray-700 font-medium text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── No Overlap, No Leak ── */}
      <section className="py-24 md:py-32 bg-navy-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <Reveal delay={0.15} className="lg:order-2">
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-white">
                <Image
                  src="/images/solar/page-4.png"
                  alt="우인산업 시공 방식"
                  width={595}
                  height={842}
                  className="w-full h-auto"
                />
              </div>
            </Reveal>

            <Reveal className="lg:order-1">
              <p className="text-blue-300 font-bold text-sm tracking-[0.18em] uppercase mb-3">
                No Overlap, No Leak
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-snug">
                겉모습만 똑같다고
                <br />
                다 같은 지붕공사가 아닙니다
              </h2>
              <p className="text-blue-100/60 leading-relaxed mt-6">
                기존 타사 시공은 긴 지붕의 경우 강판을 겹쳐서 시공합니다.
                시간이 지나면 겹침 부위 틈새로 누수가 발생합니다. 우인산업은
                현장에서 직접 생산하여 이음새 없이 한 장으로 시공합니다.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-xl">
                    ✕
                  </div>
                  <div>
                    <div className="font-bold text-red-300 text-sm">
                      기존 타사 시공
                    </div>
                    <div className="text-blue-100/60 text-sm mt-1">
                      강판 겹침(오버랩) → 틈새 발생 → 누수 위험
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-sky/20 flex items-center justify-center shrink-0 text-xl">
                    ✓
                  </div>
                  <div>
                    <div className="font-bold text-sky text-sm">
                      우인산업 시공
                    </div>
                    <div className="text-blue-100/60 text-sm mt-1">
                      현장 생산으로 이음새 없는 한 장 시공 → 누수 원천 차단
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="font-extrabold text-lg mb-1">
                  아래에선 생산, 위에선 시공
                </div>
                <div className="text-blue-100/60 text-sm">
                  철거 없는 NON STOP 시공으로 업무환경을 그대로 유지합니다.
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 내구성 ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <p className="text-navy font-bold text-sm tracking-[0.18em] uppercase mb-3">
              Durability
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              강풍에도, 폭설에도
              <br />
              흔들리지 않습니다
            </h2>
            <p className="text-gray-500 mt-4">
              풍동·하중·인발력 테스트 통과 | 구조로 완성된 강력한 내구성
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {testResults.map((test, i) => (
              <Reveal key={test.label} delay={i * 0.1}>
                <div className="rounded-3xl bg-mist p-8 text-center h-full">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-navy text-white flex items-center justify-center text-sm font-extrabold mb-4">
                    {test.label}
                  </div>
                  <div className="text-2xl font-extrabold text-navy mb-2">
                    {test.value}
                  </div>
                  <p className="text-sm text-gray-500">{test.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center text-sm text-gray-400">
            KCL(한국건설생활환경시험연구원) 시험 성적서 취득 완료
          </Reveal>
        </div>
      </section>

      {/* ── Before & After ── */}
      <section className="py-24 md:py-32 bg-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <p className="text-navy font-bold text-sm tracking-[0.18em] uppercase mb-3">
              Before & After
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              노후 지붕의 문제,
              <br />
              한 번에 해결합니다
            </h2>
            <p className="text-gray-500 mt-4 text-lg">
              누수는 없애고, 태양광으로 수익을 더합니다.
            </p>
          </Reveal>

          <Reveal>
            <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-white">
              <Image
                src="/images/solar/page-5.png"
                alt="우인솔라루프 Before & After"
                width={595}
                height={842}
                className="w-full h-auto"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 인증 현황 ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl bg-white">
              <Image
                src="/images/solar/page-3.png"
                alt="우인산업 인증 현황"
                width={595}
                height={842}
                className="w-full h-auto"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-navy-dark" />
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/solar/hero.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              우인솔라루프로
              <br />
              지붕 문제를 해결하세요
            </h2>
            <p className="text-blue-100/70 mt-5 text-lg">
              무료 현장 방문 및 견적 상담을 받아보세요.
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
