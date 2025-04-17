import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight, FiBookOpen, FiMessageSquare, FiTarget, FiEdit, FiBook, FiMic } from 'react-icons/fi';

export const metadata = {
  title: '데뷰인 | DEBUT',
  description: '데뷰 학습 비전으로 한걸음씩 걸어간 학생들의 이야기를 만나보세요.',
  keywords: '데뷰인, 영어 학습 성공사례, 영어 성적 향상, 학생 후기, 영어 학습 경험',
};

const DebutinPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">데뷰인</h1>
        <p className="text-lg mb-10 max-w-2xl mx-auto text-center">
          데뷰인들은 데뷰 학습 비전으로 한걸음씩 걸어간 학생들을 일컫습니다.
          각자의 목표를 향해 꾸준히 노력하며 성장하는 우리 학생들의 이야기를 소개합니다.
        </p>
        
        {/* 데뷰 챔피언 섹션 */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">데뷰 챔피언</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 챔피언 카드들은 추후 데이터를 기반으로 구성 */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default DebutinPage; 