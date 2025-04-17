import React from 'react';
import Link from 'next/link';
import { FiArrowLeft, FiUser, FiClock, FiTarget, FiBookOpen, FiBarChart2, FiFlag } from 'react-icons/fi';

export default function ElementaryIntensive() {
  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-yellow-50 to-yellow-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/classes" className="inline-flex items-center text-amber-600 hover:underline mb-8">
              <FiArrowLeft className="mr-2" /> 모든 클래스 보기
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              초등 집중 <span className="text-amber-600">프로그램</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              명확한 목표와 집중적인 학습으로 단기간에 영어 실력 향상을 이루는 프로그램입니다.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-custom-soft flex items-center">
                <FiUser className="text-amber-600 mr-3 h-6 w-6" />
                <div>
                  <p className="text-sm text-gray-500">대상</p>
                  <p className="font-medium">초등학교 3~6학년</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-custom-soft flex items-center">
                <FiClock className="text-amber-600 mr-3 h-6 w-6" />
                <div>
                  <p className="text-sm text-gray-500">기간</p>
                  <p className="font-medium">1년 집중 과정</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-custom-soft flex items-center">
                <FiTarget className="text-amber-600 mr-3 h-6 w-6" />
                <div>
                  <p className="text-sm text-gray-500">목표</p>
                  <p className="font-medium">뉴스 청취 및 영어 토론</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://open.kakao.com/o/s19K0tKg" 
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center bg-[#FEE500] text-black px-6 py-3 rounded-md hover:bg-[#F6D000] transition-colors shadow-md"
            >
              <svg width="24" height="24" className="w-5 h-5 mr-2" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                <path d="M128 36C70.562 36 24 72.713 24 118.5c0 29.152 19.253 54.755 48.347 69.03-2.798 10.378-10.193 37.59-10.577 40.037-.487 3.12 1.24 3.095 2.612 2.254 1.062-.65 42.05-28.467 59.35-40.128 1.487.066 2.952.173 4.268.173 57.438 0 104-36.713 104-82.5S185.438 36 128 36z" fill="#371D1E"/>
              </svg>
              이 과정 상담받기
            </a>
          </div>
        </div>
      </section>
      
      {/* 초등부 로드맵 (새로 추가) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">초등부 로드맵</h2>
            <div className="bg-yellow-50 p-4 rounded-lg shadow-md mb-10">
              <h3 className="text-xl font-bold text-center mb-6">체계적인 학습과 심화 훈련으로 1년 안에 영어 고수가 됩니다.</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-yellow-100">
                      <th className="border border-gray-300 p-3 text-left">레벨</th>
                      <th className="border border-gray-300 p-3 text-center bg-yellow-300" colSpan={2}>DK, DK+</th>
                      <th className="border border-gray-300 p-3 text-center bg-yellow-200" colSpan={2}>D1, D1+</th>
                      <th className="border border-gray-300 p-3 text-center bg-amber-300" colSpan={2}>D2, D2+</th>
                      <th className="border border-gray-300 p-3 text-center bg-orange-300" colSpan={2}>D3, D3+</th>
                      <th className="border border-gray-300 p-3 text-center bg-orange-400" colSpan={2}>D4, D4+</th>
                      <th className="border border-gray-300 p-3 text-center bg-red-400" colSpan={2}>D5, D5+</th>
                      <th className="border border-gray-300 p-3 text-center bg-rose-500" colSpan={2}>D6, D6+</th>
                      <th className="border border-gray-300 p-3 text-center bg-amber-800" colSpan={2}>D7, D7+</th>
                      <th className="border border-gray-300 p-3 text-center bg-purple-600" colSpan={2}>D ELITE</th>
                      <th className="border border-gray-300 p-3 text-center bg-purple-700" colSpan={2}>D CREATOR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* 테이블 내용 추가 */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 프로그램 특징 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">프로그램 특징</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-yellow-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mb-4">
                  <FiBookOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">체계적인 커리큘럼</h3>
                <p className="text-gray-600">
                  읽기, 듣기, 말하기, 쓰기 능력을 균형있게 발전시키는 통합적 영어 교육을 제공합니다. 각 단계별 명확한 목표와 성취 기준을 통해 영어 실력이 체계적으로 향상됩니다.
                </p>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mb-4">
                  <FiBarChart2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">집중적인 학습 관리</h3>
                <p className="text-gray-600">
                  주 5회 수업과 체계적인 복습 시스템으로 학습 효과를 최대화합니다. 개인별 학습 데이터 분석을 통해 취약점을 보완하고 강점을 발전시키는 맞춤형 지도가 이루어집니다.
                </p>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mb-4">
                  <FiTarget className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">명확한 목표 설정</h3>
                <p className="text-gray-600">
                  1년 안에 영어 뉴스 청취와 다양한 주제에 대한 토론이 가능한 수준까지 도달하는 것을 목표로 합니다. 단계별 중간 목표 설정과 성취를 통해 학습 동기를 유지합니다.
                </p>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mb-4">
                  <FiFlag className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">실제 상황 활용 능력</h3>
                <p className="text-gray-600">
                  실생활 기반의 주제와 상황을 활용한 수업으로 실용적인 영어 능력을 기릅니다. 토론, 프레젠테이션, 에세이 작성 등 다양한 활동을 통해 종합적인 영어 활용 능력을 향상시킵니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 집중 학습 영역 */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">집중 학습 영역</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4">독해 및 어휘력</h3>
                <p className="text-gray-600">
                  폭넓은 주제의 텍스트를 이해하고 분석하는 능력을 키우며, 효과적인 단어 학습 전략을 통해 어휘력을 확장합니다.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">청취 및 발화 능력</h3>
                <p className="text-gray-600">
                  다양한 억양과 속도의 영어를 이해하고, 명확하고 자신감 있게 자신의 의견을 표현하는 능력을 기릅니다.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4">작문 및 문법</h3>
                <p className="text-gray-600">
                  체계적인 문장 구성과 논리적인 글쓰기 능력을 개발하며, 정확한 문법 사용으로 의사소통의 정확성을 높입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 1년 완성 프로그램 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">1년 완성 프로그램</h2>
            
            <div className="space-y-8">
              <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-amber-600">1~3개월: 기초 다지기</h3>
                <p className="text-gray-600 mb-4">
                  핵심 문법과 필수 어휘를 집중적으로 학습하여 영어 학습의 기초를 탄탄히 다집니다. 기본적인 일상 대화와 짧은 글 읽기, 듣기에 중점을 둡니다.
                </p>
                <div className="mt-4 bg-white p-3 rounded-md text-sm text-gray-700">
                  <strong className="text-amber-600">집중 활동:</strong> 기초 어휘 확장, 필수 문법 이해, 간단한 대화 연습
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-amber-600">4~6개월: 실력 확장하기</h3>
                <p className="text-gray-600 mb-4">
                  다양한 주제에 대한 독해력과 청취력을 향상시키고, 자신의 의견을 구체적으로 표현하는 능력을 개발합니다. 짧은 에세이 작성과 발표 연습을 시작합니다.
                </p>
                <div className="mt-4 bg-white p-3 rounded-md text-sm text-gray-700">
                  <strong className="text-amber-600">집중 활동:</strong> 주제별 독해, 다양한 형식의 청취 자료 활용, 구조화된 발표 연습
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-amber-600">7~9개월: 심화 학습</h3>
                <p className="text-gray-600 mb-4">
                  복잡한 주제에 대한 이해와 분석 능력을 기르고, 논리적인 에세이 작성과 토론 기술을 발전시킵니다. 뉴스 청취와 요약 능력을 향상시킵니다.
                </p>
                <div className="mt-4 bg-white p-3 rounded-md text-sm text-gray-700">
                  <strong className="text-amber-600">집중 활동:</strong> 분석적 독해, 뉴스 청취 및 요약, 토론 기술 개발
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-amber-600">10~12개월: 완성 및 활용</h3>
                <p className="text-gray-600 mb-4">
                  학습한 모든 영역을 통합하여 실제 상황에서 자유롭게 영어를 활용하는 능력을 완성합니다. 다양한 주제에 대한 토론과 프레젠테이션을 진행합니다.
                </p>
                <div className="mt-4 bg-white p-3 rounded-md text-sm text-gray-700">
                  <strong className="text-amber-600">집중 활동:</strong> 종합적 토론, 심층 주제 프레젠테이션, 논술형 에세이 작성
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 상담 유도 섹션 */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">초등 집중 프로그램 상담받기</h3>
              <p className="text-gray-600 mb-6">
                자녀의 영어 능력과 학습 스타일에 맞는 최적의 학습 방법을 추천해 드립니다.
                편안한 상담을 통해 궁금한 점을 모두 해결하세요.
              </p>
              <a 
                href="https://open.kakao.com/o/s19K0tKg" 
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center bg-[#FEE500] text-black px-6 py-3 rounded-md hover:bg-[#F6D000] transition-colors shadow-md"
              >
                <svg width="24" height="24" className="w-5 h-5 mr-2" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                  <path d="M128 36C70.562 36 24 72.713 24 118.5c0 29.152 19.253 54.755 48.347 69.03-2.798 10.378-10.193 37.59-10.577 40.037-.487 3.12 1.24 3.095 2.612 2.254 1.062-.65 42.05-28.467 59.35-40.128 1.487.066 2.952.173 4.268.173 57.438 0 104-36.713 104-82.5S185.438 36 128 36z" fill="#371D1E"/>
                </svg>
                이 과정 상담받기
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 