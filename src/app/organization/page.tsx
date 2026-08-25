import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "조직도 | (주)우인산업",
  description: "(주)우인산업의 조직 구성을 안내합니다.",
};

/** 조직도 노드 — 지명원 원본 배치를 좌표 그대로 재현 */
type OrgNodeDef = {
  id: string;
  cx: number;
  cy: number;
  w: number;
  h: number;
  label: string;
  tone: "dark" | "mid" | "light" | "leaf";
};
type OrgEdgeDef = { from: string; to: string };

const orgNodes: OrgNodeDef[] = [
  { id: "ceo", cx: 700, cy: 34, w: 170, h: 54, label: "대표이사", tone: "dark" },

  { id: "coord", cx: 460, cy: 148, w: 150, h: 48, label: "사업조정실", tone: "light" },
  { id: "general", cx: 700, cy: 148, w: 150, h: 48, label: "총괄", tone: "mid" },
  { id: "tech", cx: 940, cy: 148, w: 150, h: 48, label: "기술연구소", tone: "light" },

  { id: "build", cx: 310, cy: 270, w: 220, h: 52, label: "건축사업본부", tone: "dark" },
  { id: "solar", cx: 820, cy: 270, w: 220, h: 52, label: "태양광사업본부", tone: "dark" },
  { id: "strat", cx: 1210, cy: 270, w: 240, h: 52, label: "전략사업지원본부", tone: "dark" },

  { id: "ptBuild", cx: 150, cy: 388, w: 110, h: 46, label: "건축 Pt.", tone: "mid" },
  { id: "ptGm", cx: 310, cy: 388, w: 110, h: 46, label: "공무 Pt.", tone: "mid" },
  { id: "ptSales", cx: 470, cy: 388, w: 110, h: 46, label: "영업 Pt.", tone: "mid" },

  { id: "solarDev", cx: 750, cy: 388, w: 150, h: 46, label: "태양광사업개발팀", tone: "light" },
  { id: "solarTech", cx: 910, cy: 388, w: 150, h: 46, label: "태양광시공기술팀", tone: "light" },

  { id: "marcom", cx: 1140, cy: 388, w: 130, h: 46, label: "MARCOM팀", tone: "light" },
  { id: "mgmt", cx: 1290, cy: 388, w: 130, h: 46, label: "경영지원팀", tone: "light" },

  { id: "t1", cx: 70, cy: 498, w: 82, h: 46, label: "건축1팀", tone: "leaf" },
  { id: "t2", cx: 158, cy: 498, w: 82, h: 46, label: "건축2팀", tone: "leaf" },
  { id: "t3", cx: 248, cy: 498, w: 92, h: 46, label: "금속창호팀", tone: "leaf" },
  { id: "t4", cx: 345, cy: 498, w: 92, h: 46, label: "공무관리팀", tone: "leaf" },
  { id: "t5", cx: 442, cy: 498, w: 84, h: 46, label: "설계기술팀", tone: "leaf" },
  { id: "t6", cx: 526, cy: 498, w: 70, h: 46, label: "TS팀", tone: "leaf" },
  { id: "t7", cx: 600, cy: 498, w: 70, h: 46, label: "AM팀", tone: "leaf" },
];

const orgEdges: OrgEdgeDef[] = [
  { from: "ceo", to: "coord" },
  { from: "ceo", to: "general" },
  { from: "ceo", to: "tech" },
  { from: "general", to: "build" },
  { from: "general", to: "solar" },
  { from: "general", to: "strat" },
  { from: "build", to: "ptBuild" },
  { from: "build", to: "ptGm" },
  { from: "build", to: "ptSales" },
  { from: "solar", to: "solarDev" },
  { from: "solar", to: "solarTech" },
  { from: "strat", to: "marcom" },
  { from: "strat", to: "mgmt" },
  { from: "ptBuild", to: "t1" },
  { from: "ptBuild", to: "t2" },
  { from: "ptBuild", to: "t3" },
  { from: "ptGm", to: "t4" },
  { from: "ptGm", to: "t5" },
  { from: "ptSales", to: "t6" },
  { from: "ptSales", to: "t7" },
];

const orgTone: Record<OrgNodeDef["tone"], string> = {
  dark: "bg-navy text-white font-extrabold shadow-sm",
  mid: "bg-navy-light text-white font-bold shadow-sm",
  light: "bg-white ring-1 ring-gray-200 text-gray-800 font-bold shadow-sm",
  leaf: "bg-sky text-navy font-semibold ring-1 ring-navy/10",
};

function OrgChart() {
  const byId = Object.fromEntries(orgNodes.map((n) => [n.id, n]));
  const maxX = Math.max(...orgNodes.map((n) => n.cx + n.w / 2)) + 20;
  const maxY = Math.max(...orgNodes.map((n) => n.cy + n.h / 2)) + 20;

  return (
    <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
      <svg
        viewBox={`0 0 ${maxX} ${maxY}`}
        width={maxX}
        height={maxY}
        className="mx-auto"
        style={{ minWidth: 900 }}
      >
        {/* 연결선 */}
        {orgEdges.map((e, i) => {
          const a = byId[e.from];
          const b = byId[e.to];
          const ay = a.cy + a.h / 2;
          const by = b.cy - b.h / 2;
          const midY = (ay + by) / 2;
          return (
            <path
              key={i}
              d={`M ${a.cx} ${ay} V ${midY} H ${b.cx} V ${by}`}
              fill="none"
              stroke="#cbd5e1"
              strokeWidth={1.5}
            />
          );
        })}
        {/* 노드 */}
        {orgNodes.map((n) => (
          <foreignObject
            key={n.id}
            x={n.cx - n.w / 2}
            y={n.cy - n.h / 2}
            width={n.w}
            height={n.h}
          >
            <div
              className={`w-full h-full rounded-lg flex items-center justify-center text-center px-1.5 leading-tight text-[11px] sm:text-xs ${orgTone[n.tone]}`}
            >
              {n.label}
            </div>
          </foreignObject>
        ))}
      </svg>
    </div>
  );
}

export default function Organization() {
  return (
    <div>
      <PageBanner
        eyebrow="Organization"
        title="조직도"
        subtitle="(주)우인산업의 조직 구성을 소개합니다."
        current="조직도"
        imageSrc="/images/building.png"
      />

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <p className="text-navy font-bold text-sm tracking-[0.2em] uppercase mb-3">
              Organizational Chart
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              조직도
            </h2>
          </Reveal>

          <p className="lg:hidden text-center text-xs text-gray-400 mb-3">
            ← 옆으로 스크롤하면 전체 조직도를 볼 수 있어요 →
          </p>
          <Reveal>
            <OrgChart />
          </Reveal>

          {/* 약어 안내 */}
          <Reveal>
            <div className="mt-10 text-xs text-gray-400 leading-relaxed max-w-2xl mx-auto text-center">
              <p>* AM : Account Management (고객관리 중심 일반영업)</p>
              <p>* TS : Technical Sales (기술중심영업)</p>
              <p>
                * marcom : Marketing Communication (마케팅 목적 달성을 위한
                고객 및 대중과의 모든 홍보, 소통 활동)
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
