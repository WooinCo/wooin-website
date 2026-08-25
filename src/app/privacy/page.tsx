import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "개인정보처리방침 | (주)우인산업",
  description: "(주)우인산업 개인정보처리방침입니다.",
};

const sections = [
  {
    title: "1. 수집하는 개인정보 항목",
    body: (
      <>
        <p>
          (주)우인산업(이하 &lsquo;회사&rsquo;)은 온라인 견적문의 접수를 위해
          아래와 같은 개인정보를 수집합니다.
        </p>
        <ul className="list-disc pl-5 mt-3 space-y-1">
          <li>필수항목: 이름, 연락처, 이메일, 공사 종류, 문의 내용</li>
          <li>선택항목: 공사 위치, 첨부파일(도면·사진 등)</li>
          <li>
            자동 수집 항목: 접속 IP, 접속 일시 등(부정 이용 방지 및 서비스
            개선 목적)
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "2. 개인정보의 수집 및 이용 목적",
    body: (
      <p>
        수집한 개인정보는 견적문의 상담 및 답변, 공사 견적 안내, 문의
        내용 확인을 위한 연락 목적으로만 이용하며, 명시한 목적 범위를
        초과하여 이용하지 않습니다.
      </p>
    ),
  },
  {
    title: "3. 개인정보의 보유 및 이용 기간",
    body: (
      <p>
        회사는 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를
        지체 없이 파기합니다. 다만 관계 법령에 따라 보존할 필요가 있는
        경우 회사는 관계 법령에서 정한 일정 기간 동안 회원정보를
        보관합니다. 견적문의 관련 정보는 문의 처리 완료 후 최대 1년간
        보관 후 파기함을 원칙으로 합니다.
      </p>
    ),
  },
  {
    title: "4. 개인정보의 제3자 제공",
    body: (
      <p>
        회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.
        다만 이용자가 사전에 동의하거나, 법령의 규정에 의거한 경우는
        예외로 합니다.
      </p>
    ),
  },
  {
    title: "5. 개인정보 처리업무의 위탁",
    body: (
      <>
        <p>
          회사는 원활한 견적문의 처리를 위해 아래와 같이 개인정보 처리업무를
          외부 업체에 위탁하여 운영하고 있습니다.
        </p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-mist text-left">
                <th className="p-3 font-bold border border-gray-200">
                  수탁업체
                </th>
                <th className="p-3 font-bold border border-gray-200">
                  위탁업무 내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-gray-200">Resend, Inc.</td>
                <td className="p-3 border border-gray-200">
                  견적문의 접수 시 이메일 발송 대행
                </td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-200">Vercel Inc.</td>
                <td className="p-3 border border-gray-200">
                  웹사이트 호스팅 및 첨부파일 저장
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    title: "6. 정보주체의 권리·의무 및 행사방법",
    body: (
      <p>
        이용자는 개인정보 처리에 대해 언제든지 열람, 정정, 삭제, 처리정지
        요구 등의 권리를 행사할 수 있습니다. 권리 행사는 아래
        &lsquo;개인정보 보호책임자&rsquo; 연락처를 통해 요청하실 수 있으며,
        회사는 이에 대해 지체 없이 조치합니다.
      </p>
    ),
  },
  {
    title: "7. 개인정보의 파기절차 및 방법",
    body: (
      <p>
        회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가
        불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.
        전자적 파일 형태로 기록·저장된 개인정보는 기록을 재생할 수
        없는 기술적 방법을 사용하여 삭제합니다.
      </p>
    ),
  },
  {
    title: "8. 개인정보 보호책임자",
    body: (
      <div className="rounded-2xl bg-mist p-6">
        <p className="font-bold text-gray-800 mb-2">
          개인정보 보호책임자 : 대표이사 조안다
        </p>
        <p>전화번호 : 031-662-7890</p>
        <p>이메일 : info@wooin-j.co.kr</p>
        <p className="mt-3 text-gray-500 text-xs">
          이용자는 회사의 서비스를 이용하며 발생한 모든 개인정보 관련 문의,
          불만처리 등을 위 연락처로 문의하실 수 있습니다.
        </p>
      </div>
    ),
  },
  {
    title: "9. 개인정보처리방침의 변경",
    body: (
      <p>
        이 개인정보처리방침은 법령·정책 또는 보안 기술의 변경에 따라
        내용의 추가·삭제 및 수정이 있을 시에는 변경사항의 시행 7일
        전부터 홈페이지 공지사항을 통하여 고지합니다.
      </p>
    ),
  },
];

export default function Privacy() {
  return (
    <div>
      <PageBanner
        eyebrow="Privacy Policy"
        title="개인정보처리방침"
        subtitle="(주)우인산업은 이용자의 개인정보를 소중히 보호합니다."
        current="개인정보처리방침"
        imageSrc="/images/building.png"
      />

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-14">
            <p className="text-gray-500 leading-relaxed">
              (주)우인산업(이하 &lsquo;회사&rsquo;)은 이용자의 개인정보를
              중요시하며, 「개인정보보호법」 등 관련 법령을 준수하기 위하여
              노력하고 있습니다. 회사는 개인정보처리방침을 통하여
              이용자가 제공하는 개인정보가 어떠한 목적과 방식으로 이용되고
              있으며, 개인정보 보호를 위해 어떠한 조치가 취해지고 있는지
              알려드립니다.
            </p>
            <p className="text-gray-400 text-sm mt-4">
              시행일자 : 2026년 8월 25일
            </p>
          </Reveal>

          <div className="space-y-12">
            {sections.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.04}>
                <h2 className="text-lg font-extrabold text-navy tracking-tight mb-3">
                  {s.title}
                </h2>
                <div className="text-gray-600 text-sm leading-relaxed">
                  {s.body}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
