import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16부터 quality 값은 allowlist에 있어야 적용됨 (기본 [75])
    qualities: [75, 90],
  },
};

export default nextConfig;
