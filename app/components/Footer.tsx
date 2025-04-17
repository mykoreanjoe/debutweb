import React from 'react';
import Link from 'next/link';
import { FiMapPin, FiPhone, FiMail, FiClock, FiInstagram, FiYoutube, FiMessageCircle, FiEdit } from 'react-icons/fi';

const Footer = () => {
  const year = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: '소개', href: '/about' },
    { name: '학습과정', href: '/learning-process' },
    { name: '클래스', href: '/classes' },
    { name: '스터디매니저', href: '/study-manager' },
    { name: '온라인AI', href: '/online-ai' },
    { name: '스터디북', href: '/studybook' },
    { name: '데뷰인', href: '/debutin' },
    { name: 'FAQ', href: '/faq' },
    { name: '학습관', href: '/inside' },
  ];

  const socialLinks = [
    { name: '카카오톡', href: 'https://pf.kakao.com/_pGxkPn/chat', icon: FiMessageCircle },
    { name: '블로그', href: 'https://blog.naver.com/ourdebut', icon: FiEdit },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 로고 및 간략 소개 */}
          <div>
            <div className="flex items-center mb-4">
              <div className="h-7 w-7 flex items-center justify-center bg-white text-[#13588f] font-bold rounded-md">
                D
              </div>
              <h2 className="text-xl font-bold ml-2 text-white">DEBUT</h2>
            </div>
            <p className="text-gray-400 mb-6">
              학생, 학부모, 교사가 함께 영어 능력을 완성해나가는 
              효과적인 방식의 영어교육을 제공합니다.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* 빠른 링크 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">빠른 링크</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a 
                  href="https://booking.naver.com/booking/13/bizes/1068331/items/5609916"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  상담 예약
                </a>
              </li>
            </ul>
          </div>
          
          {/* 연락처 정보 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">연락처</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <FiMapPin className="w-5 h-5 text-white mr-3 mt-1" />
                <span className="text-gray-400">서울특별시 양천구 신목로 38, 202호</span>
              </div>
              <div className="flex items-center">
                <FiPhone className="w-5 h-5 text-white mr-3" />
                <a href="tel:02-6952-1131" className="text-gray-400 hover:text-white transition-colors">
                  02-6952-1131
                </a>
              </div>
              <div className="flex items-center">
                <FiMail className="w-5 h-5 text-white mr-3" />
                <a href="mailto:debutedu@naver.com" className="text-gray-400 hover:text-white transition-colors">
                  debutedu@naver.com
                </a>
              </div>
              <div className="flex items-start">
                <FiClock className="w-5 h-5 text-white mr-3 mt-1" />
                <div className="text-gray-400">
                  <p>평일: 13:00-22:00</p>
                  <p>토요일: 11:00-16:00</p>
                  <p>일요일/공휴일: 휴무</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-white font-bold mr-3 mt-1">등록번호</span>
                <span className="text-gray-400">6382호</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {year} DEBUT 영어학원. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 