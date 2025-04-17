import Link from 'next/link';
import { FiArrowRight, FiCalendar, FiClock, FiUsers, FiChevronRight, FiBook, FiFileText, FiMapPin, FiFlag } from 'react-icons/fi';

export const metadata = {
  title: 'DEBUT 영어학원 클래스 - 초등/중등 맞춤 영어 프로그램',
  description: 'DEBUT 영어학원 맞춤형 영어 교육 클래스 - 목일중, 목동중, 문래중 내신 전문 및 초등/중등 수준별 맞춤 수업',
  keywords: '목일중, 목동중, 문래중, 내신 영어, 영어학원, 양천구 영어, 목동 영어, 초등 영어, 중등 영어, 수준별 수업',
};

export default function Classes() {
  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">
            맞춤형 <span className="text-gray-800">영어 교육 클래스</span>
          </h1>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            DEBUT은 학생들의 연령과 능력에 따라 세 가지 주요 클래스를 제공합니다. 모든 클래스는 3개월 단위로 
            구성되어 집중적이고 효과적인 학습을 보장합니다.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <Link href="/classes/elementary-regular" className="px-8 py-4 bg-amber-400 text-white rounded-full hover:bg-amber-500 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200">
              초등 정규
            </Link>
            <Link href="/classes/elementary-intensive" className="px-8 py-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200">
              초등 인텐시브
            </Link>
            <Link href="/classes/middle-school" className="px-8 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200">
              중등 정규
            </Link>
          </div>
        </div>
      </section>
      
      {/* 클래스 개요 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">맞춤형 영어 교육 클래스</h2>
            <p className="text-xl text-gray-600">
              DEBUT은 학생들의 연령과 능력에 따라 세 가지 주요 클래스를 제공합니다. 모든 클래스는 3개월 단위로 
              구성되어 집중적이고 효과적인 학습을 보장합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* 초등 정규 */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-t-4 border-amber-400">
              <div className="h-20 bg-amber-400 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">초등 정규</h3>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-amber-100 text-amber-700 text-sm font-semibold px-3 py-1 rounded-full">3개월 완성 프로그램</span>
                </div>
                <div className="space-y-5 mb-6">
                  <div className="flex items-start">
                    <FiUsers className="text-amber-400 mt-1 mr-3 flex-shrink-0 w-5 h-5" />
                    <div>
                      <p className="font-semibold">레벨</p>
                      <p className="text-gray-600">DK ~ D3 (초등 3~6학년 수준)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FiCalendar className="text-amber-500 mt-1 mr-3 flex-shrink-0 w-5 h-5" />
                    <div>
                      <p className="font-semibold">시간표</p>
                      <p className="text-gray-600">월수금: 2:30 / 4:10 / 6:00</p>
                      <p className="text-gray-600">화목: 3:00 / 6:00</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-8">
                  듣기, 말하기, 읽기, 쓰기의 4대 영역 학습과 함께 자기 표현력 강화에 중점을 둔 초등학생 맞춤형 영어 정규 과정입니다.
                </p>
                <Link 
                  href="/classes/elementary-regular" 
                  className="inline-flex items-center text-amber-500 font-semibold hover:underline"
                >
                  자세히 알아보기 <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
            
            {/* 초등 인텐시브 */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-t-4 border-orange-500">
              <div className="h-20 bg-orange-500 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">초등 인텐시브</h3>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-red-100 text-red-700 text-sm font-semibold px-3 py-1 rounded-full">3개월 집중 훈련 루틴</span>
                </div>
                <div className="space-y-5 mb-6">
                  <div className="flex items-start">
                    <FiUsers className="text-orange-500 mt-1 mr-3 flex-shrink-0 w-5 h-5" />
                    <div>
                      <p className="font-semibold">레벨</p>
                      <p className="text-gray-600">D3 ~ D5+ (초등 6학년, 빠른 학습자)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FiClock className="text-red-500 mt-1 mr-3 flex-shrink-0 w-5 h-5" />
                    <div>
                      <p className="font-semibold">집중 분야</p>
                      <p className="text-gray-600">말하기·쓰기 중심 + 과학/역사 콘텐츠 병행</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-8">
                  상위 레벨 학생들을 위한 심화 과정으로, 영어 말하기와 쓰기 능력을 집중적으로 향상시키며 과학, 역사 등 다양한 콘텐츠를 영어로 학습합니다.
                </p>
                <Link 
                  href="/classes/elementary-intensive" 
                  className="inline-flex items-center text-red-500 font-semibold hover:underline"
                >
                  자세히 알아보기 <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
            
            {/* 중등 정규 */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-t-4 border-blue-500">
              <div className="h-20 bg-blue-500 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">중등 정규</h3>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full">3개월 단위 수업 + 평가 루틴</span>
                </div>
                <div className="space-y-5 mb-6">
                  <div className="flex items-start">
                    <FiUsers className="text-blue-500 mt-1 mr-3 flex-shrink-0 w-5 h-5" />
                    <div>
                      <p className="font-semibold">레벨</p>
                      <p className="text-gray-600">INTER ~ MASTER (중1~중3)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FiCalendar className="text-blue-600 mt-1 mr-3 flex-shrink-0 w-5 h-5" />
                    <div>
                      <p className="font-semibold">시간표</p>
                      <p className="text-gray-600">화/금: 4:55 ~ 7:25 or 7:30 ~ 10:00</p>
                      <p className="text-gray-600">수요 개별 / 토요 Writing 클리닉</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-8">
                  중학생을 위한 정규 과정으로, 내신 대비와 실용영어 능력 향상을 동시에 추구하며 개별 피드백을 통한 맞춤형 학습을 제공합니다.
                </p>
                <Link 
                  href="/classes/middle-school" 
                  className="inline-flex items-center text-blue-600 font-semibold hover:underline"
                >
                  자세히 알아보기 <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 내신 프로그램 섹션 */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
              어려운 시험에서도 빛나는 <span className="text-blue-600">데뷰 내신</span>
            </h2>
            
            {/* 대상 학교 정보 */}
            <div className="bg-white p-6 rounded-xl shadow-lg mb-12 border-l-4 border-blue-600">
              <div className="flex items-center mb-4">
                <FiMapPin className="text-blue-600 h-6 w-6 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">내신 대상 학교</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <div className="flex items-center mb-3">
                    <FiFlag className="text-blue-600 mr-2" />
                    <h4 className="font-bold text-lg">목일중학교</h4>
                  </div>
                  <p className="text-gray-600 text-sm">목일중학교 교과서 기반 내신 완벽 대비</p>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-lg">
                  <div className="flex items-center mb-3">
                    <FiFlag className="text-blue-600 mr-2" />
                    <h4 className="font-bold text-lg">목동중학교</h4>
                  </div>
                  <p className="text-gray-600 text-sm">목동중학교 교과서 완벽 분석 및 내신 대비</p>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-lg">
                  <div className="flex items-center mb-3">
                    <FiFlag className="text-blue-600 mr-2" />
                    <h4 className="font-bold text-lg">문래중학교</h4>
                  </div>
                  <p className="text-gray-600 text-sm">문래중학교 특성화된 내신 집중 프로그램</p>
                </div>
              </div>
            </div>
            
            {/* 내신 프로그램 과정 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
              <div className="bg-blue-600 py-4 px-6">
                <h3 className="text-2xl font-bold text-white">내신 프로그램 과정</h3>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-4 px-4 bg-blue-100 font-bold text-center w-1/6">
                          내신<br/>준비
                        </td>
                        <td className="py-4 px-6">
                          <p className="font-semibold">내신 최상위 프로젝트 시작</p>
                          <p className="text-gray-600 text-sm">중/하위 오리엔테이션 시작으로 내신 프로젝트를 하위 베이스업, 한 달짜리 학습을 마무리하는 수업</p>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-4 px-4 bg-blue-100 font-bold text-center">
                          내신<br/>수업
                        </td>
                        <td className="py-4 px-6">
                          <p className="font-semibold">교과서 위주 프로젝트 자료</p>
                          <p className="text-gray-600 text-sm">중등 학교 내신 시험의 핵심인 교과서 본문/수행형 문제를 다년간 학습하여 학습 자료 디테일화</p>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-4 px-4 bg-blue-100 font-bold text-center">
                          학교<br/>프린트
                        </td>
                        <td className="py-4 px-6">
                          <p className="font-semibold">단답식/서술형/영작 프로젝트 자료 제작</p>
                          <p className="text-gray-600 text-sm">학교 선생님이 학생에게 나눠준 프린트를 다시 분석하여 학습 자료로 디테일화</p>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-4 px-4 bg-blue-100 font-bold text-center">
                          내신<br/>수행
                        </td>
                        <td className="py-4 px-6">
                          <p className="font-semibold">중/하위 챌린지 테스트 실시 (영작 자가 텍킹)</p>
                          <p className="text-gray-600 text-sm">개별 오답을 파악 및 추가 피드백</p>
                          <p className="text-gray-600 text-sm">개별 학습을 파악 및 추가 피드백</p>
                          <p className="text-gray-600 text-sm">(15회차 이상 시행, 정확도 20% 이상)</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 bg-blue-100 font-bold text-center">
                          직전<br/>보강
                        </td>
                        <td className="py-4 px-6">
                          <p className="font-semibold">개별 학습클리닉 학반 후가 똑같이</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 bg-green-100 font-bold text-center">
                          시험 후
                        </td>
                        <td className="py-4 px-6">
                          <p className="font-semibold">내신 시험에 대한 디테일 분석 실시 (학생성적 파악)</p>
                          <p className="text-gray-600 text-sm">지문을 기반으로 다음 시험 대비 학습 전략 수립</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            {/* 내신 프로그램 특징 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-start mb-6">
                  <div className="bg-blue-100 rounded-full p-3 mt-1 mr-4">
                    <FiBook className="text-blue-600 h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-4">교과서 핵심 내용 완벽 분석</h4>
                    <p className="text-gray-600">중등 각 학교의 교과서와 교사용 프린트 자료를 철저히 분석하여 최적화된 내신 대비 자료를 제공합니다.</p>
                  </div>
                </div>
                <ul className="ml-16 space-y-3">
                  <li className="flex items-start">
                    <FiChevronRight className="text-blue-600 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">교과서와 일치하는 학습 프린트 제작</span>
                  </li>
                  <li className="flex items-start">
                    <FiChevronRight className="text-blue-600 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">학교별 특성에 맞춘 맞춤형 내신 대비</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-start mb-6">
                  <div className="bg-blue-100 rounded-full p-3 mt-1 mr-4">
                    <FiFileText className="text-blue-600 h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-4">단계적 내신 완성 시스템</h4>
                    <p className="text-gray-600">중하위권 학생도 상위권으로 끌어올리는 체계적인 내신 준비 프로그램을 운영합니다.</p>
                  </div>
                </div>
                <ul className="ml-16 space-y-3">
                  <li className="flex items-start">
                    <FiChevronRight className="text-blue-600 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">월평균 1,000~1,500 문제 풀이</span>
                  </li>
                  <li className="flex items-start">
                    <FiChevronRight className="text-blue-600 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">개별 오답을 파악 및 추가 피드백</span>
                  </li>
                  <li className="flex items-start">
                    <FiChevronRight className="text-blue-600 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">시험 후 철저한 분석과 향후 전략 수립</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 상담 유도 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">나에게 맞는 클래스는?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            학생의 수준과 목표에 맞는 최적의 클래스 선택을 위해 전문 상담을 제공해 드립니다.
            3개월 완성 프로그램으로 빠르고 효과적인 영어 실력 향상을 경험하세요.
          </p>
          <a 
            href="https://pf.kakao.com/_pGxkPn/chat" 
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center bg-yellow-400 text-slate-900 px-8 py-4 rounded-full hover:bg-yellow-500 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
          >
            <span className="mr-2">카카오톡으로 상담받기</span>
            <svg width="24" height="24" className="w-5 h-5" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
              <path d="M128 36C70.562 36 24 72.713 24 118.5c0 29.152 19.253 54.755 48.347 69.03-2.798 10.378-10.193 37.59-10.577 40.037-.487 3.12 1.24 3.095 2.612 2.254 1.062-.65 42.05-28.467 59.35-40.128 1.487.066 2.952.173 4.268.173 57.438 0 104-36.713 104-82.5S185.438 36 128 36z" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
} 