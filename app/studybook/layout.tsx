import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DEBUT 스터디북 - 학습 포트폴리오',
  description: '영어 학습 포트폴리오를 관리하고 Writing, 특목고 입시 준비, NIE 활동을 기록하는 스터디북',
  keywords: '영어학습, 포트폴리오, 특목고, 외고, NIE, TED, Writing, 중등영어, 내신대비, 수능대비',
};

export default function StudyBookLayout({
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