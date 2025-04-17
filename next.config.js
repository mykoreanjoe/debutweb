/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: {
    // ESLint 에러로 인한 빌드 실패를 방지합니다
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  images: {
    // 이미지 최적화 설정
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    unoptimized: true, // 로컬 이미지 최적화 비활성화
    domains: ['img.youtube.com', 'i.ytimg.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/vi/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
        pathname: '/vi/**',
      },
    ],
  },
  // 성능 최적화
  poweredByHeader: false, // X-Powered-By 헤더 제거
  reactStrictMode: true, // React 엄격 모드 활성화
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // 프로덕션 환경에서 console.log 제거
  },
};

module.exports = nextConfig; 