import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // 응답 객체 생성
  const response = NextResponse.next()
  
  // CSP 헤더 설정
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' data: https://img.youtube.com;
    font-src 'self' https://fonts.gstatic.com;
    connect-src 'self' https://www.google-analytics.com;
    frame-src 'self' https://www.youtube.com;
  `.replace(/\s{2,}/g, ' ').trim()
  
  // 응답 헤더에 CSP 추가
  response.headers.set('Content-Security-Policy', cspHeader)
  
  // XSS 방지 헤더
  response.headers.set('X-XSS-Protection', '1; mode=block')
  
  // 클릭재킹 방지
  response.headers.set('X-Frame-Options', 'DENY')
  
  // MIME 스니핑 방지
  response.headers.set('X-Content-Type-Options', 'nosniff')
  
  // HSTS 설정
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  )
  
  // 리퍼러 정책
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  
  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 