import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";

export const metadata: Metadata = {
  title: "회사소개 | (주)우인산업",
  description: "우인산업 대표이사 인사말, 회사 정보, 오시는 길을 안내합니다.",
};

const companyInfo = [
  { label: "회사명", value: "(주)우인산업" },
  { label: "영문명", value: "WOOIN Construction Industry" },
  { label: "대표이사", value: "조안다" },
  { label: "사업분야", value: "판넬공사, 지붕공사, 강판공사" },
  { label: "소재지", value: "경기도 평택시 목천로 74-28" },
  { label: "대표번호", value: "031-662-7890" },
  { label: "팩스", value: "031-662-7891" },
];

export default function About() {
  return (
    <div>
      <PageBanner title="회사소개" subtitle="(주)우인산업을 소개합니다" />

      {/* ── 인사말 ── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-[#1C3177] rounded-full" />
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">
              대표이사 인사말
            </h2>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100">
            <div className="text-5xl mb-6">💬</div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-5">
              안녕하십니까, <strong className="text-[#1C3177]">(주)우인산업 대표이사 조안다</strong>입니다.
            </p>
            <p className="text-base text-gray-600 leading-relaxed mb-5">
              저희 우인산업은 판넬공사, 지붕공사, 강판공사를 전문으로 하는 건설 기업으로,
              고객 여러분의 소중한 공간을 최고의 기술과 성실함으로 완성하기 위해
              끊임없이 노력하고 있습니다.
            </p>
            <p className="text-base text-gray-600 leading-relaxed mb-5">
              <span className="font-semibold text-[#1C3177]">
                &ldquo;내일을 짓는 기술, 사람을 향한 우인(友人)&rdquo;
              </span>
              이라는 슬로건처럼, 단순히 건축물을 짓는 것을 넘어
              사람과 사람 사이의 신뢰를 짓는 기업이 되고자 합니다.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              앞으로도 고객 여러분의 기대에 부응하는 우인산업이 되겠습니다.
              감사합니다.
            </p>
            <div className="mt-8 text-right border-t border-blue-100 pt-6">
              <span className="text-[#1C3177] font-black text-lg">
                (주)우인산업 대표이사 조안다
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 회사 정보 ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-[#1C3177] rounded-full" />
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">
              회사 정보
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow overflow-hidden">
            <table className="w-full">
              <tbody>
                {companyInfo.map((info, idx) => (
                  <tr
                    key={info.label}
                    className={idx !== companyInfo.length - 1 ? "border-b border-gray-100" : ""}
                  >
                    <td className="py-4 px-6 font-semibold text-[#1C3177] bg-blue-50 w-32 text-sm">
                      {info.label}
                    </td>
                    <td className="py-4 px-6 text-gray-700 text-sm">{info.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 오시는 길 ── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-[#1C3177] rounded-full" />
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">
              오시는 길
            </h2>
          </div>

          {/* 지도 */}
          <div className="rounded-3xl overflow-hidden shadow mb-8">
            <iframe
              src="https://maps.google.com/maps?q=경기도+평택시+목천로+74-28&output=embed&z=16"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="우인산업 위치"
            />
          </div>

          {/* 연락처 카드 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                icon: "📍",
                title: "주소",
                content: "경기도 평택시\n목천로 74-28",
                action: null,
              },
              {
                icon: "☎",
                title: "대표번호",
                content: "031-662-7890",
                action: "tel:031-662-7890",
              },
              {
                icon: "📠",
                title: "팩스",
                content: "031-662-7891",
                action: null,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="font-bold text-[#1C3177] mb-2">{item.title}</div>
                {item.action ? (
                  <a
                    href={item.action}
                    className="text-gray-600 text-sm hover:text-[#1C3177] transition-colors font-medium"
                  >
                    {item.content}
                  </a>
                ) : (
                  <div className="text-gray-600 text-sm whitespace-pre-line">{item.content}</div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <a
              href="https://maps.google.com/maps?q=경기도+평택시+목천로+74-28"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-[#1C3177] text-[#1C3177] px-8 py-3 rounded-xl font-bold hover:bg-[#1C3177] hover:text-white transition-colors text-sm"
            >
              Google Maps에서 보기 →
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-[#1C3177] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-4">
            견적 문의가 필요하신가요?
          </h2>
          <p className="text-blue-200 mb-8">
            전문 상담원이 신속하게 답변드리겠습니다.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#1C3177] px-10 py-4 rounded-xl font-black hover:bg-gray-100 transition-colors"
          >
            견적 문의하기
          </Link>
        </div>
      </section>
    </div>
  );
}
