import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight, FiBookOpen, FiMessageSquare, FiTarget, FiEdit, FiBook, FiMic, FiStar, FiAward, FiTrendingUp } from 'react-icons/fi';

export const metadata = {
  title: '데뷰인 | DEBUT 영어학원',
  description: '데뷰 학습 비전으로 한걸음씩 걸어간 학생들의 이야기를 만나보세요. 목동 양천구 영어학원 데뷰의 성공 사례를 소개합니다.',
  keywords: '데뷰인, 영어 학습 성공사례, 영어 성적 향상, 학생 후기, 영어 학습 경험, 목동 영어학원 사례, 양천구 영어학원 후기',
};

// 데뷰 챔피언 데이터
const champions = [
  {
    id: 1,
    name: "박민준",
    grade: "초등 6학년",
    achievement: "보캡 챔피언",
    description: "매일 30분씩 꾸준한 단어 학습으로 3개월 만에 어휘력 2배 향상!",
    quote: "단어를 외우는 게 재미있게 느껴져요. 이제는 책을 읽을 때 모르는 단어가 거의 없어요!",
    icon: FiBook
  },
  {
    id: 2,
    name: "김서연",
    grade: "중등 2학년",
    achievement: "스피킹 챔피언",
    description: "처음에는 말하기를 두려워했지만, 이제는 자신감 있게 영어로 대화를 이끌어 갑니다.",
    quote: "전에는 영어로 말하는 게 무서웠는데, 이제는 제가 먼저 질문도 하고 대답도 할 수 있어요!",
    icon: FiMic
  },
  {
    id: 3,
    name: "이준호",
    grade: "초등 5학년",
    achievement: "그래머 챔피언",
    description: "데뷰의 체계적인 문법 학습법으로 문장 구조를 완벽하게 이해했습니다.",
    quote: "문법이 어렵다고 생각했는데, 이제는 문장을 분석하는 게 마치 퍼즐 맞추기 같아요!",
    icon: FiEdit
  },
  {
    id: 4,
    name: "최하은",
    grade: "중등 1학년",
    achievement: "리딩 챔피언",
    description: "한 달에 영어책 5권을 읽는 독서 루틴으로 독해력과 어휘력을 동시에 향상시켰습니다.",
    quote: "영어 책을 읽는 게 이제는 저의 취미가 되었어요. 매일 밤 잠들기 전에 꼭 읽어요!",
    icon: FiBookOpen
  },
  {
    id: 5,
    name: "정도윤",
    grade: "초등 4학년",
    achievement: "올라운더 챔피언",
    description: "듣기, 말하기, 읽기, 쓰기 골고루 발전하여 전체 성적이 크게 향상되었습니다.",
    quote: "영어 공부가 재미있어요. 어떤 분야든 자신 있게 도전할 수 있어요!",
    icon: FiStar
  },
  {
    id: 6,
    name: "장유진",
    grade: "중등 3학년",
    achievement: "성장 챔피언",
    description: "1년 동안 꾸준한 학습으로 영어 내신 성적이 4등급에서 1등급으로 향상되었습니다.",
    quote: "제 자신도 놀랐어요. 포기하지 않고 꾸준히 하니까 정말 실력이 늘더라고요!",
    icon: FiTrendingUp
  }
];

const DebutinPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">데뷰인</h1>
        <p className="text-lg mb-10 max-w-2xl mx-auto text-center">
          데뷰인들은 데뷰 학습 비전으로 한걸음씩 걸어간 학생들을 일컫습니다.
          각자의 목표를 향해 꾸준히 노력하며 성장하는 우리 학생들의 이야기를 소개합니다.
        </p>
        
        {/* 데뷰 챔피언 섹션 */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-4">데뷰 챔피언</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            꾸준한 노력으로 뛰어난 성과를 이룬 우리 학생들을 소개합니다
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {champions.map(champion => (
              <div key={champion.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500">
                <div className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-[#13588f]">
                      <champion.icon className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <div className="inline-block px-3 py-1 bg-blue-100 text-[#13588f] text-sm font-medium rounded-full mb-2">
                      {champion.grade}
                    </div>
                    <h3 className="text-xl font-bold">{champion.name}</h3>
                    <div className="flex items-center justify-center mt-1">
                      <FiAward className="text-yellow-500 mr-1" />
                      <span className="text-sm font-medium text-gray-700">{champion.achievement}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 text-center">{champion.description}</p>
                  <div className="bg-gray-50 p-4 rounded-lg italic text-gray-700 text-sm">
                    "{champion.quote}"
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              여러분도 데뷰의 체계적인 학습 시스템으로 영어 실력을 완성해보세요!
            </p>
            <Link 
              href="https://booking.naver.com/booking/13/bizes/1068331/items/5609916" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#13588f] text-white px-6 py-3 rounded-lg hover:bg-[#0e4371] transition-colors shadow-md"
            >
              <FiTarget className="mr-2" /> 맞춤형 진단 테스트 예약하기
            </Link>
          </div>
        </div>
      </section>
      
      {/* 카카오톡 상담 */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://pf.kakao.com/_pGxkPn/chat"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-yellow-400 hover:bg-yellow-500 text-black w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
          aria-label="KakaoTalk 상담"
        >
          <svg width="28" height="28" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <path d="M128 36C70.562 36 24 72.713 24 118C24 147.67 43.383 173.433 71.563 186.27L66.601 219.371C66.253 221.403 67.545 223.403 69.577 223.751C70.686 223.917 71.795 223.585 72.61 222.892L112.99 193.163C117.892 193.72 122.901 194 128 194C185.438 194 232 157.287 232 118C232 72.713 185.438 36 128 36Z" fill="#000000"/>
          </svg>
        </a>
      </div>
    </main>
  );
};

export default DebutinPage; 