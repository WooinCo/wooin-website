import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "(주)우인산업 | WOOIN Construction Industry",
  description:
    "내일을 짓는 기술, 사람을 향한 우인(友人). 판넬공사, 지붕공사, 강판공사 전문 기업. 경기도 평택 소재. 031-662-7890",
  keywords: "우인산업, 판넬공사, 지붕공사, 강판공사, 평택 건설, 샌드위치 판넬, 강판공사",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
