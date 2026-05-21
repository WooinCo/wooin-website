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
      viewBox="0 0 72 96"
      className="h-10 w-auto shrink-0"
      role="img"
      aria-label="우인산업 로고"
    >
      {/* 궤도 링 — 뒤쪽 (건물 뒤) */}
      <path
        d="M 2 76 A 33 12 -18 0 1 64 56"
        fill="none"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* 건물 — 솔리드 채움 */}
      <g fill={color}>
        <polygon points="15,88 15,52 21,42 21,88" />
        <polygon points="23,88 23,40 29,28 29,88" />
        <polygon points="31,88 31,26 39,12 39,88" />
        <polygon points="41,88 41,44 47,34 47,88" />
      </g>

      {/* 건물 내부 디테일 라인 */}
      <g
        fill="none"
        stroke={color === "#ffffff" ? "#1c3177" : "#ffffff"}
        strokeWidth="0.7"
        opacity="0.2"
      >
        <line x1="18" y1="48" x2="18" y2="88" />
        <line x1="26" y1="34" x2="26" y2="88" />
        <line x1="34.5" y1="20" x2="34.5" y2="88" />
        <line x1="44" y1="40" x2="44" y2="88" />
      </g>

      {/* 궤도 링 — 앞쪽 (건물 앞) */}
      <path
        d="M 2 76 A 33 12 -18 0 0 64 56"
        fill="none"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
