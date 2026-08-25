import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import OrganizationChart from "@/components/OrganizationChart";

export const metadata: Metadata = {
  title: "조직도 | (주)우인산업",
  description: "(주)우인산업의 조직 구성을 안내합니다.",
};

export default function Organization() {
  return (
    <div>
      <PageBanner
        eyebrow="Organization"
        title="조직도"
        subtitle="(주)우인산업의 조직 구성을 소개합니다."
        current="조직도"
        imageSrc="/images/building.png"
      />

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <p className="text-navy font-bold text-sm tracking-[0.2em] uppercase mb-3">
              Organizational Chart
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              조직도
            </h2>
          </Reveal>

          <p className="lg:hidden text-center text-xs text-gray-400 mb-3">
            ← 옆으로 스크롤하면 전체 조직도를 볼 수 있어요 →
          </p>
          <OrganizationChart />

          {/* 약어 안내 */}
          <Reveal>
            <div className="mt-10 text-xs text-gray-400 leading-relaxed max-w-2xl mx-auto text-center">
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
    </div>
  );
}
