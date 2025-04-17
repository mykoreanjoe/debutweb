import Link from 'next/link';
import { FiArrowRight, FiArrowLeft, FiExternalLink, FiBookmark, FiTarget, FiActivity, FiLayers, FiStar, FiCheckCircle, FiSearch, FiTrendingUp, FiRepeat } from 'react-icons/fi';

export const metadata = {
  title: 'DEBUT 학습과정 - 5단계 영어 학습 방법론',
  description: 'DEBUT 영어학원의 체계적인 5단계 영어 학습 과정 - Discover, Engage, Boost, Unfold, Train으로 완성되는 효과적인 영어 학습 방법론을 소개합니다.',
  keywords: '영어 학습과정, 영어 학습 방법론, 효과적인 영어 학습, 5단계 영어 학습, 영어 교육 커리큘럼, 영어 실력 향상',
};

const processes = [
  {
    title: 'DISCOVER, 발견하다!',
    description: '학생의 현재 영어 실력과 학습 스타일을 정확하게 진단합니다.',
    icon: FiSearch
  },
  {
    title: 'ENGAGE, 참여하다!',
    description: '개인별 맞춤 학습 계획을 수립하고 실행에 옮깁니다.',
    icon: FiTarget
  },
  {
    title: 'BOOST, 끌어 올리다!',
    description: '체계적인 학습 관리와 피드백으로 실력 향상을 가속화합니다.',
    icon: FiTrendingUp
  },
  {
    title: 'UNFOLD, 드러내다!',
    description: '학습 성과를 측정하고 성장의 증거를 확인합니다.',
    icon: FiActivity
  },
  {
    title: 'TRAIN, 훈련하다!',
    description: '지속적인 연습과 복습으로 실력을 공고히 합니다.',
    icon: FiRepeat
  }
];

const visions = [
  {
    title: '공부 습관',
    heading: '수학이 입시 영어가 취업을 좌우한다면, 습관은 인생을 결정 합니다.',
    description: '좋은 학습 습관은 단순히 성적 향상을 넘어 평생의 자산이 됩니다. 데뷰는 학생들이 효과적인 학습 습관을 형성할 수 있도록 체계적인 가이드를 제공합니다.',
    blogLink: 'https://blog.naver.com/ourdebut'
  },
  {
    title: '학습 스킬',
    heading: '영어는 머리가 아니라 시간이 결정 지으며, 열심히가 아니라 스킬이 성적을 가릅니다.',
    description: '각 영역별 효과적인 학습 전략과 기술을 습득함으로써, 학생들은 더 효율적으로 영어 실력을 향상시킬 수 있습니다. 읽기, 듣기, 말하기, 쓰기 각 영역에 특화된 학습 스킬을 체계적으로 가르칩니다.',
    blogLink: 'https://blog.naver.com/ourdebut'
  }
];

