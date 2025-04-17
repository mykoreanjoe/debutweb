import Link from 'next/link';
import { FiArrowLeft, FiClock, FiCalendar, FiAward, FiUsers, FiUser, FiTarget, FiBook, FiFileText, FiBarChart2 } from 'react-icons/fi';

export default function MiddleSchool() {
  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/classes" className="inline-flex items-center text-blue-600 hover:underline mb-8">
              <FiArrowLeft className="mr-2" /> 모든 클래스 보기
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              중등 정규 <span className="text-blue-600">프로그램</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              중학교 내신과 실용영어를 동시에 향상시키는 체계적인 학습 프로그램입니다.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-custom-soft flex items-center">
                <FiUser className="text-blue-600 mr-3 h-6 w-6" />
                <div>
                  <p className="text-sm text-gray-500">대상</p>
                  <p className="font-medium">중학교 1~3학년</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-custom-soft flex items-center">
                <FiClock className="text-blue-600 mr-3 h-6 w-6" />
                <div>
                  <p className="text-sm text-gray-500">기간</p>
                  <p className="font-medium">3개월 단위 수업 + 평가 루틴</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-custom-soft flex items-center">
                <FiTarget className="text-blue-600 mr-3 h-6 w-6" />
                <div>
                  <p className="text-sm text-gray-500">목표</p>
                  <p className="font-medium">내신 완벽 대비 + 실용영어 향상</p>
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
      
      {/* 중등부 로드맵 (새로 추가) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">중등부 로드맵</h2>
            <div className="bg-blue-50 p-4 rounded-lg shadow-md mb-10">
              <h3 className="text-xl font-bold text-center mb-6">체계적인 학습과 심화 훈련으로 중등 내신과 영어 실력을 완성합니다.</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border border-gray-300 p-3 text-left">레벨</th>
                      <th className="border border-gray-300 p-3 text-center bg-blue-200" colSpan={2}>INTER</th>
                      <th className="border border-gray-300 p-3 text-center bg-blue-300" colSpan={2}>INTER+</th>
                      <th className="border border-gray-300 p-3 text-center bg-blue-400" colSpan={2}>ADV</th>
                      <th className="border border-gray-300 p-3 text-center bg-blue-500" colSpan={2}>ADV+</th>
                      <th className="border border-gray-300 p-3 text-center bg-blue-600" colSpan={2}>MASTER</th>
                      <th className="border border-gray-300 p-3 text-center bg-indigo-600" colSpan={2}>MASTER+</th>
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
              <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <FiBook className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">내신 연계 학습</h3>
                <p className="text-gray-600">
                  각 학교별 영어 교과서와 학교 시험을 철저히 분석하여 내신 성적 향상에 최적화된 학습을 제공합니다. 모의고사와 유사한 형식의 문제를 통해 실전 감각을 키웁니다.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <FiFileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">영작 집중 훈련</h3>
                <p className="text-gray-600">
                  영어 작문 실력 향상을 위한 체계적인 훈련 프로그램을 운영합니다. 주제별 에세이 작성과 첨삭 지도를 통해 표현력과 문법 활용 능력을 키웁니다.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <FiTarget className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">개인별 맞춤 관리</h3>
                <p className="text-gray-600">
                  학생 개인의 학습 상황과 성취도를 주기적으로 분석하여 맞춤형 학습 계획을 수립합니다. 취약점 보완과 강점 강화를 통해 균형 잡힌 영어 실력을 기릅니다.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <FiBarChart2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">실용영어 커리큘럼</h3>
                <p className="text-gray-600">
                  내신 대비뿐만 아니라 실생활에서 활용 가능한 실용영어 능력 향상에 중점을 둡니다. 토론, 프레젠테이션, 디베이트 등 다양한 활동을 통해 영어 의사소통 능력을 기릅니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 시간표 섹션 */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">중등 정규 시간표</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-blue-600 mb-4">화/금 정규 수업</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-blue-50 rounded-md">
                    <span className="font-medium w-24">1타임</span>
                    <span className="text-gray-700">4:55 ~ 7:25</span>
                    <span className="ml-auto text-sm text-gray-500">(150분)</span>
                  </div>
                  <div className="flex items-center p-3 bg-blue-50 rounded-md">
                    <span className="font-medium w-24">2타임</span>
                    <span className="text-gray-700">7:30 ~ 10:00</span>
                    <span className="ml-auto text-sm text-gray-500">(150분)</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-blue-600 mb-4">추가 학습 지원</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-blue-50 rounded-md">
                    <span className="font-medium w-24">수요일</span>
                    <span className="text-gray-700">개별 질의응답 및 보충학습</span>
                  </div>
                  <div className="flex items-center p-3 bg-blue-50 rounded-md">
                    <span className="font-medium w-24">토요일</span>
                    <span className="text-gray-700">Writing 클리닉</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 내신 대비 섹션 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">중등 내신 완벽 대비</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow-lg mb-12">
              <h3 className="text-xl font-bold mb-6 text-blue-600">대상 학교</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <h4 className="font-bold text-lg mb-2">목일중학교</h4>
                  <p className="text-gray-600 text-sm">교과서 기반 완벽 대비</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <h4 className="font-bold text-lg mb-2">목동중학교</h4>
                  <p className="text-gray-600 text-sm">교과서 내용 상세 분석</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <h4 className="font-bold text-lg mb-2">문래중학교</h4>
                  <p className="text-gray-600 text-sm">특성화된 내신 프로그램</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-4 text-blue-600">내신 대비 과정</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 mr-4">1</span>
                    <div>
                      <p className="font-bold mb-1">교과서 분석 및 핵심 내용 정리</p>
                      <p className="text-gray-600">각 학교별 교과서 내용을 완벽히 분석하여 시험에 나올 핵심 내용을 정리합니다.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 mr-4">2</span>
                    <div>
                      <p className="font-bold mb-1">문제 유형별 접근 방법 학습</p>
                      <p className="text-gray-600">다양한 문제 유형에 대한 효과적인 접근 방법과 해결 전략을 학습합니다.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 mr-4">3</span>
                    <div>
                      <p className="font-bold mb-1">모의고사 및 오답 분석</p>
                      <p className="text-gray-600">실전과 유사한 모의고사를 실시하고 오답을 철저히 분석하여 취약점을 보완합니다.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 mr-4">4</span>
                    <div>
                      <p className="font-bold mb-1">시험 직전 집중 보강</p>
                      <p className="text-gray-600">시험 직전 핵심 내용을 총정리하고 개별 학습 클리닉을 통해 최종 점검합니다.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 상담 유도 섹션 */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">중등 정규 프로그램 상담받기</h3>
              <p className="text-gray-600 mb-6">
                학생의 영어 능력과 학습 스타일에 맞는 최적의 학습 방법을 추천해 드립니다.
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