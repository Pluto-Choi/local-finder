import type { Service } from "./types";

// 시드 데이터.
// - sigungu가 있으면 해당 시/군/구 전용, 없으면 시·도 전역 서비스.
// - 실제로 운영 중인 공공 서비스만 수록한다. 확실치 않은 항목은 넣지 않는다.
// - 확장 방법: 같은 형식으로 항목만 추가하면 라우팅/필터가 자동 반영된다.
export const SERVICES: Service[] = [
  // ───────────── 부산 ─────────────
  {
    id: "busan-tabara",
    name: "타바라(Tabara)",
    category: "drt",
    sido: "busan",
    sigungu: "기장군",
    summary: "노선 없이 앱으로 부르는 부산형 콜버스",
    description:
      "정해진 노선·시간표 없이 앱으로 호출하면 비슷한 방향의 승객을 묶어 태워주는 수요응답형 버스(DRT). 부산시가 대중교통이 불편한 지역을 중심으로 운영하며, 기장·정관 등에서 탈 수 있다. 요금은 일반 시내버스 수준.",
    howTo: "스마트폰에 '타바라' 앱 설치 → 출발지·도착지 입력 → 배차되는 차량 탑승",
    url: "https://www.tabara.kr",
    tags: ["콜버스", "기장", "정관", "DRT"],
  },
  {
    id: "busan-dongbaekjeon",
    name: "동백전",
    category: "benefit",
    sido: "busan",
    summary: "캐시백 주는 부산 지역화폐",
    description:
      "부산에서 쓰는 선불형 지역화폐. 충전해서 결제하면 일정 비율 캐시백을 돌려준다. 대형마트·백화점 등 일부를 빼면 동네 가게 대부분에서 사용 가능해 여행 중 식비·생활비에 쓰면 이득.",
    howTo: "'동백전' 앱에서 카드 발급·충전 후 결제",
    url: "https://busan.go.kr",
    tags: ["지역화폐", "캐시백"],
  },
  {
    id: "busan-dongbaek-pass",
    name: "동백패스",
    category: "benefit",
    sido: "busan",
    summary: "대중교통 월 4.5만원 넘게 쓰면 환급",
    description:
      "한 달 대중교통(버스·도시철도 등) 이용액이 4.5만 원을 넘으면 초과분을 동백전으로 돌려주는 통합 할인 제도. 부산에서 며칠 이상 머물며 대중교통을 많이 타는 사람에게 유리.",
    url: "https://www.humetro.busan.kr",
    tags: ["교통할인", "환급"],
  },
  {
    id: "busan-citytour",
    name: "부산 시티투어버스",
    category: "shuttle",
    sido: "busan",
    summary: "주요 관광지를 도는 순환·테마 투어버스",
    description:
      "해운대·광안리·태종대 등 부산 명소를 순환하는 투어버스. 하루 승차권 한 장으로 정류장에서 자유롭게 타고 내릴 수 있어 처음 부산 온 사람이 동선 짜기 편하다.",
    url: "https://www.citytourbusan.com",
    tags: ["투어버스", "순환"],
  },

  // ───────────── 서울 ─────────────
  {
    id: "seoul-ttareungi",
    name: "따릉이",
    category: "mobility",
    sido: "seoul",
    summary: "서울 전역 공공자전거",
    description:
      "서울시 공공자전거. 시내 곳곳 대여소에서 빌려 타고 다른 대여소에 반납하면 된다. 단거리 이동이나 한강·도심 라이딩에 저렴하게 쓸 수 있다.",
    howTo: "'따릉이' 앱에서 이용권 결제 → QR로 대여",
    url: "https://www.bikeseoul.com",
    tags: ["공공자전거"],
  },

  // ───────────── 경기 ─────────────
  {
    id: "gyeonggi-ttocta",
    name: "똑타(똑버스)",
    category: "drt",
    sido: "gyeonggi",
    summary: "경기도 수요응답형 콜버스 통합 앱",
    description:
      "경기도가 운영하는 수요응답형 교통(DRT). 신도시·외곽 등 노선버스가 촘촘하지 않은 지역에서 앱으로 호출해 이용한다. 여러 시·군의 똑버스를 '똑타' 한 앱에서 부를 수 있다.",
    howTo: "'똑타' 앱 설치 후 출발/도착 지정해 호출",
    url: "https://www.gg.go.kr",
    tags: ["콜버스", "DRT", "똑버스"],
  },

  // ───────────── 대전 ─────────────
  {
    id: "daejeon-tashu",
    name: "타슈",
    category: "mobility",
    sido: "daejeon",
    summary: "대전 공공자전거",
    description:
      "대전시 공공자전거. 무인 대여소와 앱으로 빌려 탈 수 있고 기본요금이 저렴해 시내 이동에 부담이 없다.",
    howTo: "'타슈' 앱에서 대여",
    url: "https://www.tashu.or.kr",
    tags: ["공공자전거"],
  },

  // ───────────── 세종 ─────────────
  {
    id: "sejong-eoulling",
    name: "어울링",
    category: "mobility",
    sido: "sejong",
    summary: "세종 공공자전거",
    description:
      "세종특별자치시 공공자전거. 자전거도로가 잘 깔린 세종 신도심을 둘러보기 좋다.",
    url: "https://www.sejong.go.kr",
    tags: ["공공자전거"],
  },

  // ───────────── 광주 ─────────────
  {
    id: "gwangju-tarangkke",
    name: "타랑께",
    category: "mobility",
    sido: "gwangju",
    summary: "광주 공공자전거",
    description: "광주광역시 공공자전거. 앱으로 대여소 위치 확인 후 빌려 탄다.",
    url: "https://www.gwangju.go.kr",
    tags: ["공공자전거"],
  },

  // ───────────── 인천 ─────────────
  {
    id: "incheon-eeum",
    name: "인천e음",
    category: "benefit",
    sido: "incheon",
    summary: "캐시백 주는 인천 지역화폐",
    description:
      "인천에서 쓰는 지역화폐(체크카드/앱). 결제 시 캐시백 혜택이 있고 가맹점이 넓어 여행 중 생활비 절약에 도움이 된다.",
    howTo: "'인천e음' 앱에서 카드 발급·충전",
    url: "https://incheoneum.or.kr",
    tags: ["지역화폐", "캐시백"],
  },

  // ───────────── 경남 ─────────────
  {
    id: "gyeongnam-nubija",
    name: "누비자",
    category: "mobility",
    sido: "gyeongnam",
    sigungu: "창원시",
    summary: "창원 공공자전거",
    description:
      "창원시 공공자전거. 국내 공공자전거 중 비교적 일찍 자리 잡은 서비스로, 창원 도심·해안을 따라 타기 좋다.",
    url: "https://www.nubija.com",
    tags: ["공공자전거", "창원"],
  },
];
