import Link from 'next/link';
import { FiArrowLeft, FiClock, FiCalendar, FiAward, FiUsers } from 'react-icons/fi';

export default function MiddleSchool() {
  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/classes" className="inline-flex items-center text-secondary hover:underline mb-8">
              <FiArrowLeft className="mr-2" /> 모든 클래스 보기
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              중등 정규 <span className="text-secondary">프로그램</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              내신과 실용영어를 균형 있게 학습하며 학업 성취와 실질적인 영어 능력을 동시에 키우는 중학생 맞춤형 과정입니다.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-custom-soft flex items-center">
                <FiUsers className="text-secondary mr-3 h-6 w-6" />
                <div>
                  <p className="text-sm text-gray-500">대상</p>
                  <p className="font-medium">중학교 1~3학년</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-custom-soft flex items-center">
                <FiAward className="text-secondary mr-3 h-6 w-6" />
                <div>
                  <p className="text-sm text-gray-500">레벨</p>
                  <p className="font-medium">INTER ~ MASTER</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-custom-soft flex items-center">
                <FiClock className="text-secondary mr-3 h-6 w-6" />
                <div>
                  <p className="text-sm text-gray-500">기간</p>
                  <p className="font-medium">3개월 / 6개월 단위 과정</p>
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
      
      {/* 중등 과정 레벨 차트 (신규 추가) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">중등과정</h2>
            <p className="text-center text-lg text-gray-700 mb-10">
              수능 독해를 직독 직해하며, 문법에 필요한 개념을 정리하고<br/>
              오답을 포트폴리오화하여 내신과 수능을 조기에 완성하는것을 목표로 합니다.
            </p>
            
            {/* 레벨 차트 */}
            <div className="mb-16">
              <div className="overflow-x-auto bg-blue-50 rounded-xl p-6 shadow-md">
                <div className="grid grid-cols-9 gap-2 max-w-4xl mx-auto mb-8">
                  <div className="flex justify-center items-center p-2 bg-gray-100 rounded-lg text-center">
                    <span className="text-sm font-semibold">고3</span>
                  </div>
                  <div className="col-span-2"></div>
                  <div className="col-span-2"></div>
                  <div className="col-span-2"></div>
                  <div className="flex justify-center items-center p-2 bg-purple-600 text-white rounded-lg text-center">
                    <div>
                      <div className="font-bold">수능 ONE</div>
                      <div className="text-xs">6개월+</div>
                    </div>
                  </div>
                  <div className="col-span-2"></div>

                  <div className="flex justify-center items-center p-2 bg-gray-100 rounded-lg text-center">
                    <span className="text-sm font-semibold">고2</span>
                  </div>
                  <div className="col-span-2"></div>
                  <div className="flex justify-center items-center p-2 bg-blue-700 text-white rounded-lg text-center">
                    <div>
                      <div className="font-bold">고등<br/>Master</div>
                      <div className="text-xs">6개월+</div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center p-2 bg-blue-800 text-white rounded-lg text-center">
                    <div>
                      <div className="font-bold">고등<br/>Master+</div>
                      <div className="text-xs">6개월+</div>
                    </div>
                  </div>
                  <div className="col-span-4"></div>

                  <div className="flex justify-center items-center p-2 bg-gray-100 rounded-lg text-center">
                    <span className="text-sm font-semibold">고1</span>
                  </div>
                  <div className="col-span-2"></div>
                  <div className="flex justify-center items-center p-2 bg-blue-600 text-white rounded-lg text-center">
                    <div>
                      <div className="font-bold">고등<br/>Inter</div>
                      <div className="text-xs">6개월+</div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center p-2 bg-blue-700 text-white rounded-lg text-center">
                    <div>
                      <div className="font-bold">고등<br/>Inter+</div>
                      <div className="text-xs">6개월+</div>
                    </div>
                  </div>
                  <div className="col-span-4"></div>

                  <div className="flex justify-center items-center p-2 bg-gray-100 rounded-lg text-center">
                    <span className="text-sm font-semibold">중3</span>
                  </div>
                  <div className="col-span-1"></div>
                  <div className="flex justify-center items-center p-2 bg-blue-500 text-white rounded-lg text-center">
                    <div>
                      <div className="font-bold">중등<br/>Master</div>
                      <div className="text-xs">3개월</div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center p-2 bg-blue-500 text-white rounded-lg text-center">
                    <div>
                      <div className="font-bold">중등<br/>Master+</div>
                      <div className="text-xs">3개월</div>
                    </div>
                  </div>
                  <div className="col-span-5"></div>

                  <div className="flex justify-center items-center p-2 bg-gray-100 rounded-lg text-center">
                    <span className="text-sm font-semibold">중학교<br/>완성</span>
                  </div>
                  <div className="col-span-8"></div>

                  <div className="flex justify-center items-center p-2 bg-gray-100 rounded-lg text-center">
                    <span className="text-sm font-semibold">중2</span>
                  </div>
                  <div className="col-span-8"></div>
                </div>

                {/* 레벨 상세 테이블 */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-3 text-center">레벨</th>
                        <th className="border border-gray-300 p-3 text-center bg-green-600 text-white">중등<br/>INTER</th>
                        <th className="border border-gray-300 p-3 text-center bg-green-600 text-white">중등<br/>INTER+</th>
                        <th className="border border-gray-300 p-3 text-center bg-blue-500 text-white">중등<br/>MASTER</th>
                        <th className="border border-gray-300 p-3 text-center bg-blue-500 text-white">중등<br/>MASTER+</th>
                        <th className="border border-gray-300 p-3 text-center bg-blue-600 text-white">고등<br/>INTER</th>
                        <th className="border border-gray-300 p-3 text-center bg-blue-700 text-white">고등<br/>INTER+</th>
                        <th className="border border-gray-300 p-3 text-center bg-blue-700 text-white">고등<br/>MASTER</th>
                        <th className="border border-gray-300 p-3 text-center bg-blue-800 text-white">고등<br/>MASTER+</th>
                        <th className="border border-gray-300 p-3 text-center bg-purple-600 text-white">수능 ONE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th className="border border-gray-300 p-3 text-left bg-gray-50">학습기간</th>
                        <td className="border border-gray-300 p-3 text-center">3개월</td>
                        <td className="border border-gray-300 p-3 text-center">3개월</td>
                        <td className="border border-gray-300 p-3 text-center">3개월</td>
                        <td className="border border-gray-300 p-3 text-center">3개월</td>
                        <td className="border border-gray-300 p-3 text-center">6개월</td>
                        <td className="border border-gray-300 p-3 text-center">6개월</td>
                        <td className="border border-gray-300 p-3 text-center">6개월</td>
                        <td className="border border-gray-300 p-3 text-center">6개월</td>
                        <td className="border border-gray-300 p-3 text-center">최소 6개월</td>
                      </tr>
                      <tr>
                        <th className="border border-gray-300 p-3 text-left bg-gray-50">성취목표</th>
                        <td className="border border-gray-300 p-3 text-center">중3 모의<br/>3-2등급</td>
                        <td className="border border-gray-300 p-3 text-center">중3 모의<br/>1등급</td>
                        <td className="border border-gray-300 p-3 text-center">중3 모의<br/>1등급</td>
                        <td className="border border-gray-300 p-3 text-center">고1 모의<br/>4-3등급</td>
                        <td className="border border-gray-300 p-3 text-center">고1 모의<br/>3-2등급</td>
                        <td className="border border-gray-300 p-3 text-center">고1 모의<br/>2등급</td>
                        <td className="border border-gray-300 p-3 text-center">고2 모의<br/>3-2등급</td>
                        <td className="border border-gray-300 p-3 text-center">고2 모의<br/>2등급+</td>
                        <td className="border border-gray-300 p-3 text-center">고3 모의<br/>2등급+</td>
                      </tr>
                      <tr>
                        <th className="border border-gray-300 p-3 text-left bg-gray-50">입시독해</th>
                        <td className="border border-gray-300 p-3 text-center" colSpan={4}>중2-3 수준의 독해, 문제풀이</td>
                        <td className="border border-gray-300 p-3 text-center" colSpan={5}>고1-고2 수준의 독해, 문제풀이</td>
                      </tr>
                      <tr>
                        <th className="border border-gray-300 p-3 text-left bg-gray-50">수능독해</th>
                        <td className="border border-gray-300 p-3 text-center" colSpan={4}>중3-고1 수준 리스닝 문제 풀이</td>
                        <td className="border border-gray-300 p-3 text-center" colSpan={5}>고2-고3 수준 리스닝 문제 풀이</td>
                      </tr>
                      <tr>
                        <th className="border border-gray-300 p-3 text-left bg-gray-50">문법</th>
                        <td className="border border-gray-300 p-3 text-center" colSpan={4}>중등 전과정에 걸친 개념과 문제 풀이</td>
                        <td className="border border-gray-300 p-3 text-center" colSpan={5}>중등 전과정에 걸친 개념과 문제 풀이</td>
                      </tr>
                      <tr>
                        <th className="border border-gray-300 p-3 text-left bg-gray-50">온라인</th>
                        <td className="border border-gray-300 p-3 text-center" colSpan={9}>매주 2회 고1~ 수능 수준의 선진 시험 진행(최소모의고사 40회 이상 시행)</td>
                      </tr>
                      <tr>
                        <th className="border border-gray-300 p-3 text-left bg-gray-50">프로젝트</th>
                        <td className="border border-gray-300 p-3 text-center" colSpan={9}>수행 / 내신/ 수능대비를 위한 "서술형/Writing" 집중 연계 프로젝트(학기 1권 완성)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            {/* 시간표 섹션 추가 */}
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">중등 정규 시간표</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-lg font-bold text-secondary mb-4 flex items-center">
                        <FiCalendar className="mr-2" /> 월금 수업
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center p-3 bg-secondary/5 rounded-md">
                          <span className="font-medium w-24">1교시</span>
                          <span className="text-gray-700">5:00 ~ 7:25</span>
                          <span className="ml-auto text-sm text-gray-500">(2시간 25분)</span>
                        </div>
                        <div className="flex items-center p-3 bg-secondary/5 rounded-md">
                          <span className="font-medium w-24">2교시</span>
                          <span className="text-gray-700">7:30 ~ 10:00</span>
                          <span className="ml-auto text-sm text-gray-500">(2시간 30분)</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-lg font-bold text-secondary mb-4 flex items-center">
                        <FiCalendar className="mr-2" /> 화목 수업
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center p-3 bg-secondary/5 rounded-md">
                          <span className="font-medium w-24">1교시</span>
                          <span className="text-gray-700">5:00 ~ 7:25</span>
                          <span className="ml-auto text-sm text-gray-500">(2시간 25분)</span>
                        </div>
                        <div className="flex items-center p-3 bg-secondary/5 rounded-md">
                          <span className="font-medium w-24">2교시</span>
                          <span className="text-gray-700">7:30 ~ 10:00</span>
                          <span className="ml-auto text-sm text-gray-500">(2시간 30분)</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-lg font-bold text-secondary mb-4 flex items-center">
                        <FiCalendar className="mr-2" /> 수요일 클리닉
                      </h4>
                      <div className="bg-secondary/5 p-4 rounded-md">
                        <h5 className="font-semibold mb-2 text-secondary">학생 개별 클리닉</h5>
                        <p className="text-gray-600 text-sm mb-3">학생별 학습 진도와 이해도에 따라 맞춤형 개별 지도를 제공합니다.</p>
                        <ul className="text-gray-700 text-sm space-y-2">
                          <li className="flex items-start">
                            <span className="text-secondary mr-2">•</span>
                            <span>어려움을 겪는 부분 집중 보충</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-secondary mr-2">•</span>
                            <span>개인별 진도 맞춤 학습</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-secondary mr-2">•</span>
                            <span>취약 영역 진단 및 처방</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      
      {/* 상담 유도 섹션 */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">중등 정규 프로그램 상담받기</h3>
              <p className="text-gray-600 mb-6">
                내신 성적 향상과 실용 영어 능력 향상을 동시에 원하는 중학생을 위한 최적의 프로그램입니다.
                개인별 영어 수준과 목표에 맞는 맞춤형 학습 계획을 상담해 드립니다.
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