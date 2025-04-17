import Link from 'next/link';
import { FiArrowLeft, FiStar, FiCheckCircle, FiClipboard, FiBarChart2 } from 'react-icons/fi';

export default function LevelTest() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/classes" className="inline-flex items-center text-green-400 hover:underline mb-8">
              <FiArrowLeft className="mr-2" /> 모든 클래스 보기
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              무료 <span className="text-green-400">레벨 테스트</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              정확한 영어 실력 진단을 통해 맞춤형 학습 방향을 제시해 드립니다. 
              무료 레벨 테스트와 함께 영어 학습의 첫 단계를 시작하세요.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700 flex items-center">
                <FiStar className="text-green-400 mr-3 h-6 w-6" />
                <div>
                  <p className="text-sm text-gray-400">대상</p>
                  <p className="font-medium text-white">초, 중, 고등학생</p>
                </div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700 flex items-center">
                <FiCheckCircle className="text-green-400 mr-3 h-6 w-6" />
                <div>
                  <p className="text-sm text-gray-400">테스트 시간</p>
                  <p className="font-medium text-white">약 60분 소요</p>
                </div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700 flex items-center">
                <FiClipboard className="text-green-400 mr-3 h-6 w-6" />
                <div>
                  <p className="text-sm text-gray-400">결과 분석</p>
                  <p className="font-medium text-white">전문 분석 보고서</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://open.kakao.com/o/s19K0tKg" 
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors shadow-md"
            >
              테스트 예약하기
            </a>
          </div>
        </div>
      </section>
      
      {/* 테스트 소개 섹션 */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">대뷰 레벨 테스트란?</h2>
            <p className="text-lg text-gray-300 mb-10 text-center max-w-3xl mx-auto">
              대뷰 레벨 테스트는 영어 학습의 첫 단계입니다. 객관적이고 체계적인 진단을 통해 
              현재 실력을 정확히 파악하고, 학습 목표에 맞는 최적의 학습 방향을 설정합니다.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-green-400 transition-colors">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">영어 능력 진단</h3>
                <p className="text-gray-300">
                  어휘, 문법, 독해, 청취 능력을 종합적으로 측정하여 현재의 영어 실력을 정확히 진단합니다.
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-green-400 transition-colors">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">취약점 분석</h3>
                <p className="text-gray-300">
                  영역별 강점과 약점을 분석하여 집중적으로 보완해야 할 학습 영역을 파악합니다.
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-green-400 transition-colors">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">맞춤형 학습 방향</h3>
                <p className="text-gray-300">
                  진단 결과를 바탕으로 개인에게 최적화된 학습 프로그램과 효과적인 학습 방향을 제시합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 테스트 구성 섹션 */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">테스트 구성</h2>
            
            <div className="space-y-8 mb-12">
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg border border-gray-600">
                <h3 className="text-xl font-bold mb-4 text-green-400">1. 어휘 및 문법 테스트</h3>
                <p className="text-gray-300 mb-4">
                  다양한 어휘와 문법 문제를 통해 기초적인 영어 지식을 평가합니다.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-800 p-3 rounded border border-gray-600">
                    <span className="text-green-400 font-semibold">문항 수:</span> 
                    <span className="text-gray-300 ml-2">30문항</span>
                  </div>
                  <div className="bg-gray-800 p-3 rounded border border-gray-600">
                    <span className="text-green-400 font-semibold">소요 시간:</span> 
                    <span className="text-gray-300 ml-2">20분</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg border border-gray-600">
                <h3 className="text-xl font-bold mb-4 text-green-400">2. 독해 테스트</h3>
                <p className="text-gray-300 mb-4">
                  다양한 주제와 난이도의 지문을 통해 독해 능력을 평가합니다.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-800 p-3 rounded border border-gray-600">
                    <span className="text-green-400 font-semibold">문항 수:</span> 
                    <span className="text-gray-300 ml-2">20문항</span>
                  </div>
                  <div className="bg-gray-800 p-3 rounded border border-gray-600">
                    <span className="text-green-400 font-semibold">소요 시간:</span> 
                    <span className="text-gray-300 ml-2">25분</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg border border-gray-600">
                <h3 className="text-xl font-bold mb-4 text-green-400">3. 청취 테스트</h3>
                <p className="text-gray-300 mb-4">
                  다양한 상황과 대화를 통해 영어 청취 능력을 평가합니다.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-800 p-3 rounded border border-gray-600">
                    <span className="text-green-400 font-semibold">문항 수:</span> 
                    <span className="text-gray-300 ml-2">15문항</span>
                  </div>
                  <div className="bg-gray-800 p-3 rounded border border-gray-600">
                    <span className="text-green-400 font-semibold">소요 시간:</span> 
                    <span className="text-gray-300 ml-2">15분</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 레벨 구분 섹션 */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">레벨 구분</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                  <FiBarChart2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">초등부 레벨</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-24 font-semibold text-green-400">Starter</span>
                    <span>기초 어휘 및 문장 구조 학습 단계</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-24 font-semibold text-green-400">Basic 1-2</span>
                    <span>기본 의사소통 및 짧은 문장 이해 단계</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-24 font-semibold text-green-400">Inter 1-2</span>
                    <span>기본 독해 및 문법 활용 단계</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                  <FiBarChart2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">중/고등부 레벨</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-24 font-semibold text-green-400">Inter+</span>
                    <span>중급 독해 및 문법 심화 단계</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-24 font-semibold text-green-400">Adv 1-2</span>
                    <span>고급 독해 및 작문 능력 향상 단계</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-24 font-semibold text-green-400">Master</span>
                    <span>실전 대비 및 심화 학습 단계</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 테스트 후 안내 */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">테스트 이후 제공되는 서비스</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700/80 transition-colors">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">상세 분석 보고서</h3>
                <p className="text-gray-300">
                  영역별 점수와 취약점을 상세히 분석한 보고서를 제공합니다.
                </p>
              </div>
              
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700/80 transition-colors">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">맞춤형 학습 설계</h3>
                <p className="text-gray-300">
                  개인의 레벨과 목표에 맞는 최적의 학습 계획을 제안합니다.
                </p>
              </div>
              
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700/80 transition-colors">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">무료 학습 상담</h3>
                <p className="text-gray-300">
                  전문 선생님과의 1:1 상담을 통해 학습 방향을 구체화합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 상담 유도 섹션 */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-green-500/30 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">무료 레벨 테스트 예약하기</h3>
              <p className="text-gray-300 mb-6">
                지금 무료 레벨 테스트를 예약하고 정확한 영어 실력 진단을 받아보세요.
                맞춤형 학습 설계로 효과적인 영어 학습의 첫 걸음을 시작합니다.
              </p>
              <a 
                href="https://open.kakao.com/o/s19K0tKg" 
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors shadow-md"
              >
                무료 테스트 예약하기
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 