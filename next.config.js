/** @type {import('next').NextConfig} */

const nextConfig = {
  /* config options here */
  images: {
    domains: ['img.youtube.com'],
    // 이미지 최적화 설정
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    unoptimized: true, // 로컬 이미지 최적화 비활성화
  },
  // OpenSSL 문제를 해결하기 위한 웹팩 설정
  webpack: (config, { isServer, dev }) => {
    // OpenSSL 이슈를 해결하기 위한 fallback 추가
    config.resolve.fallback = {
      ...config.resolve.fallback,
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
    };

    return config;
  }
};

module.exports = nextConfig; 