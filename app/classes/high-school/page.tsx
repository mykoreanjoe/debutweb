import React from 'react';
import Link from 'next/link';
import { FiArrowLeft, FiUser, FiClock, FiTarget, FiBook, FiFileText, FiBarChart2, FiLayers } from 'react-icons/fi';

export default function HighSchool() {
  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-purple-50 to-purple-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/classes" className="inline-flex items-center text-purple-600 hover:underline mb-8">
              <FiArrowLeft className="mr-2" /> 모든 클래스 보기
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              고등 정규 <span className="text-purple-600">프로그램</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              고등학교 내신과 수능을 동시에 대비하는 체계적인 고등 영어 완성 프로그램입니다.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-custom-soft flex items-center">
                <FiUser className="text-purple-600 mr-3 h-6 w-6" />
                <div>
                  <p className="text-sm text-gray-500">대상</p>
                  <p className="font-medium">고등학교 1~3학년</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-custom-soft flex items-center">
                <FiClock className="text-purple-600 mr-3 h-6 w-6" />
                <div>
                  <p className="text-sm text-gray-500">기간</p>
                  <p className="font-medium">6개월 단위 심화 과정</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-custom-soft flex items-center">
                <FiTarget className="text-purple-600 mr-3 h-6 w-6" />
                <div>
                  <p className="text-sm text-gray-500">목표</p>
                  <p className="font-medium">내신 1등급 + 수능 2등급 이상</p>
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
      
      {/* 고등부 로드맵 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">고등부 로드맵</h2>
            <div className="bg-purple-50 p-4 rounded-lg shadow-md mb-10">
              <h3 className="text-xl font-bold text-center mb-6">체계적인 학습과 심화 훈련으로 내신과 수능 영어를 동시에 완성합니다</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-purple-100">
                      <th className="border border-gray-300 p-3 text-left">레벨</th>
                      <th className="border border-gray-300 p-3 text-center bg-purple-200" colSpan={2}>INTER</th>
                      <th className="border border-gray-300 p-3 text-center bg-purple-300" colSpan={2}>INTER+</th>
                      <th className="border border-gray-300 p-3 text-center bg-purple-400" colSpan={2}>ADV</th>
                      <th className="border border-gray-300 p-3 text-center bg-purple-500" colSpan={2}>ADV+</th>
                      <th className="border border-gray-300 p-3 text-center bg-purple-600" colSpan={2}>MASTER</th>
                      <th className="border border-gray-300 p-3 text-center bg-indigo-600" colSpan={2}>ONE</th>
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
              <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                  <FiBook className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">내신 연계 학습</h3>
                <p className="text-gray-600">
                  각 학교별 영어 교과서와 학교 시험을 철저히 분석하여 내신 1등급 달성에 최적화된 학습을 제공합니다. 실전 문제와 유사한 형식으로 완벽하게 대비합니다.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                  <FiFileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">수능 독해 마스터</h3>
                <p className="text-gray-600">
                  수능 영어 지문을 분석하고 유형별 해결 전략을 학습합니다. 직독직해 능력과 추론 능력을 향상시켜 수능 고득점을 위한 기초를 다집니다.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                  <FiTarget className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">취약점 집중 보완</h3>
                <p className="text-gray-600">
                  개인별 취약점을 정확히 진단하고 집중적으로 보완합니다. 주기적인 실력 평가와 피드백을 통해 지속적인 성장을 도모합니다.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                  <FiLayers className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">문제 유형별 접근법</h3>
                <p className="text-gray-600">
                  수능과 내신에 자주 출제되는 문제 유형별로 효과적인 접근법을 학습합니다. 문제 해결 전략과 시간 관리 방법을 체계적으로 훈련합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 시간표 섹션 */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">고등 정규 시간표</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-purple-600 mb-4">월/목 정규 수업</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-purple-50 rounded-md">
                    <span className="font-medium w-24">1타임</span>
                    <span className="text-gray-700">4:45 ~ 7:45</span>
                    <span className="ml-auto text-sm text-gray-500">(180분)</span>
                  </div>
                  <div className="flex items-center p-3 bg-purple-50 rounded-md">
                    <span className="font-medium w-24">2타임</span>
                    <span className="text-gray-700">7:50 ~ 10:50</span>
                    <span className="ml-auto text-sm text-gray-500">(180분)</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-purple-600 mb-4">추가 학습 지원</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-purple-50 rounded-md">
                    <span className="font-medium w-24">수요일</span>
                    <span className="text-gray-700">1:1 질의응답 및 보충</span>
                  </div>
                  <div className="flex items-center p-3 bg-purple-50 rounded-md">
                    <span className="font-medium w-24">토요일</span>
                    <span className="text-gray-700">모의고사 및 오답 분석</span>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">내신 + 수능 완벽 대비</h2>
            
            <div className="bg-purple-50 p-6 rounded-lg shadow-lg mb-12">
              <h3 className="text-xl font-bold mb-6 text-purple-600">대상 학교</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <h4 className="font-bold text-lg mb-2">목동고등학교</h4>
                  <p className="text-gray-600 text-sm">내신 1등급 집중 대비</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <h4 className="font-bold text-lg mb-2">양정고등학교</h4>
                  <p className="text-gray-600 text-sm">맞춤형 내신 프로그램</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <h4 className="font-bold text-lg mb-2">영훈고등학교</h4>
                  <p className="text-gray-600 text-sm">교과서 완벽 분석</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-4 text-purple-600">수능 대비 과정</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 mr-4">1</span>
                    <div>
                      <p className="font-bold mb-1">독해 능력 강화</p>
                      <p className="text-gray-600">직독직해 훈련과 추론 능력 향상을 통해 수능 지문 독해 능력을 강화합니다.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 mr-4">2</span>
                    <div>
                      <p className="font-bold mb-1">유형별 문제 해결 전략</p>
                      <p className="text-gray-600">수능 영어에 자주 출제되는 문제 유형별 해결 전략을 학습합니다.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 mr-4">3</span>
                    <div>
                      <p className="font-bold mb-1">실전 모의고사 훈련</p>
                      <p className="text-gray-600">정기적인 모의고사를 통해 실전 감각을 키우고 시간 관리 능력을 향상시킵니다.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 mr-4">4</span>
                    <div>
                      <p className="font-bold mb-1">오답 노트 작성 및 분석</p>
                      <p className="text-gray-600">틀린 문제를 체계적으로 정리하고 분석하여 같은 실수를 반복하지 않도록 합니다.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 상담 유도 섹션 */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">고등 정규 프로그램 상담받기</h3>
              <p className="text-gray-600 mb-6">
                학생의 현재 영어 수준과 목표에 맞는 맞춤형 학습 계획을 제안해 드립니다.
                내신과 수능을 동시에 대비하는 최적의 전략을 상담받으세요.
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