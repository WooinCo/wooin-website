import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "견적문의 | (주)우인산업",
  description: "우인산업에 판넬공사, 지붕공사, 강판공사 견적을 문의하세요. 031-662-7890",
};

const contactInfo = [
  {
    icon: "☎",
    label: "대표번호",
    value: "031-662-7890",
    href: "tel:031-662-7890",
    desc: "평일 09:00 ~ 18:00",
  },
  {
    icon: "📠",
    label: "팩스",
    value: "031-662-7891",
    href: null,
    desc: "24시간 수신 가능",
  },
  {
    icon: "📍",
    label: "주소",
    value: "경기도 평택시 목천로 74-28",
    href: "https://maps.google.com/maps?q=경기도+평택시+목천로+74-28",
    desc: "직접 방문 환영",
  },
];

export default function Contact() {
  return (
    <div>
      <PageBanner title="견적문의" subtitle="전문 상담원이 신속하게 답변드리겠습니다" />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 연락처 카드 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="bg-gradient-to-br from-gray-50 to-blue-50 border border-blue-100 rounded-2xl p-6 text-center"
              >
                <div className="text-4xl mb-3">{info.icon}</div>
                <div className="font-bold text-[#1C3177] mb-1 text-sm">{info.label}</div>
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="font-semibold text-gray-800 hover:text-[#1C3177] transition-colors text-sm"
                  >
                    {info.value}
                  </a>
                ) : (
                  <div className="font-semibold text-gray-800 text-sm">{info.value}</div>
                )}
                <div className="text-xs text-gray-400 mt-1">{info.desc}</div>
              </div>
            ))}
          </div>

          {/* 폼 영역 */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* 안내 문구 */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-5">
                견적 문의하기
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                아래 양식을 작성해 주시면 담당자가 확인 후
                빠른 시일 내에 연락드리겠습니다.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1C3177] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 mb-1">온라인 문의 접수</div>
                    <div className="text-sm text-gray-500">
                      양식을 작성하여 제출해주세요
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1C3177] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 mb-1">담당자 연락</div>
                    <div className="text-sm text-gray-500">
                      영업일 기준 1~2일 내 연락드립니다
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1C3177] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 mb-1">현장 방문 및 견적</div>
                    <div className="text-sm text-gray-500">
                      현장 확인 후 정확한 견적을 제공합니다
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 bg-[#1C3177] rounded-2xl p-6 text-white">
                <div className="font-bold mb-1">급하신가요?</div>
                <div className="text-blue-200 text-sm mb-3">직접 전화 주세요</div>
                <a
                  href="tel:031-662-7890"
                  className="text-2xl font-black hover:text-blue-200 transition-colors"
                >
                  ☎ 031-662-7890
                </a>
              </div>
            </div>

            {/* 폼 */}
            <div className="lg:col-span-3 bg-white rounded-3xl shadow-lg p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
