import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import { portfolioItems } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "신축공사 | (주)우인산업",
  description:
    "공장·창고·물류센터 신축 현장의 외벽·지붕 판넬, 창호, 철골 구조물 시공까지 — (주)우인산업이 전 공정을 직접 책임집니다.",
};

const features = [
  {
    title: "외벽 샌드위치 판넬",
    desc: "단열·차음 성능을 갖춘 샌드위치 판넬로 외벽을 정밀하게 시공합니다.",
  },
  {
    title: "지붕 판넬 시공",
    desc: "현장 여건에 맞는 지붕 판넬로 방수와 단열을 동시에 완성합니다.",
  },
  {
    title: "창호(샤시) 시공",
    desc: "건물 용도에 맞는 창호 시공을 함께 진행해 마감 품질을 높입니다.",
  },
  {
    title: "강판 외장·마감",
    desc: "강판 외장재로 내구성과 심미성을 모두 갖춘 마감을 완성합니다.",
  },
  {
    title: "철골 구조물 시공",
    desc: "현장에 따라 철골 구조물 시공까지 직접 담당해 책임 시공합니다.",
  },
  {
    title: "단열·방수 마감",
    desc: "정밀한 단열·방수 마감으로 완공 이후까지 성능을 보장합니다.",
  },
];

const newbuildPortfolio = portfolioItems.filter(
  (item) => item.category === "신축공사"
);

export default function Newbuild() {
  return (
    <div>
      <PageBanner
        eyebrow="New Construction"
        title="신축공사"
        subtitle="공장·창고·물류센터 신축 현장의 외벽·지붕부터 창호, 철골까지 전 공정을 직접 책임집니다."
        current="신축공사"
        imageSrc="/portfolio/mokdong.png"
      />

      {/* 개요 */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-navy font-bold text-sm tracking-[0.18em] uppercase mb-3">
              Overview
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-snug">
              신축 현장의 시작부터 끝까지,
              <br />
              직접 책임집니다
            </h2>
            <p className="text-gray-500 leading-relaxed mt-6 text-lg">
              신축 현장에서 외벽·지붕 판넬 시공을 주력으로 담당합니다. 창호
              시공도 함께 진행하며, 현장 여건에 따라 철골 구조물 시공까지
              책임집니다. 공장·창고·물류센터 등 산업용 건축물 신축을
              전문으로 합니다.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="rounded-3xl bg-mist p-8 h-full hover:bg-navy hover:text-white transition-colors duration-300 group">
                  <div className="text-sm font-extrabold text-navy-light group-hover:text-blue-300 tracking-[0.2em] mb-4">
                    0{i + 1}
                  </div>
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

      {/* 시공 사례 */}
      {newbuildPortfolio.length > 0 && (
        <section className="py-24 md:py-32 bg-mist">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-14">
              <p className="text-navy font-bold text-sm tracking-[0.18em] uppercase mb-3">
                Our Work
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                신축공사 시공 사례
              </h2>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {newbuildPortfolio.slice(0, 6).map((item, i) => (
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
              신축공사, 우인산업과 함께하세요
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
