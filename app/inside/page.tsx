import Link from 'next/link';
import { FiBookOpen, FiArrowRight, FiLock, FiKey, FiMonitor, FiBox, FiBookmark, FiBook, FiCalendar } from 'react-icons/fi';
import Image from 'next/image';

export const metadata = {
  title: '학습관 | DEBUT 영어학원',
  description: '학생들의 개별화 학습과 다양한 컨텐츠를 학습할 수 있는 프리미엄 프라이빗 공간입니다. 데뷰 영어학원 재원생들만을 위한 특별한 학습 공간을 소개합니다.',
  keywords: '영어 학습관, 개별화 학습, 프리미엄 학습, 맞춤형 교육, 영어 학습 공간, 프라이빗 학습, 데뷰 영어학원, 목동 영어학원, 재원생 전용',
};

const InsidePage = () => {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-b from-purple-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-6">데뷰 인사이드</h1>
          <p className="text-lg text-purple-600 mb-12 max-w-2xl mx-auto">
            데뷰 학습 시스템의 핵심 요소들을 경험해보세요. 효과적인 학습을 위한 모든 것이 준비되어 있습니다.
          </p>
        </div>
      </section>
      
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-800 mb-6">데뷰만의 특별한 학습 시스템</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-purple-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4 mx-auto">
              <FiBook className="text-2xl text-purple-700" />
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-4 text-center">재원생 전용 공간</h3>
            <p className="text-gray-600">
              데뷰 영어학원 재원생들만 이용할 수 있는 특별한 프라이빗 공간입니다.
            </p>
          </div>
          <div className="bg-purple-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4 mx-auto">
              <FiKey className="text-2xl text-purple-700" />
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-4 text-center">개인별 맞춤 학습</h3>
            <p className="text-gray-600">
              각 학생의 수준과 목표에 맞춘 개별화된 학습 컨텐츠를 제공합니다.
            </p>
          </div>
          <div className="bg-purple-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4 mx-auto">
              <FiMonitor className="text-2xl text-purple-700" />
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-4 text-center">프리미엄 학습 자료</h3>
            <p className="text-gray-600">
              고품질의 학습 자료와 컨텐츠를 통해 효과적인 영어 학습이 가능합니다.
            </p>
          </div>
        </div>
      </section>
      
      {/* 학습관 내 공간 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-10">학습관 내 공간</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/inside/studyroom" className="block">
            <div className="bg-purple-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
              <div className="relative h-48 bg-gradient-to-r from-purple-100 to-purple-50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FiBookOpen className="w-16 h-16 text-purple-700 opacity-30" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FiBookmark className="text-purple-700 mr-2" />
                  <h3 className="text-xl font-bold">문법 스터디룸</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  영어 문법의 기초부터 고급까지, 체계적인 문법 학습을 위한 공간입니다. 
                  레벨별 문법 개념 정리와 영상 강의를 통해 효과적으로 학습할 수 있습니다.
                </p>
                <div className="flex justify-end">
                  <div className="inline-flex items-center text-purple-700 font-medium">
                    스터디룸 입장하기 <FiArrowRight className="ml-2" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
          
          <div className="bg-purple-50 rounded-lg shadow-lg overflow-hidden h-full">
            <div className="relative h-48 bg-gradient-to-r from-purple-100 to-purple-50">
              <div className="absolute inset-0 flex items-center justify-center">
                <FiBox className="w-16 h-16 text-purple-700 opacity-30" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <FiLock className="text-purple-700 mr-2" />
                <h3 className="text-xl font-bold">리스닝 스터디룸</h3>
              </div>
              <p className="text-gray-600 mb-4">
                영어 듣기 실력 향상을 위한 전용 공간입니다. 
                다양한 상황별, 주제별 듣기 자료와 연습 문제를 통해 듣기 실력을 효과적으로 키울 수 있습니다.
              </p>
              <div className="flex justify-end">
                <div className="inline-flex items-center text-gray-400">
                  준비 중입니다 <span className="ml-2 text-xs bg-gray-200 px-2 py-1 rounded">COMING SOON</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 접근 안내 */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-purple-700 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">학습관 이용 안내</h2>
            <p className="mb-6">
              데뷰 학습관은 데뷰 영어학원 재원생만 이용 가능한 공간입니다.<br />
              선생님으로부터 받은 비밀번호를 입력하여 접속할 수 있습니다.
            </p>
            <Link 
              href="/inside/studyroom" 
              className="bg-white text-purple-700 px-6 py-3 rounded-lg font-medium inline-flex items-center hover:bg-purple-50 transition-colors"
            >
              <FiKey className="mr-2" /> 학습관 입장하기
            </Link>
          </div>
          
          <div className="bg-purple-700 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">학습 상담 예약</h2>
            <p className="mb-6">
              데뷰의 독자적인 학습 시스템에 대해 더 알고 싶으신가요? 1:1 맞춤 상담을 통해 자세히 안내해 드립니다.
            </p>
            <Link href="/contact" className="bg-white text-purple-700 px-6 py-3 rounded-lg font-medium inline-flex items-center hover:bg-purple-50 transition-colors">
              <FiCalendar className="mr-2" /> 상담 예약하기
            </Link>
          </div>
        </div>
      </section>
      
      {/* 카카오톡 상담 */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://pf.kakao.com/_pGxkPn/chat"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-yellow-400 hover:bg-yellow-500 text-black w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
          aria-label="KakaoTalk 상담"
        >
          <svg width="28" height="28" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <path d="M128 36C70.562 36 24 72.713 24 118C24 147.67 43.383 173.433 71.563 186.27L66.601 219.371C66.253 221.403 67.545 223.403 69.577 223.751C70.686 223.917 71.795 223.585 72.61 222.892L112.99 193.163C117.892 193.72 122.901 194 128 194C185.438 194 232 157.287 232 118C232 72.713 185.438 36 128 36Z" fill="#000000"/>
          </svg>
        </a>
      </div>
    </main>
  );
};

export default InsidePage; 