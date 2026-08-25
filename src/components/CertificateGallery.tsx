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
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
      {certificates.map((cert) => (
        <div key={cert.src}>
          <div className="relative aspect-[210/297] rounded-xl overflow-hidden bg-white shadow-[0_8px_30px_rgba(15,31,77,0.06)] ring-1 ring-gray-100 p-2">
            <Image
              src={cert.src}
              alt={cert.title}
              fill
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
              className="object-contain"
            />
          </div>
          <p className="mt-2.5 text-sm font-bold text-gray-800">{cert.title}</p>
          <p className="text-xs text-gray-400">{cert.desc}</p>
        </div>
      ))}
    </div>
  );
}
