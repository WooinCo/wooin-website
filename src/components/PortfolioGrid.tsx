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
type SortOrder = "newest" | "oldest";

const categories: FilterCategory[] = ["전체", ...portfolioCategories];

const categoryColor: Record<PortfolioCategory, string> = {
  신축공사: "bg-blue-100 text-blue-700",
  "증축·리모델링": "bg-indigo-100 text-indigo-700",
  "보수·개보수": "bg-amber-100 text-amber-700",
};

const ITEMS_PER_PAGE = 15;

export default function PortfolioGrid() {
  const [active, setActive] = useState<FilterCategory>("전체");
  const [sort, setSort] = useState<SortOrder>("newest");
  const [selected, setSelected] = useState<PortfolioItem | null>(null);
  const [page, setPage] = useState(1);

  const filtered = (
    active === "전체"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === active)
  ).slice().sort((a, b) => {
    const ay = a.year ?? 0;
    const by = b.year ?? 0;
    return sort === "newest" ? by - ay : ay - by;
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paged = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  function handleFilter(cat: FilterCategory) {
    setActive(cat);
    setPage(1);
  }

  function handleSort(order: SortOrder) {
    setSort(order);
    setPage(1);
  }

  return (
    <div>
      {/* 필터 + 정렬 */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-10">
        {/* 카테고리 필터 */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                active === cat
                  ? "bg-navy text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* 날짜 정렬 */}
        <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
          {(["newest", "oldest"] as SortOrder[]).map((order) => (
            <button
              key={order}
              onClick={() => handleSort(order)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                sort === order
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {order === "newest" ? "최신순" : "오래된순"}
            </button>
          ))}
        </div>
      </div>

      {/* 그리드 */}
      {filtered.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paged.map((item) => (
            <PortfolioCard
              key={item.id}
              item={item}
              onOpen={() => setSelected(item)}
            />
          ))}
        </div>
      )}

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-12">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 rounded-full text-sm font-semibold bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            ← 이전
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`w-10 h-10 rounded-full text-sm font-semibold transition-all ${
                p === page
                  ? "bg-navy text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 rounded-full text-sm font-semibold bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            다음 →
          </button>
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
          className="relative aspect-video bg-gray-100 w-full block cursor-pointer overflow-hidden"
        >
          {item.beforeSrc ? (
            /* 비포/애프터 분할 썸네일 */
            <>
              {/* Before — 왼쪽 절반 */}
              <div className="absolute left-0 top-0 bottom-0 w-1/2 overflow-hidden">
                <Image src={item.beforeSrc} alt="시공 전" fill className="object-cover" />
              </div>
              {/* After — 오른쪽 절반 */}
              <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden">
                <Image src={item.src} alt="시공 후" fill className="object-cover" />
              </div>
              {/* 중앙 구분선 */}
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-white/90 z-10" />
              <span className="absolute bottom-2 left-2.5 z-10 bg-black/55 text-white text-[10px] font-bold px-2 py-0.5 rounded-full tracking-widest">
                BEFORE
              </span>
              <span className="absolute bottom-2 right-2.5 z-10 bg-navy/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full tracking-widest">
                AFTER
              </span>
            </>
          ) : (
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          )}
          {/* 확대 힌트 */}
          <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/25 transition-colors z-20">
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
        {item.beforeSrc ? (
          /* 비포/애프터 나란히 */
          <div className="grid grid-cols-2 gap-3">
            {[
              { src: item.beforeSrc, label: "BEFORE" },
              { src: item.src, label: "AFTER" },
            ].map(({ src, label }) => (
              <div key={label}>
                <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden">
                  <Image
                    src={src}
                    alt={label}
                    fill
                    sizes="(max-width: 1024px) 50vw, 512px"
                    className="object-contain"
                  />
                  <Watermark />
                </div>
                <p className="text-center text-xs font-bold tracking-widest text-white/50 mt-2">
                  {label}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden">
            <Image
              src={item.src}
              alt={item.title}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-contain"
            />
            <Watermark />
          </div>
        )}
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

function Watermark() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-20 pointer-events-none select-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='15' font-weight='bold' fill='rgba(255%2C255%2C255%2C0.18)' text-anchor='middle' dominant-baseline='middle' transform='rotate(-35 110 110)'%3E%28%EC%A3%BC%29%EC%9A%B0%EC%9D%B8%EC%82%B0%EC%97%85%3C%2Ftext%3E%3C%2Fsvg%3E")`,
        backgroundSize: "220px 220px",
      }}
    />
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
