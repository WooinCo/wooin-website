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
      <PageBanner title="포트폴리오" subtitle="우인산업의 시공 사례를 확인하세요" />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PortfolioGrid />
        </div>
      </section>
    </div>
  );
}
