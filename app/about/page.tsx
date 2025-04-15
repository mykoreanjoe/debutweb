// import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
// import { FiCheck, FiTarget, FiStar } from 'react-icons/fi';

export const metadata = {
  title: 'DEBUT 영어학원 소개 - 맞춤형 영어 교육 전문',
  description: 'DEBUT 영어학원은 목동과 양천구 지역의 초등학생과 중학생을 위한 맞춤형 영어 교육 전문 학원입니다. 학원 소개, 교육 철학, 비전과 사명에 대해 알아보세요.',
  keywords: '영어학원 소개, 목동 영어학원, 양천구 영어학원, DEBUT 소개, 영어 교육 철학, 맞춤형 영어 교육, 영어학원 비전',
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              <span className="text-primary">DEBUT</span> 소개
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              모든 학생이 자신의 영어 능력을 마음껏 표현할 수 있도록, <br/>
              최적의 학습 환경과 맞춤형 교육을 제공합니다.
            </p>
          </div>
        </div>
      </section>
      
      {/* 원장 인사말 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">원장 인사말</h2>
          <div className="max-w-3xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-4">최요셉 <span className="text-gray-500 text-lg">(Joseph Choi)</span></h3>
              <p className="text-gray-600 mb-4">
                안녕하세요, 목동데뷰 영어학원 원장 최요셉입니다.
              </p>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  영어 학습은 단순한 지식 습득이 아닌, 새로운 세계와 소통하는 능력을 기르는 과정이라고 믿습니다.
                </p>
                <p className="mb-4">
                  15년간의 교육 현장 경험을 통해 깨달은 것은, 모든 학생에게는 자신만의 학습 속도와 스타일이 있다는 것입니다. 
                  데뷰는 이러한 개인차를 존중하며, 학생 개개인에게 최적화된 학습 루틴을 설계하고 꾸준한 성장을 지원합니다.
                </p>
                <p className="mb-4">
                  영어 실력 향상을 넘어, 자기주도적 학습 능력과 성취의 기쁨을 경험할 수 있는 
                  데뷰의 여정에 여러분을 초대합니다. 함께 완성해 나가는 영어 학습, Let's Do It!
                </p>
                <div className="mt-6">
                  <Link 
                    href="/joseph" 
                    className="inline-flex items-center bg-[#13588f] text-white px-6 py-3 rounded-md hover:bg-[#0e4371] transition-colors"
                  >
                    <FiArrowRight className="mr-2" /> 데뷰 원장이 궁금하시다면
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 교육 철학 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">데뷰의 교육 철학 - 같이 완성</h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              데뷰의 교육은 <span className="text-primary font-semibold">"같이 완성"</span>이라는 철학에 기반합니다. 
              학생 혼자만의 노력이 아닌, 학생·학부모·선생님이 함께 협력하여 영어 실력을 완성해 나가는 
              과정을 중요시합니다. 각자의 역할과 책임을 다할 때 최상의 교육적 성과가 이루어진다고 믿습니다.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl text-primary mb-4">🧩</div>
              <h3 className="text-xl font-semibold mb-3">맞춤형 학습 설계</h3>
              <p className="text-gray-600">
                5,000명 이상의 학습 데이터 분석을 기반으로 각 학생의 능력과 성향에 맞는 최적의 학습 루틴을 설계합니다.
                일관된 루틴의 형성이 학습 효과를 극대화한다고 믿습니다.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl text-primary mb-4">🌊</div>
              <h3 className="text-xl font-semibold mb-3">자연스러운 언어 습득</h3>
              <p className="text-gray-600">
                듣기와 읽기를 통한 충분한 입력 후, 말하기와 쓰기로 이어지는 자연스러운 언어 습득 과정을 
                존중합니다. 의미 있는 반복과 실제적 활용을 강조합니다.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl text-primary mb-4">🛠️</div>
              <h3 className="text-xl font-semibold mb-3">균형 잡힌 기술 개발</h3>
              <p className="text-gray-600">
                문법, 어휘, 독해, 듣기, 말하기, 쓰기의 균형 잡힌 발전을 목표로 합니다. 
                특히 실생활에서 활용 가능한 실용적인 영어 능력 향상에 중점을 둡니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA 섹션 */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">DEBUT와 함께 영어 실력을 완성해보세요!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            맞춤형 영어 학습 여정의 시작, 체계적인 레벨 테스트를 통해 시작해보세요.<br/>
            여러분에게 꼭 맞는 학습 계획을 제안해드립니다.
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