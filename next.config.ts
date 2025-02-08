import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['i.annihil.us'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
