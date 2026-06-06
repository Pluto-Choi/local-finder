// 사이트 공통 상수 한 곳 모음 (도메인 바뀌면 여기만 수정)
export const SITE_NAME = "이 동네 뭐있지?";
export const SITE_TAGLINE =
  "맛집·관광지 말고, 그 지역이 조용히 굴리는 진짜 편의 서비스";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://local-finder-two.vercel.app";

// 데이터 신뢰도 표기 (데이터 갱신 시 함께 수정)
export const LAST_UPDATED = "2026.06";
export const DATA_NOTE =
  "각 지자체·공공기관이 실제 운영 중인 서비스만 수록합니다. 자세한 내용은 카드의 공식 안내 링크를 확인하세요.";
