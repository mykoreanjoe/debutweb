import Link from 'next/link';
import { FiCalendar, FiBookOpen, FiArrowRight } from 'react-icons/fi';

export const metadata = {
  title: '학습관 | DEBUT',
  description: '개별화 학습과 다양한 컨텐츠를 학습할 수 있는 프리미엄 프라이빗 공간입니다.',
  keywords: '영어 학습관, 개별화 학습, 프리미엄 학습, 맞춤형 교육, 영어 학습 공간',
};

const InsidePage = () => {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">학습관</h1>
        <p className="text-lg mb-10 max-w-2xl mx-auto text-center">
          학생들의 개별화 학습과 다양한 컨텐츠를 학습할 수 있는 프리미엄, 프라이빗한 재원생들의 공간입니다.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <Link href="/inside/studyroom" className="block">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold mb-4">스터디룸</h2>
              <p className="text-gray-600">
                개인별 맞춤 학습과 자기주도 학습을 위한 최적의 공간입니다.
                다양한 학습 자료와 컨텐츠를 활용하여 효과적인 학습이 가능합니다.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default InsidePage; 