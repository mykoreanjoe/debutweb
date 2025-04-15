import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DEBUT IN - 데뷰영어학원 소개',
  description: '데뷰영어학원의 혁신적인 영어 교육 방법과 학습 시설을 소개합니다. 체계적인 커리큘럼과 전문 교사진으로 최고의 영어 교육 경험을 제공합니다.',
  keywords: '영어학원, 데뷰영어, 영어교육, 영어과정, 영어학습시설, 영어커리큘럼, 영어교사, 영어프로그램',
};

export default function DebutInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
} 