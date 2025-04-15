import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight, FiBookOpen, FiMessageSquare, FiTarget, FiEdit, FiBook, FiMic } from 'react-icons/fi';

export const metadata = {
  title: '데뷰인 - 최고의 성과와 노력의 증거 | DEBUT 영어학원',
  description: '뛰어난 영어 실력과 꾸준한 노력으로 뛰어난 성취를 이룩한 DEBUT 영어학원의 학생들을 소개합니다. 성공 스토리와 성과를 확인하세요.',
  keywords: '영어 성공사례, 영어 학습 성과, 데뷰인, 영어 우수 학생, 영어 성공스토리, 영어 학습 후기',
};

export default function Debutin() {
  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 - 웅장한 느낌의 배경과 메시지 */}
      <section className="relative py-32 lg:py-48 bg-gradient-to-b from-blue-900 to-blue-700 overflow-hidden">
        {/* 배경 효과 */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute w-96 h-96 -top-10 -left-10 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute w-96 h-96 top-1/2 right-1/4 bg-blue-400 rounded-full filter blur-3xl"></div>
          <div className="absolute w-80 h-80 bottom-20 right-10 bg-blue-300 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white">
              <span className="text-white">데</span>
              <span className="text-white">뷰</span>
              <span className="text-white"> </span>
              <span className="text-white">인</span>
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 mb-12 leading-relaxed">
              최고의 노력과 성과!<br />
              데뷰 학부모 선생님 학생들의 인정 받은 1인
            </p>
            <div className="w-32 h-1 bg-blue-300 mx-auto mb-12"></div>
            <p className="text-xl text-blue-200 mb-8 leading-relaxed">
              영어를 익히는 것이 쉬웠다면, 누구나 뛰어난 실력을 가졌을 것입니다.<br />
              하지만 탁월한 영어 실력은 꾸준한 노력과 체계적인 관리가 뒷받침될<br />
              때 가능합니다. 학습 과정이 결코 쉽진 않지만, 더 높은 목표를 정해 쉬<br />
              없이 노력하여 뛰어난 성취를 이룩한 이들을 '데뷰인'이라 부릅니다.<br />
              우리는 데뷰인들을 존경하고 기억 할 것입니다.
            </p>
          </div>
        </div>
        
        {/* 데코레이션 요소 */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,208C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>
      
      {/* 학원 전경 섹션 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">학원 전경</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
                <div className="h-72 bg-gray-200 relative">
                  <Image
                    src="/images/facility1.jpg"
                    alt="학원 내부"
                    fill
                    unoptimized
                    style={{objectFit: 'cover'}}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">편안한 학습 공간</h3>
                  <p className="text-gray-600">
                    집중력을 높이는 넓고 쾌적한 학습 환경을 제공합니다.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
                <div className="h-72 bg-gray-200 relative">
                  <Image
                    src="/images/facility2.jpg"
                    alt="학습 공간"
                    fill
                    unoptimized
                    style={{objectFit: 'cover'}}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">모던한 강의실</h3>
                  <p className="text-gray-600">
                    최신 교육 장비를 갖춘 현대적인 학습 공간입니다.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
                <div className="h-72 bg-gray-200 relative">
                  <Image
                    src="/images/facility3.jpg"
                    alt="휴식 공간"
                    fill
                    unoptimized
                    style={{objectFit: 'cover'}}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">학생 휴게 공간</h3>
                  <p className="text-gray-600">
                    학습 중간에 휴식을 취할 수 있는 편안한 휴게 공간입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 감동의 순간들 - 이미지 갤러리 */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">감동의 순간들</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
                <div className="h-72 bg-gray-200 relative">
                  <Image
                    src="/images/moments/moments1.jpg"
                    alt="성취의 순간"
                    fill
                    unoptimized
                    style={{objectFit: 'cover'}}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">첫 성취의 기쁨 🏆</h3>
                  <p className="text-gray-600">
                    처음으로 목표했던 성적을 달성한 순간, 그 감동은 평생 잊을 수 없는 기억이 됩니다.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
                <div className="h-72 bg-gray-200 relative">
                  <Image
                    src="/images/moments/moments2.jpg"
                    alt="함께하는 배움"
                    fill
                    unoptimized
                    style={{objectFit: 'cover'}}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">함께하는 성장 👨‍👩‍👧‍👦</h3>
                  <p className="text-gray-600">
                    혼자가 아닌 함께 배우고 성장하는 과정에서 더 큰 성취감을 느낄 수 있습니다.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
                <div className="h-72 bg-gray-200 relative">
                  <Image
                    src="/images/moments/moments3.jpg"
                    alt="목표 달성"
                    fill
                    unoptimized
                    style={{objectFit: 'cover'}}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">꿈을 향한 도전 💫</h3>
                  <p className="text-gray-600">
                    매일의 작은 노력이 모여 자신의 꿈을 이루는 발판이 됩니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 의미 설명 섹션 */}
      <section className="py-24 bg-gradient-to-b from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">데뷰인이란? 🤔</h2>
            <p className="text-xl mb-12 leading-relaxed">
              <span className="font-semibold text-blue-200">데뷰인(Debut人)</span>은 DEBUT 영어학원에서 
              자신만의 학습 루틴을 형성하고, 도전을 통해 성장하여 자신의 영어 능력을 한 단계 
              끌어올린 학생들을 의미합니다. 👨‍🎓👩‍🎓
            </p>
            <div className="bg-blue-900 bg-opacity-50 p-10 rounded-lg shadow-xl border border-blue-500">
              <p className="text-2xl italic">
                "영어 학습은 단순한 지식 습득이 아닌, 자신을 표현하고 세상과 소통하는 <br/>
                <span className="text-blue-200 font-semibold">새로운 자아를 발견하는 과정</span>입니다." 💭
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 데뷰 챔피언 영역별 소개 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">데뷰 챔피언들</h2>
            
            {/* 초등부 챔피언 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-blue-100 mb-16">
              <div className="p-8">
                <h3 className="text-3xl font-bold text-blue-600 mb-8 text-center">초등부 챔피언</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="flex flex-col items-center p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                    <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                      <FiBook className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-blue-700">스터디북</h4>
                    <p className="text-sm text-center text-gray-600">자기주도 학습의 첫 걸음</p>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition-colors">
                    <div className="w-16 h-16 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
                      <FiMic className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-indigo-700">스피킹</h4>
                    <p className="text-sm text-center text-gray-600">자신감 있는 영어 표현력</p>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 rounded-lg bg-yellow-50 hover:bg-yellow-100 transition-colors">
                    <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                      <FiBookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-yellow-700">보카</h4>
                    <p className="text-sm text-center text-gray-600">탄탄한 어휘력 구축</p>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
                    <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                      <FiMessageSquare className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-green-700">하브루타 문법</h4>
                    <p className="text-sm text-center text-gray-600">질문과 토론으로 배우는 문법</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 중등부 챔피언 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-blue-100">
              <div className="p-8">
                <h3 className="text-3xl font-bold text-purple-600 mb-8 text-center">중등부 챔피언</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="flex flex-col items-center p-4 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors">
                    <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                      <FiBook className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-purple-700">스터디북</h4>
                    <p className="text-sm text-center text-gray-600">체계적인 학습 계획</p>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 rounded-lg bg-pink-50 hover:bg-pink-100 transition-colors">
                    <div className="w-16 h-16 bg-pink-500 rounded-lg flex items-center justify-center mb-4">
                      <FiTarget className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-pink-700">내신 100점</h4>
                    <p className="text-sm text-center text-gray-600">학교 영어 완벽 대비</p>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors">
                    <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                      <FiBookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-orange-700">보카</h4>
                    <p className="text-sm text-center text-gray-600">폭넓은 어휘력 향상</p>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 rounded-lg bg-teal-50 hover:bg-teal-100 transition-colors">
                    <div className="w-16 h-16 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                      <FiEdit className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-teal-700">하브루타 문법</h4>
                    <p className="text-sm text-center text-gray-600">심층적 문법 이해</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 데뷰인 함께하기 메시지 */}
            <div className="bg-gray-50 rounded-lg p-8 mt-16 text-center">
              <h3 className="text-2xl font-bold mb-6">함께 모여 데뷰하는 사람들</h3>
              <p className="text-lg text-gray-700 mb-8">
                다양한 분야에서 탁월함을 보여준 데뷰 챔피언들이 모여<br />
                서로의 지식과 경험을 나누며 함께 성장하는 커뮤니티가 데뷰인입니다.<br />
                영어 실력뿐만 아니라 인성과 협동심까지 갖춘 진정한 글로벌 인재로 함께 성장합니다.
              </p>
              <div className="flex justify-center">
                <Link href="/classes" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg mr-4 hover:bg-blue-700 transition-colors shadow-md">
                  데뷰 클래스 알아보기 <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 영감을 주는 명언 섹션 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-16">
              <div className="text-6xl text-gray-200 font-serif absolute -top-10 left-0">"</div>
              <blockquote className="text-2xl md:text-3xl text-gray-700 leading-relaxed text-center italic px-12">
                위대한 성취의 비결은 단지 끈기와 결단력을 갖는 것입니다. 
                매일의 작은 노력이 모여 큰 변화를 만들어 냅니다.
              </blockquote>
              <div className="text-6xl text-gray-200 font-serif absolute -bottom-10 right-0">"</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-1 bg-primary mb-6"></div>
              <p className="text-xl text-gray-600 text-center">
                노력하는 모든 데뷰 학생들에게
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 콜투액션 섹션 */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        {/* 배경 효과 */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute w-96 h-96 top-0 right-0 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute w-80 h-80 bottom-0 left-1/4 bg-blue-400 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-6">함께 성장하는 여정을 시작하세요 💫</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            매일의 작은 노력이 모여 큰 변화를 만듭니다. 🌱→🌳<br/>
            데뷰의 "같이 완성" 철학으로 영어 실력 향상의 여정을 함께 완성해 나가세요!
          </p>
          <p className="text-lg mb-10 max-w-2xl mx-auto text-blue-100">
            학생, 학부모, 선생님이 함께 만들어가는 성공 스토리의 주인공이 되어보세요.
          </p>
          <Link 
            href="https://booking.naver.com/booking/13/bizes/1068331/items/5609916"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors shadow-lg"
          >
            맞춤형 진단 테스트 예약하기 <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
} 