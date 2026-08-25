"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

interface Product {
  name: string;
  desc: string;
  image?: string;
}

/**
 * 제품 카드 — 이미지가 있으면 클릭 시 라이트박스로 크게 보여준다.
 * (제품 이미지가 아직 규격이 통일되지 않아, 목록에는 텍스트만 노출하고
 * 클릭했을 때만 원본 이미지를 보여주는 방식으로 우선 처리)
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
  const hasImage = Boolean(product.image);

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

      {open && product.image && (
        <Lightbox
          src={product.image}
          title={product.name}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

function Lightbox({
  src,
  title,
  onClose,
}: {
  src: string;
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
        className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white text-2xl leading-none flex items-center justify-center transition-colors"
      >
        ×
      </button>

      <div
        className="relative w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full aspect-[4/3] bg-white rounded-xl overflow-hidden shadow-2xl">
          <Image
            src={src}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-contain"
          />
        </div>
        <p className="mt-4 text-center text-white text-lg font-bold">{title}</p>
      </div>
    </div>,
    document.body
  );
}
