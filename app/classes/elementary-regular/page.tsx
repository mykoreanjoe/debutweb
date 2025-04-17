import Link from 'next/link';
// import Image from 'next/image';
import { FiArrowLeft, FiClock, FiCalendar, FiAward, FiUsers } from 'react-icons/fi';

export default function ElementaryRegular() {
  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-yellow-50 to-yellow-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/classes" className="inline-flex items-center text-amber-600 hover:underline mb-8">
              <FiArrowLeft className="mr-2" /> 모든 클래스 보기
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              초등 정규 <span className="text-amber-600">프로그램</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              기초부터 탄탄하게 쌓아올리는 영어 교육의 핵심, 초등학생을 위한 체계적인 영어 학습 프로그램입니다.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-custom-soft flex items-center">
                <FiUsers className="text-amber-600 mr-3 h-6 w-6" />
                <div>
                  <p className="text-sm text-gray-500">대상</p>
                  <p className="font-medium">초등학교 1~5학년</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-custom-soft flex items-center">
                <FiAward className="text-amber-600 mr-3 h-6 w-6" />
                <div>
                  <p className="text-sm text-gray-500">레벨</p>
                  <p className="font-medium">G1 ~ G7</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-custom-soft flex items-center">
                <FiClock className="text-amber-600 mr-3 h-6 w-6" />
                <div>
                  <p className="text-sm text-gray-500">기간</p>
                  <p className="font-medium">3개월 기본, 3개월 심화 과정</p>
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
      
      {/* 초등부 로드맵 (새로 추가) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">초등부 로드맵</h2>
            <div className="bg-yellow-50 p-4 rounded-lg shadow-md mb-10">
              <h3 className="text-xl font-bold text-center mb-6">흥미있는 수업과 미션 수행으로 기본기를 탄탄히 다집니다.</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-yellow-100">
                      <th className="border border-gray-300 p-3 text-left">레벨</th>
                      <th className="border border-gray-300 p-3 text-center bg-yellow-300" colSpan={2}>DK, DK+</th>
                      <th className="border border-gray-300 p-3 text-center bg-yellow-200" colSpan={2}>D1, D1+</th>
                      <th className="border border-gray-300 p-3 text-center bg-amber-300" colSpan={2}>D2, D2+</th>
                      <th className="border border-gray-300 p-3 text-center bg-orange-300" colSpan={2}>D3, D3+</th>
                      <th className="border border-gray-300 p-3 text-center bg-orange-400" colSpan={2}>D4, D4+</th>
                      <th className="border border-gray-300 p-3 text-center bg-red-400" colSpan={2}>D5, D5+</th>
                      <th className="border border-gray-300 p-3 text-center bg-rose-500" colSpan={2}>D6, D6+</th>
                      <th className="border border-gray-300 p-3 text-center bg-amber-800" colSpan={2}>D7, D7+</th>
                      <th className="border border-gray-300 p-3 text-center bg-purple-600" colSpan={2}>D ELITE</th>
                      <th className="border border-gray-300 p-3 text-center bg-purple-700" colSpan={2}>D CREATOR</th>
                    </tr>
                    <tr>
                      <th className="border border-gray-300 p-3 text-left">국내수준</th>
                      <td className="border border-gray-300 p-2 text-center" colSpan={2}>초3</td>
                      <td className="border border-gray-300 p-2 text-center" colSpan={2}>초4-5</td>
                      <td className="border border-gray-300 p-2 text-center" colSpan={2}>초5-6</td>
                      <td className="border border-gray-300 p-2 text-center" colSpan={2}>초6-중1</td>
                      <td className="border border-gray-300 p-2 text-center" colSpan={2}>중1-중2</td>
                      <td className="border border-gray-300 p-2 text-center" colSpan={2}>중2-중3</td>
                      <td className="border border-gray-300 p-2 text-center" colSpan={2}>중3-고1</td>
                      <td className="border border-gray-300 p-2 text-center" colSpan={2}>고1-고2</td>
                      <td className="border border-gray-300 p-2 text-center" colSpan={2}>수능 중상위권 이상</td>
                    </tr>
                    <tr>
                      <th className="border border-gray-300 p-3 text-left">미국수준</th>
                      <td className="border border-gray-300 p-2 text-center" colSpan={2}>PK</td>
                      <td className="border border-gray-300 p-2 text-center" colSpan={2}>G1</td>
                      <td className="border border-gray-300 p-2 text-center" colSpan={2}>G2</td>
                      <td className="border border-gray-300 p-2 text-center" colSpan={2}>G3</td>
                      <td className="border border-gray-300 p-2 text-center" colSpan={2}>G4</td>
                      <td className="border border-gray-300 p-2 text-center" colSpan={2}>G5</td>
                      <td className="border border-gray-300 p-2 text-center" colSpan={2}>G6</td>
                      <td className="border border-gray-300 p-2 text-center" colSpan={2}>G6+</td>
                      <td className="border border-gray-300 p-2 text-center" colSpan={2}>G7+</td>
                    </tr>
                    <tr>
                      <th className="border border-gray-300 p-3 text-left">성취 목표</th>
                      <td className="border border-gray-300 p-2 text-center" colSpan={2}>파닉스<br/>마스터</td>
                      <td className="border border-gray-300 p-2 text-center" colSpan={2}>토플 Basic<br/>3-5급</td>
                      <td className="border border-gray-300 p-2 text-center" colSpan={2}>토플 Basic<br/>2-1급</td>
                      <td className="border border-gray-300 p-2 text-center" colSpan={2}>토플 Junior<br/>4-5급</td>
                      <td className="border border-gray-300 p-2 text-center" colSpan={2}>토플 Junior<br/>3-4급</td>
                      <td className="border border-gray-300 p-2 text-center" colSpan={2}>토플 Junior<br/>2-1급</td>
                      <td className="border border-gray-300 p-2 text-center" colSpan={2}>토플 High-Junior<br/>2-1급</td>
                      <td className="border border-gray-300 p-2 text-center" colSpan={2}>토플 Junior<br/>수능 중상위권</td>
                      <td className="border border-gray-300 p-2 text-center" colSpan={2}>토플<br/>수능 고득점</td>
                    </tr>
                    <tr>
                      <th className="border border-gray-300 p-3 text-left">어휘</th>
                      <td className="border border-gray-300 p-2 text-center" colSpan={2}>400+</td>
                      <td className="border border-gray-300 p-2 text-center" colSpan={2}>600+</td>
                      <td className="border border-gray-300 p-2 text-center" colSpan={2}>800+</td>
                      <td className="border border-gray-300 p-2 text-center" colSpan={2}>800+</td>
                      <td className="border border-gray-300 p-2 text-center" colSpan={2}>800+</td>
                      <td className="border border-gray-300 p-2 text-center" colSpan={2}>800+</td>
                      <td className="border border-gray-300 p-2 text-center" colSpan={2}>800+</td>
                      <td className="border border-gray-300 p-2 text-center" colSpan={2}>1,000+</td>
                      <td className="border border-gray-300 p-2 text-center" colSpan={2}>1,000+</td>
                    </tr>
                    <tr>
                      <th className="border border-gray-300 p-3 text-left">미교과</th>
                      <td className="border border-gray-300 p-2 text-center" colSpan={20}>미국 교과과정 (각 레벨별 사고력 신장)</td>
                    </tr>
                    <tr>
                      <th className="border border-gray-300 p-3 text-left">문법</th>
                      <td className="border border-gray-300 p-2 text-center" colSpan={20}>초등 영문법 777 마스터</td>
                    </tr>
                    <tr>
                      <th className="border border-gray-300 p-3 text-left">비문학</th>
                      <td className="border border-gray-300 p-2 text-center" colSpan={20}>Oxford Read and Discover 외 다양한 분야의 컨텐츠<br/>(역사, 문화, 과학, 지리)</td>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
            
            {/* 시간표 섹션 추가 */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">초등 정규 시간표</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold text-amber-600 mb-4 flex items-center">
                    <FiCalendar className="mr-2" /> 월수금 수업
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-amber-50 rounded-md">
                      <span className="font-medium w-24">1교시</span>
                      <span className="text-gray-700">2:30 ~ 4:05</span>
                      <span className="ml-auto text-sm text-gray-500">(95분)</span>
                    </div>
                    <div className="flex items-center p-3 bg-amber-50 rounded-md">
                      <span className="font-medium w-24">2교시</span>
                      <span className="text-gray-700">4:10 ~ 5:45</span>
                      <span className="ml-auto text-sm text-gray-500">(95분)</span>
                    </div>
                    <div className="flex items-center p-3 bg-amber-50 rounded-md">
                      <span className="font-medium w-24">3교시</span>
                      <span className="text-gray-700">6:00 ~ 7:35</span>
                      <span className="ml-auto text-sm text-gray-500">(95분)</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold text-amber-600 mb-4 flex items-center">
                    <FiCalendar className="mr-2" /> 화목 수업
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-amber-50 rounded-md">
                      <span className="font-medium w-24">1교시</span>
                      <span className="text-gray-700">3:30 ~ 5:55</span>
                      <span className="ml-auto text-sm text-gray-500">(145분)</span>
                    </div>
                    <div className="flex items-center p-3 bg-amber-50 rounded-md">
                      <span className="font-medium w-24">2교시</span>
                      <span className="text-gray-700">6:00 ~ 8:25</span>
                      <span className="ml-auto text-sm text-gray-500">(145분)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 상담 유도 섹션 */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">초등 정규 프로그램 상담받기</h3>
              <p className="text-gray-600 mb-6">
                자녀의 영어 능력과 학습 스타일에 맞는 최적의 클래스를 추천해 드립니다.
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