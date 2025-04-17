"use client";

import React from 'react';
import Link from 'next/link';
import { FiArrowLeft, FiMessageSquare } from 'react-icons/fi';

export default function CalendarPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Link 
              href="/inside"
              className="flex items-center text-gray-600 hover:text-[#13588f] mr-4 transition-colors"
            >
              <FiArrowLeft className="mr-1" /> 뒤로 가기
            </Link>
            <h1 className="text-3xl font-bold text-[#13588f]">데뷰 캘린더</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl">
            데뷰 영어학원의 주요 일정과 이벤트를 확인하세요. 정기 테스트, 학부모 상담, 특별 이벤트 등이 모두 표시됩니다.
          </p>
        </div>
      </section>

      {/* 캘린더 섹션 */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <div className="responsive-iframe-container" style={{ position: 'relative', overflow: 'hidden', paddingTop: '56.25%' }}>
              <iframe 
                src="https://calendar.google.com/calendar/embed?src=c_d6f75e50631d89b7cac99ce1d8d0df31172fc9e7d6a91b7e2fa5fa50042d8b2d%40group.calendar.google.com&ctz=Asia%2FSeoul" 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                frameBorder="0" 
                scrolling="no"
                title="데뷰 영어학원 캘린더"
                className="w-full h-full min-h-[500px] md:min-h-[700px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 안내 섹션 */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">캘린더 이용 안내</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                <span className="font-semibold">캘린더 보기를 변경하려면</span> 우측 상단의 버튼을 이용하세요.
                일별, 주별, 월별, 일정별 보기가 가능합니다.
              </p>
              <p>
                <span className="font-semibold">일정 상세 정보를 확인하려면</span> 해당 일정을 클릭하세요.
                장소, 시간, 내용 등 자세한 정보를 확인할 수 있습니다.
              </p>
              <p>
                <span className="font-semibold">문의사항이 있으시면</span> 아래 상담 버튼을 통해 연락해 주세요.
              </p>
            </div>
            <div className="mt-6">
              <a
                href="https://open.kakao.com/o/s19K0tKg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-medium transition-colors shadow-md"
              >
                <FiMessageSquare className="mr-2" /> 카카오톡으로 문의하기
              </a>
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
          <svg width="28" height="28" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <path d="M128 36C70.562 36 24 72.713 24 118C24 147.67 43.383 173.433 71.563 186.27L66.601 219.371C66.253 221.403 67.545 223.403 69.577 223.751C70.686 223.917 71.795 223.585 72.61 222.892L112.99 193.163C117.892 193.72 122.901 194 128 194C185.438 194 232 157.287 232 118C232 72.713 185.438 36 128 36Z" fill="#000000"/>
          </svg>
        </a>
      </div>
    </div>
  );
} 