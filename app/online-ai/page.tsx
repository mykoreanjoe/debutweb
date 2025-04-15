import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiBarChart2, FiAward, FiCheckCircle, FiActivity, FiBook, FiLayers, FiVideo } from 'react-icons/fi';

export const metadata = {
  title: 'DEBUT 온라인 AI 학습 - 인공지능 기반 맞춤형 영어 학습',
  description: '인공지능 기반의 맞춤형 학습 분석과 개인화된 학습 관리 시스템으로 효율적인 영어 학습을 경험하세요. 초등생과 중학생을 위한 AI 학습 시스템.',
  keywords: '온라인 영어, AI 영어 학습, 맞춤형 영어 교육, 초등 영어 학습, 중등 영어 학습, 영어 학습 분석, 인공지능 영어',
};

export default function OnlineAI() {
  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              온라인 <span className="text-primary">AI</span> 학습
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              인공지능 기반의 맞춤형 학습 분석과 개인화된 학습 관리 시스템으로 효율적인 영어 학습을 경험하세요.
            </p>
            
            <div className="mt-8">
              <Link 
                href="https://open.kakao.com/o/s19K0tKg"
                className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
              >
                온라인 AI 학습 상담받기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI 분석 섹션 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">AI 분석</h2>
            
            {/* 월별 데이터 */}
            <div className="mb-12 p-6 bg-white rounded-lg shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  <span className="text-primary">03월</span> 2025년
                </h3>
                <button className="px-4 py-2 bg-gray-100 rounded-md text-gray-700 text-sm hover:bg-gray-200 transition-colors">
                  월간 리포트 공유하기
                </button>
              </div>
              
              <div className="flex flex-col mb-8">
                <div className="p-4 bg-gray-50 rounded-lg mb-4">
                  <div className="flex items-center mb-4">
                    <div className="w-auto mr-2">
                      <span className="inline-block bg-pink-100 text-pink-500 rounded-full px-3 py-1 text-sm font-medium">단어AI</span>
                    </div>
                    <div className="flex-grow text-gray-700">
                      가장 약한 분사는 명사여요. 총 틀린 단어 중 100%의 단어가 명사여요. 주로 생활 주제의 단어를 많이 틀렸어요. 해당 부분을 더 집중해서 공부해보세요.
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-auto mr-2">
                      <span className="inline-block bg-blue-100 text-blue-500 rounded-full px-3 py-1 text-sm font-medium">문장AI</span>
                    </div>
                    <div className="flex-grow text-gray-700">
                      가장 약한 시제는 현재형이에요. 총 틀린 문장 중 93%의 문장이 현재형이에요. 주로 문자 주제의 문장을 많이 틀렸어요. 해당 부분을 더 집중해서 공부해보세요.
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 학습량 표시 */}
              <div className="mb-10">
                <h4 className="text-xl font-bold text-gray-800 mb-6">학습량</h4>
                
                <div className="grid grid-cols-5 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <div className="text-4xl font-bold text-pink-500 mb-2">87개</div>
                    <div className="text-sm text-gray-600">단어 학습량</div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="text-4xl font-bold text-blue-500 mb-2">235개</div>
                    <div className="text-sm text-gray-600">문장 학습량</div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="text-4xl font-bold text-green-500 mb-2">23과제</div>
                    <div className="text-sm text-gray-600">말하기 학습량</div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="text-4xl font-bold text-teal-500 mb-2">0과제</div>
                    <div className="text-sm text-gray-600">동시통역 학습량</div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="text-4xl font-bold text-purple-500 mb-2">0개</div>
                    <div className="text-sm text-gray-600">영작(에세이) 학습량</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 최근 3개월 학습량 비교 */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">최근 3개월 학습량 비교</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 왼쪽 차트들 */}
                <div className="space-y-8">
                  {/* 단어 학습량 차트 */}
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold text-pink-500 mb-4">단어 학습량</h4>
                    <div className="h-48 relative">
                      <div className="absolute bottom-0 left-0 w-1/5 h-16 bg-pink-200 flex items-end justify-center">
                        <span className="text-xs mb-1">1월</span>
                      </div>
                      <div className="absolute bottom-0 left-1/3 w-1/5 h-36 bg-pink-400 flex items-end justify-center">
                        <span className="text-xs mb-1">2월</span>
                      </div>
                      <div className="absolute bottom-0 right-1/5 w-1/5 h-20 bg-pink-300 flex items-end justify-center">
                        <span className="text-xs mb-1">3월</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* 말하기 학습량 차트 */}
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold text-green-500 mb-4">말하기 학습량</h4>
                    <div className="h-48 relative">
                      <div className="absolute bottom-0 left-0 w-1/5 h-10 bg-green-200 flex items-end justify-center">
                        <span className="text-xs mb-1">1월</span>
                      </div>
                      <div className="absolute bottom-0 left-1/3 w-1/5 h-32 bg-green-400 flex items-end justify-center">
                        <span className="text-xs mb-1">2월</span>
                      </div>
                      <div className="absolute bottom-0 right-1/5 w-1/5 h-16 bg-green-300 flex items-end justify-center">
                        <span className="text-xs mb-1">3월</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* 동시통역 학습량 차트 */}
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold text-teal-500 mb-4">동시통역 학습량</h4>
                    <div className="h-48 relative">
                      <div className="absolute bottom-0 left-0 w-1/5 h-0 bg-teal-200 flex items-end justify-center">
                        <span className="text-xs mb-1">1월</span>
                      </div>
                      <div className="absolute bottom-0 left-1/3 w-1/5 h-40 bg-teal-400 flex items-end justify-center">
                        <span className="text-xs mb-1">2월</span>
                      </div>
                      <div className="absolute bottom-0 right-1/5 w-1/5 h-0 bg-teal-300 flex items-end justify-center">
                        <span className="text-xs mb-1">3월</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 오른쪽 차트들 */}
                <div className="space-y-8">
                  {/* 문장 학습량 차트 */}
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold text-blue-500 mb-4">문장 학습량</h4>
                    <div className="h-48 relative">
                      <div className="absolute bottom-0 left-0 w-1/5 h-8 bg-blue-200 flex items-end justify-center">
                        <span className="text-xs mb-1">1월</span>
                      </div>
                      <div className="absolute bottom-0 left-1/3 w-1/5 h-40 bg-blue-400 flex items-end justify-center">
                        <span className="text-xs mb-1">2월</span>
                      </div>
                      <div className="absolute bottom-0 right-1/5 w-1/5 h-16 bg-blue-300 flex items-end justify-center">
                        <span className="text-xs mb-1">3월</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* 영작(에세이) 학습량 차트 */}
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold text-purple-500 mb-4">영작(에세이) 학습량</h4>
                    <div className="h-48 relative">
                      <div className="absolute bottom-0 left-0 w-1/5 h-0 bg-purple-200 flex items-end justify-center">
                        <span className="text-xs mb-1">1월</span>
                      </div>
                      <div className="absolute bottom-0 left-1/3 w-1/5 h-0 bg-purple-400 flex items-end justify-center">
                        <span className="text-xs mb-1">2월</span>
                      </div>
                      <div className="absolute bottom-0 right-1/5 w-1/5 h-0 bg-purple-300 flex items-end justify-center">
                        <span className="text-xs mb-1">3월</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* 완료율 차트들 */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <h4 className="text-base font-semibold text-pink-500 mb-3">단어 학습 완료율</h4>
                      <div className="relative w-full h-32 flex items-center justify-center">
                        <div className="w-28 h-28 rounded-full border-8 border-pink-200 flex items-center justify-center">
                          <div className="text-xl font-bold text-gray-800">100%</div>
                        </div>
                        <div className="absolute inset-0 rounded-full border-8 border-pink-400 border-l-transparent border-r-transparent border-b-transparent"></div>
                      </div>
                      <div className="text-center text-sm text-gray-500 mt-2">87개/87개</div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <h4 className="text-base font-semibold text-blue-500 mb-3">문장 학습 완료율</h4>
                      <div className="relative w-full h-32 flex items-center justify-center">
                        <div className="w-28 h-28 rounded-full border-8 border-blue-200 flex items-center justify-center">
                          <div className="text-xl font-bold text-gray-800">100%</div>
                        </div>
                        <div className="absolute inset-0 rounded-full border-8 border-blue-400 border-l-transparent border-r-transparent border-b-transparent"></div>
                      </div>
                      <div className="text-center text-sm text-gray-500 mt-2">235개/235개</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 최근 3개월 첫 테스트 결과 비교 */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">최근 3개월 첫 테스트 결과 비교</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 단어 첫 테스트 결과 */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-pink-500 mb-4">단어 첫 테스트 결과</h4>
                  <div className="h-40 relative">
                    <div className="absolute bottom-0 left-0 w-1/5 h-16 bg-pink-200 flex items-end justify-center">
                      <span className="text-xs mb-1">1월</span>
                    </div>
                    <div className="absolute bottom-0 left-1/3 w-1/5 h-36 bg-pink-400 flex items-end justify-center">
                      <span className="text-xs mb-1">2월</span>
                    </div>
                    <div className="absolute bottom-0 right-1/5 w-1/5 h-20 bg-pink-300 flex items-end justify-center">
                      <span className="text-xs mb-1">3월</span>
                    </div>
                  </div>
                </div>
                
                {/* 문장 첫 테스트 결과 */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-blue-500 mb-4">문장 첫 테스트 결과</h4>
                  <div className="h-40 relative">
                    <div className="absolute bottom-0 left-0 w-1/5 h-8 bg-blue-200 flex items-end justify-center">
                      <span className="text-xs mb-1">1월</span>
                    </div>
                    <div className="absolute bottom-0 left-1/3 w-1/5 h-36 bg-blue-400 flex items-end justify-center">
                      <span className="text-xs mb-1">2월</span>
                    </div>
                    <div className="absolute bottom-0 right-1/5 w-1/5 h-16 bg-blue-300 flex items-end justify-center">
                      <span className="text-xs mb-1">3월</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 월말고사 점수 섹션 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">성적 상세</h3>
              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-blue-100 p-4">
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center text-blue-600 text-2xl font-bold">T</div>
                    </div>
                    <div>
                      <div className="text-lg font-medium">시험일 {'>'} 2025.03.28</div>
                      <div className="text-xl font-bold">월말고사</div>
                      <div className="text-gray-600">D1-M230</div>
                      <div className="text-gray-600">초등 D1 3월 월말</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-blue-500 text-white">
                          <th className="p-2 text-left">과목</th>
                          <th className="p-2 text-center">점수</th>
                          <th className="p-2 text-center">만점</th>
                          <th className="p-2 text-center">반평균</th>
                          <th className="p-2 text-center">반석차</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-2 flex items-center">
                            <span className="text-blue-500 mr-2">⊕</span>
                            (1) Voca
                          </td>
                          <td className="p-2 text-center">98</td>
                          <td className="p-2 text-center">100</td>
                          <td className="p-2 text-center">94</td>
                          <td className="p-2 text-center">1</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 flex items-center">
                            <span className="text-blue-500 mr-2">⊕</span>
                            (2) 미교과 CC {'<'}1{'>'}
                          </td>
                          <td className="p-2 text-center">79</td>
                          <td className="p-2 text-center">100</td>
                          <td className="p-2 text-center">76.75</td>
                          <td className="p-2 text-center">2</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 flex items-center">
                            <span className="text-blue-500 mr-2">⊕</span>
                            (3) ORT {'<'}1~5{'>'}
                          </td>
                          <td className="p-2 text-center">88</td>
                          <td className="p-2 text-center">100</td>
                          <td className="p-2 text-center">81.25</td>
                          <td className="p-2 text-center">2</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 flex items-center">
                            <span className="text-blue-500 mr-2">⊕</span>
                            스피킹&스터디북
                          </td>
                          <td className="p-2 text-center">96</td>
                          <td className="p-2 text-center">100</td>
                          <td className="p-2 text-center">94</td>
                          <td className="p-2 text-center">1</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 flex items-center">
                            <span className="text-blue-500 mr-2">⊕</span>
                            스피킹 정성평가
                          </td>
                          <td className="p-2 text-center" colSpan={4}>Excellent</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 flex items-center">
                            <span className="text-blue-500 mr-2">⊕</span>
                            스터디북 정성평가
                          </td>
                          <td className="p-2 text-center" colSpan={4}>Excellent</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 flex items-center font-bold">
                            <span className="text-blue-500 mr-2">⊕</span>
                            평균
                          </td>
                          <td className="p-2 text-center font-bold">90.25</td>
                          <td className="p-2 text-center">100</td>
                          <td className="p-2 text-center">86.5</td>
                          <td className="p-2 text-center">2</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  {/* 점수 비교 그래프 */}
                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">점수 비교</div>
                      <div>
                        <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded mr-2">개인</span>
                        <span className="px-2 py-1 bg-red-500 text-white text-sm rounded">반평균</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-1/4 text-sm">(1) Voca</div>
                        <div className="w-3/4 h-6 bg-gray-200 rounded-full overflow-hidden relative">
                          <div className="absolute top-0 left-0 h-full bg-blue-500" style={{ width: '98%' }}></div>
                          <div className="absolute top-0 left-0 h-full bg-red-500" style={{ width: '94%' }}></div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-1/4 text-sm">(2) 미교과 CC {'<'}1{'>'}</div>
                        <div className="w-3/4 h-6 bg-gray-200 rounded-full overflow-hidden relative">
                          <div className="absolute top-0 left-0 h-full bg-blue-500" style={{ width: '79%' }}></div>
                          <div className="absolute top-0 left-0 h-full bg-red-500" style={{ width: '76.75%' }}></div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-1/4 text-sm">(3) ORT {'<'}1~5{'>'}</div>
                        <div className="w-3/4 h-6 bg-gray-200 rounded-full overflow-hidden relative">
                          <div className="absolute top-0 left-0 h-full bg-blue-500" style={{ width: '88%' }}></div>
                          <div className="absolute top-0 left-0 h-full bg-red-500" style={{ width: '81.25%' }}></div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-1/4 text-sm">스피킹&스터디북</div>
                        <div className="w-3/4 h-6 bg-gray-200 rounded-full overflow-hidden relative">
                          <div className="absolute top-0 left-0 h-full bg-blue-500" style={{ width: '96%' }}></div>
                          <div className="absolute top-0 left-0 h-full bg-red-500" style={{ width: '94%' }}></div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-1/4 text-sm font-bold">평균</div>
                        <div className="w-3/4 h-6 bg-gray-200 rounded-full overflow-hidden relative">
                          <div className="absolute top-0 left-0 h-full bg-blue-500" style={{ width: '90.25%' }}></div>
                          <div className="absolute top-0 left-0 h-full bg-red-500" style={{ width: '86.5%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 상담 유도 섹션 */}
            <div className="bg-gray-50 p-8 rounded-lg text-center mt-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">AI 학습 관리 시스템 상담받기</h3>
              <p className="text-gray-600 mb-6">
                최첨단 AI 기술을 활용한 학습 분석과 맞춤형 피드백으로 효율적인 영어 학습을 경험하세요.
                개인별 학습 패턴과 강점/약점을 파악하여 최적화된 학습 방법을 제안해 드립니다.
              </p>
              <a 
                href="https://open.kakao.com/o/s19K0tKg" 
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center bg-yellow-400 text-slate-900 px-6 py-3 rounded-full hover:bg-yellow-500 transition-colors font-medium"
              >
                <span className="mr-2">카카오톡으로 상담받기</span>
                <svg width="24" height="24" className="w-5 h-5" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                  <path d="M128 36C70.562 36 24 72.713 24 118.5c0 29.152 19.253 54.755 48.347 69.03-2.798 10.378-10.193 37.59-10.577 40.037-.487 3.12 1.24 3.095 2.612 2.254 1.062-.65 42.05-28.467 59.35-40.128 1.487.066 2.952.173 4.268.173 57.438 0 104-36.713 104-82.5S185.438 36 128 36z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 