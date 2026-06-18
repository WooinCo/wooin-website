"use client";

import { useState } from "react";
import Image from "next/image";
import {
  portfolioItems,
  portfolioCategories,
  type PortfolioItem,
  type PortfolioCategory,
} from "@/lib/portfolio-data";

type FilterCategory = "전체" | PortfolioCategory;

const categories: FilterCategory[] = ["전체", ...portfolioCategories];

export default function PortfolioGrid() {
  const [active, setActive] = useState<FilterCategory>("전체");

  const filtered =
    active === "전체"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === active);

  return (
    <div>
      {/* 필터 탭 */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
              active === cat
                ? "bg-[#1C3177] text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 그리드 */}
      {filtered.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

function PortfolioCard({ item }: { item: PortfolioItem }) {
  const categoryColor: Record<PortfolioCategory, string> = {
    신축공사: "bg-blue-100 text-blue-700",
    "증축·리모델링": "bg-indigo-100 text-indigo-700",
    "보수·개보수": "bg-amber-100 text-amber-700",
    철골공사: "bg-slate-100 text-slate-700",
    판넬공사: "bg-sky-100 text-sky-700",
    지붕공사: "bg-green-100 text-green-700",
    강판공사: "bg-orange-100 text-orange-700",
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow group">
      {/* 미디어 영역 */}
      <div className="relative aspect-video bg-gray-100">
        {item.type === "youtube" && item.src ? (
          <iframe
            src={`https://www.youtube.com/embed/${item.src}`}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : item.type === "image" && item.src ? (
          <Image
            src={item.src}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
            <span className="text-4xl mb-2">📷</span>
            <span className="text-sm">이미지 준비중</span>
          </div>
        )}
      </div>

      {/* 정보 */}
      <div className="p-5">
        <span
          className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-2 ${
            categoryColor[item.category]
          }`}
        >
          {item.category}
        </span>
        <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
        {item.description && (
          <p className="text-sm text-gray-500">{item.description}</p>
        )}
        <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
          {item.location && <span>📍 {item.location}</span>}
          {item.year && <span>📅 {item.year}년</span>}
        </div>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-24 text-gray-400">
      <div className="text-6xl mb-4">📷</div>
      <p className="text-lg font-medium text-gray-500 mb-2">
        시공 사례를 추가해주세요
      </p>
      <p className="text-sm leading-relaxed">
        <code className="bg-gray-100 px-2 py-0.5 rounded text-xs">
          src/lib/portfolio-data.ts
        </code>{" "}
        파일에서
        <br />
        이미지 경로 또는 YouTube 영상 ID를 입력하면 바로 표시됩니다.
      </p>
    </div>
  );
}
