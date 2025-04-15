import Image from 'next/image';
import Link from 'next/link';
import { FiUsers, FiBookOpen, FiCheckCircle, FiMessageSquare, FiTarget, FiActivity, FiBookmark, FiBarChart2, FiClipboard, FiClock, FiZap, FiDatabase, FiHeart, FiArrowRight, FiAward, FiFileText, FiLayout, FiCheck } from 'react-icons/fi';

export const metadata = {
  title: 'DEBUT 스터디 매니저 - 3중 관리 시스템의 핵심',
  description: 'DEBUT 영어학원의 3중 관리 시스템 - 스터디 매니저, 강사진, 온라인 AI가 함께 학생의 영어 실력을 체계적으로 관리합니다. 철저한 학습 관리와 정서적 소통으로 성공적인 영어 학습 경험을 제공합니다.',
  keywords: '스터디 매니저, 영어 학습 관리, 3중 관리 시스템, 맞춤형 영어 교육, 학습 관리 시스템, 영어 학습 코칭, 영어 공부 방법',
};

export default function StudyManager() {
  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              스터디 <span className="text-primary">매니저</span> 시스템
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              뛰어난 강사만으로는 부족합니다. <br />
              스터디 매니저, 강사, 온라인 AI의 3중 관리 시스템으로 학생의 성장을 책임집니다.
            </p>
          </div>
        </div>
      </section>

      {/* 3중 관리 시스템 인포그래픽 섹션 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">3중 관리 시스템</h2>
            <p className="text-lg text-center text-gray-600 mb-12">
              학생의 지속적인 성장을 위한 데뷰만의 특별한 학습 관리 시스템입니다.<br/>
              학부모와의 적극적인 협력을 통해 "같이 완성"하는 교육을 실현합니다.
            </p>
            
            <div className="relative">
              {/* 인포그래픽 */}
              <div className="relative bg-white rounded-2xl shadow-lg p-6 md:p-10">
                {/* 스터디 매니저 연결 통로 */}
                <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-200 hidden md:block"></div>
                
                <div className="flex flex-col md:flex-row items-center justify-between">
                  {/* 학생 섹션 - 왼쪽 배치 */}
                  <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
                    <div className="text-center">
                      <div className="w-48 h-48 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <FiUsers className="w-24 h-24 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">학생</h3>
                      <p className="text-gray-600 mt-2">
                        학습의 중심에서<br />각 단계별 성장을 이루어냅니다
                      </p>
                    </div>
                  </div>
                  
                  {/* 화살표와 관리 시스템 - 오른쪽 배치 */}
                  <div className="w-full md:w-2/3">
                    <div className="grid grid-cols-1 gap-8">
                      {/* 스터디 매니저 */}
                      <div className="flex items-center">
                        <div className="w-16 h-16 flex items-center justify-center mr-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                            <FiHeart className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        
                        <div className="w-12 flex-shrink-0 flex items-center justify-center">
                          <FiArrowRight className="w-10 h-10 text-teal-400" />
                        </div>
                        
                        <div className="flex-grow bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 shadow-xl border-l-4 border-teal-400">
                          <h3 className="text-xl font-bold text-teal-700 mb-2">스터디 매니저</h3>
                          <div className="flex flex-wrap">
                            <div className="w-full md:w-1/3 flex items-start mb-2 md:mb-0">
                              <FiCheckCircle className="w-5 h-5 text-teal-600 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-teal-800">과제 체크</span>
                            </div>
                            <div className="w-full md:w-1/3 flex items-start mb-2 md:mb-0">
                              <FiMessageSquare className="w-5 h-5 text-teal-600 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-teal-800">정서적 소통</span>
                            </div>
                            <div className="w-full md:w-1/3 flex items-start">
                              <FiTarget className="w-5 h-5 text-teal-600 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-teal-800">미션 피드백</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* 강사 */}
                      <div className="flex items-center">
                        <div className="w-16 h-16 flex items-center justify-center mr-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                            <FiZap className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        
                        <div className="w-12 flex-shrink-0 flex items-center justify-center">
                          <FiArrowRight className="w-10 h-10 text-purple-400" />
                        </div>
                        
                        <div className="flex-grow bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 shadow-xl border-l-4 border-purple-400">
                          <h3 className="text-xl font-bold text-purple-700 mb-2">강사</h3>
                          <div className="flex flex-wrap">
                            <div className="w-full md:w-1/3 flex items-start mb-2 md:mb-0">
                              <FiActivity className="w-5 h-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-purple-800">수업 운영</span>
                            </div>
                            <div className="w-full md:w-1/3 flex items-start mb-2 md:mb-0">
                              <FiBookmark className="w-5 h-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-purple-800">루틴 리드</span>
                            </div>
                            <div className="w-full md:w-1/3 flex items-start">
                              <FiClipboard className="w-5 h-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-purple-800">평가 관리</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* 온라인 AI */}
                      <div className="flex items-center">
                        <div className="w-16 h-16 flex items-center justify-center mr-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                            <FiDatabase className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        
                        <div className="w-12 flex-shrink-0 flex items-center justify-center">
                          <FiArrowRight className="w-10 h-10 text-amber-400" />
                        </div>
                        
                        <div className="flex-grow bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 shadow-xl border-l-4 border-amber-400">
                          <h3 className="text-xl font-bold text-amber-700 mb-2">온라인 AI</h3>
                          <div className="flex flex-wrap">
                            <div className="w-full md:w-1/3 flex items-start mb-2 md:mb-0">
                              <FiTarget className="w-5 h-5 text-amber-600 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-amber-800">진단</span>
                            </div>
                            <div className="w-full md:w-1/3 flex items-start mb-2 md:mb-0">
                              <FiBarChart2 className="w-5 h-5 text-amber-600 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-amber-800">학습 분석</span>
                            </div>
                            <div className="w-full md:w-1/3 flex items-start">
                              <FiBookmark className="w-5 h-5 text-amber-600 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-amber-800">복습 설계</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 상세 설명 섹션 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {/* 스터디 매니저 상세 설명 */}
              <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-teal-400">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full flex items-center justify-center mr-3">
                    <FiHeart className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-teal-700">스터디 매니저</h3>
                </div>
                
                <p className="text-gray-600 mb-6">
                  스터디 매니저는 학생과 가장 가까운 곳에서 일상적인 학습 관리와 정서적 지원을 담당합니다. 
                  매일 과제 완료 여부를 체크하고, 학생의 학습 상태와 감정 상태를 파악하여 적절한 피드백을 제공합니다.
                </p>
                
                <h4 className="font-bold text-teal-700 mb-2">주요 역할</h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <FiCheckCircle className="w-5 h-5 text-teal-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>일일 학습 과제 관리 및 체크</span>
                  </li>
                  <li className="flex items-start">
                    <FiMessageSquare className="w-5 h-5 text-teal-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>정서적 소통과 동기부여 제공</span>
                  </li>
                  <li className="flex items-start">
                    <FiTarget className="w-5 h-5 text-teal-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>개인별 미션 부여 및 피드백</span>
                  </li>
                  <li className="flex items-start">
                    <FiClock className="w-5 h-5 text-teal-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>학습 루틴 형성 도움</span>
                  </li>
                </ul>
              </div>
              
              {/* 강사 상세 설명 */}
              <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-purple-400">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center mr-3">
                    <FiZap className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-700">강사</h3>
                </div>
                
                <p className="text-gray-600 mb-6">
                  전문적인 영어 교육 지식을 바탕으로 체계적인 수업을 진행하고, 학생들의 영어 실력 향상을 위한 
                  맞춤형 교육 방법을 적용합니다. 정기적인 평가를 통해 학생의 성장을 확인합니다.
                </p>
                
                <h4 className="font-bold text-purple-700 mb-2">주요 역할</h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <FiActivity className="w-5 h-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>전문적인 영어 수업 진행</span>
                  </li>
                  <li className="flex items-start">
                    <FiBookmark className="w-5 h-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>학습 루틴 관리 및 지도</span>
                  </li>
                  <li className="flex items-start">
                    <FiClipboard className="w-5 h-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>정기 평가 및 피드백 제공</span>
                  </li>
                  <li className="flex items-start">
                    <FiBookOpen className="w-5 h-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>맞춤형 학습 방법 제안</span>
                  </li>
                </ul>
              </div>
              
              {/* 온라인 AI 상세 설명 */}
              <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-amber-400">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center mr-3">
                    <FiDatabase className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-700">온라인 AI</h3>
                </div>
                
                <p className="text-gray-600 mb-6">
                  최신 AI 기술을 활용하여 학생의 학습 패턴과 성취도를 정확하게 분석하고, 개인화된 학습 데이터를 
                  기반으로 최적의 학습 방법과 복습 계획을 제안합니다.
                </p>
                
                <h4 className="font-bold text-amber-700 mb-2">주요 역할</h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <FiTarget className="w-5 h-5 text-amber-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>영어 능력 정밀 진단 테스트</span>
                  </li>
                  <li className="flex items-start">
                    <FiBarChart2 className="w-5 h-5 text-amber-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>학습 데이터 기반 성취도 분석</span>
                  </li>
                  <li className="flex items-start">
                    <FiBookmark className="w-5 h-5 text-amber-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>개인 맞춤형 복습 일정 설계</span>
                  </li>
                  <li className="flex items-start">
                    <FiActivity className="w-5 h-5 text-amber-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>취약점 분석 및 보완 학습 제안</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* 프로세스 설명 */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-center mb-12">관리 프로세스</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h4 className="text-lg font-bold text-center mb-3">일일 관리</h4>
                  <p className="text-gray-600 text-center">
                    스터디 매니저가 매일 과제 완료 여부를 체크하고 정서적 소통을 통해 학습 동기를 유지합니다.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h4 className="text-lg font-bold text-center mb-3">주간 피드백</h4>
                  <p className="text-gray-600 text-center">
                    강사가 주간 학습 내용을 검토하고 개선점을 제시하여 학습 효율을 높입니다.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h4 className="text-lg font-bold text-center mb-3">수시 소통</h4>
                  <p className="text-gray-600 text-center">
                    필요에 따라 수시로 스터디 매니저와 카카오톡을 통해 학습 상황을 확인할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
            
            {/* 상담 유도 섹션 */}
            <div className="bg-gray-50 p-8 rounded-lg text-center mt-16">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">3중 관리 시스템 상담받기</h3>
              <p className="text-gray-600 mb-6">
                DEBUT의 스터디 매니저, 강사, 온라인 AI가 함께하는 3중 관리 시스템으로<br />
                자녀의 영어 학습을 체계적으로 관리해 드립니다. 지금 상담을 통해 자세히 알아보세요.
              </p>
              <Link 
                href="https://booking.naver.com/booking/13/bizes/1068331/items/5609916" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-dark transition-colors shadow-md"
              >
                맞춤형 테스트 예약하기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">데뷰의 3중 관리 시스템을 경험해보세요!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            학생, 학부모, 선생님이 함께하는 "같이 완성" 교육 철학으로<br/>
            영어 학습의 효과를 극대화하는 데뷰만의 관리 시스템을 경험해보세요.
          </p>
          <a
            href="https://booking.naver.com/booking/13/bizes/1068331/items/5609916"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors shadow-lg"
          >
            맞춤형 테스트 예약하기 <FiArrowRight className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
} 