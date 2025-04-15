"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FiArrowLeft, FiCalendar, FiCheck, FiEdit3, FiBook, FiBookmark, FiClipboard, FiFileText, FiTag } from 'react-icons/fi';
// Next.js App Router에서는 Head 컴포넌트를 사용하지 않습니다
// import Head from 'next/head';

interface StudyTask {
  date: string;
  mission: string;
  isChecked: boolean;
}

// Next.js App Router에서는 metadata export를 client component에서 직접 사용할 수 없습니다
// 이 부분은 별도의 metadata.ts 파일이나 layout.tsx 파일로 이동해야 합니다
// export const metadata = {
//   title: 'DEBUT 스터디북 - 학습 포트폴리오',
//   description: '영어 학습 포트폴리오를 관리하고 Writing, 특목고 입시 준비, NIE 활동을 기록하는 스터디북',
//   keywords: '영어학습, 포트폴리오, 특목고, 외고, NIE, TED, Writing, 중등영어, 내신대비, 수능대비',
// };

export default function StudyBookPage() {
  const [name, setName] = useState('');
  const [classGroup, setClassGroup] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [writing, setWriting] = useState('');
  const [activeTab, setActiveTab] = useState('assignment');

  // 진도표 데이터
  const scheduleData = {
    title: "25-03월 학기",
    class: "D3 410",
    books: ["VC", "CC", "ORD"],
    schedule: [
      { date: "3/5", content: "P14 낭독, P15 문장단 암기", checked: true },
      { date: "3/10", content: "CC 17-20 문장쓰기", checked: true },
      { date: "3/12", content: "ORD Art 2,3 읽기", checked: false }
    ]
  };

  // 포트폴리오 데이터
  const portfolioData = {
    vocabulary: [
      { date: "4/14", word: "popular", meaning: "well-liked", context: "Giant pandas are popular animals." },
      { date: "4/14", word: "rare", meaning: "not common", context: "Pandas are so rare, most people think it is exciting to see even a sleeping panda." },
      { date: "4/14", word: "visitor", meaning: "person who visits a place", context: "There were as many as 1000 visitors in one hour!" }
    ],
    grammar: [
      { date: "4/02", pattern: "as many as + 숫자", usage: "수량이 예상보다 많음을 강조", example: "There were as many as 1000 visitors." },
      { date: "4/04", pattern: "spend + 시간 + -ing", usage: "시간을 ~하는데 쓰다", example: "Hsing-Hsing spent most of his time sleeping." }
    ]
  };

  // 특목고 준비 자료
  const specialPrepData = {
    ted: [
      { date: "4/17", title: "The Power of Introverts", speaker: "Susan Cain", summary: "내향적인 성격의 장점과 사회적 가치에 대한 강연" },
      { date: "4/21", title: "How Language Shapes Thought", speaker: "Lera Boroditsky", summary: "언어가 사고방식에 미치는 영향에 대한 강연" }
    ],
    nie: [
      { date: "4/25", title: "Climate Change Effects on Ocean Life", source: "The Guardian", summary: "기후변화가 해양 생태계에 미치는 영향에 대한 기사 분석" },
      { date: "4/28", title: "The Future of AI in Education", source: "Times", summary: "교육 분야에서 인공지능의 활용과 전망에 대한 기사 분석" }
    ]
  };

  // 내신 대비 자료
  const examPrepData = [
    { date: "5/02", subject: "영어I", unit: "Lesson 4: Technology", content: "교과서 핵심 표현 정리" },
    { date: "5/05", subject: "영어I", unit: "Lesson 4: Technology", content: "지문 해석 및 어휘 정리" },
    { date: "5/07", subject: "영어I", unit: "Lesson 4: Technology", content: "기출문제 오답 분석" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* 뒤로가기 버튼 */}
        <div className="mb-8">
          <Link href="/" className="inline-block">
            <FiArrowLeft className="text-2xl text-gray-600 hover:text-[#13588f]" />
          </Link>
        </div>

        {/* 메인 콘텐츠 */}
        <div className="max-w-4xl mx-auto">
          {/* 스터디북 제목 */}
          <h1 className="text-4xl font-bold text-center mb-6">STUDY BOOK</h1>

          {/* 태그 */}
          <div className="flex justify-center gap-2 mb-8">
            <span className="text-gray-600">#예습</span>
            <span className="text-gray-600">#복습</span>
            <span className="text-gray-600">#관리</span>
            <span className="text-gray-600">#개별화</span>
            <span className="text-gray-600">#특목고</span>
            <span className="text-gray-600">#NIE</span>
            <span className="text-gray-600">#Writing</span>
          </div>

          {/* 학생 정보 */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="text-center">
              <span className="text-gray-600 mr-4">반</span>
              <input
                type="text"
                value={classGroup}
                onChange={(e) => setClassGroup(e.target.value)}
                className="border-b-2 border-gray-300 focus:border-[#13588f] outline-none px-2 py-1 w-32 text-center"
              />
            </div>
            <div className="text-center">
              <span className="text-gray-600 mr-4">이름</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-b-2 border-gray-300 focus:border-[#13588f] outline-none px-2 py-1 w-32 text-center"
              />
            </div>
          </div>

          {/* 탭 네비게이션 */}
          <div className="flex border-b mb-6">
            <button 
              className={`px-4 py-2 ${activeTab === 'assignment' ? 'border-b-2 border-[#13588f] text-[#13588f] font-medium' : 'text-gray-500'}`}
              onClick={() => setActiveTab('assignment')}
            >
              <span className="flex items-center"><FiClipboard className="mr-2" /> 과제 관리</span>
            </button>
            <button 
              className={`px-4 py-2 ${activeTab === 'portfolio' ? 'border-b-2 border-[#13588f] text-[#13588f] font-medium' : 'text-gray-500'}`}
              onClick={() => setActiveTab('portfolio')}
            >
              <span className="flex items-center"><FiBookmark className="mr-2" /> 포트폴리오</span>
            </button>
            <button 
              className={`px-4 py-2 ${activeTab === 'special' ? 'border-b-2 border-[#13588f] text-[#13588f] font-medium' : 'text-gray-500'}`}
              onClick={() => setActiveTab('special')}
            >
              <span className="flex items-center"><FiTag className="mr-2" /> 특목고 준비</span>
            </button>
            <button 
              className={`px-4 py-2 ${activeTab === 'exam' ? 'border-b-2 border-[#13588f] text-[#13588f] font-medium' : 'text-gray-500'}`}
              onClick={() => setActiveTab('exam')}
            >
              <span className="flex items-center"><FiBook className="mr-2" /> 내신 대비</span>
            </button>
          </div>

          {/* 과제 관리 탭 */}
          {activeTab === 'assignment' && (
            <>
              {/* 진도표 섹션 */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-[#13588f]">{scheduleData.title}</h2>
                  <span className="text-lg font-medium">{scheduleData.class}</span>
                </div>

                <div className="border rounded-lg overflow-hidden bg-white">
                  <table className="w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-2 px-4 text-left">날짜</th>
                        <th className="py-2 px-4 text-left">미션/과제</th>
                        <th className="py-2 px-4 text-center w-20">확인</th>
                      </tr>
                    </thead>
                    <tbody>
                      {scheduleData.schedule.map((item, index) => (
                        <tr key={index} className="border-t">
                          <td className="py-3 px-4">{item.date}</td>
                          <td className="py-3 px-4">{item.content}</td>
                          <td className="py-3 px-4 text-center">
                            {item.checked && <FiCheck className="mx-auto text-[#13588f]" />}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Writing 섹션 */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-[#13588f]">Writing</h2>
                  <div className="flex items-center text-gray-600">
                    <FiCalendar className="mr-2" />
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="border-none bg-transparent"
                    />
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <div className="mb-4">
                    <div className="min-h-[300px]" style={{ 
                      backgroundImage: 'repeating-linear-gradient(transparent, transparent 27px, #e5e7eb 28px)',
                      lineHeight: '28px',
                      padding: '14px 0'
                    }}>
                      <textarea
                        value={writing}
                        onChange={(e) => setWriting(e.target.value)}
                        className="w-full h-full border-none outline-none resize-none bg-transparent leading-7"
                        style={{ lineHeight: '28px' }}
                        placeholder="Write your answer here..."
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <FiEdit3 className="mr-1" />
                      <span>손글씨로 작성해주세요</span>
                    </div>
                    <div className="flex items-center">
                      <FiCheck className="mr-1" />
                      <span>선생님 확인</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* 포트폴리오 탭 */}
          {activeTab === 'portfolio' && (
            <div className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-xl font-bold text-[#13588f] mb-4">학습 포트폴리오</h2>
              
              {/* 어휘 섹션 */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3 flex items-center">
                  <FiTag className="mr-2" /> 틀린 어휘 목록
                </h3>
                <div className="bg-white rounded-lg p-4">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="py-2 px-3 text-left">날짜</th>
                          <th className="py-2 px-3 text-left">단어</th>
                          <th className="py-2 px-3 text-left">의미</th>
                          <th className="py-2 px-3 text-left">문맥</th>
                        </tr>
                      </thead>
                      <tbody>
                        {portfolioData.vocabulary.map((item, index) => (
                          <tr key={index} className="border-t">
                            <td className="py-2 px-3">{item.date}</td>
                            <td className="py-2 px-3 font-medium">{item.word}</td>
                            <td className="py-2 px-3">{item.meaning}</td>
                            <td className="py-2 px-3 text-sm">{item.context}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* 문법 섹션 */}
              <div>
                <h3 className="text-lg font-medium mb-3 flex items-center">
                  <FiBookmark className="mr-2" /> 중요 문법 패턴
                </h3>
                <div className="bg-white rounded-lg p-4">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="py-2 px-3 text-left">날짜</th>
                          <th className="py-2 px-3 text-left">패턴</th>
                          <th className="py-2 px-3 text-left">용법</th>
                          <th className="py-2 px-3 text-left">예문</th>
                        </tr>
                      </thead>
                      <tbody>
                        {portfolioData.grammar.map((item, index) => (
                          <tr key={index} className="border-t">
                            <td className="py-2 px-3">{item.date}</td>
                            <td className="py-2 px-3 font-medium">{item.pattern}</td>
                            <td className="py-2 px-3">{item.usage}</td>
                            <td className="py-2 px-3 text-sm">{item.example}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 특목고 준비 탭 */}
          {activeTab === 'special' && (
            <div className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-xl font-bold text-[#13588f] mb-4">특목고 입시 준비</h2>
              
              {/* TED 섹션 */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3 flex items-center">
                  <FiFileText className="mr-2" /> TED 강연 노트
                </h3>
                <div className="space-y-4">
                  {specialPrepData.ted.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg p-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-500 text-sm">{item.date}</span>
                        <span className="text-sm text-gray-600">{item.speaker}</span>
                      </div>
                      <h4 className="font-medium text-[#13588f] mb-2">{item.title}</h4>
                      <p className="text-sm">{item.summary}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* NIE 섹션 */}
              <div>
                <h3 className="text-lg font-medium mb-3 flex items-center">
                  <FiFileText className="mr-2" /> NIE (News in English)
                </h3>
                <div className="space-y-4">
                  {specialPrepData.nie.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg p-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-500 text-sm">{item.date}</span>
                        <span className="text-sm text-gray-600">{item.source}</span>
                      </div>
                      <h4 className="font-medium text-[#13588f] mb-2">{item.title}</h4>
                      <p className="text-sm">{item.summary}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 내신 대비 탭 */}
          {activeTab === 'exam' && (
            <div className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-xl font-bold text-[#13588f] mb-4">내신 대비</h2>
              
              <div className="space-y-4">
                {examPrepData.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-500 text-sm">{item.date}</span>
                      <span className="text-sm font-medium text-gray-600">{item.subject}</span>
                    </div>
                    <h4 className="font-medium text-[#13588f] mb-2">{item.unit}</h4>
                    <p className="text-sm">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 학원 정보 */}
          <div className="text-center mt-8 text-gray-500 text-sm">
            DEBUT LANGUAGE SCHOOL
            <br />
            데뷰영어학원
          </div>
        </div>
      </div>
    </div>
  );
} 