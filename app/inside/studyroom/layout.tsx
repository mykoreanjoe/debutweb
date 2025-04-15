import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DEBUT 문법 스터디룸 - 체계적인 영어 문법 학습',
  description: '데뷰영어학원의 체계적인 문법 학습 자료를 이용해 영어 문법 실력을 향상시키세요. 초급, 중급, 고급 레벨별로 제공되는 문법 강의와 학습 자료를 확인하세요.',
  keywords: '영어문법, 문법학습, 영어공부, 스터디룸, 영문법, 레벨별 문법, 문법 강의, 온라인 영어학습',
};

export default function StudyRoomLayout({
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