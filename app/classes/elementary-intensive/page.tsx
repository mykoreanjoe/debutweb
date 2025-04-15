import Link from 'next/link';
import { FiArrowLeft, FiClock, FiAward, FiUsers, FiCheckCircle, FiTarget } from 'react-icons/fi';

export default function ElementaryIntensive() {
  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/classes" className="inline-flex items-center text-accent hover:underline mb-8">
              <FiArrowLeft className="mr-2" /> 모든 클래스 보기
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              초등 인텐시브 <span className="text-accent">프로그램</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              영어 자기표현력과 학문적 언어 능력을 집중적으로 향상시키는 상위 레벨 학생을 위한 심화 과정입니다.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-custom-soft flex items-center">
                <FiUsers className="text-accent mr-3 h-6 w-6" />
                <div>
                  <p className="text-sm text-gray-500">대상</p>
                  <p className="font-medium">초등 6학년, 빠른 학습자</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-custom-soft flex items-center">
                <FiAward className="text-accent mr-3 h-6 w-6" />
                <div>
                  <p className="text-sm text-gray-500">레벨</p>
                  <p className="font-medium">중1 ~ 고1 수준</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-custom-soft flex items-center">
                <FiClock className="text-accent mr-3 h-6 w-6" />
                <div>
                  <p className="text-sm text-gray-500">기간</p>
                  <p className="font-medium">1년 중고등 완성 프로그램</p>
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
      
      {/* 프로그램 소개 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">심화 영어 집중 프로그램</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-custom-medium mb-12">
              <h3 className="text-2xl font-bold text-accent mb-6">프로그램 특징</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-accent/10 rounded-full p-2 mt-1 mr-4">
                    <FiCheckCircle className="text-accent h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">리딩 & 스피킹 집중</h4>
                    <p className="text-gray-600">다양한 장르의 읽기 자료를 통한 독해력 향상과 생각을 표현하는 말하기 훈련</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-accent/10 rounded-full p-2 mt-1 mr-4">
                    <FiCheckCircle className="text-accent h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">문법과 하브루타</h4>
                    <p className="text-gray-600">기본 문법 개념을 하브루타식 토론 학습으로 깊이 있게 이해하는 과정</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-accent/10 rounded-full p-2 mt-1 mr-4">
                    <FiCheckCircle className="text-accent h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">체계적인 쓰기 훈련</h4>
                    <p className="text-gray-600">단계별 영작 훈련을 통한 논리적 글쓰기 역량 강화</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-accent/10 rounded-full p-2 mt-1 mr-4">
                    <FiCheckCircle className="text-accent h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">중고등 선행 준비</h4>
                    <p className="text-gray-600">중고등 영어 내신 및 수능 대비를 위한 기초 다지기</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 집중 영역 재구성 */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">집중 학습 영역</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-custom-soft">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold mr-4">
                      R&S
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">리딩 & 스피킹</h4>
                      <p className="text-gray-500">독해와 표현력 향상</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>중고등 수준 지문 독해</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>독해 전략 학습</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>주제별 발표 및 토론</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>소그룹 프로젝트 발표</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom-soft">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold mr-4">
                      G&H
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">문법 & 하브루타</h4>
                      <p className="text-gray-500">문법 개념의 깊은 이해</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>중고등 핵심 문법 선행</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>하브루타식 문법 학습</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>문법 개념 토론</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>문법 문제 풀이 전략</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom-soft">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold mr-4">
                      W
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">쓰기 집중 훈련</h4>
                      <p className="text-gray-500">영작 실력 강화</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>단락 구성 훈련</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>에세이 작성법</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>주제별 영작문 훈련</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>첨삭 및 피드백</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* 1년 완성 프로그램 과정 */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">1년 중고등 완성 프로그램</h3>
              <div className="bg-white p-6 rounded-lg shadow-custom-medium">
                <div className="relative">
                  {/* 타임라인 라인 */}
                  <div className="absolute left-8 top-0 bottom-0 w-1 bg-accent/20 hidden md:block"></div>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/4 flex items-start mb-4 md:mb-0">
                        <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center text-white font-bold z-10">
                          1학기
                        </div>
                      </div>
                      <div className="md:w-3/4 bg-accent/5 p-5 rounded-lg">
                        <h4 className="text-lg font-semibold text-accent mb-3">기초 다지기</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <FiTarget className="text-accent mt-1 mr-2 flex-shrink-0" />
                            <span>중등 핵심 문법 이해</span>
                          </li>
                          <li className="flex items-start">
                            <FiTarget className="text-accent mt-1 mr-2 flex-shrink-0" />
                            <span>독해 전략 학습</span>
                          </li>
                          <li className="flex items-start">
                            <FiTarget className="text-accent mt-1 mr-2 flex-shrink-0" />
                            <span>기본 영작 훈련</span>
                          </li>
                          <li className="flex items-start">
                            <FiTarget className="text-accent mt-1 mr-2 flex-shrink-0" />
                            <span>내신 기초 다지기</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/4 flex items-start mb-4 md:mb-0">
                        <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center text-white font-bold z-10">
                          2학기
                        </div>
                      </div>
                      <div className="md:w-3/4 bg-accent/5 p-5 rounded-lg">
                        <h4 className="text-lg font-semibold text-accent mb-3">심화 학습</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <FiTarget className="text-accent mt-1 mr-2 flex-shrink-0" />
                            <span>중고등 문법 심화</span>
                          </li>
                          <li className="flex items-start">
                            <FiTarget className="text-accent mt-1 mr-2 flex-shrink-0" />
                            <span>영작 실력 강화</span>
                          </li>
                          <li className="flex items-start">
                            <FiTarget className="text-accent mt-1 mr-2 flex-shrink-0" />
                            <span>토론 및 스피킹 심화</span>
                          </li>
                          <li className="flex items-start">
                            <FiTarget className="text-accent mt-1 mr-2 flex-shrink-0" />
                            <span>리스닝 및 독해 집중</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 상담 유도 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">초등 인텐시브 프로그램 상담받기</h3>
              <p className="text-gray-600 mb-6">
                자녀의 영어 능력과 학습 스타일에 맞는 최적의 클래스를 추천해 드립니다.
                편안한 상담을 통해 궁금한 점을 모두 해결하세요.
              </p>
              <a 
                href="https://open.kakao.com/o/s19K0tKg" 
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center bg-[#FEE500] text-black px-6 py-3 rounded-full hover:bg-[#F6D000] transition-colors font-medium shadow-md"
              >
                <svg width="24" height="24" className="w-5 h-5 mr-2" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                  <path d="M128 36C70.562 36 24 72.713 24 118.5c0 29.152 19.253 54.755 48.347 69.03-2.798 10.378-10.193 37.59-10.577 40.037-.487 3.12 1.24 3.095 2.612 2.254 1.062-.65 42.05-28.467 59.35-40.128 1.487.066 2.952.173 4.268.173 57.438 0 104-36.713 104-82.5S185.438 36 128 36z" fill="#371D1E"/>
                </svg>
                카카오톡으로 상담받기
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 