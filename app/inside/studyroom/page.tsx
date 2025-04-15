"use client";

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { FiArrowLeft, FiLock, FiUnlock, FiX, FiSearch, FiMessageSquare } from 'react-icons/fi';
import Image from 'next/image';

interface GrammarItem {
  id: number;
  level: string;
  concept: string;
  title: string;
  videoId: string;
  duration: string;
  tags: string[];
}

interface StudyData {
  items: GrammarItem[];
}

// 로딩 컴포넌트 추가
function LoadingComponent() {
  return (
    <div className="flex justify-center items-center h-40">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      <p className="ml-4 text-gray-600">컨텐츠 로딩 중...</p>
    </div>
  );
}

export default function StudyRoomPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [studyData, setStudyData] = useState<StudyData>({ items: [] });
  const [selectedVideo, setSelectedVideo] = useState<GrammarItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [searchResults, setSearchResults] = useState<GrammarItem[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  // 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        
        // 캐시 방지를 위한 타임스탬프 추가
        const timestamp = new Date().getTime();
        
        try {
          const response = await fetch(`/api/studyroom?search=${searchQuery}&t=${timestamp}`);
          
          if (!response.ok) {
            throw new Error(`API 응답 오류: (상태 코드: ${response.status})`);
          }
          
          const data = await response.json();
          setStudyData(data);
        } catch (error) {
          console.error('API 호출 실패, 정적 데이터 사용:', error);
          // 정적 데이터 예시를 사용하여 폴백
          setStudyData({
            items: [
              {
                id: 1,
                level: "초급",
                concept: "기본 문장 구조",
                title: "영어 문장의 기본 구조 이해하기",
                videoId: "xki1IBFLPAw",
                duration: "15분",
                tags: ['문장구조', '기본문법', '주어동사']
              },
              {
                id: 2,
                level: "초급",
                concept: "시제",
                title: "현재시제 완벽 정복",
                videoId: "tNEG0Wbc5eQ",
                duration: "20분",
                tags: ['시제', '현재시제', '기본문법']
              },
              {
                id: 11,
                level: "중급",
                concept: "분사구문",
                title: "분사구문 완벽 정리",
                videoId: "168dKlRc7Hg",
                duration: "24분",
                tags: ['분사구문', '현재분사', '과거분사']
              },
              {
                id: 21,
                level: "고급",
                concept: "도치",
                title: "도치 완벽 정리",
                videoId: "ehQ3uoS7YqE",
                duration: "28분",
                tags: ['도치', '강조', '고급문법']
              }
            ]
          });
        }
        
        setIsLoading(false);
      } catch (error) {
        console.error('데이터 로딩 중 오류 발생:', error);
        // 사용자에게 오류 메시지 표시
        alert(`데이터를 불러오는 중 오류가 발생했습니다: ${error instanceof Error ? error.message : '알 수 없는 오류'}`);
        setIsLoading(false);
      }
    };

    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated, searchQuery]);

  // 검색어 변경 시 실시간 검색 결과 업데이트
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    const results = studyData.items.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.concept.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.level.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    
    setSearchResults(results);
    setShowSearchResults(true);
  }, [searchQuery, studyData.items]);

  // 연관 검색어 추출
  const getRelatedTags = () => {
    if (searchQuery.trim() === '') return [];
    
    const allTags = studyData.items.flatMap(item => item.tags);
    const uniqueTags = Array.from(new Set(allTags));
    
    return uniqueTags
      .filter(tag => 
        tag.toLowerCase().includes(searchQuery.toLowerCase()) &&
        tag.toLowerCase() !== searchQuery.toLowerCase()
      )
      .slice(0, 5);
  };

  // 비밀번호 확인
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'debutedu') {
      setIsAuthenticated(true);
      setPasswordError('');
    } else {
      setPasswordError('비밀번호가 올바르지 않습니다.');
    }
  };

  // 비디오 선택
  const handleVideoSelect = (video: GrammarItem) => {
    setSelectedVideo(video);
  };

  // 비디오 닫기
  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  // 검색 처리
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSearchResults(true);
  };

  // 검색 결과 카드 컴포넌트
  const SearchResultCard = ({ item, index }: { item: GrammarItem; index: number }) => (
    <div
      onClick={() => handleVideoSelect(item)}
      className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md cursor-pointer transition-shadow"
    >
      <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-md">
        <Image
          src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index < 3}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = `https://img.youtube.com/vi/${item.videoId}/mqdefault.jpg`;
          }}
        />
      </div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-[#13588f]">{item.concept}</span>
        <span className="text-sm text-gray-500 flex items-center">
          {item.duration}
        </span>
      </div>
      <h3 className="font-medium text-gray-800">{item.title}</h3>
      <div className="mt-2">
        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">
          {item.level}
        </span>
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded mr-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  // 검색 결과 컴포넌트
  const SearchResultSection = () => {
    return (
      <div className="mt-8">
        {isLoading ? (
          <LoadingComponent />
        ) : (
          <>
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((item, index) => (
                  <Suspense key={item.id} fallback={<LoadingComponent />}>
                    <SearchResultCard item={item} index={index} />
                  </Suspense>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-lg text-gray-600">검색 결과가 없습니다.</p>
                <p className="text-sm text-gray-500 mt-2">다른 검색어로 다시 시도해보세요.</p>
              </div>
            )}
          </>
        )}
      </div>
    );
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-8 mt-10">
            <div className="flex justify-center mb-6">
              <FiLock className="text-4xl text-[#13588f]" />
            </div>
            <h2 className="text-2xl font-bold text-center mb-6">문법 스터디룸 접속</h2>
            <form onSubmit={handlePasswordSubmit}>
              <div className="mb-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#13588f]"
                  placeholder="비밀번호를 입력하세요"
                />
                {passwordError && (
                  <p className="text-red-500 text-sm mt-2">{passwordError}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-[#13588f] text-white py-2 rounded-lg hover:bg-[#0e4371] transition-colors"
              >
                접속하기
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* 헤더 */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Link href="/inside" className="mr-4">
              <FiArrowLeft className="text-2xl text-gray-600 hover:text-[#13588f]" />
            </Link>
            <h1 className="text-3xl font-bold text-[#13588f]">문법 스터디룸</h1>
          </div>
          <div className="flex items-center text-green-500">
            <FiUnlock className="mr-2" />
            <span>접속 중</span>
          </div>
        </div>

        {/* 검색창 */}
        <div className="mb-8">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="문법 개념이나 제목으로 검색하세요"
              className="w-full px-4 py-3 pl-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#13588f]"
            />
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          </form>
          
          {/* 연관 검색어 */}
          {searchQuery.trim() !== '' && (
            <div className="mt-2">
              <p className="text-sm text-gray-500 mb-2">연관 검색어:</p>
              <div className="flex flex-wrap gap-2">
                {getRelatedTags().map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 검색 결과 */}
        <Suspense fallback={<LoadingComponent />}>
          <SearchResultSection />
        </Suspense>

        {/* 학습 자료 목록 */}
        {!showSearchResults && (
          <div className="space-y-8">
            {['초급', '중급', '고급'].map((level) => (
              <div key={level} className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-[#13588f] mb-6">{level} 문법</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {studyData.items
                    .filter(item => item.level === level)
                    .map((item, index) => (
                      <SearchResultCard key={item.id} item={item} index={index} />
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 비디오 플레이어 모달 */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-4 w-full max-w-4xl">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{selectedVideo.title}</h3>
                  <p className="text-sm text-gray-500">{selectedVideo.concept}</p>
                </div>
                <button onClick={handleCloseVideo} className="text-gray-500 hover:text-gray-700">
                  <FiX className="text-2xl" />
                </button>
              </div>
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}

        {/* 문의하기 버튼 */}
        <div className="fixed bottom-6 right-6">
          <a
            href="https://open.kakao.com/o/s19K0tKg"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full shadow-lg flex items-center transition-colors"
          >
            <FiMessageSquare className="mr-2" />
            문의하기
          </a>
        </div>
      </div>
    </div>
  );
} 