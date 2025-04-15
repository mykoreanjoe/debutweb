'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiMessageCircle, FiPhone } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 스크롤 감지 효과
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 bg-white transition-all duration-300 ${
      scrolled ? 'shadow-md py-2' : 'shadow-sm py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* 로고 */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-[#13588f]">목동데뷰영어</span>
            </Link>
          </div>

          {/* 네비게이션 - 데스크톱 */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#13588f]">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#13588f]">
              소개
            </Link>
            <Link href="/learning-process" className="text-gray-700 hover:text-[#13588f]">
              학습과정
            </Link>
            <Link href="/classes" className="text-gray-700 hover:text-[#13588f]">
              데뷰클래스
            </Link>
            <Link href="/study-manager" className="text-gray-700 hover:text-[#13588f]">
              스터디매니저
            </Link>
            <Link href="/online-ai" className="text-gray-700 hover:text-[#13588f]">
              온라인AI
            </Link>
            <Link href="/studybook" className="text-gray-700 hover:text-[#13588f]">
              스터디북
            </Link>
            <Link href="/debutin" className="text-gray-700 hover:text-[#13588f]">
              데뷰인
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-[#13588f]">
              FAQ
            </Link>
          </nav>

          {/* CTA 버튼 */}
          <div className="hidden md:flex items-center">
            <div className="ml-4">
              <a
                href="https://booking.naver.com/booking/13/bizes/1068331/items/5609916"
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-md font-medium hover:bg-red-700 transition-all"
              >
                테스트 예약
              </a>
              <a
                href="tel:02-2649-0080"
                className="inline-flex items-center bg-[#13588f] text-white px-4 py-2 rounded-md font-medium hover:opacity-90 transition-all ml-3"
              >
                <FiPhone className="mr-2" /> 연락하기
              </a>
            </div>
          </div>

          {/* 모바일 메뉴 토글 버튼 */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#13588f] p-2"
              aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="container mx-auto px-4 py-4 space-y-4 bg-white shadow-lg">
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, staggerChildren: 0.05 }}
              >
                <Link 
                  href="/" 
                  className="block text-gray-700 hover:text-[#13588f] hover:pl-2 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className="block text-gray-700 hover:text-[#13588f] hover:pl-2 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  소개
                </Link>
                <Link 
                  href="/learning-process" 
                  className="block text-gray-700 hover:text-[#13588f] hover:pl-2 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  학습과정
                </Link>
                <Link 
                  href="/classes" 
                  className="block text-gray-700 hover:text-[#13588f] hover:pl-2 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  데뷰클래스
                </Link>
                <Link 
                  href="/study-manager" 
                  className="block text-gray-700 hover:text-[#13588f] hover:pl-2 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  스터디매니저
                </Link>
                <Link 
                  href="/online-ai" 
                  className="block text-gray-700 hover:text-[#13588f] hover:pl-2 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  온라인AI
                </Link>
                <Link 
                  href="/studybook" 
                  className="block text-gray-700 hover:text-[#13588f] hover:pl-2 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  스터디북
                </Link>
                <Link 
                  href="/debutin" 
                  className="block text-gray-700 hover:text-[#13588f] hover:pl-2 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  데뷰인
                </Link>
                <Link 
                  href="/faq" 
                  className="block text-gray-700 hover:text-[#13588f] hover:pl-2 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </Link>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <a
                    href="https://booking.naver.com/booking/13/bizes/1068331/items/5609916" 
                    className="block bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-all text-center w-full"
                    onClick={() => setIsMenuOpen(false)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    학습 진단 테스트 예약
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* KakaoTalk 채팅 버튼 */}
      <motion.div 
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
      >
        <a 
          href="https://open.kakao.com/o/s19K0tKg" 
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-[#FEE500] hover:bg-[#F6D000] text-black w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="KakaoTalk 상담"
        >
          <FiMessageCircle className="w-6 h-6" />
        </a>
      </motion.div>
    </header>
  );
};

export default Navbar; 