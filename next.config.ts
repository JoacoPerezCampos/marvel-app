import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['i.annihil.us'],
  },
  typescript:{
    ignoreBuildErrors: true,
  },
  eslint:{
    ignoreDuringBuilds:true,
  }
};

export default nextConfig;
