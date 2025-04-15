import Link from 'next/link';
import { FiCalendar, FiBookOpen, FiArrowRight } from 'react-icons/fi';

export const metadata = {
  title: '데뷰 인사이드 - 학원 스케줄과 온라인 학습을 한눈에',
  description: '데뷰 영어학원의 인사이드 페이지 - 학원 스케줄과 온라인 학습을 한눈에 볼 수 있는 공간입니다.',
  keywords: '데뷰 인사이드, 학원 스케줄, 온라인 학습, 학습 관리, 데뷰 캘린더, 데뷰 스터디관',
};

export default function InsidePage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in-up">
            <span className="text-[#13588f]">데뷰 인사이드</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            학원 스케줄과 온라인 학습을 한눈에 볼 수 있는 공간
          </p>
        </div>
      </section>

      {/* 섹션 안내 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 데뷰 캘린더 카드 */}
              <Link href="/inside/calendar" className="group">
                <div className="bg-white rounded-xl shadow-lg p-8 h-full hover:shadow-xl transition-shadow duration-300 border border-gray-100 relative overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <div className="absolute right-0 top-0 w-28 h-28 bg-blue-50 rounded-bl-full -mr-8 -mt-8 flex items-end justify-start pb-4 pl-4">
                    <FiCalendar className="text-4xl text-[#13588f]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">데뷰 캘린더</h3>
                  <p className="text-gray-600 mb-6">
                    학원의 주요 일정과 이벤트를 확인하고 계획을 세우세요.
                  </p>
                  <div className="flex items-center text-[#13588f] font-medium group-hover:translate-x-2 transition-transform duration-300">
                    자세히 보기 <FiArrowRight className="ml-2" />
                  </div>
                </div>
              </Link>

              {/* 데뷰 스터디관 카드 */}
              <Link href="/inside/studyroom" className="group">
                <div className="bg-white rounded-xl shadow-lg p-8 h-full hover:shadow-xl transition-shadow duration-300 border border-gray-100 relative overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <div className="absolute right-0 top-0 w-28 h-28 bg-purple-50 rounded-bl-full -mr-8 -mt-8 flex items-end justify-start pb-4 pl-4">
                    <FiBookOpen className="text-4xl text-[#7950f2]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">데뷰 스터디관</h3>
                  <p className="text-gray-600 mb-6">
                    학생들을 위한 커리큘럼별 학습 자료를 확인하고 학습하세요.
                  </p>
                  <div className="flex items-center text-[#7950f2] font-medium group-hover:translate-x-2 transition-transform duration-300">
                    자세히 보기 <FiArrowRight className="ml-2" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 안내 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">데뷰 인사이드 이용 안내</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                <span className="font-semibold text-[#13588f]">데뷰 캘린더</span>는 학원의 주요 일정과 이벤트를 확인할 수 있는 공간입니다.
                정기 테스트, 학부모 상담, 특별 이벤트 등 데뷰 영어학원의 모든 일정을 한눈에 확인하세요.
              </p>
              <p>
                <span className="font-semibold text-[#7950f2]">데뷰 스터디관</span>은 학생들을 위한 학습 자료 아카이브입니다.
                레벨별, 영역별로 분류된 학습 자료를 통해 자기주도학습을 강화할 수 있습니다.
                *스터디관 접속을 위해서는 비밀번호가 필요합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 카카오톡 버튼 - 모든 페이지에 표시 */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://open.kakao.com/o/s19K0tKg"
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
    </div>
  );
} 