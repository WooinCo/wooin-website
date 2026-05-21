interface LogoProps {
  /** 'full' = 아이콘 + 회사명, 'icon' = 아이콘만 */
  variant?: "full" | "icon";
  /** 어두운 배경 위에 흰색으로 표시 */
  light?: boolean;
  className?: string;
}

/**
 * 우인산업 로고 — 건물 모형 + 궤도링 아이콘을 SVG로 재현.
 */
export default function Logo({
  variant = "full",
  light = false,
  className = "",
}: LogoProps) {
  const mainColor = light ? "#ffffff" : "#1c3177";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark color={mainColor} />
      {variant === "full" && (
        <div className="leading-none">
          <div
            className="font-extrabold text-[1.15rem] tracking-tight"
            style={{ color: mainColor }}
          >
            (주)우인산업
          </div>
          <div
            className="text-[0.6rem] font-medium tracking-[0.12em] mt-1"
            style={{ color: light ? "rgba(255,255,255,0.7)" : "#8a93a8" }}
          >
            WOOIN CONSTRUCTION INDUSTRY
          </div>
        </div>
      )}
    </div>
  );
}

function LogoMark({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 104 116"
      className="h-10 w-auto shrink-0"
      role="img"
      aria-label="우인산업 로고"
    >
      <g transform="rotate(-15 52 80)">
        {/* 궤도링 뒤쪽 (건물 뒤로 지나감) */}
        <path
          d="M 8 80 A 44 14 0 0 1 96 80"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>

      {/* 건물 3동 */}
      <g fill="none" stroke={color} strokeWidth="4" strokeLinejoin="round">
        {/* 왼쪽 건물 */}
        <path d="M 30 104 L 30 50 L 44 38 L 44 104 Z" />
        <line x1="37" y1="46" x2="37" y2="104" />
        {/* 가운데 건물 (가장 높음) */}
        <path d="M 45 104 L 45 28 L 60 12 L 60 104 Z" />
        <line x1="52.5" y1="22" x2="52.5" y2="104" />
        {/* 오른쪽 건물 */}
        <path d="M 61 104 L 61 44 L 74 56 L 74 104 Z" />
        <line x1="67.5" y1="50" x2="67.5" y2="104" />
      </g>

      <g transform="rotate(-15 52 80)">
        {/* 궤도링 앞쪽 (건물 앞으로 지나감) */}
        <path
          d="M 8 80 A 44 14 0 0 0 96 80"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