export default function LearningProcess() {
  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in-up">
            <span className="text-[#13588f]">데뷰 영어 완성 과정</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            과정이 곧 완성으로 함께 가는 데뷰 영어 학습
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a href="#discover" className="px-6 py-3 bg-[#13588f] text-white rounded-full hover:bg-[#0e4371] transition-colors transform hover:scale-105 duration-300 flex items-center shadow-md">
              <span className="text-2xl font-bold mr-1">D</span>ISCOVER
            </a>
            <a href="#engage" className="px-6 py-3 bg-[#ff6b6b] text-white rounded-full hover:bg-[#fa5252] transition-colors transform hover:scale-105 duration-300 flex items-center shadow-md">
              <span className="text-2xl font-bold mr-1">E</span>NGAGE
            </a>
            <a href="#boost" className="px-6 py-3 bg-[#37b24d] text-white rounded-full hover:bg-[#2b9e41] transition-colors transform hover:scale-105 duration-300 flex items-center shadow-md">
              <span className="text-2xl font-bold mr-1">B</span>OOST
            </a>
            <a href="#unfold" className="px-6 py-3 bg-[#f59f00] text-white rounded-full hover:bg-[#e67700] transition-colors transform hover:scale-105 duration-300 flex items-center shadow-md">
              <span className="text-2xl font-bold mr-1">U</span>NFOLD
            </a>
            <a href="#train" className="px-6 py-3 bg-[#7950f2] text-white rounded-full hover:bg-[#6741d9] transition-colors transform hover:scale-105 duration-300 flex items-center shadow-md">
              <span className="text-2xl font-bold mr-1">T</span>RAIN
            </a>
          </div>
        </div>
      </section>
      
      {/* DISCOVER 섹션 */}
      <section id="discover" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-6">
                <div className="bg-[#13588f] text-white text-2xl font-bold w-14 h-14 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  D
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">DISCOVER</h2>
              </div>
              <h3 className="text-2xl font-semibold text-[#13588f] mb-4">정확한 진단 → 개별 학습 루틴 설계</h3>
              <div className="space-y-4 text-gray-600">
                <p className="flex items-start">
                  <span className="text-[#13588f] mr-2 text-xl">🔍</span>
                  DEBUT의 학습 과정은 정확한 진단으로부터 시작합니다. 5,000명 이상의 평가 데이터를 기반으로 
                  학생 개개인의 영어 능력을 정밀하게 진단하고, 이를 토대로 맞춤형 학습 루틴을 설계합니다.
                </p>
                <p className="flex items-start">
                  <span className="text-[#13588f] mr-2 text-xl">🧩</span>
                  학생별 학습 성향, 강점과 약점을 분석하여 최적의 학습 경로를 제시합니다. 
                  이는 단순한 레벨 테스트를 넘어 학습자의 잠재력을 발견하는 과정입니다.
                </p>
                <div className="mt-8 transform hover:translate-x-2 transition-transform duration-300">
                  <Link 
                    href="https://blog.naver.com/debut_english" 
                    className="text-[#13588f] font-medium inline-flex items-center hover:underline bg-blue-50 py-2 px-4 rounded-lg shadow-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink className="mr-2" /> 블로그에서 상담 사례 보기
                  </Link>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-md h-80 bg-blue-50 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50">
                  <div className="w-40 h-40 rounded-full bg-[#13588f]/10 flex items-center justify-center">
                    <span className="text-8xl font-bold text-[#13588f]">D</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-[#13588f] py-4 px-6 text-white">
                  <p className="font-semibold flex items-center">
                    <FiTarget className="mr-2" /> DISCOVER
                  </p>
                  <p className="text-sm">데이터 기반 정밀 진단</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ENGAGE 섹션 */}
      <section id="engage" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-full max-w-md h-80 bg-red-50 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-100 to-red-50">
                  <div className="w-40 h-40 rounded-full bg-[#ff6b6b]/10 flex items-center justify-center">
                    <span className="text-8xl font-bold text-[#ff6b6b]">E</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-[#ff6b6b] py-4 px-6 text-white">
                  <p className="font-semibold flex items-center">
                    <FiActivity className="mr-2" /> ENGAGE
                  </p>
                  <p className="text-sm">몰입형 수업 설계</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-[#ff6b6b] text-white text-2xl font-bold w-14 h-14 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  E
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">ENGAGE</h2>
              </div>
              <h3 className="text-2xl font-semibold text-[#ff6b6b] mb-4">몰입 기반 수업 설계</h3>
              <div className="space-y-4 text-gray-600">
                <p className="flex items-start">
                  <span className="text-[#ff6b6b] mr-2 text-xl">🎯</span>
                  학생들의 적극적인 참여와 몰입을 유도하는 수업 설계는 영어 학습의 핵심입니다. 
                  DEBUT은 학생들의 눈높이와 관심사에 맞춘 맞춤형 수업으로 학습 몰입도를 극대화합니다.
                </p>
                <p className="flex items-start">
                  <span className="text-[#ff6b6b] mr-2 text-xl">📚</span>
                  학년과 수준에 따라 세분화된 커리큘럼을 제공합니다:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <Link 
                    href="/classes/elementary-regular" 
                    className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-center transform hover:scale-105 transition-transform duration-300"
                  >
                    <div className="text-3xl text-[#ff6b6b] mb-2">🔤</div>
                    <h4 className="font-semibold text-[#ff6b6b] mb-2">초등 정규</h4>
                    <p className="text-sm text-gray-500">기초부터 탄탄한 영어 실력 형성</p>
                  </Link>
                  <Link 
                    href="/classes/elementary-intensive" 
                    className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-center transform hover:scale-105 transition-transform duration-300"
                  >
                    <div className="text-3xl text-[#ff6b6b] mb-2">🚀</div>
                    <h4 className="font-semibold text-[#ff6b6b] mb-2">초등 인텐시브</h4>
                    <p className="text-sm text-gray-500">심화 학습을 통한 영어 실력 강화</p>
                  </Link>
                  <Link 
                    href="/classes/middle-school" 
                    className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-center transform hover:scale-105 transition-transform duration-300"
                  >
                    <div className="text-3xl text-[#ff6b6b] mb-2">📝</div>
                    <h4 className="font-semibold text-[#ff6b6b] mb-2">중등 정규</h4>
                    <p className="text-sm text-gray-500">내신 및 실용영어 통합 학습</p>
                  </Link>
                </div>
                
                <div className="mt-8 transform hover:translate-x-2 transition-transform duration-300">
                  <Link 
                    href="https://blog.naver.com/debut_english/223184304080" 
                    className="text-[#ff6b6b] font-medium inline-flex items-center hover:underline bg-red-50 py-2 px-4 rounded-lg shadow-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink className="mr-2" /> 수업 방식 사례 보기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* BOOST 섹션 */}
      <section id="boost" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-6">
                <div className="bg-[#37b24d] text-white text-2xl font-bold w-14 h-14 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  B
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">BOOST</h2>
              </div>
              <h3 className="text-2xl font-semibold text-[#37b24d] mb-4">수업 참여 유도 중심 학습</h3>
              <div className="space-y-4 text-gray-600">
                <p className="flex items-start">
                  <span className="text-[#37b24d] mr-2 text-xl">⚡</span>
                  DEBUT의 BOOST 단계는 학생들의 영어 실력을 한 단계 끌어올리는 과정입니다. 
                  적극적인 수업 참여를 통해 학습 효과를 극대화합니다.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#37b24d] transform hover:translate-x-1">
                    <h4 className="font-semibold text-[#37b24d] mb-2 flex items-center">
                      <span className="text-xl mr-2">📘</span> 어휘 훈련
                    </h4>
                    <p>자체 개발한 단어장과 외부 학습 자료를 활용한 체계적인 어휘 학습</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#37b24d] transform hover:translate-x-1">
                    <h4 className="font-semibold text-[#37b24d] mb-2 flex items-center">
                      <span className="text-xl mr-2">🧠</span> 문법 이해
                    </h4>
                    <p>하브루타 방식을 활용한 문법 개념 심화 학습 및 적용 연습</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#37b24d] transform hover:translate-x-1">
                    <h4 className="font-semibold text-[#37b24d] mb-2 flex items-center">
                      <span className="text-xl mr-2">📝</span> 읽기 + 과제 수행
                    </h4>
                    <p>학습 내용의 실제 적용을 통한 이해력과 응용력 향상</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#37b24d] transform hover:translate-x-1">
                    <h4 className="font-semibold text-[#37b24d] mb-2 flex items-center">
                      <span className="text-xl mr-2">🔄</span> 복습 시스템
                    </h4>
                    <p>스터디북과 온라인 AI를 활용한 효과적인 복습 체계</p>
                  </div>
                </div>
                
                <div className="mt-8 transform hover:translate-x-2 transition-transform duration-300">
                  <Link 
                    href="https://blog.naver.com/debut_english/223184303947" 
                    className="text-[#37b24d] font-medium inline-flex items-center hover:underline bg-green-50 py-2 px-4 rounded-lg shadow-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink className="mr-2" /> 학습 효과 사례 보기
                  </Link>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-md h-80 bg-green-50 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-100 to-green-50">
                  <div className="w-40 h-40 rounded-full bg-[#37b24d]/10 flex items-center justify-center">
                    <span className="text-8xl font-bold text-[#37b24d]">B</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-[#37b24d] py-4 px-6 text-white">
                  <p className="font-semibold flex items-center">
                    <FiLayers className="mr-2" /> BOOST
                  </p>
                  <p className="text-sm">영어 능력 향상 가속화</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* UNFOLD 섹션 */}
      <section id="unfold" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-full max-w-md h-80 bg-yellow-50 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-50">
                  <div className="w-40 h-40 rounded-full bg-[#f59f00]/10 flex items-center justify-center">
                    <span className="text-8xl font-bold text-[#f59f00]">U</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-[#f59f00] py-4 px-6 text-white">
                  <p className="font-semibold flex items-center">
                    <FiStar className="mr-2" /> UNFOLD
                  </p>
                  <p className="text-sm">학습 결과 확인 및 성취 보상</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-[#f59f00] text-white text-2xl font-bold w-14 h-14 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  U
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">UNFOLD</h2>
              </div>
              <h3 className="text-2xl font-semibold text-[#f59f00] mb-4">일일 학습 결과 확인 및 성취 보상</h3>
              <div className="space-y-4 text-gray-600">
                <p className="flex items-start">
                  <span className="text-[#f59f00] mr-2 text-xl">🏆</span>
                  UNFOLD 단계에서는 학생들의 학습 성과를 확인하고 성취감을 느낄 수 있도록 합니다. 
                  스터디북 체크와 반밴드 미션 수행을 통해 학습 결과를 추적합니다.
                </p>
                <div className="mt-6 space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-[#f59f00]">
                    <h4 className="font-semibold text-[#f59f00] mb-4 flex items-center">
                      <FiActivity className="mr-2" /> AI 학습 리포트
                    </h4>
                    <p className="text-sm text-gray-600 flex items-start">
                      <span className="text-[#f59f00] mr-2">📊</span>
                      데이터 기반 AI 리포트로 학습 성과를 시각화하여 제공합니다.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-[#f59f00]">
                    <h4 className="font-semibold text-[#f59f00] mb-4 flex items-center">
                      <FiCheckCircle className="mr-2" /> 학습에 대한 보상
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-yellow-50 p-4 rounded-md transform hover:scale-105 transition-transform duration-300">
                        <h5 className="font-medium text-[#f59f00] mb-2 flex items-center">
                          <span className="text-lg mr-2">🎯</span> 미션카드
                        </h5>
                        <p className="text-sm">일일 학습 미션을 완료한 학생들에게 미션카드를 제공하여 성취감을 높입니다.</p>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded-md transform hover:scale-105 transition-transform duration-300">
                        <h5 className="font-medium text-[#f59f00] mb-2 flex items-center">
                          <span className="text-lg mr-2">⭐</span> 파이널드 카드
                        </h5>
                        <p className="text-sm">꾸준한 성과를 보인 학생들에게 파이널드 카드를 수여하여 자긍심을 높입니다.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-[#f59f00]">
                    <h4 className="font-semibold text-[#f59f00] mb-4 flex items-center">
                      <FiStar className="mr-2" /> 분기 고사 챔피언십 시상 시스템
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-yellow-50 p-3 rounded-md text-center transform hover:scale-105 transition-transform duration-300">
                        <span className="text-2xl mb-2 block">🥇</span>
                        <span className="text-[#f59f00] font-semibold">보캡 챔피언</span>
                      </div>
                      <div className="bg-yellow-50 p-3 rounded-md text-center transform hover:scale-105 transition-transform duration-300">
                        <span className="text-2xl mb-2 block">🥈</span>
                        <span className="text-[#f59f00] font-semibold">스피킹 챔피언</span>
                      </div>
                      <div className="bg-yellow-50 p-3 rounded-md text-center transform hover:scale-105 transition-transform duration-300">
                        <span className="text-2xl mb-2 block">🥉</span>
                        <span className="text-[#f59f00] font-semibold">올라운더 챔피언</span>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-gray-600">
                      분기별 성취도에 따라 다양한 분야별 챔피언십을 선정하여 학습 동기를 부여합니다.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 transform hover:translate-x-2 transition-transform duration-300">
                  <Link 
                    href="https://blog.naver.com/debut_english/223200412154" 
                    className="text-[#f59f00] font-medium inline-flex items-center hover:underline bg-yellow-50 py-2 px-4 rounded-lg shadow-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink className="mr-2" /> 보상 시스템 사례 보기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* TRAIN 섹션 */}
      <section id="train" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-6">
                <div className="bg-[#7950f2] text-white text-2xl font-bold w-14 h-14 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  T
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">TRAIN</h2>
              </div>
              <h3 className="text-2xl font-semibold text-[#7950f2] mb-4">장기적인 학습 훈련 시스템</h3>
              <div className="space-y-4 text-gray-600">
                <p className="flex items-start">
                  <span className="text-[#7950f2] mr-2 text-xl">🔄</span>
                  DEBUT의 TRAIN 단계는 학생들의 장기적인 영어 학습 습관을 형성하는 단계입니다. 일회성 성취감이 아닌,
                  지속적인 학습 훈련을 통해 영어 실력의 꾸준한 향상을 목표로 합니다.
                </p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-purple-50 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <h4 className="font-semibold text-[#7950f2] mb-3 flex items-center">
                      <span className="text-xl mr-2">⚙️</span> 학습 루틴 조정
                    </h4>
                    <p className="text-sm">학생들의 성취도와 학교모의 결과에 따라 학습 루틴을 조정합니다.</p>
                  </div>
                  <div className="bg-purple-50 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <h4 className="font-semibold text-[#7950f2] mb-3 flex items-center">
                      <span className="text-xl mr-2">👨‍👩‍👧‍👦</span> 담임 선생님 상담
                    </h4>
                    <p className="text-sm">매월 담임 선생님의 상담을 통해 지속적인 학습 훈련 진행합니다.</p>
                  </div>
                  <div className="bg-purple-50 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <h4 className="font-semibold text-[#7950f2] mb-3 flex items-center">
                      <span className="text-xl mr-2">📊</span> 데이터 기반 학습 조정
                    </h4>
                    <p className="text-sm">학습 데이터에 기반한 개인별 학습 방향 조정과 목표 설정.</p>
                  </div>
                  <div className="bg-purple-50 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <h4 className="font-semibold text-[#7950f2] mb-3 flex items-center">
                      <span className="text-xl mr-2">📈</span> 장기 성장 트래킹
                    </h4>
                    <p className="text-sm">학습 빅데이터 분석을 통한 장기적인 성장 곡선 모니터링</p>
                  </div>
                </div>
                
                <div className="mt-8 transform hover:translate-x-2 transition-transform duration-300">
                  <Link 
                    href="https://blog.naver.com/debut_english/223156384242" 
                    className="text-[#7950f2] font-medium inline-flex items-center hover:underline bg-purple-50 py-2 px-4 rounded-lg shadow-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink className="mr-2" /> 학습 성장 사례 보기
                  </Link>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-md h-80 bg-purple-50 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-100 to-purple-50">
                  <div className="w-40 h-40 rounded-full bg-[#7950f2]/10 flex items-center justify-center">
                    <span className="text-8xl font-bold text-[#7950f2]">T</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-[#7950f2] py-4 px-6 text-white">
                  <p className="font-semibold flex items-center">
                    <FiBookmark className="mr-2" /> TRAIN
                  </p>
                  <p className="text-sm">지속적인 학습 최적화</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA 섹션 */}
      <section className="py-20 bg-gradient-to-r from-[#13588f] via-[#1a6bab] to-[#2179c3] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in-up">DEBUT의 단계별 영어 학습 과정을 시작해보세요!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            맞춤형 영어 학습 여정의 시작, 체계적인 레벨 테스트를 통해 시작해보세요.<br/>
            여러분에게 꼭 맞는 학습 계획을 제안해드립니다.
          </p>
          <Link 
            href="https://booking.naver.com/booking/13/bizes/1068331/items/5609916"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-[#13588f] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            맞춤형 진단 테스트 예약하기 <FiArrowRight className="ml-2" />
          </Link>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold text-white mb-1">D</div>
              <div className="text-sm">DISCOVER</div>
            </div>
            <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold text-white mb-1">E</div>
              <div className="text-sm">ENGAGE</div>
            </div>
            <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold text-white mb-1">B</div>
              <div className="text-sm">BOOST</div>
            </div>
            <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold text-white mb-1">U</div>
              <div className="text-sm">UNFOLD</div>
            </div>
            <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold text-white mb-1">T</div>
              <div className="text-sm">TRAIN</div>
            </div>
          </div>
        </div>
      </section>

      {/* 카카오톡 버튼 - 모든 페이지에 표시 */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://open.kakao.com/o/s19K0tKg"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-yellow-400 hover:bg-yellow-500 text-black w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
          aria-label="KakaoTalk 상담"
        >
          <svg width="28" height="28" viewBox="0 0 256 256" xmlns="이지http://www.w3.org/2000/svg">
            <path d="M128 36C70.562 36 24 72.713 24 118C24 147.67 43.383 173.433 71.563 186.27L66.601 219.371C66.253 221.403 67.545 223.403 69.577 223.751C70.686 223.917 71.795 223.585 72.61 222.892L112.99 193.163C117.892 193.72 122.901 194 128 194C185.438 194 232 157.287 232 118C232 72.713 185.438 36 128 36Z" fill="#000000"/>
          </svg>
        </a>
      </div>

      {/* 고정 버튼 */}
      <div className="fixed bottom-8 left-0 w-full flex justify-center z-40 px-4">
        <div className="flex space-x-4">
          <a
            href="#"
            className="bg-[#13588f] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#0e4371] transition-colors flex items-center transform hover:scale-105 duration-300"
          >
            <FiArrowLeft className="mr-2" /> DEBUT 학습과정 다시 보기
          </a>
          <Link
            href="/"
            className="bg-white text-[#13588f] border border-[#13588f] px-6 py-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors flex items-center transform hover:scale-105 duration-300"
          >
            목록 보기 <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
} 