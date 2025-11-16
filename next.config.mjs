import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Enable static export for Cloudflare Pages
  output: 'standalone',
  trailingSlash: true,
  // Optimize for Cloudflare Pages deployment
  images: {
    unoptimized: true,
  },
  // Prevent SSR issues with Three.js
  experimental: {
    esmExternals: false,
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ['raw-loader'],
    });

    return config;
  },
};

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

export default nextConfig;
