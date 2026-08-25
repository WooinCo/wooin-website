"use client";

import { useLayoutEffect, useRef } from "react";

/** 조직도 노드 — 지명원 원본 배치를 좌표 그대로 재현 */
type OrgNodeDef = {
  id: string;
  cx: number;
  cy: number;
  w: number;
  h: number;
  label: string;
  tone: "dark" | "mid" | "light" | "leaf";
  /** 트리 깊이 — 단계별로 순서대로 그려지는 애니메이션에 사용 */
  depth: number;
};
type OrgEdgeDef = { from: string; to: string };

const orgNodes: OrgNodeDef[] = [
  { id: "ceo", cx: 700, cy: 34, w: 170, h: 54, label: "대표이사", tone: "dark", depth: 0 },

  { id: "coord", cx: 460, cy: 148, w: 150, h: 48, label: "사업조정실", tone: "light", depth: 1 },
  { id: "general", cx: 700, cy: 148, w: 150, h: 48, label: "총괄", tone: "mid", depth: 1 },
  { id: "tech", cx: 940, cy: 148, w: 150, h: 48, label: "기술연구소", tone: "light", depth: 1 },

  { id: "build", cx: 310, cy: 270, w: 220, h: 52, label: "건축사업본부", tone: "dark", depth: 2 },
  { id: "solar", cx: 820, cy: 270, w: 220, h: 52, label: "태양광사업본부", tone: "dark", depth: 2 },
  { id: "strat", cx: 1210, cy: 270, w: 240, h: 52, label: "전략사업지원본부", tone: "dark", depth: 2 },

  { id: "ptBuild", cx: 150, cy: 388, w: 110, h: 46, label: "건축 Pt.", tone: "mid", depth: 3 },
  { id: "ptGm", cx: 310, cy: 388, w: 110, h: 46, label: "공무 Pt.", tone: "mid", depth: 3 },
  { id: "ptSales", cx: 470, cy: 388, w: 110, h: 46, label: "영업 Pt.", tone: "mid", depth: 3 },

  { id: "solarDev", cx: 750, cy: 388, w: 150, h: 46, label: "태양광사업개발팀", tone: "light", depth: 3 },
  { id: "solarTech", cx: 910, cy: 388, w: 150, h: 46, label: "태양광시공기술팀", tone: "light", depth: 3 },

  { id: "marcom", cx: 1140, cy: 388, w: 130, h: 46, label: "MARCOM팀", tone: "light", depth: 3 },
  { id: "mgmt", cx: 1290, cy: 388, w: 130, h: 46, label: "경영지원팀", tone: "light", depth: 3 },

  { id: "t1", cx: 70, cy: 498, w: 82, h: 46, label: "건축1팀", tone: "leaf", depth: 4 },
  { id: "t2", cx: 158, cy: 498, w: 82, h: 46, label: "건축2팀", tone: "leaf", depth: 4 },
  { id: "t3", cx: 248, cy: 498, w: 92, h: 46, label: "금속창호팀", tone: "leaf", depth: 4 },
  { id: "t4", cx: 345, cy: 498, w: 92, h: 46, label: "공무관리팀", tone: "leaf", depth: 4 },
  { id: "t5", cx: 442, cy: 498, w: 84, h: 46, label: "설계기술팀", tone: "leaf", depth: 4 },
  { id: "t6", cx: 526, cy: 498, w: 70, h: 46, label: "TS팀", tone: "leaf", depth: 4 },
  { id: "t7", cx: 600, cy: 498, w: 70, h: 46, label: "AM팀", tone: "leaf", depth: 4 },
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

const LEVEL_STEP = 0.4; // 깊이 한 단계당 시작 간격 (초)
const EDGE_DURATION = 0.4;
const NODE_DURATION = 0.5;
/** SSR/최초 페인트 때부터 안전하게 숨겨두는 넉넉한 placeholder 길이 */
const PLACEHOLDER_LEN = 2000;

export default function OrganizationChart() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRefs = useRef<Record<number, SVGPathElement | null>>({});
  const nodeRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const byId = Object.fromEntries(orgNodes.map((n) => [n.id, n]));
  const maxX = Math.max(...orgNodes.map((n) => n.cx + n.w / 2)) + 20;
  const maxY = Math.max(...orgNodes.map((n) => n.cy + n.h / 2)) + 20;

  // 페인트 전에 실제 길이로 정확히 맞춰 숨김 (placeholder → 정확한 길이로 교체, 계속 숨겨진 상태 유지)
  useLayoutEffect(() => {
    Object.values(pathRefs.current).forEach((path) => {
      if (!path) return;
      const len = path.getTotalLength();
      path.style.strokeDasharray = `${len}`;
      path.style.strokeDashoffset = `${len}`;
    });
  }, []);

  useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        orgEdges.forEach((e, i) => {
          const path = pathRefs.current[i];
          if (!path) return;
          const b = byId[e.to];
          const delay = b.depth * LEVEL_STEP;
          path.style.transition = `stroke-dashoffset ${EDGE_DURATION}s cubic-bezier(0.65,0,0.35,1) ${delay}s`;
          path.style.strokeDashoffset = "0";
        });

        orgNodes.forEach((n) => {
          const node = nodeRefs.current[n.id];
          if (!node) return;
          const delay =
            n.depth === 0 ? 0 : n.depth * LEVEL_STEP + EDGE_DURATION * 0.55;
          node.style.transition = `opacity ${NODE_DURATION}s ease ${delay}s, transform ${NODE_DURATION}s cubic-bezier(0.34,1.56,0.64,1) ${delay}s`;
          node.style.opacity = "1";
          node.style.transform = "scale(1)";
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [byId]);

  return (
    <div ref={wrapRef} className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
      <svg
        viewBox={`0 0 ${maxX} ${maxY}`}
        width={maxX}
        height={maxY}
        className="mx-auto"
        style={{ minWidth: 900 }}
      >
        {/* 연결선 — 대상 노드의 깊이에 맞춰 순서대로 그려짐 */}
        {orgEdges.map((e, i) => {
          const a = byId[e.from];
          const b = byId[e.to];
          const ay = a.cy + a.h / 2;
          const by = b.cy - b.h / 2;
          const midY = (ay + by) / 2;
          return (
            <path
              key={i}
              ref={(el) => {
                pathRefs.current[i] = el;
              }}
              d={`M ${a.cx} ${ay} V ${midY} H ${b.cx} V ${by}`}
              fill="none"
              stroke="#cbd5e1"
              strokeWidth={1.5}
              strokeDasharray={PLACEHOLDER_LEN}
              strokeDashoffset={PLACEHOLDER_LEN}
            />
          );
        })}
        {/* 노드 — 자기 연결선이 그려진 직후 튀어오르며 등장 */}
        {orgNodes.map((n) => (
          <foreignObject
            key={n.id}
            x={n.cx - n.w / 2}
            y={n.cy - n.h / 2}
            width={n.w}
            height={n.h}
          >
            <div
              ref={(el) => {
                nodeRefs.current[n.id] = el;
              }}
              className={`w-full h-full rounded-lg flex items-center justify-center text-center px-1.5 leading-tight text-[11px] sm:text-xs ${orgTone[n.tone]}`}
              style={{ opacity: 0, transform: "scale(0.3)" }}
            >
              {n.label}
            </div>
          </foreignObject>
        ))}
      </svg>
    </div>
  );
}
