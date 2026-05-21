import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

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

const steps = [
  { no: "1", title: "온라인 문의 접수", desc: "아래 양식을 작성하여 제출해주세요." },
  { no: "2", title: "담당자 연락", desc: "영업일 기준 1~2일 내 연락드립니다." },
  { no: "3", title: "현장 방문 및 견적", desc: "현장 확인 후 정확한 견적을 제공합니다." },
];

export default function Contact() {
  return (
    <div>
      <PageBanner
        eyebrow="Contact"
        title="견적문의"
        subtitle="전문 상담원이 신속하고 정확하게 답변드리겠습니다."
        current="견적문의"
      />

      {/* 연락처 카드 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6">
            {contactInfo.map((info, i) => (
              <Reveal key={info.label} delay={i * 0.1}>
                <div className="rounded-3xl bg-mist border border-gray-100 p-8 text-center h-full">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-navy text-white flex items-center justify-center text-2xl mb-4">
                    {info.icon}
                  </div>
                  <div className="font-bold text-navy text-sm mb-1">
                    {info.label}
                  </div>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        info.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="font-extrabold text-gray-900 hover:text-navy transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <div className="font-extrabold text-gray-900">
                      {info.value}
                    </div>
                  )}
                  <div className="text-xs text-gray-400 mt-1.5">{info.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 폼 영역 */}
      <section className="pb-24 md:pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* 안내 */}
            <Reveal className="lg:col-span-2">
              <p className="text-navy font-bold text-sm tracking-[0.2em] uppercase mb-3">
                How It Works
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                견적 문의 절차
              </h2>
              <p className="text-gray-500 leading-relaxed mt-4">
                아래 양식을 작성해 주시면 담당자가 확인 후 빠른 시일 내에
                연락드리겠습니다.
              </p>

              <div className="mt-9 space-y-6">
                {steps.map((step) => (
                  <div key={step.no} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-navy text-white flex items-center justify-center font-extrabold shrink-0">
                      {step.no}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{step.title}</div>
                      <div className="text-sm text-gray-500 mt-0.5">
                        {step.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-3xl bg-navy text-white p-8">
                <div className="font-bold text-blue-200 text-sm mb-1">
                  급하신가요?
                </div>
                <div className="text-blue-100/70 text-sm mb-3">
                  전화로 바로 상담받으실 수 있습니다.
                </div>
                <a
                  href="tel:031-662-7890"
                  className="text-2xl font-extrabold hover:text-blue-200 transition-colors"
                >
                  ☎ 031-662-7890
                </a>
              </div>
            </Reveal>

            {/* 폼 */}
            <Reveal delay={0.15} className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(15,31,77,0.1)] border border-gray-100 p-8 md:p-10">
                <h2 className="text-xl font-extrabold text-gray-900 mb-1">
                  견적 문의하기
                </h2>
                <p className="text-sm text-gray-400 mb-7">
                  아래 정보를 입력해 주세요.
                </p>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
