import type { Metadata } from "next";
import Logo from "@/components/Logo";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "견적문의 | (주)우인산업",
  description:
    "(주)우인산업 온라인 견적문의. 판넬공사·지붕공사·강판공사 견적을 빠르게 문의하세요. 031-662-7890",
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

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-mist">
      {/* 간단한 상단바 (메뉴 없음) */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <Logo />
          <a
            href="tel:031-662-7890"
            className="flex items-center gap-1.5 text-sm font-bold text-navy"
          >
            <span className="text-base">☎</span>
            031-662-7890
          </a>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="text-center mb-10">
          <p className="text-navy font-bold text-sm tracking-[0.2em] uppercase mb-3">
            Online Quote
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            견적문의
          </h1>
          <p className="text-gray-500 mt-4 leading-relaxed">
            아래 정보를 입력해 주시면 담당자가 확인 후
            <br className="hidden sm:block" />
            영업일 기준 1~2일 내에 연락드리겠습니다.
          </p>
        </div>

        {/* 폼 카드 */}
        <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(15,31,77,0.1)] border border-gray-100 p-8 md:p-10">
          <h2 className="text-xl font-extrabold text-gray-900 mb-1">
            견적 문의하기
          </h2>
          <p className="text-sm text-gray-400 mb-7">아래 정보를 입력해 주세요.</p>
          <ContactForm />
        </div>

        {/* 연락처 카드 */}
        <div className="grid sm:grid-cols-3 gap-5 mt-8">
          {contactInfo.map((info) => (
            <div
              key={info.label}
              className="rounded-3xl bg-white border border-gray-100 p-6 text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-2xl bg-navy text-white flex items-center justify-center text-xl mb-3">
                {info.icon}
              </div>
              <div className="font-bold text-navy text-xs mb-1">{info.label}</div>
              {info.href ? (
                <a
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    info.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="font-extrabold text-gray-900 hover:text-navy transition-colors text-sm"
                >
                  {info.value}
                </a>
              ) : (
                <div className="font-extrabold text-gray-900 text-sm">
                  {info.value}
                </div>
              )}
              <div className="text-xs text-gray-400 mt-1.5">{info.desc}</div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-10">
          © (주)우인산업 WOOIN Construction Industry
        </p>
      </main>
    </div>
  );
}
