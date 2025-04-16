import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiBarChart2, FiUsers, FiBookOpen, FiTarget, FiHeart, FiDatabase, FiZap, FiBook, FiMessageSquare, FiMic, FiEdit } from "react-icons/fi";

export const metadata = {
  title: '목동데뷰영어 - 목동 양천구 영어학원 | 맞춤형 영어 교육',
  description: '목동데뷰영어학원은 학생, 학부모, 교사가 함께 영어 능력을 완성해나가는 맞춤형 영어교육을 제공합니다. 개인별 맞춤 학습 루틴과 AI 기반 학습 관리로 효과적인 영어 실력 향상을 경험하세요.',
  keywords: '목동 영어학원, 양천구 영어학원, 초등 영어, 중등 영어, 맞춤형 영어교육, 스터디 매니저, 영어 내신, 목동 영어, 데뷰 영어학원',
  alternates: {
    canonical: 'https://debutedu.com',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 - 파란색 배경 */}
      <section className="bg-gradient-to-br from-[#13588f] to-[#1e6cb0] text-white py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-tight">
              같이 완성, <span className="text-yellow-300">Let's Do It</span> ✨
            </h1>
            <p className="text-lg md:text-xl mb-10 leading-relaxed text-blue-100">
              초등 1학년부터 중3까지, DEBUT에서 함께 영어 실력을 완성하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link 
                href="/classes" 
                className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-red-700 transition-colors inline-flex items-center justify-center"
              >
                클래스 예약 <FiArrowRight className="ml-2" />
              </Link>
              <Link 
                href="/about" 
                className="bg-white text-[#13588f] border border-white px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-blue-50 transition-colors"
              >
                학원 소개 보기
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* 학원 소개 섹션 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">DEBUT 영어학원 소개</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            <span className="text-[#13588f] font-semibold">같이 완성</span>하는 영어 능력, 학생과 교사와 학부모가 함께하는 성장 여정
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-smooth p-6">
              <div className="text-4xl text-[#13588f] mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">데이터 기반 학습 설계</h3>
              <p className="text-gray-600">
                5,000명 이상의 학습 데이터를 기반으로 최적의 학습 루틴을 설계합니다.
              </p>
            </div>
            <div className="card-smooth p-6">
              <div className="text-4xl text-[#13588f] mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-3">AI 연계 학습 관리</h3>
              <p className="text-gray-600">
                온라인 AI 학습 시스템과 오프라인 수업의 연계로 효과적인 학습 관리가 가능합니다.
              </p>
            </div>
            <div className="card-smooth p-6">
              <div className="text-4xl text-[#13588f] mb-4">👩‍🏫</div>
              <h3 className="text-xl font-semibold mb-3">스터디 매니저 시스템</h3>
              <p className="text-gray-600">
                학습 체크와 정서적 연결, 상담을 담당하는 스터디 매니저가 밀착 관리합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 데뷰 특징적 요소 */}
      <section className="py-20 bg-[#f5f5f7]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">DEBUT의 핵심 특징</h2>
          <p className="text-lg text-center text-gray-600 mb-10 max-w-3xl mx-auto">
            <span className="text-[#13588f] font-semibold">같이 완성</span>의 철학으로 학생의 잠재력을 최대한 끌어내는 교육 방식
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
            {/* 3중 관리 시스템 */}
            <div className="card-smooth bg-white p-8 fade-in-up delay-100">
              <div className="flex items-center mb-5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#13588f] to-[#336a9e] flex items-center justify-center text-white mr-4">
                  <FiUsers className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">3중 관리 시스템</h3>
              </div>
              <p className="text-gray-700 mb-5">
                스터디 매니저, 강사, 온라인 AI 시스템의 유기적인 협력으로 학생의 진도와 성취를 완벽하게 관리합니다.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
                  <FiHeart className="text-teal-600 mr-1" />
                  <span className="text-sm">정서적 소통</span>
                </div>
                <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
                  <FiZap className="text-purple-600 mr-1" />
                  <span className="text-sm">전문적 지도</span>
                </div>
                <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
                  <FiDatabase className="text-amber-600 mr-1" />
                  <span className="text-sm">AI 분석</span>
                </div>
              </div>
              <Link href="/study-manager" className="text-[#13588f] font-semibold inline-flex items-center hover:underline">
                더 알아보기 <FiArrowRight className="ml-1" />
              </Link>
            </div>
            
            {/* DEBUT 학습 과정 시각화 개선 */}
            <div className="card-smooth bg-white p-8 fade-in-up delay-200">
              <div className="flex items-center mb-5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#f44336] to-orange-400 flex items-center justify-center text-white mr-4">
                  <FiTarget className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">DEBUT 학습 과정</h3>
              </div>
              <p className="text-gray-700 mb-5">
                DEBUT 영어 학습법의 핵심은 단계별 성장 과정: D(Discover), E(Engage), B(Boost), U(Unfold), T(Train)
              </p>
              <div className="relative h-24 mb-5">
                {/* 연결선 */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#13588f] via-[#f44336] to-[#13588f] transform -translate-y-1/2"></div>
                
                {/* 각 단계 원형 아이콘 */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-[#13588f] rounded-full flex items-center justify-center text-white font-bold text-xl z-10">D</div>
                <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">E</div>
                <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-14 h-14 bg-[#f44336] rounded-full flex items-center justify-center text-white font-bold text-xl z-10">B</div>
                <div className="absolute left-3/4 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">U</div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-[#13588f] rounded-full flex items-center justify-center text-white font-bold text-xl z-10">T</div>
              </div>
              
              <div className="grid grid-cols-5 gap-1 text-center text-xs">
                <div>발견</div>
                <div>참여</div>
                <div>강화</div>
                <div>발전</div>
                <div>훈련</div>
              </div>
              
              <div className="mt-5">
                <Link href="/learning-process" className="text-[#f44336] font-semibold inline-flex items-center hover:underline">
                  학습 과정 살펴보기 <FiArrowRight className="ml-1" />
                </Link>
              </div>
            </div>
            
            {/* 맞춤형 클래스 */}
            <div className="card-smooth bg-white p-8 fade-in-up delay-300">
              <div className="flex items-center mb-5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white mr-4">
                  <FiBookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">맞춤형 클래스</h3>
              </div>
              <p className="text-gray-700 mb-5">
                학년과 수준에 맞는 세분화된 클래스로 최적의 학습 환경을 제공합니다.
              </p>
              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="bg-[rgba(19,88,143,0.1)] p-3 rounded-lg text-center">
                  <h4 className="font-semibold text-[#13588f]">초등 정규</h4>
                  <p className="text-xs text-gray-600">DK~D3 레벨</p>
                </div>
                <div className="bg-[rgba(244,67,54,0.1)] p-3 rounded-lg text-center">
                  <h4 className="font-semibold text-[#f44336]">초등 인텐시브</h4>
                  <p className="text-xs text-gray-600">D3~D5+ 레벨</p>
                </div>
                <div className="bg-[rgba(127,166,195,0.1)] p-3 rounded-lg text-center">
                  <h4 className="font-semibold text-[#7fa6c3]">중등 정규</h4>
                  <p className="text-xs text-gray-600">INTER~MASTER</p>
                </div>
              </div>
              <Link href="/classes" className="text-blue-600 font-semibold inline-flex items-center hover:underline">
                클래스 알아보기 <FiArrowRight className="ml-1" />
              </Link>
            </div>
            
            {/* 온라인 AI 학습 */}
            <div className="card-smooth bg-white p-8 fade-in-up delay-400">
              <div className="flex items-center mb-5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-green-700 flex items-center justify-center text-white mr-4">
                  <FiBarChart2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">온라인 AI 학습</h3>
              </div>
              <p className="text-gray-700 mb-5">
                인공지능 기반의 맞춤형 학습 분석과 개인화된 학습 관리 시스템으로 효율적인 영어 학습을 지원합니다.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-green-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-1">AI 분석</h4>
                  <p className="text-xs text-gray-600">개인별 취약점 진단 및 분석</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-blue-700 mb-1">학습량 추적</h4>
                  <p className="text-xs text-gray-600">영역별 학습량 시각화</p>
                </div>
              </div>
              <Link href="/online-ai" className="text-green-600 font-semibold inline-flex items-center hover:underline">
                AI 학습 알아보기 <FiArrowRight className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* 함께 완성하는 학습 시각화 섹션 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-6">함께 완성하는 영어 학습</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            각자의 조각이 모여 완벽한 영어 실력을 완성합니다
          </p>
          
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#13588f] transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {/* 학생 */}
              <div className="md:flex items-center fade-in-up delay-100">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 md:text-right">
                  <div className="bg-white p-6 rounded-lg shadow-sm md:ml-auto md:mr-0 max-w-md">
                    <h3 className="text-xl font-semibold mb-3 text-[#13588f]">학생</h3>
                    <p className="text-gray-600">자신만의 학습 루틴으로 매일 꾸준히 성장하는 영어 실력</p>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block">
                  <div className="bg-[rgba(19,88,143,0.1)] h-32 rounded-lg max-w-md flex items-center justify-center">
                    <span className="text-4xl">👨‍🎓</span>
                  </div>
                </div>
              </div>
              
              {/* 선생님 */}
              <div className="md:flex items-center fade-in-up delay-200">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 hidden md:block">
                  <div className="bg-[rgba(19,88,143,0.1)] h-32 rounded-lg max-w-md md:ml-auto md:mr-0 flex items-center justify-center">
                    <span className="text-4xl">👩‍🏫</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white p-6 rounded-lg shadow-sm max-w-md">
                    <h3 className="text-xl font-semibold mb-3 text-[#13588f]">선생님</h3>
                    <p className="text-gray-600">전문적인 지도와 피드백으로 학생의 영어 실력 향상을 도움</p>
                  </div>
                </div>
              </div>
              
              {/* 학부모 */}
              <div className="md:flex items-center fade-in-up delay-300">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 md:text-right">
                  <div className="bg-white p-6 rounded-lg shadow-sm md:ml-auto md:mr-0 max-w-md">
                    <h3 className="text-xl font-semibold mb-3 text-[#13588f]">학부모</h3>
                    <p className="text-gray-600">꾸준한 관심과 격려로 학생의 성장 여정을 지지</p>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block">
                  <div className="bg-[rgba(19,88,143,0.1)] h-32 rounded-lg max-w-md flex items-center justify-center">
                    <span className="text-4xl">👨‍👩‍👧</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA 섹션 */}
      <section className="bg-gradient-to-r from-[#13588f] to-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">DEBUT와 함께 영어 실력을 완성하세요!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            이제 데뷰의 체계적인 학습 방법으로 영어 실력을 완성할 차례입니다.<br />
            진단 테스트를 통해 개인 맞춤형 학습 계획을 받아보세요.
          </p>
          <a 
            href="https://booking.naver.com/booking/13/bizes/1068331/items/5609916"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg transition-colors font-semibold text-lg hover:bg-red-700 shadow-lg"
          >
            맞춤형 진단 테스트 예약하기 <FiArrowRight className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
}
