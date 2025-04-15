import { MetadataRoute } from 'next';

// 정적 내보내기를 위한 설정
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://debutweb.vercel.app/sitemap.xml',
  };
} 