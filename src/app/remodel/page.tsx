import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import { portfolioItems } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "증축·보수·리모델링 | (주)우인산업",
  description:
    "운영 중인 건물의 증축·리모델링부터 노후 지붕·외벽의 누수·부식 보수까지 — (주)우인산업이 무중단(NON-STOP) 시공으로 안전하게 진행합니다.",
};

const features = [
  {
    icon: "🏗️",
    title: "철골 증축 골조",
    desc: "기존 구조와의 연결을 고려한 철골 증축으로 공간을 확장합니다.",
  },
  {
    icon: "🧱",
    title: "외벽 판넬 교체·보강",
    desc: "노후 외벽 판넬을 교체·보강해 건물을 새것처럼 되살립니다.",
  },
  {
    icon: "🏠",
    title: "지붕 개량·교체",
    desc: "노후 지붕을 개량·교체해 단열·방수 성능을 끌어올립니다.",
  },
  {
    icon: "💧",
    title: "지붕 누수·방수 보수",
    desc: "정밀 진단 후 누수 원인을 근본부터 해결하는 방수 보수를 진행합니다.",
  },
  {
    icon: "🛠️",
    title: "강판·외벽 보수",
    desc: "부식·손상된 강판과 외벽을 부분·전체 보수로 대응합니다.",
  },
  {
    icon: "⏱️",
    title: "무중단(NON-STOP) 시공",
    desc: "운영 중단 없이 공장이 가동되는 동안에도 시공을 진행합니다.",
  },
];

const remodelPortfolio = portfolioItems.filter(
  (item) => item.category === "증축·보수·리모델링"
);

export default function Remodel() {
  return (
    <div>
      <PageBanner
        eyebrow="Extension, Repair & Remodeling"
        title="증축·보수·리모델링"
        subtitle="증축·리모델링부터 노후 지붕·외벽 보수까지, 운영 중단 없이 안전하게 진행합니다."
        current="증축·보수·리모델링"
        imageSrc="/images/panel.jpg"
      />

      {/* 개요 */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-navy font-bold text-sm tracking-[0.18em] uppercase mb-3">
              Overview
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-snug">
              증축부터 보수까지,
              <br />
              운영 중단 없이 진행합니다
            </h2>
            <p className="text-gray-500 leading-relaxed mt-6 text-lg">
              운영 중인 건물의 증축·리모델링부터 노후 지붕·외벽의 누수·부식
              보수까지 함께 진행합니다. 기존 구조와의 연결을 고려한 철골
              증축, 외벽·지붕 교체, 단열 보강, 정밀 진단 후 방수·부분 보수까지
              건물 상태에 맞는 최적의 솔루션을 제공합니다.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="rounded-3xl bg-mist p-8 h-full hover:bg-navy hover:text-white transition-colors duration-300 group">
                  <div className="text-4xl mb-5">{f.icon}</div>
                  <h3 className="text-lg font-extrabold text-gray-900 group-hover:text-white mb-2">
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

      {/* 무중단 시공 강조 */}
      <section className="py-24 md:py-32 bg-navy-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-blue-300 font-bold text-sm tracking-[0.18em] uppercase mb-3">
              Non Stop
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              공장이 돌아가는 동안에도
              <br />
              증축·보수 공사가 진행됩니다
            </h2>
            <p className="text-blue-100/60 mt-5 text-lg max-w-2xl mx-auto">
              가동 중단은 곧 손실입니다. 우인산업은 운영 중인 현장의 특성을
              고려한 공정 설계로, 업무 중단 없이 안전하게 공사를 완료합니다.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 시공 사례 */}
      {remodelPortfolio.length > 0 && (
        <section className="py-24 md:py-32 bg-mist">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-14">
              <p className="text-navy font-bold text-sm tracking-[0.18em] uppercase mb-3">
                Our Work
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                증축·보수·리모델링 시공 사례
              </h2>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {remodelPortfolio.slice(0, 6).map((item, i) => (
                <Reveal key={item.id} delay={i * 0.08}>
                  <div className="rounded-2xl overflow-hidden shadow bg-white">
                    <div className="relative aspect-video">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      {item.location && (
                        <p className="text-xs text-gray-400 mt-1">
                          📍 {item.location}
                        </p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="text-center mt-12">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-navy text-navy font-bold text-sm hover:bg-white transition-colors"
              >
                포트폴리오 더 보기 <span>→</span>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <Image
          src="/images/building.png"
          alt=""
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-navy-dark/85" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              증축·보수·리모델링, 우인산업과 함께하세요
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
