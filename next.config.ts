import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  /** Static export: kein serverseitiges WebP; `sizes`+`loading` in Komponenten helfen trotzdem beim Layout/LCP */
  images: { unoptimized: true },
};

export default nextConfig;
