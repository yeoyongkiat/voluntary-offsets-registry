import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
    ],
  },
  eslint: {
    // Skip ESLint errors during production build so we can deploy quickly.
    ignoreDuringBuilds: true,
  },
  output: "standalone",
};

export default nextConfig;
