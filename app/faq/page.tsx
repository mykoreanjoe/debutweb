import { FiChevronDown, FiHelpCircle, FiBookOpen, FiBarChart2, FiClock, FiTarget, FiMessageSquare, FiActivity, FiMessageCircle } from 'react-icons/fi';

export const metadata = {
  title: 'DEBUT 영어학원 FAQ - 자주 묻는 질문',
  description: 'DEBUT 영어학원에 대한 자주 묻는 질문과 답변을 확인하세요. 영어 학습 방법, 수업 방식, 교육 철학에 대한 궁금증을 해결해 드립니다.',
  keywords: '영어학원 FAQ, 영어 학습 질문, 영어 교육 질문, 영어학원 자주 묻는 질문, 목동 영어학원 FAQ, 양천구 영어학원 질문',
};

export default function FAQ() {
  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              자주 <span className="text-primary">묻는</span> 질문
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              DEBUT 영어학원에 대해 궁금한 점을 해결해 드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">학습에 관한 궁금증</h2>
            
            {/* FAQ 아코디언 */}
            <div className="space-y-6">
              {/* FAQ 아이템 1 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer bg-white hover:bg-gray-50">
                    <div className="flex items-center">
                      <FiHelpCircle className="w-6 h-6 text-primary mr-3" />
                      <h3 className="text-lg font-medium text-gray-800">집에서 집중이 안 되는데 학원에서는 괜찮을까요?</h3>
                    </div>
                    <span className="transition-transform group-open:rotate-180">
                      <FiChevronDown className="w-5 h-5 text-gray-500" />
                    </span>
                  </summary>
                  <div className="px-6 py-4 bg-gray-50">
                    <div className="flex items-start">
                      <div className="w-6 mr-3 flex-shrink-0"></div>
                      <div>
                        <p className="text-gray-700">
                          DEBUT에서는 <span className="font-semibold">학습 루틴</span>, <span className="font-semibold">스터디 매니저의 체크</span>, 그리고 <span className="font-semibold">집중에 최적화된 환경 조성</span>을 통해 학생들의 집중력을 높이고 있습니다.
                        </p>
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-white p-3 rounded-lg shadow-sm flex flex-col items-center">
                            <FiClock className="w-8 h-8 text-primary mb-2" />
                            <p className="text-center text-sm">규칙적인 학습 루틴 형성</p>
                          </div>
                          <div className="bg-white p-3 rounded-lg shadow-sm flex flex-col items-center">
                            <FiTarget className="w-8 h-8 text-primary mb-2" />
                            <p className="text-center text-sm">명확한 목표 설정과 달성 확인</p>
                          </div>
                          <div className="bg-white p-3 rounded-lg shadow-sm flex flex-col items-center">
                            <FiActivity className="w-8 h-8 text-primary mb-2" />
                            <p className="text-center text-sm">집중 지속 시간 점진적 증가</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              </div>

              {/* FAQ 아이템 2 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer bg-white hover:bg-gray-50">
                    <div className="flex items-center">
                      <FiHelpCircle className="w-6 h-6 text-primary mr-3" />
                      <h3 className="text-lg font-medium text-gray-800">더 공부할 콘텐츠가 있었으면 좋겠어요</h3>
                    </div>
                    <span className="transition-transform group-open:rotate-180">
                      <FiChevronDown className="w-5 h-5 text-gray-500" />
                    </span>
                  </summary>
                  <div className="px-6 py-4 bg-gray-50">
                    <div className="flex items-start">
                      <div className="w-6 mr-3 flex-shrink-0"></div>
                      <div>
                        <p className="text-gray-700">
                          DEBUT의 온라인 AI 시스템에서는 <span className="font-semibold">지속적으로 새로운 학습 콘텐츠가 추가</span>되고 있으며, 
                          <span className="font-semibold">각 학생의 성취도와 학습 패턴을 분석하여 최적의 학습 자료를 추천</span>해 드립니다.
                        </p>
                        <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center mb-3">
                            <FiBarChart2 className="w-6 h-6 text-primary mr-2" />
                            <h4 className="font-medium">AI 기반 맞춤형 콘텐츠 추천</h4>
                          </div>
                          <div className="pl-8">
                            <ul className="list-disc text-sm text-gray-700 space-y-1">
                              <li>개인별 학습 데이터 분석</li>
                              <li>취약점 보완 콘텐츠 우선 제공</li>
                              <li>월별 새로운 콘텐츠 업데이트</li>
                              <li>관심사 기반 학습 자료 추천</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              </div>

              {/* FAQ 아이템 3 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer bg-white hover:bg-gray-50">
                    <div className="flex items-center">
                      <FiHelpCircle className="w-6 h-6 text-primary mr-3" />
                      <h3 className="text-lg font-medium text-gray-800">중간고사는 잘 보는데 기말이 걱정돼요</h3>
                    </div>
                    <span className="transition-transform group-open:rotate-180">
                      <FiChevronDown className="w-5 h-5 text-gray-500" />
                    </span>
                  </summary>
                  <div className="px-6 py-4 bg-gray-50">
                    <div className="flex items-start">
                      <div className="w-6 mr-3 flex-shrink-0"></div>
                      <div>
                        <p className="text-gray-700">
                          DEBUT에서는 <span className="font-semibold">중간고사와 기말고사의 특성 차이를 분석</span>하고, 
                          <span className="font-semibold">체계적인 오답 관리 루틴을 운영</span>하여 기말고사 성적 향상을 돕습니다.
                        </p>
                        <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-medium text-primary mb-2">기말고사 대비 특별 관리 프로그램</h4>
                          <div className="space-y-3">
                            <div className="flex items-start">
                              <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-xs mr-2 mt-0.5">1</div>
                              <div>
                                <p className="font-medium">누적 범위 분석</p>
                                <p className="text-sm text-gray-600">중간고사 이후 새로운 내용과 기존 내용의 연결점 파악</p>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-xs mr-2 mt-0.5">2</div>
                              <div>
                                <p className="font-medium">오답 노트 시스템</p>
                                <p className="text-sm text-gray-600">중간고사 오답을 분석하여 취약점 집중 보완</p>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-xs mr-2 mt-0.5">3</div>
                              <div>
                                <p className="font-medium">기말고사 모의평가</p>
                                <p className="text-sm text-gray-600">실전과 동일한 형태의 문제로 시험 적응력 향상</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              </div>

              {/* FAQ 아이템 4 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer bg-white hover:bg-gray-50">
                    <div className="flex items-center">
                      <FiHelpCircle className="w-6 h-6 text-primary mr-3" />
                      <h3 className="text-lg font-medium text-gray-800">하위권인데 현재 레벨이 맞을까요?</h3>
                    </div>
                    <span className="transition-transform group-open:rotate-180">
                      <FiChevronDown className="w-5 h-5 text-gray-500" />
                    </span>
                  </summary>
                  <div className="px-6 py-4 bg-gray-50">
                    <div className="flex items-start">
                      <div className="w-6 mr-3 flex-shrink-0"></div>
                      <div>
                        <p className="text-gray-700">
                          DEBUT에서는 <span className="font-semibold">정밀한 진단 테스트</span>와 
                          <span className="font-semibold">5,000명 이상의 학생 데이터를 기반</span>으로 
                          각 학생에게 가장 적합한 학습 레벨을 설정해 드립니다.
                        </p>
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-white rounded-lg p-4 shadow-sm">
                            <h4 className="font-medium text-primary mb-2 text-center">진단 테스트 항목</h4>
                            <ul className="space-y-2">
                              <li className="flex items-center">
                                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                                <span className="text-sm">어휘력 진단</span>
                              </li>
                              <li className="flex items-center">
                                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                                <span className="text-sm">문법 이해도 측정</span>
                              </li>
                              <li className="flex items-center">
                                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                                <span className="text-sm">독해 능력 평가</span>
                              </li>
                              <li className="flex items-center">
                                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                                <span className="text-sm">듣기 능력 확인</span>
                              </li>
                            </ul>
                          </div>
                          <div className="bg-white rounded-lg p-4 shadow-sm">
                            <h4 className="font-medium text-primary mb-2 text-center">레벨 설정 기준</h4>
                            <ul className="space-y-2">
                              <li className="flex items-center">
                                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                                <span className="text-sm">현재 학교 성적</span>
                              </li>
                              <li className="flex items-center">
                                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                                <span className="text-sm">학습 목표</span>
                              </li>
                              <li className="flex items-center">
                                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                                <span className="text-sm">학습 가능 시간</span>
                              </li>
                              <li className="flex items-center">
                                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                                <span className="text-sm">학습 선호도</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              </div>

              {/* FAQ 아이템 5 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer bg-white hover:bg-gray-50">
                    <div className="flex items-center">
                      <FiHelpCircle className="w-6 h-6 text-primary mr-3" />
                      <h3 className="text-lg font-medium text-gray-800">Speaking 수업이 낯선데 괜찮을까요?</h3>
                    </div>
                    <span className="transition-transform group-open:rotate-180">
                      <FiChevronDown className="w-5 h-5 text-gray-500" />
                    </span>
                  </summary>
                  <div className="px-6 py-4 bg-gray-50">
                    <div className="flex items-start">
                      <div className="w-6 mr-3 flex-shrink-0"></div>
                      <div>
                        <p className="text-gray-700">
                          DEBUT의 Speaking 수업은 <span className="font-semibold">발표 코칭 → 반복 → 피드백</span>의 
                          단계적 루틴을 통해 학생들이 말하는 즐거움을 느낄 수 있도록 설계되어 있습니다.
                        </p>
                        <div className="mt-4 relative">
                          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
                          <div className="space-y-6 relative z-10">
                            <div className="flex">
                              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm mr-4 flex-shrink-0">1</div>
                              <div className="bg-white p-3 rounded-lg shadow-sm flex-grow">
                                <h4 className="font-medium text-primary mb-1">단계별 발표 코칭</h4>
                                <p className="text-sm text-gray-600">
                                  간단한 인사말부터 시작하여 점진적으로 발표 길이와 난이도를 높여갑니다.
                                </p>
                              </div>
                            </div>
                            <div className="flex">
                              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm mr-4 flex-shrink-0">2</div>
                              <div className="bg-white p-3 rounded-lg shadow-sm flex-grow">
                                <h4 className="font-medium text-primary mb-1">체계적인 반복 훈련</h4>
                                <p className="text-sm text-gray-600">
                                  같은 표현을 다양한 상황에서 반복하여 자연스러운 말하기 능력을 키웁니다.
                                </p>
                              </div>
                            </div>
                            <div className="flex">
                              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm mr-4 flex-shrink-0">3</div>
                              <div className="bg-white p-3 rounded-lg shadow-sm flex-grow">
                                <h4 className="font-medium text-primary mb-1">긍정적 피드백</h4>
                                <p className="text-sm text-gray-600">
                                  발표 후 항상 잘한 점을 먼저 언급하고, 개선점을 친절하게 안내합니다.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              </div>

              {/* FAQ 아이템 6 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer bg-white hover:bg-gray-50">
                    <div className="flex items-center">
                      <FiHelpCircle className="w-6 h-6 text-primary mr-3" />
                      <h3 className="text-lg font-medium text-gray-800">영어 기초가 없는데 어디서부터 시작하나요?</h3>
                    </div>
                    <span className="transition-transform group-open:rotate-180">
                      <FiChevronDown className="w-5 h-5 text-gray-500" />
                    </span>
                  </summary>
                  <div className="px-6 py-4 bg-gray-50">
                    <div className="flex items-start">
                      <div className="w-6 mr-3 flex-shrink-0"></div>
                      <div>
                        <p className="text-gray-700">
                          DEBUT에서는 영어 기초가 없는 학생들을 위해 
                          <span className="font-semibold">먼저 학습 루틴을 설계</span>하고, 
                          <span className="font-semibold">듣기·읽기 → 말하기 → 쓰기</span>의 
                          자연스러운 언어 습득 순서로 학습을 진행합니다.
                        </p>
                        <div className="mt-4">
                          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                            <div className="p-4 bg-primary text-white">
                              <h4 className="font-medium text-center">영어 기초 학습 단계</h4>
                            </div>
                            <div className="p-4">
                              <div className="space-y-4">
                                <div className="flex items-center">
                                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <FiClock className="w-5 h-5 text-primary" />
                                  </div>
                                  <div>
                                    <h5 className="font-medium">루틴 형성 (2-3주)</h5>
                                    <p className="text-sm text-gray-600">매일 일정 시간 영어에 노출되는 습관 만들기</p>
                                  </div>
                                </div>
                                <div className="flex items-center">
                                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <FiBookOpen className="w-5 h-5 text-primary" />
                                  </div>
                                  <div>
                                    <h5 className="font-medium">듣기·읽기 (1-2개월)</h5>
                                    <p className="text-sm text-gray-600">기본 단어와 표현을 반복적으로 접하며 익히기</p>
                                  </div>
                                </div>
                                <div className="flex items-center">
                                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <FiMessageSquare className="w-5 h-5 text-primary" />
                                  </div>
                                  <div>
                                    <h5 className="font-medium">말하기 (2-3개월)</h5>
                                    <p className="text-sm text-gray-600">익숙해진 표현을 활용해 간단한 대화 연습하기</p>
                                  </div>
                                </div>
                                <div className="flex items-center">
                                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <FiActivity className="w-5 h-5 text-primary" />
                                  </div>
                                  <div>
                                    <h5 className="font-medium">쓰기 (3-4개월)</h5>
                                    <p className="text-sm text-gray-600">기본 문장 구조를 익히고 짧은 글쓰기 시작하기</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              </div>
            </div>
            
            {/* 상담 유도 섹션 */}
            <div className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg border border-primary/20">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">아직 궁금한 점이 있으신가요?</h3>
                <p className="text-gray-700 mb-6">
                  데뷰의 학습 방식, 교육 과정, 그리고 우리가 어떻게 학생들의 성공을 지원하는지<br />
                  더 알아보고 싶으시다면 지금 상담을 예약하세요.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <a
                    href="https://open.kakao.com/o/s19K0tKg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-yellow-400 text-yellow-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
                  >
                    <FiMessageCircle className="mr-2" /> 카카오톡 상담하기
                  </a>
                  <a
                    href="https://booking.naver.com/booking/13/bizes/1068331/items/5609916"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                  >
                    <span className="mr-2">맞춤형 학습 진단 예약하기</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 