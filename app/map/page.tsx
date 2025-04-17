import React from 'react';
import { FiMapPin, FiPhone, FiClock, FiExternalLink } from 'react-icons/fi';

export const metadata = {
  title: '목동데뷰 영어학원 - 찾아오시는 길',
  description: '목동데뷰 영어학원 위치: 서울특별시 양천구 신목로 38, 202호. 편리한 교통과 접근성을 갖춘 최적의 위치에 있습니다.',
  keywords: '목동 영어학원 위치, 양천구 영어학원 위치, 목동데뷰 지도, 데뷰 영어학원 오시는길, 목동 영어학원 지도, 신목로 영어학원',
};

export default function MapPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              <span className="text-primary">찾아</span>오시는 길
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              목동데뷰영어학원은 접근성이 좋은 위치에 있습니다.<br />
              아래 정보를 참고하여 방문해 주세요.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-start mb-4">
                  <FiMapPin className="w-6 h-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">주소</h3>
                    <p className="text-gray-600">서울특별시 양천구 신목로 38, 202호</p>
                    <p className="text-gray-500 text-sm mt-1">목동역 4번 출구에서 도보 5분</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-start mb-4">
                  <FiPhone className="w-6 h-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">연락처</h3>
                    <p className="text-gray-600">
                      <a href="tel:02-6952-1131" className="hover:text-primary">02-6952-1131</a>
                    </p>
                    <p className="text-gray-600 mt-1">
                      <a href="mailto:debutedu@naver.com" className="hover:text-primary">debutedu@naver.com</a>
                    </p>
                    <p className="text-gray-500 text-sm mt-1">등록번호: 6382호</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-start mb-4">
                  <FiClock className="w-6 h-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">운영시간</h3>
                    <p className="text-gray-600">평일: 13:00-22:00</p>
                    <p className="text-gray-600">토요일: 11:00-16:00</p>
                    <p className="text-gray-600">일요일/공휴일: 휴무</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[600px]">
              <iframe 
                src="https://map.naver.com/v5/embed/place/1928767599?c=15,0,0,0,dh&markers=type:d,location:126.8648089,37.5378744,marker:single,y:37.5378744,x:126.8648089&type=m&lng=126.8648089&lat=37.5378744&z=16" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                title="목동데뷰 영어학원 위치"
              />
            </div>
            
            <div className="flex justify-center mt-8">
              <a 
                href="https://naver.me/5mF2jTOC" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors"
              >
                <FiExternalLink className="mr-2"/> 네이버 지도에서 보기
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 