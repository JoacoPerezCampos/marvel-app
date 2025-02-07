import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['i.annihil.us'],
  },
  typescript:{
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
