import { NextResponse } from 'next/server';

// 정적 내보내기를 위한 설정
export const dynamic = 'force-static';

// Node.js 버전 로깅
console.log('Node.js version:', process.version);

interface GrammarItem {
  id: number;
  level: string;
  concept: string;
  title: string;
  videoId: string;
  duration: string;
  tags: string[];
}

const grammarData: GrammarItem[] = [
  // 초급 문법
  {
    id: 1,
    level: "초급",
    concept: "기본 문장 구조",
    title: "영어 문장의 기본 구조 이해하기",
    videoId: "xki1IBFLPAw",
    duration: "15분",
    tags: ['문장구조', '기본문법', '주어동사', '초급문법']
  },
  {
    id: 2,
    level: "초급",
    concept: "시제",
    title: "현재시제 완벽 정복",
    videoId: "tNEG0Wbc5eQ",
    duration: "20분",
    tags: ['시제', '현재시제', '기본문법', '초급문법']
  },
  {
    id: 3,
    level: "초급",
    concept: "시제",
    title: "과거시제 마스터하기",
    videoId: "6hJS3KA8WVk",
    duration: "18분",
    tags: ['시제', '과거시제', '기본문법', '초급문법']
  },
  {
    id: 4,
    level: "초급",
    concept: "시제",
    title: "미래시제 완벽 정리",
    videoId: "BnOM8PfA1jk",
    duration: "17분",
    tags: ['시제', '미래시제', '기본문법', '초급문법']
  },
  {
    id: 5,
    level: "초급",
    concept: "조동사",
    title: "can, could, may, might 완벽 정리",
    videoId: "kuJMZcw9SUE",
    duration: "25분",
    tags: ['조동사', '기본문법', '초급문법']
  },
  {
    id: 6,
    level: "초급",
    concept: "조동사",
    title: "should, would, must 정복하기",
    videoId: "6sB9kChz1rk",
    duration: "22분",
    tags: ['조동사', '기본문법', '초급문법']
  },
  {
    id: 7,
    level: "초급",
    concept: "관계대명사",
    title: "who, which, that 완벽 정리",
    videoId: "sjVyBOJ-OsM",
    duration: "23분",
    tags: ['관계대명사', 'who', 'which', 'that', '초급문법']
  },
  {
    id: 8,
    level: "초급",
    concept: "관계대명사",
    title: "whose, whom, where 정복하기",
    videoId: "xW-_t1QkGQA",
    duration: "21분",
    tags: ['관계대명사', '초급문법']
  },
  {
    id: 9,
    level: "초급",
    concept: "가정법",
    title: "가정법 과거 완벽 정리",
    videoId: "I2SuX8eeGXk",
    duration: "28분",
    tags: ['가정법', '조건문', '초급문법']
  },
  {
    id: 10,
    level: "초급",
    concept: "가정법",
    title: "가정법 과거완료 마스터하기",
    videoId: "WAPdaDuODIY",
    duration: "26분",
    tags: ['가정법', '조건문', '초급문법']
  },

  // 중급 문법
  {
    id: 11,
    level: "중급",
    concept: "분사구문",
    title: "분사구문 완벽 정리",
    videoId: "168dKlRc7Hg",
    duration: "24분",
    tags: ['분사구문', '현재분사', '과거분사', '중급문법']
  },
  {
    id: 12,
    level: "중급",
    concept: "분사구문",
    title: "분사구문 응용 마스터",
    videoId: "KHtxNJUKsuw",
    duration: "27분",
    tags: ['분사구문', '현재분사', '과거분사', '중급문법']
  },
  {
    id: 13,
    level: "중급",
    concept: "부정사",
    title: "to부정사 완벽 정리",
    videoId: "AhbuM-acFh8",
    duration: "25분",
    tags: ['부정사', 'to부정사', '중급문법']
  },
  {
    id: 14,
    level: "중급",
    concept: "부정사",
    title: "원형부정사 마스터하기",
    videoId: "VYQY4gXAChQ",
    duration: "23분",
    tags: ['부정사', '원형부정사', '중급문법']
  },
  {
    id: 15,
    level: "중급",
    concept: "동명사",
    title: "동명사 완벽 정리",
    videoId: "OMg5QXxH408",
    duration: "22분",
    tags: ['동명사', '중급문법']
  },
  {
    id: 16,
    level: "중급",
    concept: "동명사",
    title: "동명사 vs to부정사 비교",
    videoId: "M1Q2eXtpZ6A",
    duration: "26분",
    tags: ['동명사', 'to부정사', '중급문법']
  },
  {
    id: 17,
    level: "중급",
    concept: "수동태",
    title: "수동태 완벽 정리",
    videoId: "qzSzgIgYE9Q",
    duration: "24분",
    tags: ['수동태', '중급문법']
  },
  {
    id: 18,
    level: "중급",
    concept: "수동태",
    title: "수동태 응용 마스터",
    videoId: "cpRgRaX6EzA",
    duration: "25분",
    tags: ['수동태', '중급문법']
  },
  {
    id: 19,
    level: "중급",
    concept: "접속사",
    title: "등위접속사 완벽 정리",
    videoId: "q4q9dbj7Bhs",
    duration: "23분",
    tags: ['접속사', '등위접속사', '중급문법']
  },
  {
    id: 20,
    level: "중급",
    concept: "접속사",
    title: "종속접속사 마스터하기",
    videoId: "N7Hg4hBWo_o",
    duration: "27분",
    tags: ['접속사', '종속접속사', '중급문법']
  },

  // 고급 문법
  {
    id: 21,
    level: "고급",
    concept: "도치",
    title: "도치 완벽 정리",
    videoId: "ehQ3uoS7YqE",
    duration: "28분",
    tags: ['도치', '강조', '고급문법']
  },
  {
    id: 22,
    level: "고급",
    concept: "도치",
    title: "도치 응용 마스터",
    videoId: "JDQ8NgnHMzc",
    duration: "26분",
    tags: ['도치', '강조', '고급문법']
  },
  {
    id: 23,
    level: "고급",
    concept: "강조",
    title: "강조구문 완벽 정리",
    videoId: "yJ56FWx8WFg",
    duration: "25분",
    tags: ['강조', '강조구문', '고급문법']
  },
  {
    id: 24,
    level: "고급",
    concept: "강조",
    title: "강조구문 응용 마스터",
    videoId: "wo6ixqrPNf0",
    duration: "27분",
    tags: ['강조', '강조구문', '고급문법']
  },
  {
    id: 25,
    level: "고급",
    concept: "생략",
    title: "생략 완벽 정리",
    videoId: "Faa-nkFuLNU",
    duration: "24분",
    tags: ['생략', '생략법', '고급문법']
  },
  {
    id: 26,
    level: "고급",
    concept: "생략",
    title: "생략 응용 마스터",
    videoId: "S2zpiUsp4Qk",
    duration: "26분",
    tags: ['생략', '생략법', '고급문법']
  },
  {
    id: 27,
    level: "고급",
    concept: "비교",
    title: "비교급 완벽 정리",
    videoId: "IsNXDVNoKrs",
    duration: "25분",
    tags: ['비교', '비교급', '고급문법']
  },
  {
    id: 28,
    level: "고급",
    concept: "비교",
    title: "최상급 마스터하기",
    videoId: "Ft2jqY_LVEo",
    duration: "23분",
    tags: ['비교', '최상급', '고급문법']
  },
  {
    id: 29,
    level: "고급",
    concept: "특수구문",
    title: "특수구문 완벽 정리",
    videoId: "Ckd-ZZ6cdvA",
    duration: "27분",
    tags: ['특수구문', '고급문법']
  },
  {
    id: 30,
    level: "고급",
    concept: "특수구문",
    title: "특수구문 응용 마스터",
    videoId: "QOZaOZbR0mQ",
    duration: "28분",
    tags: ['특수구문', '고급문법']
  }
];

export async function GET() {
  try {
    // 정적 내보내기에서는 검색 기능이 필요 없으므로 모든 데이터를 반환합니다.
    console.log(`Found ${grammarData.length} items (static export)`);
    
    return NextResponse.json({ items: grammarData });
  } catch (error) {
    console.error('Error processing request:', error);
    
    // 향상된 오류 정보 추출
    const errorInfo = {
      message: error instanceof Error ? error.message : 'Unknown error',
      name: error instanceof Error ? error.name : 'Error',
      stack: error instanceof Error ? error.stack : undefined,
    };
    
    return NextResponse.json(
      { 
        error: 'API 처리 중 오류가 발생했습니다', 
        details: errorInfo 
      }, 
      { status: 500 }
    );
  }
} 