import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 상위 폴더에 다른 lockfile이 있어 워크스페이스 루트를 잘못 잡는 경고 방지
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
