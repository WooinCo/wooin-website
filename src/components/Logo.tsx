interface LogoProps {
  variant?: "full" | "icon";
  light?: boolean;
  className?: string;
}

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
            className="text-[0.55rem] font-medium tracking-[0.08em] mt-1"
            style={{ color: light ? "rgba(255,255,255,0.7)" : "#8a93a8" }}
          >
            WOOIN construction industry
          </div>
        </div>
      )}
    </div>
  );
}

function LogoMark({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 100 116"
      className="h-10 w-auto shrink-0"
      role="img"
      aria-label="우인산업 로고"
    >
      {/* 궤도 링 — 뒤쪽 호 (건물 뒤) */}
      <g transform="rotate(-15 52 80)">
        <path
          d="M 8 80 A 44 14 0 0 1 96 80"
          fill="none"
          stroke={color}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </g>

      {/* 건물 4동 — 외곽선 + 중심선 */}
      <g fill="none" stroke={color} strokeWidth="3.5" strokeLinejoin="round">
        {/* 1동: 앞쪽 (가장 짧음) */}
        <path d="M 18 104 L 18 66 L 28 58 L 28 104" />
        <line x1="23" y1="62" x2="23" y2="104" strokeWidth="2" />

        {/* 2동: 왼쪽 (중간 높이) */}
        <path d="M 30 104 L 30 50 L 42 40 L 42 104" />
        <line x1="36" y1="46" x2="36" y2="104" strokeWidth="2" />

        {/* 3동: 가운데 (가장 높음) */}
        <path d="M 44 104 L 44 28 L 58 14 L 58 104" />
        <line x1="51" y1="22" x2="51" y2="104" strokeWidth="2" />

        {/* 4동: 오른쪽 (반대 각도) */}
        <path d="M 60 104 L 60 44 L 72 56 L 72 104" />
        <line x1="66" y1="50" x2="66" y2="104" strokeWidth="2" />
      </g>

      {/* 궤도 링 — 앞쪽 호 (건물 앞) */}
      <g transform="rotate(-15 52 80)">
        <path
          d="M 8 80 A 44 14 0 0 0 96 80"
          fill="none"
          stroke={color}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
