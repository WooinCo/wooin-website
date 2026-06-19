"use client";

import { track } from "@vercel/analytics";

/**
 * 클릭 추적용 링크.
 * 클릭 시 Vercel Analytics에 커스텀 이벤트를 보낸다.
 * (어떤 링크가 몇 번 눌렸는지 대시보드 Events에서 확인 가능)
 */
export default function OutboundLink({
  event,
  children,
  ...props
}: {
  event: string;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a {...props} onClick={() => track(event)}>
      {children}
    </a>
  );
}
