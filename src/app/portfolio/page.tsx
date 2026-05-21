import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "포트폴리오 | (주)우인산업",
  description: "우인산업의 판넬공사, 지붕공사, 강판공사 시공 사례를 확인하세요.",
};

export default function Portfolio() {
  return (
    <div>
      <PageBanner
        eyebrow="Portfolio"
        title="포트폴리오"
        subtitle="우인산업이 직접 시공한 다양한 현장의 사례를 확인하세요."
        current="포트폴리오"
      />

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PortfolioGrid />
        </div>
      </section>
    </div>
  );
}
