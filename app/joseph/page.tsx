import Link from 'next/link';
import { FiArrowLeft, FiBookOpen, FiAward, FiMessageCircle, FiBriefcase, FiStar, FiBook } from 'react-icons/fi';

export const metadata = {
  title: '최요셉 원장님 - DEBUT 영어학원',
  description: '목동 데뷰 영어학원의 최요셉 원장님 소개. 학력, 주요 이력, 보유 자격증 등 원장님의 전문성과 경력에 대해 알아보세요.',
  keywords: '목동 영어학원 원장, 최요셉 원장, 데뷰 영어학원 원장, 영어 교육 전문가, 영어 교육 경력',
};

export default function JosephPage() {
  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              <span className="text-primary">최요셉</span> 원장님
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              풍부한 경험과 전문성으로 학생들의 영어 학습을 이끄는 데뷰 영어학원의 원장입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 원장님 소개 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-lg shadow-md mb-12">
              <div className="flex items-center mb-6">
                <FiMessageCircle className="text-primary w-8 h-8 mr-4" />
                <h2 className="text-3xl font-bold text-gray-800">Experiences</h2>
              </div>
              <p className="text-xl text-primary font-semibold mb-6">😀 목동 데뷰 영어 학원 원장</p>
            </div>

            {/* 학력 섹션 */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <FiBook className="text-primary w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">👍 학력</h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FiStar className="text-primary w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Harding University, Masters of Divinity</p>
                      <p className="text-gray-600">(3년 과정 수료)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FiStar className="text-primary w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Ohio Valley University</p>
                      <p className="text-gray-600">Summa Cum Laude 졸. (최우수 졸)</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* 주요 이력 섹션 */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <FiBriefcase className="text-primary w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">👍 주요 이력</h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <ul className="space-y-6">
                  <li>
                    <h3 className="text-lg font-semibold text-primary mb-2">프라미스 어학원 강서 캠퍼스 원장</h3>
                    <ul className="list-disc list-inside pl-4 text-gray-600 space-y-1">
                      <li>200명 이상의 강사 면접 트레이닝</li>
                      <li>교육 프로그램 개발과 평가</li>
                    </ul>
                  </li>
                  <li>
                    <h3 className="text-lg font-semibold text-primary mb-2">프라미스 어학원, 신정 캠퍼스 [최상위반 팀장]</h3>
                    <ul className="list-disc list-inside pl-4 text-gray-600 space-y-1">
                      <li>목동, 목일, 신서 중등 토플/수능/내신 담임</li>
                      <li>해외 리터니 학생 다수 담당</li>
                    </ul>
                  </li>
                  <li>
                    <h3 className="text-lg font-semibold text-primary mb-2">프라미스 어학원, 목동 캠퍼스 [최상위반 팀장]</h3>
                    <ul className="list-disc list-inside pl-4 text-gray-600 space-y-1">
                      <li>신목, 영도, 월촌, 중3 전교 1등 담임</li>
                    </ul>
                  </li>
                  <li>
                    <h3 className="text-lg font-semibold text-primary mb-2">현재 어학원, 서초 캠퍼스, 원어 파트 팀장 [최상위반 담당]</h3>
                    <ul className="list-disc list-inside pl-4 text-gray-600 space-y-1">
                      <li>토플 110, 100점반, 텝스 최상위반 담임</li>
                    </ul>
                  </li>
                  <li>
                    <h3 className="text-lg font-semibold text-primary mb-2">강남 파고다 어학원 WRITING 강사</h3>
                    <ul className="list-disc list-inside pl-4 text-gray-600 space-y-1">
                      <li>Story and Academics 과목, 유학 대비 수업 진행</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            {/* 자격증 섹션 */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <FiAward className="text-primary w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">👍 자격증</h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FiStar className="text-primary w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                    <p>ETS Writing 프로그램 크라이테리온 자격</p>
                  </li>
                  <li className="flex items-start">
                    <FiStar className="text-primary w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                    <p>훈장마을 Paraphrasing Writing 강의</p>
                  </li>
                  <li className="flex items-start">
                    <FiStar className="text-primary w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                    <p>강서 대학교 및 중학교 특강 다수 진행</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* 뒤로가기 버튼 */}
            <div className="flex justify-center mt-12">
              <Link 
                href="/about" 
                className="inline-flex items-center bg-gray-100 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-200 transition-colors"
              >
                <FiArrowLeft className="mr-2" /> 학원 소개로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 