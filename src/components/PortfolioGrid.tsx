"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  portfolioItems,
  portfolioCategories,
  type PortfolioItem,
  type PortfolioCategory,
} from "@/lib/portfolio-data";

type FilterCategory = "전체" | PortfolioCategory;

const categories: FilterCategory[] = ["전체", ...portfolioCategories];

const categoryColor: Record<PortfolioCategory, string> = {
  신축공사: "bg-blue-100 text-blue-700",
  "증축·리모델링": "bg-indigo-100 text-indigo-700",
  "보수·개보수": "bg-amber-100 text-amber-700",
};

export default function PortfolioGrid() {
  const [active, setActive] = useState<FilterCategory>("전체");
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

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
            <PortfolioCard
              key={item.id}
              item={item}
              onOpen={() => setSelected(item)}
            />
          ))}
        </div>
      )}

      {/* 라이트박스 (이미지 크게 보기) */}
      {selected && (
        <Lightbox item={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

function PortfolioCard({
  item,
  onOpen,
}: {
  item: PortfolioItem;
  onOpen: () => void;
}) {
  const isImage = item.type === "image" && item.src;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow group">
      {/* 미디어 영역 */}
      {item.type === "youtube" && item.src ? (
        <div className="relative aspect-video bg-gray-100">
          <iframe
            src={`https://www.youtube.com/embed/${item.src}`}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      ) : isImage ? (
        <button
          type="button"
          onClick={onOpen}
          aria-label={`${item.title} 크게 보기`}
          className="relative aspect-video bg-gray-100 w-full block cursor-pointer"
        >
          <Image
            src={item.src}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* 확대 힌트 */}
          <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/25 transition-colors">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity w-11 h-11 rounded-full bg-white/90 text-navy flex items-center justify-center text-lg shadow-lg">
              🔍
            </span>
          </span>
        </button>
      ) : (
        <div className="relative aspect-video bg-gray-100">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
            <span className="text-4xl mb-2">📷</span>
            <span className="text-sm">이미지 준비중</span>
          </div>
        </div>
      )}

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
        <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
          {item.location && <span>📍 {item.location}</span>}
          {item.year && <span>📅 {item.year}년</span>}
        </div>
      </div>
    </div>
  );
}

function Lightbox({
  item,
  onClose,
}: {
  item: PortfolioItem;
  onClose: () => void;
}) {
  // ESC 키로 닫기 + 배경 스크롤 잠금
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      {/* 닫기 버튼 */}
      <button
        type="button"
        onClick={onClose}
        aria-label="닫기"
        className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white text-2xl leading-none flex items-center justify-center transition-colors"
      >
        ×
      </button>

      <div
        className="relative w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden">
          <Image
            src={item.src}
            alt={item.title}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-contain"
          />
        </div>
        <div className="mt-4 text-center text-white">
          <span
            className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-2 ${
              categoryColor[item.category]
            }`}
          >
            {item.category}
          </span>
          <h3 className="text-lg font-bold">{item.title}</h3>
          {item.description && (
            <p className="text-sm text-white/70 mt-1">{item.description}</p>
          )}
          <div className="flex items-center justify-center gap-3 mt-2 text-xs text-white/60">
            {item.location && <span>📍 {item.location}</span>}
            {item.year && <span>📅 {item.year}년</span>}
          </div>
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
