"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: '소개', href: '/about' },
  { name: '학습과정', href: '/learning-process' },
  { name: '클래스', href: '/classes' },
  { name: '스터디매니저', href: '/study-manager' },
  { name: '온라인AI', href: '/online-ai' },
  { name: '스터디북', href: '/studybook' },
  { name: '데뷰인', href: '/debutin' },
  { name: 'FAQ', href: '/faq' },
  { name: '학습관', href: '/inside', isButton: true },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-2' : 'bg-white py-3'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* 로고 */}
          <Link href="/" className="flex items-center">
            <div className="relative h-7 w-7 sm:h-8 sm:w-8">
              <Image
                src="/images/logo.png"
                alt="DEBUT 영어학원 로고"
                fill
                sizes="(max-width: 640px) 28px, 32px"
                priority
                className="object-contain"
              />
            </div>
            <span className="ml-2 text-lg sm:text-xl font-bold text-[#13588f]">DEBUT</span>
          </Link>
          
          {/* 데스크탑 네비게이션 */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className={`font-medium ${link.isButton ? 'bg-[#13588f] text-white px-3 py-1 rounded-md hover:bg-[#0e4371]' : 'text-gray-700 hover:text-[#13588f]'} transition-colors`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* 모바일 메뉴 토글 버튼 */}
          <button 
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t mt-2">
          <nav className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className={`font-medium ${link.isButton ? 'bg-[#13588f] text-white text-center' : 'text-gray-700 hover:text-[#13588f]'} px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="https://booking.naver.com/booking/13/bizes/1068331/items/5609916"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full bg-red-600 text-white text-center py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              상담 예약하기
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
} 