"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Product {
  name: string;
  desc: string;
  images: string[];
}

/**
 * 제품 카드 — 이미지가 있으면 클릭 시 라이트박스로 크게 보여준다.
 * 제품 이미지가 카탈로그 통이미지라 규격(비율)이 제각각이고 세로로 매우
 * 긴 경우도 있어, 목록에는 텍스트만 노출하고 클릭했을 때만 원본 이미지를
 * 스크롤 가능한 라이트박스로 보여주는 방식으로 처리한다.
 */
export function ProductCard({
  product,
  pi,
  isDark,
}: {
  product: Product;
  pi: number;
  isDark: boolean;
}) {
  const [open, setOpen] = useState(false);
  const hasImage = product.images.length > 0;

  return (
    <>
      <div
        role={hasImage ? "button" : undefined}
        tabIndex={hasImage ? 0 : undefined}
        onClick={hasImage ? () => setOpen(true) : undefined}
        onKeyDown={
          hasImage
            ? (e) => {
                if (e.key === "Enter" || e.key === " ") setOpen(true);
              }
            : undefined
        }
        className={`rounded-2xl p-6 h-full group transition-all duration-300 ${
          hasImage ? "cursor-pointer" : ""
        } ${
          isDark
            ? "bg-white/[0.06] ring-1 ring-white/10 hover:bg-white/10"
            : "bg-mist hover:bg-navy hover:text-white"
        }`}
      >
        <div className="flex items-start justify-between gap-2 mb-3">
          <p
            className={`text-xs font-bold tabular-nums tracking-widest ${
              isDark
                ? "text-sky/70 group-hover:text-sky"
                : "text-navy/40 group-hover:text-sky"
            }`}
          >
            No. {String(pi + 1).padStart(2, "0")}
          </p>
          {hasImage && (
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                isDark
                  ? "bg-white/10 text-white/70"
                  : "bg-white text-navy/60 group-hover:bg-white/20 group-hover:text-white"
              }`}
            >
              📷 이미지 보기
            </span>
          )}
        </div>
        <h3
          className={`font-bold mb-2 ${
            isDark ? "text-white" : "text-gray-900 group-hover:text-white"
          }`}
        >
          {product.name}
        </h3>
        <p
          className={`text-sm leading-relaxed ${
            isDark ? "text-blue-200/60" : "text-gray-500 group-hover:text-blue-100/70"
          }`}
        >
          {product.desc}
        </p>
      </div>

      {open && hasImage && (
        <Lightbox
          images={product.images}
          title={product.name}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

function Lightbox({
  images,
  title,
  onClose,
}: {
  images: string[];
  title: string;
  onClose: () => void;
}) {
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

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="닫기"
        className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white text-2xl leading-none flex items-center justify-center transition-colors z-10"
      >
        ×
      </button>

      <div
        className="relative w-full max-w-5xl max-h-full flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-center text-white text-lg font-bold mb-3 shrink-0">
          {title}
        </p>
        <div className="rounded-xl overflow-y-auto bg-white shadow-2xl max-h-[85vh]">
          {images.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={src}
              src={src}
              alt={`${title} ${i + 1}`}
              className={`w-full h-auto block p-4 sm:p-6 ${
                i !== images.length - 1 ? "border-b border-gray-100" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
}
