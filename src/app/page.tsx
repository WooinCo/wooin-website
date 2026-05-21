import Link from "next/link";
import { youtubeVideos } from "@/lib/portfolio-data";

const services = [
  {
    icon: "🏗️",
    title: "판넬공사",
    description:
      "샌드위치 판넬을 활용한 건축물 외벽·내벽·지붕 시공. 뛰어난 단열성과 내구성으로 에너지 효율을 극대화합니다.",
    href: "/business#panel",
  },
  {
    icon: "🏠",
    title: "지붕공사",
    description:
      "건축물 특성에 맞는 최적의 지붕재 선택과 정밀 시공으로 완벽한 방수·단열 성능을 보장합니다.",
    href: "/business#roof",
  },
  {
    icon: "🔩",
    title: "강판공사",
    description:
      "고강도 강판을 이용한 산업용 건축물 시공. 견고하고 경제적인 솔루션으로 최적의 결과를 제공합니다.",
    href: "/business#steel",
  },
];

const highlights = [
  { icon: "🏆", title: "풍부한 시공 경험", desc: "다양한 현장 경험을 바탕으로 최적의 시공 방법을 제시합니다." },
  { icon: "⚡", title: "빠른 시공", desc: "체계적인 공정 관리로 납기를 준수하며 신속하게 시공합니다." },
  { icon: "✅", title: "품질 보장", desc: "엄격한 품질 기준을 적용하여 완성도 높은 결과물을 제공합니다." },
  { icon: "🤝", title: "사후 관리", desc: "시공 완료 후에도 지속적인 A/S와 고객 지원을 제공합니다." },
];

export default function Home() {
  return (
    <div>
      {/* 히어로 섹션 */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-[#0d1b4b] via-[#1C3177] to-[#1a3a8f] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-blue-300 blur-3xl" />
        </div>

        <div className="relative text-center text-white px-4 max-w-4xl mx-auto">
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 text-sm font-medium mb-8 text-blue-100">
            판넬공사 · 지붕공사 · 강판공사 전문
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">
            (주)우인산업
          </h1>
          <p className="text-xl sm:text-2xl font-light mb-3 text-blue-100">
            내일을 짓는 기술,
          </p>
          <p className="text-xl sm:text-2xl font-semibold mb-10">
            사람을 향한 우인(友人)
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#1C3177] px-8 py-4 rounded-xl font-bold text-base hover:bg-gray-100 transition-colors shadow-lg"
            >
              무료 견적 문의하기
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-white/10 transition-colors"
            >
              시공 사례 보기
            </Link>
          </div>
        </div>
      </section>

      {/* 주요 사업 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#1C3177] font-semibold text-sm uppercase tracking-wider mb-2">
              Our Services
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              주요 사업분야
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-white rounded-2xl shadow hover:shadow-xl transition-all p-8 group hover:-translate-y-1 duration-300"
              >
                <div className="text-5xl mb-5">{service.icon}</div>
                <h3 className="text-xl font-black text-[#1C3177] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-5 text-[#1C3177] text-sm font-semibold group-hover:underline">
                  자세히 보기 →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 우인산업을 선택하는 이유 */}
      <section className="py-20 bg-[#1C3177] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-200 font-semibold text-sm uppercase tracking-wider mb-2">
              Why Wooin
            </p>
            <h2 className="text-3xl md:text-4xl font-black">
              우인산업을 선택하는 이유
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-colors"
              >
                <div className="text-4xl mb-4">{h.icon}</div>
                <h3 className="font-bold text-lg mb-2">{h.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 시공 사례 미리보기 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#1C3177] font-semibold text-sm uppercase tracking-wider mb-2">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              시공 사례
            </h2>
            <p className="text-gray-500">우인산업의 다양한 시공 현장을 확인해보세요</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {[
              { label: "판넬공사", color: "from-blue-400 to-blue-600" },
              { label: "지붕공사", color: "from-green-400 to-green-600" },
              { label: "강판공사", color: "from-orange-400 to-orange-600" },
            ].map((item) => (
              <div
                key={item.label}
                className={`bg-gradient-to-br ${item.color} rounded-2xl aspect-video flex flex-col items-center justify-center text-white`}
              >
                <span className="text-4xl mb-2">📷</span>
                <span className="font-bold">{item.label} 시공 사례</span>
                <span className="text-xs opacity-75 mt-1">이미지 준비중</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/portfolio"
              className="inline-block bg-[#1C3177] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#0d1b4b] transition-colors"
            >
              전체 시공 사례 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* YouTube 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#1C3177] font-semibold text-sm uppercase tracking-wider mb-2">
              YouTube
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              우인산업 유튜브
            </h2>
            <p className="text-gray-500">실제 시공 과정과 현장을 영상으로 확인하세요</p>
          </div>

          {youtubeVideos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {youtubeVideos.slice(0, 4).map((video) => (
                <div key={video.id} className="rounded-2xl overflow-hidden shadow aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="bg-gray-200 rounded-2xl aspect-video flex flex-col items-center justify-center text-gray-400"
                >
                  <span className="text-5xl mb-3">▶</span>
                  <span className="text-sm font-medium">YouTube 영상 {i}</span>
                  <span className="text-xs mt-1">
                    portfolio-data.ts에서 영상 ID를 입력해주세요
                  </span>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-8">
            <a
              href="https://www.youtube.com/@wooin_co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-[#1C3177] text-[#1C3177] px-8 py-3 rounded-xl font-bold hover:bg-[#1C3177] hover:text-white transition-colors"
            >
              YouTube 채널 보기 →
            </a>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-gradient-to-r from-[#0d1b4b] to-[#1C3177] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            지금 바로 견적을 받아보세요
          </h2>
          <p className="text-blue-200 text-lg mb-10">
            판넬공사, 지붕공사, 강판공사에 대한 무료 견적을 제공합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#1C3177] px-10 py-4 rounded-xl font-black text-base hover:bg-gray-100 transition-colors shadow-lg"
            >
              온라인 견적 문의
            </Link>
            <a
              href="tel:031-662-7890"
              className="border-2 border-white/60 text-white px-10 py-4 rounded-xl font-bold text-base hover:bg-white/10 transition-colors"
            >
              ☎ 031-662-7890
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
