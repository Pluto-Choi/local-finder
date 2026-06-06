// 서비스 카테고리. 맛집·관광지처럼 누구나 찾는 것 말고,
// "그 지역이 조용히 굴리는 진짜 편의 기능"을 분류한다.
export type ServiceCategory =
  | "drt" // 수요응답형 교통 (콜버스)
  | "mobility" // 공유 모빌리티 (공공자전거/킥보드 등)
  | "shuttle" // 시티투어·순환·무료 셔틀버스
  | "benefit" // 지역화폐·교통할인·관광패스
  | "convenience" // 짐보관·무인민원 등 생활 편의
  | "culture"; // 공공이 운영하는 체험·문화 시설

export interface CategoryMeta {
  key: ServiceCategory;
  label: string;
  emoji: string;
  desc: string;
}

// 시/도 (광역자치단체)
export interface Sido {
  slug: string; // URL용 영문 슬러그 (예: "busan")
  name: string; // 전체 명칭 (예: "부산광역시")
  short: string; // 짧은 명칭 (예: "부산")
  sigungu: string[]; // 시/군/구 목록 (세종처럼 없으면 빈 배열)
}

export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  sido: string; // Sido.slug
  sigungu?: string; // 시/군/구 명칭. 없으면 시·도 전역 서비스로 간주.
  summary: string; // 한 줄 소개
  description: string; // 왜 편한지 / 무엇인지
  howTo?: string; // 이용 방법
  url?: string; // 공식 홈페이지/앱 링크
  tags?: string[];
}
