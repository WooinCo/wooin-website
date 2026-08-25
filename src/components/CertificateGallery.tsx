"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Certificate {
  src: string;
  title: string;
  desc: string;
}

const certificates: Certificate[] = [
  {
    src: "/certificates/iso9001.jpg",
    title: "ISO 9001",
    desc: "품질경영시스템 인증",
  },
  {
    src: "/certificates/iso14001.jpg",
    title: "ISO 14001",
    desc: "환경경영시스템 인증",
  },
  {
    src: "/certificates/iso45001-kr.jpg",
    title: "ISO 45001",
    desc: "안전보건경영시스템 인증",
  },
  {
    src: "/certificates/venture-certificate.jpg",
    title: "벤처기업확인서",
    desc: "혁신성장유형 벤처기업 인증",
  },
  {
    src: "/certificates/rnd-department-certificate.jpg",
    title: "연구개발전담부서 인정서",
    desc: "기업부설 연구개발전담부서 인정",
  },
];

export default function CertificateGallery() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
        {certificates.map((cert) => (
          <button
            key={cert.src}
            type="button"
            onClick={() => setSelected(cert)}
            aria-label={`${cert.title} 크게 보기`}
            className="group text-left"
          >
            <div className="relative aspect-[210/297] rounded-xl overflow-hidden bg-white shadow-[0_8px_30px_rgba(15,31,77,0.06)] ring-1 ring-gray-100 group-hover:shadow-lg transition-shadow p-2">
              <Image
                src={cert.src}
                alt={cert.title}
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
                className="object-contain"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/25 transition-colors">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity w-9 h-9 rounded-full bg-white/90 text-navy flex items-center justify-center text-sm shadow-lg">
                  🔍
                </span>
              </span>
            </div>
            <p className="mt-2.5 text-sm font-bold text-gray-800">{cert.title}</p>
            <p className="text-xs text-gray-400">{cert.desc}</p>
          </button>
        ))}
      </div>

      {selected && (
        <CertLightbox cert={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

function CertLightbox({
  cert,
  onClose,
}: {
  cert: Certificate;
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

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={cert.title}
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
        className="relative w-full max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full aspect-[210/297] bg-white rounded-xl overflow-hidden shadow-2xl">
          <Image
            src={cert.src}
            alt={cert.title}
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-contain"
          />
        </div>
        <div className="mt-4 text-center text-white">
          <h3 className="text-lg font-bold">{cert.title}</h3>
          <p className="text-sm text-white/70 mt-1">{cert.desc}</p>
        </div>
      </div>
    </div>
  );
}
