import type { Service } from "./types";

// 시드 데이터.
// - sigungu가 있으면 해당 시/군/구 전용, 없으면 시·도 전역 서비스.
// - 실제로 운영 중인 공공 서비스만 수록한다. 확실치 않은 항목은 넣지 않는다.
// - 확장 방법: 같은 형식으로 항목만 추가하면 라우팅/필터가 자동 반영된다.
export const SERVICES: Service[] = [
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
  {
    id: "seoul-gimhaeng-card",
    name: "기후동행카드",
    category: "benefit",
    sido: "seoul",
    summary: "대중교통 무제한 정기권",
    description:
      "1회 충전으로 정해진 기간 동안 서울 지하철·버스·따릉이·한강버스를 무제한 이용하는 통합 정기권입니다. 30일권은 따릉이 포함 65,000원, 미포함 62,000원이며, 청소년·청년은 7,000원 할인됩니다. 관광객을 위한 1·2·3·5·7일 단기권도 지하철역 충전기에서 바로 구매할 수 있어 서울 여행 시 교통비를 크게 아낄 수 있습니다.",
    howTo: "지하철역 무인충전기 또는 모바일 티머니 앱에서 충전",
    url: "https://news.seoul.go.kr/traffic/archives/510651",
    tags: ["정기권", "무제한", "지하철", "버스"],
  },
  {
    id: "seoul-city-tour-bus",
    name: "서울시티투어버스",
    category: "shuttle",
    sido: "seoul",
    summary: "도심 관광지 순환 투어버스",
    description:
      "광화문을 기점으로 경복궁·남산·N서울타워·동대문·명동 등 서울 주요 관광지를 도는 순환형 관광버스입니다. 도심·고궁 코스, 한강·강남 코스, 야간 코스 등이 운영되며 자유롭게 타고 내릴 수 있습니다(hop-on hop-off). 처음 서울을 찾는 방문자가 주요 명소를 효율적으로 둘러보기 좋습니다.",
    howTo: "광화문 정류장 현장 구매 또는 공식 홈페이지·여행 플랫폼 예매",
    url: "https://www.seoulcitytourbus.co.kr/",
    tags: ["관광", "순환버스", "고궁"],
  },
  {
    id: "seoul-owl-bus",
    name: "올빼미버스(심야버스)",
    category: "convenience",
    sido: "seoul",
    summary: "심야 전용 시내버스 N버스",
    description:
      "지하철과 일반 버스가 끊긴 밤 11시부터 새벽 6시까지 운행하는 서울시 심야 전용 버스입니다. 노선번호 앞에 'N'이 붙으며 도심과 외곽을 잇는 14개 노선을 운영합니다. 카드 요금 2,500원에 일반 대중교통과 동일한 환승 할인이 적용돼 늦은 밤 귀가 시 유용합니다.",
    howTo: "정류장에서 N번호 버스 탑승, 교통카드 결제",
    url: "https://news.seoul.go.kr/traffic/archives/27974",
    tags: ["심야", "버스", "귀가"],
  },
  {
    id: "seoul-public-night-pharmacy",
    name: "서울 공공심야약국",
    category: "convenience",
    sido: "seoul",
    summary: "야간 의약품 구입 약국 안내",
    description:
      "평일·주말·공휴일 야간(대개 밤 10시~새벽 1시)에도 문을 여는 약국을 서울시가 지정·운영합니다. 늦은 시간 갑자기 약이 필요할 때 이용할 수 있으며, 위치는 스마트서울맵에서 확인하거나 120 다산콜센터로 문의하면 안내받을 수 있습니다.",
    howTo: "스마트서울맵에서 위치 검색 또는 120 다산콜센터 문의",
    url: "https://map.seoul.go.kr/smgis2/short/6NadJ",
    tags: ["약국", "심야", "응급"],
  },

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

  // ───────────── 대구 ─────────────
  {
    id: "daegu-daeguro-pay",
    name: "대구로페이",
    category: "benefit",
    sido: "daegu",
    summary: "충전 즉시 10% 할인 지역화폐",
    description:
      "대구시가 발행하는 충전식 선불 지역사랑상품권으로, 충전 즉시 10% 할인이 적용됩니다. 거주지와 무관하게 만 14세 이상이면 누구나 발급 가능하며, 공공배달앱 '대구로' 결제 시 5% 추가 할인을 받습니다. 대구 시내 골목상권 가맹점에서 사용할 수 있어 생활비 절감에 유용합니다.",
    howTo: "iM뱅크(대구은행) 영업점에서 실물카드 발급 또는 앱으로 충전 후 사용",
    url: "https://www.daegu.go.kr",
    tags: ["지역화폐", "10%할인", "대구로"],
  },
  {
    id: "daegu-drt",
    name: "대구 DRT (수요응답형 버스)",
    category: "drt",
    sido: "daegu",
    summary: "앱 호출형 맞춤 노선 버스",
    description:
      "대구교통공사가 운영하는 수요응답형 교통 서비스로, 노선을 미리 정하지 않고 승객 호출에 따라 실시간 배차됩니다. 의료R&D지구·수성알파시티·팔공산 등 대중교통 사각지대에서 이용하기 좋습니다. 요금은 일반 시내버스와 동일한 1,500원이며 교통카드로만 탑승합니다.",
    howTo: "'대구 DRT' 앱으로 출발지·목적지 입력 후 실시간 호출",
    url: "https://www.dtro.or.kr",
    tags: ["DRT", "콜버스", "교통카드"],
  },
  {
    id: "daegu-citytour",
    name: "대구시티투어",
    category: "shuttle",
    sido: "daegu",
    summary: "도심·테마 순환 관광버스",
    description:
      "대구 주요 관광지를 도는 시티투어버스로 도심순환코스와 테마코스를 운영합니다. 도심순환코스는 예약 없이 동대구역 등에서 현장 탑승해 카드·현금으로 결제할 수 있고, 테마코스는 사전 예약제로 운영됩니다. 화요일~일요일 운행하며 월요일·명절 당일은 휴무입니다.",
    howTo: "도심순환은 현장 탑승, 테마코스는 홈페이지·전화(053-627-8900) 예약",
    url: "https://www.daegucitytour.com",
    tags: ["시티투어", "순환버스", "관광"],
  },
  {
    id: "daegu-dalseong-happytaxi",
    name: "달성군 1000원 행복택시",
    category: "drt",
    sido: "daegu",
    sigungu: "달성군",
    summary: "교통취약마을 천원 택시",
    description:
      "달성군이 버스 노선이 닿지 않는 교통 취약 마을 주민을 위해 운영하는 공공형 택시입니다. 병원·장보기 등 일상 이동에 1,000원만 부담하면 이용할 수 있으며, 대상 마을이 71곳으로 확대되었습니다. 농촌 고령 주민의 이동권 보장을 위한 서비스입니다.",
    howTo: "대상 마을 주민이 지정 콜센터로 전화 호출",
    url: "https://www.dalseong.daegu.kr",
    tags: ["행복택시", "1000원", "교통복지"],
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
  {
    id: "incheon-city-tour-bus",
    name: "인천시티투어",
    category: "shuttle",
    sido: "incheon",
    summary: "송도·영종 관광지 순환 투어",
    description:
      "송도 센트럴파크에서 출발해 송도컨벤시아, 인천국제공항, 파라다이스시티, 무의도, 을왕리해수욕장 등 인천 주요 명소를 순환하는 관광버스입니다. 시내 단일권은 성인 5,000원, 전 노선 통합권은 10,000원 수준입니다. 공항·바다·신도시를 함께 둘러보고 싶은 방문자에게 좋습니다.",
    howTo: "인천시티투어 홈페이지 또는 인천e지 앱에서 예약",
    url: "https://citytour.ito.or.kr/",
    tags: ["관광", "순환버스", "송도", "공항"],
  },
  {
    id: "incheon-pharmacy-night",
    name: "인천 공공심야약국",
    category: "convenience",
    sido: "incheon",
    summary: "야간 운영 지정 약국",
    description:
      "인천시가 야간 시간대에도 의약품을 구입할 수 있도록 지정·운영하는 공공심야약국입니다. 일반 약국이 문을 닫는 늦은 밤에 상비약이 필요할 때 이용할 수 있습니다. 운영 약국 위치는 휴일지킴이약국 사이트에서 확인할 수 있습니다.",
    howTo: "휴일지킴이약국(pharm114.or.kr)에서 위치 검색",
    url: "https://www.pharm114.or.kr/",
    tags: ["약국", "심야", "응급"],
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
  {
    id: "gwangju-sangsaeng-card",
    name: "광주상생카드",
    category: "benefit",
    sido: "gwangju",
    summary: "광주 지역화폐 캐시백 카드",
    description:
      "광주광역시가 발행하는 지역화폐로 충전식 선불·체크카드 형태다. 광주 시내 음식점·전통시장·소상공인 가맹점에서 사용하면 충전·결제 시 캐시백 혜택을 받을 수 있어 생활비를 아끼려는 시민·방문자에게 좋다. 백화점·대형마트·유흥업소 등은 사용이 제한된다.",
    howTo: "광주은행 영업점 또는 모바일 앱에서 발급·충전 후 가맹점 결제",
    url: "https://www.gwangju.go.kr/economy/contentsView.do?pageId=economy122",
    tags: ["지역화폐", "캐시백", "전통시장"],
  },
  {
    id: "gwangju-citytour",
    name: "광주 시티투어",
    category: "shuttle",
    sido: "gwangju",
    summary: "광주 주요 관광지 순환 투어버스",
    description:
      "광주송정역·광주공항·국립아시아문화전당·양림동·사직전망대 등 주요 관광지를 잇는 수요응답형 시티투어 버스다. 광주를 처음 찾거나 차 없이 핵심 명소를 둘러보고 싶은 여행자에게 알맞다.",
    howTo: "광주투어버스 앱에서 예약 후 지정 정류장 탑승",
    url: "https://utour.gwangju.go.kr/",
    tags: ["시티투어", "관광버스", "수요응답"],
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
  {
    id: "daejeon-sarangcard",
    name: "대전사랑카드",
    category: "benefit",
    sido: "daejeon",
    summary: "대전 지역화폐 10% 캐시백 카드",
    description:
      "대전시가 운영하는 지역사랑상품권(옛 온통대전). 대전 관내 가맹점에서 결제하면 결제액의 10%를 캐시백으로 돌려준다. 월 구매 한도는 30만 원으로 매월 최대 3만 원까지 적립된다. 대전에서 생활하거나 자주 방문해 식당·카페·전통시장을 이용한다면 부담을 줄일 수 있다.",
    howTo: "전용 앱 또는 카드사에서 발급 후 충전·결제",
    url: "https://daejeonsarangcard.kr",
    tags: ["지역화폐", "캐시백", "할인"],
  },
  {
    id: "daejeon-citytour",
    name: "대전시티투어",
    category: "shuttle",
    sido: "daejeon",
    summary: "대전 명소 순환 관광버스",
    description:
      "대전시가 운영하는 시티투어버스로 2026년 3월 전면 개편됐다. 평일 정기코스(마실A·B), 주말 코스, 빵집을 순회하는 '빵시투어' 등 다양한 테마로 구성된다. 차 없이 대전 명소와 빵집을 둘러보고 싶은 여행자에게 적합하다. 요금은 일반 8,000원, 청소년 7,000원, 경로·아동·단체 6,000원.",
    howTo: "공식 홈페이지에서 예약 후 QR코드로 탑승",
    url: "https://daejeoncitytour.co.kr",
    tags: ["관광", "투어버스", "빵시투어"],
  },

  // ───────────── 울산 ─────────────
  {
    id: "ulsan-pay",
    name: "울산페이",
    category: "benefit",
    sido: "ulsan",
    summary: "월 30만원 10% 캐시백 지역화폐",
    description:
      "울산시가 발행하는 모바일 지역화폐로, 연중 월 30만 원 결제분까지 10% 캐시백(최대 3만 원)을 적립해줍니다. 배달앱 '울산페달'과 '울산몰' 이용 시 5% 추가 캐시백이 붙습니다. 울산 지역 전통시장·동네마트·음식점·카페 등 등록 가맹점에서 사용할 수 있습니다.",
    howTo: "울산페이 앱 설치 후 충전·결제, 또는 체크카드 발급",
    url: "https://www.ulsan.go.kr",
    tags: ["지역화폐", "캐시백", "울산페달"],
  },
  {
    id: "ulsan-citytour",
    name: "울산시티투어 (고래타Go)",
    category: "shuttle",
    sido: "ulsan",
    summary: "순환·테마 관광버스",
    description:
      "울산문화관광재단이 운영하는 시티투어로, 도심과 해안을 자유롭게 도는 순환형 코스와 관광해설사가 동행하는 테마형 코스가 있습니다. 태화강 국가정원 코스는 트롤리버스로 운행합니다. 매주 수요일~일요일 운행하며 설·추석 연휴는 휴무입니다.",
    howTo: "'고래타Go'(왔어울산) 홈페이지에서 코스 확인·예약",
    url: "https://go-tago.whataulsan.com",
    tags: ["시티투어", "태화강", "트롤리"],
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
  {
    id: "sejong-yeominjeon",
    name: "여민전",
    category: "benefit",
    sido: "sejong",
    summary: "세종 지역화폐 9% 환급",
    description:
      "세종시가 발행하는 지역화폐로 관내 가맹점에서 결제하면 9%를 환급받는다. 1인당 월 최대 30만 원까지 충전할 수 있다. 세종에서 생활하며 동네 가게·식당을 이용하는 시민에게 실질적인 할인 혜택이 된다.",
    howTo: "'세종 여민전' 앱 설치 후 가입·충전",
    url: "https://www.sejong.go.kr/life/sub07_01.do",
    tags: ["지역화폐", "환급", "할인"],
  },
  {
    id: "sejong-doorota",
    name: "두루타버스",
    category: "drt",
    sido: "sejong",
    summary: "세종 읍면지역 수요응답형 버스",
    description:
      "세종도시교통공사가 읍면 지역에서 운영하는 수요응답형 버스(DRT). 정해진 노선 없이 호출하면 원하는 정류장으로 와 목적지까지 데려다준다. 사전 예약제에서 택시처럼 바로 부르는 '즉시콜' 방식으로 바뀌어 이용이 편리하다. 대중교통이 드문 읍면 주민에게 마을버스 대체 수단이 된다.",
    howTo: "전화 또는 '이응패스' 앱으로 호출",
    url: "https://www.sctc.kr/page/PAGE2001311132551748",
    tags: ["DRT", "수요응답형", "읍면"],
  },
  {
    id: "sejong-eungpass",
    name: "이응패스",
    category: "benefit",
    sido: "sejong",
    summary: "세종 대중교통 월 정액권",
    description:
      "세종시의 대중교통 통합 정액권. 2만 원으로 충전하면 매월 말일까지 세종과 인접 5개 지역의 버스·지하철, 어울링까지 최대 5만 원어치 이용할 수 있다. 세종에서 버스·자전거를 자주 타는 시민의 교통비 부담을 크게 줄여준다. K-패스와 연계하면 혜택이 더 커진다.",
    howTo: "이응패스 카드 발급 후 매월 충전",
    url: "https://www.sejong.go.kr/life/sub02_0902.do",
    tags: ["교통패스", "정액권", "대중교통"],
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
  {
    id: "gyeonggi-the-pass",
    name: "The 경기패스",
    category: "benefit",
    sido: "gyeonggi",
    summary: "대중교통비 환급 교통카드",
    description:
      "K-패스를 기반으로 경기도민에게 대중교통비 일부를 환급해 주는 제도입니다. 19세 이상 경기도민이 K-패스 카드를 발급받아 등록하면 월 대중교통 이용 횟수에 따라 요금 일부를 돌려받으며, 청년(만 19~39세)은 환급률이 더 높습니다. 경기도에서 대중교통을 자주 이용하는 거주자에게 유용합니다.",
    howTo: "K-패스 홈페이지·앱에서 카드 발급 후 회원가입",
    url: "https://www.gg.go.kr/",
    tags: ["교통비", "환급", "K-패스"],
  },
  {
    id: "gyeonggi-youth-transport",
    name: "경기도 어린이·청소년 교통비 지원",
    category: "benefit",
    sido: "gyeonggi",
    summary: "청소년 대중교통비 환급",
    description:
      "경기도에 거주하는 만 6~18세 어린이·청소년에게 실제 사용한 수도권 대중교통 요금을 분기별 최대 6만 원, 연 최대 24만 원까지 지역화폐로 환급해 주는 제도입니다. 연중 수시로 1회 가입하면 분기마다 자동 환급됩니다.",
    howTo: "경기도 청소년 교통비 지원 포털(gbuspb.kr)에서 1회 가입",
    url: "https://www.gbuspb.kr/",
    tags: ["청소년", "교통비", "환급", "지역화폐"],
  },
  {
    id: "gyeonggi-local-currency",
    name: "경기지역화폐",
    category: "benefit",
    sido: "gyeonggi",
    summary: "충전 시 인센티브 지역상품권",
    description:
      "경기도 31개 시·군이 발행하는 카드형 지역사랑상품권으로, 충전 금액에 시·군별로 6~12%의 인센티브가 더해집니다. 가맹점에서 결제하면 추가 캐시백과 연말정산 소득공제 30% 혜택까지 받을 수 있어, 거주지 인근 소상공인 가게에서 쓸 때 절약 효과가 큽니다. 사용처는 발행 시·군 내로 제한됩니다.",
    howTo: "경기지역화폐 앱에서 카드 신청·충전",
    url: "https://gmoney.or.kr/",
    tags: ["지역화폐", "인센티브", "소득공제"],
  },
  {
    id: "gyeonggi-ansan-pedalro",
    name: "페달로(PEDAL路)",
    category: "mobility",
    sido: "gyeonggi",
    sigungu: "안산시",
    summary: "안산 무인 공영자전거",
    description:
      "안산시가 운영하는 공영자전거로, 상록구·단원구 일대에 100여 개의 무인 대여소가 설치되어 있습니다. 24시간 무인 대여기로 누구나 손쉽게 빌려 탈 수 있어 안산 시내 단거리 이동이나 호수공원 일대 라이딩에 적합합니다.",
    howTo: "페달로 홈페이지·앱 회원가입 후 대여소에서 대여",
    url: "https://www.pedalro.kr/",
    tags: ["공공자전거", "안산", "무인대여"],
  },
  {
    id: "gyeonggi-suwon-public-bike",
    name: "수원 공영자전거 대여소",
    category: "mobility",
    sido: "gyeonggi",
    sigungu: "수원시",
    summary: "행궁동·광교산 자전거 대여",
    description:
      "수원시가 4~11월에 화성행궁광장(행궁동)과 광교산 입구에서 운영하는 공영자전거 대여소입니다. 신분증을 제시하면 누구나 1회 1,000원에 빌릴 수 있어, 수원화성 일대 관광이나 광교산 자락 라이딩에 가볍게 이용하기 좋습니다.",
    howTo: "대여소에서 신분증 제시 후 현장 대여",
    url: "https://www.suwon.go.kr/",
    tags: ["공공자전거", "수원화성", "광교산"],
  },
  {
    id: "gyeonggi-cyber-library",
    name: "경기도사이버도서관 전자책",
    category: "culture",
    sido: "gyeonggi",
    summary: "도민 무료 전자책·오디오북",
    description:
      "경기도가 도민을 대상으로 운영하는 디지털 도서관 서비스로, 전자책·구독형 전자책·오디오북·영어뮤지컬 등을 PC·모바일로 무료 이용할 수 있습니다. 회원가입과 실명인증만 하면 되며, 경기도에 거주하거나 도내 도서관 회원이면 누구나 이용 가능합니다.",
    howTo: "경기도사이버도서관(library.kr) 회원가입 후 앱·웹 이용",
    url: "https://www.library.kr/",
    tags: ["전자책", "도서관", "오디오북"],
  },

  // ───────────── 강원 ─────────────
  {
    id: "gangwon-pyeongchang-huimang-taxi",
    name: "평창군 희망택시",
    category: "drt",
    sido: "gangwon",
    sigungu: "평창군",
    summary: "교통오지 마을 1천원 택시",
    description:
      "농어촌버스가 닿지 않는 평창군 산간·오지 마을 주민을 위한 수요응답형 택시입니다. 2025년부터 요금이 인하되어 현금 1,000원만 내면 마을에서 읍·면 소재지까지 이동할 수 있습니다. 버스 정류장에서 700m 이상 떨어진 무차량 가구 등이 대상이며, 현재 59개 마을 564가구가 이용 중입니다.",
    howTo: "대상 마을 주민이 콜센터에 전화로 호출, 현금 1,000원 결제",
    url: "https://www.pc.go.kr/portal/part/traffic/part-hygiene-traffic",
    tags: ["수요응답형", "농어촌교통", "교통복지"],
  },
  {
    id: "gangwon-hwacheon-huimang-taxi",
    name: "화천군 희망택시",
    category: "drt",
    sido: "gangwon",
    sigungu: "화천군",
    summary: "버스 미운행 지역 호출택시",
    description:
      "버스가 운행되지 않는 화천군 교통취약 마을 주민을 위한 수요응답형 택시입니다. 기본 4km에 1,000원, 1km 연장 시 100원이 추가되는 저렴한 요금으로 운영됩니다. 희망버스와 함께 교통약자의 이동권을 보장하는 화천군 교통복지 사업입니다.",
    howTo: "대상 마을 주민이 전화로 호출해 이용",
    url: "https://www.ihc.go.kr/",
    tags: ["수요응답형", "농어촌교통", "교통복지"],
  },
  {
    id: "gangwon-hongcheon-huimang-taxi",
    name: "홍천군 희망택시",
    category: "drt",
    sido: "gangwon",
    sigungu: "홍천군",
    summary: "농어촌 교통오지 호출택시",
    description:
      "농어촌버스가 다니지 않는 홍천군 교통 오지 마을 주민을 대상으로 운영하는 수요응답형 택시입니다. 기본요금(편도 약 1,700원) 수준만 부담하면 대상 마을에서 마을 중심 시가지까지 택시로 이동할 수 있습니다.",
    howTo: "대상 마을 주민이 전화로 호출해 이용",
    url: "https://www.hongcheon.go.kr/",
    tags: ["수요응답형", "농어촌교통", "교통복지"],
  },
  {
    id: "gangwon-yeongwol-haengbok-bus",
    name: "영월군 행복버스",
    category: "drt",
    sido: "gangwon",
    sigungu: "영월군",
    summary: "마을 호출형 수요응답 버스",
    description:
      "농어촌버스 운행이 어려운 영월군 산간 마을을 잇는 수요응답형(콜) 버스입니다. 녹전·주천·한반도면 등 여러 마을 노선을 운영하며, 콜택시처럼 전화로 부르면 지정 시간에 마을까지 들어옵니다. 대중교통 사각지대 주민의 일상 이동을 돕습니다.",
    howTo: "운행 시간표 확인 후 마을 정류장 이용 또는 전화 호출",
    url: "https://www.ywfmc.or.kr/",
    tags: ["수요응답형", "콜버스", "농어촌교통"],
  },
  {
    id: "gangwon-jeongseon-wawa-bus",
    name: "정선군 와와버스",
    category: "convenience",
    sido: "gangwon",
    sigungu: "정선군",
    summary: "전노선 완전공영 시내버스",
    description:
      "정선군이 기존 버스회사 노선을 인수해 직접 운영하는 내륙 최초의 완전공영버스입니다. 무료 환승과 친환경 저상 전기버스를 도입해 강원도 대중교통 서비스 평가 2회 연속 1위를 기록했고, 누적 이용객 400만 명을 넘었습니다. 정선 여행 시 군내 이동에 활용하기 좋습니다.",
    howTo: "정류장에서 일반 시내버스처럼 탑승, 환승 무료",
    url: "https://www.jeongseon.go.kr/",
    tags: ["완전공영버스", "전기버스", "무료환승"],
  },
  {
    id: "gangwon-sangpumgwon",
    name: "강원상품권 (강원사랑상품권)",
    category: "benefit",
    sido: "gangwon",
    summary: "강원 전역 지역화폐",
    description:
      "강원특별자치도 전역의 가맹점에서 현금처럼 쓸 수 있는 지역화폐입니다. 전통시장, 식당, 슈퍼마켓, 주유소, 제과점, 이·미용업소 등 소상공인 매장에서 사용되며 대형마트·백화점에서는 사용이 제한됩니다. 종이형과 모바일(제로페이 방식) 두 가지가 있어 여행 중 할인·적립 혜택을 받을 수 있습니다.",
    howTo: "공식 홈페이지·앱에서 충전 후 가맹점에서 결제, 가맹점 찾기 제공",
    url: "https://gwgc.gwd.go.kr/",
    tags: ["지역화폐", "할인", "전통시장"],
  },
  {
    id: "gangwon-gangneung-citytour",
    name: "강릉시티투어버스",
    category: "shuttle",
    sido: "gangwon",
    sigungu: "강릉시",
    summary: "강릉역 출발 관광지 순환",
    description:
      "강릉역을 기점으로 오죽헌, 선교장 등 강릉 주요 관광지를 순환하는 1일 자유이용 투어버스입니다. 요금은 성인 5,000원, 청소년·어린이 3,000원으로 하루 종일 자유롭게 타고 내릴 수 있어 뚜벅이 여행자에게 유용합니다.",
    howTo: "온라인 예매 또는 버스 탑승 시 현장 구매(현금·카드)",
    url: "https://gtbus.modoo.at/",
    tags: ["시티투어", "관광순환", "1일권"],
  },
  {
    id: "gangwon-chuncheon-citytour",
    name: "춘천시티투어버스",
    category: "shuttle",
    sido: "gangwon",
    sigungu: "춘천시",
    summary: "6천원 춘천 한 바퀴 투어",
    description:
      "춘천역을 기점으로 공지천·출렁다리·소양강 스카이워크 등 주요 명소를 도는 시티투어버스입니다. 요금은 대인 6,000원, 할인대상 4,000원이며 주말 순환형과 평일 테마형으로 운영됩니다. 여름철에는 호수 야경을 도는 1인 3,000원 야간 시티투어도 운행합니다.",
    howTo: "홈페이지·카카오T 예매 또는 순환형 현장 결제",
    url: "https://citytour.ticketplay.zone/",
    tags: ["시티투어", "관광순환", "야간투어"],
  },
  {
    id: "gangwon-mobility-call",
    name: "강원특별자치도 광역이동지원센터",
    category: "convenience",
    sido: "gangwon",
    summary: "교통약자 장애인 콜택시",
    description:
      "휠체어 장착 특별교통수단과 바우처택시로 강원도 교통약자의 이동을 지원하는 광역 콜택시 센터입니다. 중증 보행장애인, 65세 이상 대중교통 이용 곤란자, 임산부, 영아 동반 가족 등이 대상입니다. 도내 시·군을 아우르는 광역 이동을 전화 한 통으로 신청할 수 있습니다.",
    howTo: "대표번호 1577-2014로 신청 또는 홈페이지 접수",
    url: "https://call.gwd.go.kr/",
    tags: ["교통약자", "장애인콜택시", "이동지원"],
  },

  // ───────────── 충북 ─────────────
  {
    id: "chungbuk-cheongju-pay",
    name: "청주페이",
    category: "benefit",
    sido: "chungbuk",
    sigungu: "청주시",
    summary: "청주 지역화폐 10% 인센티브",
    description:
      "청주시가 발행하는 지역사랑상품권. 충전·결제 시 10% 인센티브를 주며 월 한도는 30만 원으로 최대 3만 원이 적립된다. 착한가격업소에서 결제하면 5%가 추가된다. 청주 관내 식당·슈퍼·전통시장·학원 등에서 쓸 수 있다.",
    howTo: "청주페이 앱 또는 농협·신협에서 카드 구입",
    url: "https://www.cheongju.go.kr/www/contents.do?key=22212",
    tags: ["지역화폐", "인센티브", "할인"],
  },
  {
    id: "chungbuk-cheongju-citytour",
    name: "청주시티투어",
    category: "shuttle",
    sido: "chungbuk",
    sigungu: "청주시",
    summary: "청주 명소 테마 관광버스",
    description:
      "청주시가 운영하는 시티투어버스로 2026년 4월부터 운행한다. 정기투어 4개 노선 외 야간 별빛투어, 축제·호텔 연계 테마투어, 방학특집 등 10개 이상 코스로 구성된다. 청남대 입장료 할인 혜택도 있다. 요금은 1인 3,000원.",
    howTo: "청주시관광협의회(043-234-8895) 예약",
    url: "https://www.cheongju.go.kr/ktour/contents.do?key=20339",
    tags: ["관광", "투어버스", "별빛투어"],
  },
  {
    id: "chungbuk-jecheon-citytour",
    name: "제천시티투어",
    category: "shuttle",
    sido: "chungbuk",
    sigungu: "제천시",
    summary: "청풍호반 순환 관광버스",
    description:
      "제천시 시티투어버스로 무궁화관광이 운영한다. 청풍호반케이블카·청풍문화재단지·의림지를 도는 기본코스와 에코힐링코스가 있다. 차 없이 제천의 대표 명소를 묶어 둘러보고 싶은 여행자에게 적합하다.",
    howTo: "공식 홈페이지(jcct.kr) 온라인 예약",
    url: "https://www.jcct.kr",
    tags: ["관광", "투어버스", "청풍호"],
  },
  {
    id: "chungbuk-baro-drt",
    name: "바로DRT (AI콜버스)",
    category: "drt",
    sido: "chungbuk",
    summary: "오송~조치원 자율주행 AI콜버스",
    description:
      "충북도가 전국 최초로 운행한 광역권 수요응답형 자율주행 AI콜버스. 오송역~조치원역 25.7km 구간을 정해진 노선 없이 AI가 실시간 경로를 짜 운행한다. 평일 낮 12시~오후 8시 운행하며, 실증 기간에는 무상으로 이용할 수 있다(2026년 상반기 유상 전환 예정).",
    howTo: "'바로DRT' 앱으로 호출·예약",
    url: "https://www.ngonews.kr/news/articleView.html?idxno=217787",
    tags: ["DRT", "AI콜버스", "자율주행"],
  },
  {
    id: "chungbuk-danyang-nadeuli",
    name: "단양 행복나드리버스",
    category: "drt",
    sido: "chungbuk",
    sigungu: "단양군",
    summary: "교통취약지역 농촌형 수요응답 버스",
    description:
      "단양군이 2020년 농촌형 교통모델 사업으로 도입한 수요응답형 교통. 대중교통이 부족한 취약지역 주민의 이동권을 보장하기 위해 운영된다. 버스가 닿지 않는 마을 주민이 면·읍 소재지로 이동할 때 이용한다.",
    howTo: "단양관광공사(043-421-7885) 문의",
    url: "https://www.dytc.or.kr/main/50",
    tags: ["DRT", "농촌교통", "수요응답형"],
  },

  // ───────────── 충남 ─────────────
  {
    id: "chungnam-seocheon-drt",
    name: "서천 희망택시·행복콜버스",
    category: "drt",
    sido: "chungnam",
    sigungu: "서천군",
    summary: "농촌 마을 100원 수요응답 교통",
    description:
      "서천군이 운영하는 농촌형 수요응답 교통으로, 뉴욕타임스가 '대중교통 혁명'으로 소개한 100원 택시의 본고장이다. 문산희망버스, 시초면행복콜버스 등이 마을과 면 소재지를 잇는다. 버스가 닿지 않는 오지 마을 주민이 100원에 이동할 수 있다.",
    howTo: "이용 1시간 전 운수업체로 전화 예약",
    url: "https://www.seocheonbus.com/drt",
    tags: ["100원택시", "DRT", "농촌교통"],
  },
  {
    id: "chungnam-asan-majung",
    name: "아산 마중택시",
    category: "drt",
    sido: "chungnam",
    sigungu: "아산시",
    summary: "교통취약 마을 100원 택시",
    description:
      "아산시가 운영하는 농촌형 100원 택시. 도고·선장·송악·음봉면 등 80여 개 마을에서 콜택시가 운행하며, 이용자는 100원만 부담하고 나머지는 시가 지원한다. 버스 노선이 없는 마을 주민의 이동권을 보장한다. 별도로 임신부 대상 100원 행복택시도 운영한다.",
    howTo: "마을별 지정 콜택시 전화 호출",
    url: "https://www.asan.go.kr/main/cms/?no=160",
    tags: ["100원택시", "DRT", "농촌교통"],
  },
  {
    id: "chungnam-buyeo-amphibious",
    name: "부여 수륙양용 시티투어",
    category: "shuttle",
    sido: "chungnam",
    sigungu: "부여군",
    summary: "백제문화단지 수륙양용 관광버스",
    description:
      "백제문화단지에서 출발해 땅과 물 위를 모두 달리는 수륙양용 시티투어버스. 백마강을 직접 항행하며 부여의 백제 유적을 색다르게 둘러볼 수 있다. 화~일요일 운영하며 월요일은 휴무. 요금은 성인 평일 27,000원, 주말·공휴일 29,000원.",
    howTo: "공식 홈페이지 사전 예약 또는 현장 선착순",
    url: "https://buyeocitytour.com",
    tags: ["관광", "수륙양용", "백제"],
  },
  {
    id: "chungnam-cheonan-citytour",
    name: "천안시티투어",
    category: "shuttle",
    sido: "chungnam",
    sigungu: "천안시",
    summary: "천안 역사·빵 테마 관광버스",
    description:
      "천안시가 운영하는 시티투어버스로 2026년 3월부터 운행한다. 평일은 유관순 열사 사적지·독립기념관을 도는 역사문화코스, 주말은 빵체험을 더한 코스로 구성된다. 차 없이 천안의 명소를 둘러보려는 여행자에게 좋다.",
    howTo: "천안시 관광 누리집에서 예약",
    url: "https://www.cheonan.go.kr/prog/cityTour/day/sub03_03/list.do",
    tags: ["관광", "투어버스", "역사"],
  },

  // ───────────── 전북 ─────────────
  {
    id: "jeonbuk-haengbok-calltaxi",
    name: "전북 행복콜택시(100원 택시)",
    category: "drt",
    sido: "jeonbuk",
    summary: "농촌 마을 공공형 택시",
    description:
      "버스정류장과 떨어진 농촌 마을 주민을 위한 공공형 수요응답 택시다. 마을회관에서 인근 버스정류장까지 100원, 읍면 행정복지센터까지 1,000원 수준으로 이용한다. 일요일을 제외하고 대체로 오전 8시~오후 5시 운행하며 교통 약자에게 유용하다. 김제·무주 등 여러 시군에서 운영한다.",
    howTo: "거주 시군 지정 콜번호로 호출(시군별 상이)",
    url: "https://www.fnnews.com/news/202407141333277089",
    tags: ["100원택시", "농촌", "수요응답"],
  },
  {
    id: "jeonbuk-jeonju-voucher",
    name: "전주사랑상품권",
    category: "benefit",
    sido: "jeonbuk",
    sigungu: "전주시",
    summary: "전주 충전식 카드 지역화폐",
    description:
      "전주시가 발행하는 충전식 카드형 지역화폐다. 전주 시내 가맹점에서 사용하면 충전·결제 시 10% 캐시백을 받을 수 있어 생활비 절약에 좋다. 1인당 월·연 충전 한도가 있다.",
    howTo: "전주사랑상품권 앱 설치 후 신청 또는 전북은행 영업점 방문",
    url: "https://www.jeonju.go.kr/index.9is?contentUid=ff8080818990c349018b041ab74e3b4a",
    tags: ["지역화폐", "캐시백", "충전식"],
  },
  {
    id: "jeonbuk-jeonju-kkotssingi",
    name: "전주 공영자전거 꽃싱이",
    category: "mobility",
    sido: "jeonbuk",
    sigungu: "전주시",
    summary: "전주 관광형 공영자전거",
    description:
      "전주시가 운영하는 공영자전거로 한옥마을 인근 등 11개 정류소, 약 404대 규모다. 1회 1,000원으로 운영시간 내 어느 정류소에서나 반납할 수 있어 한옥마을 일대를 둘러보는 관광객에게 알맞다. 운영시간이 한정돼 있어 이용 전 확인이 좋다.",
    howTo: "'꽃싱이' 앱에서 휴대폰 인증 후 대여·반납",
    url: "https://www.jeonju.go.kr/index.9is?contentUid=ff8080818990c349018b041adad03c5a",
    tags: ["공영자전거", "한옥마을", "관광"],
  },
  {
    id: "jeonbuk-gunsan-citytour",
    name: "군산 시티투어버스",
    category: "shuttle",
    sido: "jeonbuk",
    sigungu: "군산시",
    summary: "군산 역사문화 탐방 투어버스",
    description:
      "군산역·시외버스터미널 등에서 출발해 군산 근대 역사문화 명소를 도는 시티투어 버스다. 매주 토·일 코스별 1일 1회, 10명 이상 예약 시 운행하며 요금은 5,000원(학생·경로·장애인 등 50% 할인)이다. 차 없이 군산을 둘러보려는 여행자에게 좋다.",
    howTo: "군산시 문화관광 누리집 또는 전화(063-463-7112) 사전 예약·입금",
    url: "https://www.gunsan.go.kr/tour/m2288",
    tags: ["시티투어", "근대문화", "주말운행"],
  },
  {
    id: "jeonbuk-gunsan-pubbike",
    name: "군산 공영자전거",
    category: "mobility",
    sido: "jeonbuk",
    sigungu: "군산시",
    summary: "군산 무인 공영자전거",
    description:
      "군산시가 운영하는 무인 대여 공영자전거로 은파호수공원·버스터미널·군산역 등 정류소에서 빌려 탈 수 있다. 모바일 QR 방식으로 고도화돼 자전거 도로가 잘 갖춰진 군산 시내·호수공원 일대를 둘러보기에 좋다.",
    howTo: "군산시 공영자전거 누리집/앱에서 모바일 QR로 대여",
    url: "http://pubbike.gunsan.go.kr/",
    tags: ["공영자전거", "무인대여", "호수공원"],
  },

  // ───────────── 전남 ─────────────
  {
    id: "jeonnam-haengbok-taxi",
    name: "전남 100원 택시(행복택시)",
    category: "drt",
    sido: "jeonnam",
    summary: "농어촌 마을 100원 택시",
    description:
      "버스 정류장에서 멀리 떨어진 농어촌·도서 마을 주민을 위한 공공형 수요응답 택시다. 마을에서 가까운 버스정류장이나 읍면 소재지까지 100원 수준의 요금으로 이용할 수 있어 교통 약자·어르신에게 유용하다. 시군별로 마중택시·희망택시 등 이름이 다르다.",
    howTo: "거주 시군 교통부서 또는 마을 지정 콜번호로 호출",
    url: "https://www.jeonnam.go.kr/contentsView.do?menuId=jeonnam0501090400",
    tags: ["100원택시", "농어촌", "수요응답"],
  },
  {
    id: "jeonnam-haengbok-voucher",
    name: "전남행복지역화폐",
    category: "benefit",
    sido: "jeonnam",
    summary: "전남 시군 지역사랑상품권",
    description:
      "전라남도 22개 시군이 발행하는 지역사랑상품권의 공동 브랜드다. 해당 시군 내 가맹점에서만 사용 가능하며 할인·캐시백으로 구매할 수 있어 지역 소비에 좋다. 시군별로 목포사랑상품권·나주사랑상품권 등으로 발행된다.",
    howTo: "거주·방문 시군의 상품권(지류/카드/모바일) 구매처에서 할인 구매",
    url: "https://www.jeonnam.go.kr/contentsView.do?menuId=jeonnam0501090400",
    tags: ["지역화폐", "상품권", "할인"],
  },
  {
    id: "jeonnam-naju-callbus",
    name: "나주콜버스(바로DRT)",
    category: "drt",
    sido: "jeonnam",
    sigungu: "나주시",
    summary: "나주 수요응답형 콜버스",
    description:
      "빛가람혁신도시 등 나주 일대에서 운행하는 수요응답형 버스(DRT)다. 앱이나 콜센터로 호출하면 인근 정류장으로 버스가 찾아와 효율 경로로 운행한다. 노선버스가 드문 지역에서 이동하려는 주민·방문자에게 편리하다.",
    howTo: "'바로DRT' 앱 또는 콜센터(1533-5015)로 호출",
    url: "https://namu.wiki/w/나주콜버스",
    tags: ["DRT", "콜버스", "혁신도시"],
  },
  {
    id: "jeonnam-gwangyang-voucher",
    name: "광양사랑상품권",
    category: "benefit",
    sido: "jeonnam",
    sigungu: "광양시",
    summary: "광양 모바일 충전식 지역화폐",
    description:
      "광양시가 발행하는 충전식 카드·모바일 지역화폐로 전남에서 일찍 모바일형을 도입했다. 약 6천 개 지역 가맹점에서 사용 가능하며 구매 시 10% 캐시백 혜택을 준다. 광양에서 생활비를 아끼려는 사람에게 좋다.",
    howTo: "'지역상품권 chak' 앱에서 가입·카드 발급·충전 후 결제",
    url: "https://gwangyang.go.kr/menu.es?mid=a11206140000",
    tags: ["지역화폐", "모바일", "캐시백"],
  },
  {
    id: "jeonnam-yeosu-romanbus",
    name: "여수 낭만버스(시티투어)",
    category: "shuttle",
    sido: "jeonnam",
    sigungu: "여수시",
    summary: "여수 관광지 순환 시티투어버스",
    description:
      "문화관광해설사와 동행하는 여수 시티투어 버스다. 향일암 코스·다리(브릿지) 코스 등 1층 버스와 시내·야경 순환의 2층 버스로 운영된다. 2층버스 주간코스 요금은 일반 5,000원·할인 2,500원으로, 차 없이 여수 명소를 둘러보려는 여행자에게 좋다.",
    howTo: "여수시 관광 누리집에서 예약 후 탑승",
    url: "https://www.yeosu.go.kr/tour/leisure/city_tour/story",
    tags: ["시티투어", "관광버스", "해설사"],
  },

  // ───────────── 경북 ─────────────
  {
    id: "gyeongbuk-gyeongju-tasilla",
    name: "경주 공영자전거 타실라",
    category: "mobility",
    sido: "gyeongbuk",
    sigungu: "경주시",
    summary: "IoT 기반 저가 공영자전거",
    description:
      "경주시가 운영하는 IoT 기반 공영자전거로 시내 100여 곳 대여소에 비치되어 있습니다. 첨성대·보문단지 등 주요 관광지를 저렴하게 둘러보기 좋습니다. 앱으로 가까운 대여소와 자전거 대수를 실시간 확인할 수 있습니다.",
    howTo: "타실라 앱에서 회원가입·이용권 구매 후 대여소에서 대여",
    url: "https://tasilla.gyeongju.go.kr",
    tags: ["공영자전거", "IoT", "첨성대"],
  },
  {
    id: "gyeongbuk-gyeongju-citytour",
    name: "경주시티투어",
    category: "shuttle",
    sido: "gyeongbuk",
    sigungu: "경주시",
    summary: "주간·야간 관광 순환버스",
    description:
      "경주 주요 사적지를 도는 시티투어버스로 7~8시간 주간 투어와 2시간대 야간 투어를 운영합니다. 경주 시외버스터미널·경주역(KTX)·주요 호텔에서 탑승하며 사전 예약제로 운영됩니다. 예약 인원이 15명 미만이면 운행이 취소될 수 있습니다.",
    howTo: "경주시티투어 홈페이지에서 온라인 예약",
    url: "https://cmtour.co.kr",
    tags: ["시티투어", "주간투어", "야간투어"],
  },
  {
    id: "gyeongbuk-pohang-pay",
    name: "포항사랑상품권 (포항사랑카드)",
    category: "benefit",
    sido: "gyeongbuk",
    sigungu: "포항시",
    summary: "할인 발행 지역사랑상품권",
    description:
      "포항시가 발행하는 지역사랑상품권으로 카드형·모바일형이 있으며 할인된 가격에 판매됩니다. 개인 구매한도는 월 40만 원, 보유한도는 70만 원입니다. 포항 지역 가맹점에서 사용해 지역 소상공인을 지원합니다.",
    howTo: "iM샵(#) 앱 또는 지정 은행에서 충전·발급",
    url: "https://www.pohang.go.kr",
    tags: ["지역화폐", "포항사랑카드", "할인"],
  },
  {
    id: "gyeongbuk-uiseong-happybus",
    name: "의성 행복버스",
    category: "drt",
    sido: "gyeongbuk",
    sigungu: "의성군",
    summary: "무료 농어촌 버스",
    description:
      "의성군이 의성여객과 함께 운영하는 농어촌버스로, 2025년부터 무료화로 전환되어 요금 부담 없이 이용할 수 있습니다. 대중교통이 부족한 군 지역 주민과 고령층의 이동권 보장을 위한 서비스입니다.",
    howTo: "의성군 내 농어촌버스 정류장에서 탑승 (무료)",
    url: "https://www.usc.go.kr",
    tags: ["농어촌버스", "무료", "교통복지"],
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
  {
    id: "gyeongnam-jinju-hamotago",
    name: "진주 공영자전거 하모타고",
    category: "mobility",
    sido: "gyeongnam",
    sigungu: "진주시",
    summary: "2시간 무료 공영자전거",
    description:
      "진주시가 운영하는 공영자전거로 2시간 무료 이용이 가능합니다. 상대동·충무공동·칠암동·평거동 등에 대여소가 있으며, 남강변 자전거 코스 여행에 적합합니다. 하절기 08:00~19:00, 동절기 09:00~17:00 운영합니다.",
    howTo: "하모타고 홈페이지·앱에서 회원가입 후 대여소에서 대여",
    url: "https://www.jinju.go.kr/hamotago",
    tags: ["공영자전거", "무료", "남강"],
  },
  {
    id: "gyeongnam-haman-callbus",
    name: "함안콜버스",
    category: "drt",
    sido: "gyeongnam",
    sigungu: "함안군",
    summary: "호출형 수요응답 버스",
    description:
      "함안군이 운영하는 수요응답형 버스로, 고정 노선 없이 앱·전화·호출벨로 예약하면 출발지·목적지에 맞춰 실시간 경로를 조정해 운행합니다. 운행구역은 가야읍·함안면·산인면 일원이며 매일 07:00~22:00 운행합니다. 요금은 일반 1,450원, 청소년·어린이 100원입니다.",
    howTo: "호출 앱·전화·정류장 호출벨로 예약",
    url: "https://www.haman.go.kr",
    tags: ["콜버스", "DRT", "농촌교통"],
  },
  {
    id: "gyeongnam-tongyeong-cablecar",
    name: "통영 한려수도 조망 케이블카",
    category: "culture",
    sido: "gyeongnam",
    sigungu: "통영시",
    summary: "미륵산 한려수도 조망 케이블카",
    description:
      "통영관광개발공사가 운영하는 공영 케이블카로 미륵산 정상에서 한려수도 다도해를 조망할 수 있습니다. 1,975m 구간을 자동순환식 곤돌라로 운행해 대기 없이 탑승 가능합니다. 통영 시민은 왕복 8,000원, 일반 17,000원, 경로 14,000원으로 시민 할인폭이 큽니다.",
    howTo: "하부정류장 현장 발권 또는 홈페이지 예매, 둘째·넷째 수요일 휴무",
    url: "https://cablecar.ttdc.kr",
    tags: ["케이블카", "미륵산", "한려수도"],
  },

  // ───────────── 제주 ─────────────
  {
    id: "jeju-tamnaneunjeon",
    name: "탐나는전 (제주 지역화폐)",
    category: "benefit",
    sido: "jeju",
    summary: "제주 전용 지역화폐",
    description:
      "제주특별자치도가 발행해 도내 가맹점에서만 쓰는 지역화폐입니다. 식당, 카페, 동네마트, 약국, 미용실 등 생활밀착형 소상공인 매장에서 사용하며, 충전 시 적립·할인 혜택을 받습니다. 대형마트·백화점·온라인몰에서는 사용이 제한되어 제주 골목상권에서 쓰기 좋습니다.",
    howTo: "탐나는전 앱·카드로 충전 후 가맹점 결제, 가맹점 찾기 제공",
    url: "https://tamna.jeju.go.kr/",
    tags: ["지역화폐", "할인", "적립"],
  },
  {
    id: "jeju-city-tour-bus",
    name: "제주시티투어버스",
    category: "shuttle",
    sido: "jeju",
    sigungu: "제주시",
    summary: "제주시 21개 정류장 순환",
    description:
      "공항·터미널·전통시장·해안도로 등 제주시 주요 명소 21개 정류장을 도는 시티투어버스로, 1일권 한 장으로 자유롭게 타고 내릴 수 있습니다. 휠체어 리프트를 갖춘 2층 저상버스도 운행하며, 순환형 주간 코스와 야간 코스가 있습니다. 현금 없이 카드·교통카드로만 결제합니다.",
    howTo: "1일권 구매 후 21개 정류장에서 자유 승하차 (문의 064-741-8784)",
    url: "https://jejucitybus.com/",
    tags: ["시티투어", "관광순환", "1일권"],
  },
  {
    id: "jeju-tourist-shuttle",
    name: "제주 관광지순환버스 (810·820)",
    category: "shuttle",
    sido: "jeju",
    summary: "동·서부 관광지 순환버스",
    description:
      "대중교통이 닿기 어려운 중산간 관광지를 잇는 순환버스로, 810번은 동부 오름·자연경관, 820번은 서부 테마파크 위주로 운행합니다. 교통카드 1,150원으로 일반버스처럼 타거나 3,000원 1일권으로 자유 환승할 수 있고, 관광도우미가 동승해 명소를 안내합니다. 1일권 사용 시 인근 관광지 할인도 제공합니다.",
    howTo: "동광·대천환승정류장 또는 차내에서 1일권 구매",
    url: "http://www.jejutouristshuttle.com/",
    tags: ["관광순환버스", "중산간", "1일권"],
  },
  {
    id: "jeju-seogwipo-citytour",
    name: "서귀포시티투어 (880번)",
    category: "shuttle",
    sido: "jeju",
    sigungu: "서귀포시",
    summary: "서귀포 시내 순환 전기버스",
    description:
      "서귀포 오일장-중앙로터리-천지연폭포를 순환하는 시티투어 성격의 전기버스 노선입니다. 시내 주요 지점과 관광지를 저렴한 시내버스 요금으로 연결해, 서귀포 도심을 차 없이 둘러보려는 여행자에게 유용합니다.",
    howTo: "정류장에서 교통카드·현금으로 일반버스처럼 탑승",
    url: "https://bus.jeju.go.kr/schedule/viewNew/880",
    tags: ["시티투어", "전기버스", "서귀포"],
  },
  {
    id: "jeju-greego-ebike",
    name: "제주시 공공 전기자전거 (그리고)",
    category: "mobility",
    sido: "jeju",
    sigungu: "제주시",
    summary: "제주시 공유 전기자전거",
    description:
      "제주시가 민간업체 그리고(GreeGo)와 운영하는 공공 전기자전거 서비스입니다. 동 지역 스테이션 22곳과 모드락허브 280곳에 약 180대를 배치했고, 매일 오전 7시부터 자정까지 이용할 수 있습니다. 기본 100원에 분당 90원(1시간 약 5,500원)으로 민간 대비 저렴해 단거리 이동에 좋습니다.",
    howTo: "그리고(GreeGo) 앱으로 대여, 스테이션·모드락허브에 반납",
    url: "https://www.greego.io/",
    tags: ["전기자전거", "공유모빌리티", "단거리이동"],
  },

  // ───────────── 인천 (보강) ─────────────
  {
    id: "incheon-i-pass",
    name: "인천 i-패스",
    category: "benefit",
    sido: "incheon",
    summary: "인천형 대중교통비 환급",
    description:
      "정부 K-패스를 기반으로 지원 범위와 혜택을 넓힌 인천형 대중교통비 지원 사업입니다. 19세 이상 인천시민이 버스·지하철·GTX 등 전국 대중교통을 이용하면 이용액의 일부를 환급해 줍니다. 출생가구 추가 환급(i+차비드림), 광역 i-패스 등으로 혜택이 계속 확대되고 있습니다.",
    howTo: "K-패스 카드 발급·회원가입 후 인천시민으로 등록 → 이용액 자동 환급",
    url: "https://www.incheon.go.kr/traffic/TR080101",
    tags: ["대중교통", "환급", "K패스"],
  },

  // ───────────── 광주 (보강) ─────────────
  {
    id: "gwangju-g-pass",
    name: "광주G-패스",
    category: "benefit",
    sido: "gwangju",
    summary: "광주형 생애주기별 교통비 지원",
    description:
      "2025년 시행된 광주형 대중교통비 지원 사업으로, 도시철도·시내버스·마을버스 이용 시 연령대별로 차등 지원합니다. 어린이는 100%, 청소년은 50% 할인되고, 청년 30%·성인 20%·어르신 50%·저소득 64% 등으로 환급해 줍니다. 성인은 K-패스에 가입·연계해 이용합니다.",
    howTo: "연령에 맞는 교통카드 사용(성인은 K-패스 가입), G-패스 카드는 도시철도역에서 구입",
    url: "https://www.gwangju.go.kr/traffic/contentsView.do?pageId=traffic61",
    tags: ["대중교통", "환급", "K패스"],
  },

  // ───────────── 대전 (보강) ─────────────
  {
    id: "daejeon-mobility-support",
    name: "대전 교통약자 이동지원센터",
    category: "drt",
    sido: "daejeon",
    summary: "교통약자 특별교통수단·바우처택시",
    description:
      "휠체어 탑재가 가능한 특별교통수단, 전용 임차택시, 바우처택시 등 약 336대를 24시간 운영하는 교통약자 전용 호출 교통 서비스입니다. 2005년 장애인콜택시로 시작해 노인·휠체어 이용자·임산부 등이 콜센터나 앱으로 차량을 부르면 일반 택시보다 저렴하게 이동할 수 있습니다.",
    howTo: "교통약자 이용 등록 후 콜센터·앱으로 차량 호출",
    url: "https://www.djcall.or.kr",
    tags: ["교통약자", "장애인콜택시", "바우처택시"],
  },

  // ───────────── 울산 (보강) ─────────────
  {
    id: "ulsan-masil-gorae-bus",
    name: "울산마실 고래버스",
    category: "drt",
    sido: "ulsan",
    summary: "울산 첫 수요응답형 호출버스(DRT)",
    description:
      "정해진 노선·시간표 없이 앱 호출에 따라 버스정류장 사이를 최적 경로로 달리는 울산 첫 수요응답형 버스(DRT)로 2025년 12월 29일 운행을 시작했습니다. 척과·다운2지구·성안동·울산공항 일대를 평일 06~22시 운행하며, 요금은 일반 시내버스와 같고 환승 할인이 적용됩니다(어린이·어르신 무료).",
    howTo: "'울산마실고래' 앱 설치·가입 → 출발·도착지 선택 후 호출, 교통카드로 결제",
    url: "https://www.ulsan.go.kr/u/traffic/contents.ulsan?mId=001003009000000000",
    tags: ["콜버스", "DRT", "수요응답"],
  },
  {
    id: "ulsan-walletfree-parking",
    name: "지갑없는 주차장",
    category: "convenience",
    sido: "ulsan",
    summary: "공영주차장 무정차 자동결제",
    description:
      "차량과 결제카드를 미리 등록해 두면 울산의 자동결제 지원 공영주차장에서 정산소에 들르지 않고 출차 시 주차요금이 자동 결제되는 서비스입니다. 감면 대상이면 가장 큰 감면이 자동 적용되고, 해당 항목이 없어도 등록 회원은 10% 감면을 받습니다.",
    howTo: "'지갑없는 주차장' 가입 후 차량·결제카드 등록 → 등록 주차장에서 자동 정산",
    url: "https://its.ulsan.kr/walletfree",
    tags: ["주차", "자동결제", "공영주차장"],
  },

  // ───────────── 경기 (보강) ─────────────
  {
    id: "gyeonggi-tour-pass",
    name: "경기투어패스",
    category: "benefit",
    sido: "gyeonggi",
    summary: "경기 관광지 자유이용·할인 패스",
    description:
      "경기도 내 관광명소와 체험시설의 입장권·할인을 하나로 묶은 디지털 관광패스입니다. 패스 한 장으로 제휴 관광지를 자유롭게 이용하거나 할인받을 수 있어, 경기 지역을 여행하며 여러 명소를 둘러볼 때 입장료 부담을 줄일 수 있습니다.",
    howTo: "경기투어패스 홈페이지·앱에서 패스 구매 후 제휴처에서 모바일 패스 제시",
    url: "https://www.ggtourpass.kr",
    tags: ["관광패스", "할인", "제휴관광지"],
  },

  // ───────────── 경남 (보강) ─────────────
  {
    id: "gyeongnam-pass",
    name: "경남패스",
    category: "benefit",
    sido: "gyeongnam",
    summary: "경남형 대중교통비 지원",
    description:
      "정부 K-패스와 연계해 경남도민에게 더 많은 교통비 혜택을 주는 경남형 대중교통비 지원 사업입니다. 월 15회 이상 대중교통을 이용하면 일정 비율을 환급해 주고, 75세 이상 어르신은 전액 환급되는 등 단계적 무료화를 추진합니다. 창원·진주·통영 등 도내 전 시군에 적용됩니다.",
    howTo: "K-패스 카드 발급·가입(또는 전화 080-864-8801) → 월 15회 이상 이용 시 환급",
    url: "https://www.gyeongnam.go.kr/index.gyeong?menuCd=DOM_000000148018000000",
    tags: ["대중교통", "환급", "K패스"],
  },

  // ───────────── 서울 (보강) ─────────────
  {
    id: "seoul-learn",
    name: "서울런(Seoul Learn)",
    category: "culture",
    sido: "seoul",
    summary: "취약계층 청소년 무료 인강·멘토링",
    description:
      "서울시가 운영하는 온라인 학습 플랫폼입니다. 기초생활수급·차상위·한부모 가정 등 대상 청소년이 메가스터디·이투스 같은 유명 사설 인강과 1:1 대학생 멘토링을 무료로 이용할 수 있습니다. 사교육비 부담 없이 입시·학습을 지원받을 수 있어, 알아두면 교육비를 크게 아낄 수 있는 서비스입니다.",
    howTo: "서울런 홈페이지에서 회원가입 시 지원 대상 여부 자동 확인 후 강의 수강",
    url: "https://slearn.seoul.go.kr",
    tags: ["교육", "인강", "청소년", "무료"],
  },
  {
    id: "seoul-onhealth-9988",
    name: "손목닥터9988",
    category: "benefit",
    sido: "seoul",
    summary: "걸으면 포인트 주는 건강관리 앱",
    description:
      "서울시민의 건강관리를 돕는 모바일 헬스케어 서비스입니다. 스마트워치·앱으로 걸음 수와 건강활동을 기록하면 포인트를 적립해 주고, 적립한 포인트는 서울페이로 전환해 가맹점에서 현금처럼 쓸 수 있습니다. 운동하며 용돈도 버는 셈이라 알아두면 쏠쏠한 서비스입니다.",
    howTo: "'손목닥터9988' 앱 설치 후 가입 → 걸음 수·미션 수행으로 포인트 적립",
    url: "https://onhealth.seoul.go.kr",
    tags: ["건강", "포인트", "걷기", "서울페이"],
  },
  {
    id: "seoul-public-reservation",
    name: "서울시 공공서비스예약",
    category: "convenience",
    sido: "seoul",
    summary: "시 체육·문화시설 통합 예약",
    description:
      "서울시·산하기관·자치구가 운영하는 체육시설, 강좌·교육, 문화행사, 시설 대관, 진료 등을 한 곳에서 예약하는 통합 포털입니다. 동네 수영장·풋살장·강당부터 시립 문화 프로그램까지 흩어진 공공 예약을 모아 둬, 어디서 신청해야 할지 헤맬 필요 없이 검색해 바로 예약할 수 있습니다.",
    howTo: "공공서비스예약 홈페이지에서 분야별로 검색 후 온라인 예약",
    url: "https://yeyak.seoul.go.kr",
    tags: ["예약", "체육시설", "문화행사", "시설대관"],
  },
  {
    id: "seoul-sarang-gift",
    name: "광역 서울사랑상품권",
    category: "benefit",
    sido: "seoul",
    summary: "25개 자치구 공통 5% 할인 상품권",
    description:
      "서울 25개 자치구 어디서나 쓸 수 있는 광역형 지역사랑상품권입니다. 액면가보다 할인된 가격(통상 5%)에 구매해 제로페이 가맹점에서 현금처럼 결제할 수 있어, 동네 가게나 전통시장에서 장을 볼 때 그만큼 아낄 수 있습니다. '서울Pay+' 앱으로 구매·결제하며 네이버페이 연동 결제도 지원합니다.",
    howTo: "'서울Pay+' 앱에서 상품권 구매(할인가) → 제로페이 가맹점에서 QR 결제",
    url: "https://mediahub.seoul.go.kr/archives/2017158",
    tags: ["지역화폐", "할인", "제로페이", "전통시장"],
  },

  // ───────────── 인천 (보강) ─────────────
  {
    id: "incheon-ferry-subsidy",
    name: "인천 연안여객선 운임 지원",
    category: "benefit",
    sido: "incheon",
    summary: "섬 출신 출향민 여객선 70% 할인",
    description:
      "인천 섬 지역에 본적이나 주소를 뒀던 출향민이 인천 연안여객선을 탈 때 정규 운임의 70%를 지원하는 사업입니다. 백령·연평·덕적 등 인천 앞바다 섬을 오갈 때 비싼 뱃삯 부담을 크게 덜 수 있습니다.",
    howTo: "지정 예매 사이트에서 대상자 확인 후 할인 적용(별도 신청 불요)",
    url: "https://www.incheon.go.kr/icbenefit/ICB010201/view?srvcId=26",
    tags: ["여객선", "섬", "운임지원", "출향민"],
  },
  {
    id: "incheon-ongjin-ferry-subsidy",
    name: "옹진군 여객운임 지원",
    category: "benefit",
    sido: "incheon",
    sigungu: "옹진군",
    summary: "인천시민 섬 여객선 80% 지원",
    description:
      "옹진군이 북도·연평·백령·대청·덕적·자월 6개 도서면을 찾는 인천시민에게 여객선 운임의 80%(자부담 20%)를 지원하는 사업입니다. 비싼 뱃삯 때문에 섬 여행을 망설이던 인천시민이 부담 없이 옹진 섬을 다녀올 수 있습니다.",
    howTo: "여객선 예매 시 인천시민 확인 후 지원 적용(연중 시행)",
    url: "https://www.ongjin.go.kr",
    tags: ["여객선", "섬", "운임지원", "도서"],
  },
  {
    id: "incheon-ganghwa-hospital-taxi",
    name: "강화군 병원 동행 택시비 지원",
    category: "convenience",
    sido: "incheon",
    sigungu: "강화군",
    summary: "저소득 중증질환자 병원 왕복 택시 지원",
    description:
      "강화군이 저소득 중증질환자가 병원을 오갈 때 왕복 택시비를 지원하는 사업입니다. 관내 택시 사업자들이 참여해 실제 운행한 왕복 요금만 지원받고 대기시간 비용은 받지 않으며, 보호자가 없으면 병원 접수까지 도와줍니다. 교통이 불편한 강화에서 거동이 어려운 주민에게 든든한 이동 수단입니다.",
    howTo: "강화군 보건소·읍면사무소에 대상자 신청",
    url: "https://www.ganghwa.go.kr",
    tags: ["병원동행", "택시", "교통약자", "복지"],
  },

  // ───────────── 경기 (보강) ─────────────
  {
    id: "gyeonggi-mdrt",
    name: "경기 광역콜버스 (M-DRT)",
    category: "drt",
    sido: "gyeonggi",
    summary: "시 경계 넘나드는 광역 수요응답버스",
    description:
      "경기교통공사가 운영하는 광역형 수요응답 버스입니다. 기존 똑버스가 한 시·군 안에서만 다닌다면, 광역콜버스(M-DRT)는 수원·용인·화성·시흥·광주 등 인접 도시를 오가는 시 경계 구간을 앱 호출로 연결합니다. 노선버스가 닿기 어려운 시 외곽·신도시에서 옆 도시로 이동할 때 유용합니다.",
    howTo: "'똑타' 앱에서 광역콜버스 호출(운행 지역 한정)",
    url: "https://www.gtrans.or.kr",
    tags: ["수요응답", "광역", "콜버스", "앱호출"],
  },
  {
    id: "gyeonggi-gapyeong-happytaxi",
    name: "가평군 행복택시",
    category: "drt",
    sido: "gyeonggi",
    sigungu: "가평군",
    summary: "시내버스 요금으로 읍·면까지 가는 택시",
    description:
      "버스가 자주 다니지 않는 가평 산간·오지 마을 주민이 시내버스 요금(약 1,100원) 수준만 내고 읍·면 소재지까지 택시를 이용하는 교통 복지 서비스입니다. 차액은 군이 부담하며, 볼일을 본 뒤 돌아올 때도 탈 수 있어 병원·장보기 같은 일상 이동이 한결 편해집니다.",
    howTo: "지정 콜센터로 전화 예약(운행 대상 마을 주민)",
    url: "https://www.gp.go.kr",
    tags: ["행복택시", "농촌교통", "교통복지"],
  },

  // ───────────── 부산 (보강) ─────────────
  {
    id: "busan-public-bike",
    name: "부산 자전거 무료대여소",
    category: "mobility",
    sido: "busan",
    summary: "생태공원·하천변에서 자전거 빌려 타기",
    description:
      "부산시가 온천천 시민공원·낙동강 생태공원 등 시내 곳곳에 운영하는 공공 자전거 대여소입니다. 동래구(온천천)·해운대구(좌수영교 하부)·금정구(온천장역) 등 무료 대여소에서는 신분증만 맡기면 성인·어린이 자전거를 빌릴 수 있고, 타이어 펑크나 체인·브레이크 같은 간단한 정비도 받을 수 있습니다. 대여소마다 운영 시간과 무료·유료 여부가 다르니 방문 전 확인하세요.",
    howTo: "가까운 대여소 방문 → 신분증 제시 후 자전거 대여(대여소별 운영시간 상이)",
    url: "https://www.busan.go.kr/depart/ahbicycle04",
    tags: ["공공자전거", "대여", "생태공원", "온천천"],
  },
  {
    id: "busan-tabara-gangseo",
    name: "타바라 강서",
    category: "drt",
    sido: "busan",
    sigungu: "강서구",
    summary: "명지~가덕도 앱으로 부르는 부산형 콜버스",
    description:
      "부산형 수요응답버스 '타바라'의 강서권역 노선입니다. 2025년 7월부터 명지1동·녹산·화전·가덕도 일원 75개 정류장을 자유노선형으로 운행해, 버스가 뜸한 강서 외곽에서 앱으로 호출하면 비슷한 방향 승객을 묶어 태워줍니다. 요금은 일반 시내버스와 같고 환승 할인도 적용됩니다.",
    howTo: "'타바라' 앱 설치 → 출발지·도착지 입력 → 배차 차량 탑승(07:00~21:00)",
    url: "https://www.tabara.kr",
    tags: ["콜버스", "강서", "명지", "가덕도", "DRT"],
  },

  // ───────────── 대구 (보강) ─────────────
  {
    id: "daegu-daeguro-app",
    name: "공공배달앱 '대구로'",
    category: "convenience",
    sido: "daegu",
    summary: "수수료 낮은 대구 공공 배달·장보기 앱",
    description:
      "대구시가 만든 공공 배달앱입니다. 민간 배달앱보다 중개수수료가 낮아 소상공인 부담이 적고, 이용자는 무료배달·할인 행사 혜택을 받을 수 있습니다. 음식 배달뿐 아니라 전통시장 장보기, 택시 호출(대구로택시)까지 한 앱에서 이용할 수 있고, 결제 시 '대구로페이'를 쓰면 추가 할인도 됩니다.",
    howTo: "'대구로' 앱 설치 → 음식·장보기 주문(대구로페이 결제 시 추가 할인)",
    url: "https://www.daegu.go.kr",
    tags: ["공공배달앱", "무료배달", "전통시장", "대구로페이"],
  },

  // ───────────── 대전 (보강) ─────────────
  {
    id: "daejeon-observatory",
    name: "대전시민천문대",
    category: "culture",
    sido: "daejeon",
    summary: "예약 없이 무료로 별 보는 공공 천문대",
    description:
      "대전시가 유성구 과학로에 운영하는 시민 천문대입니다. 관람료가 무료이고 개인은 예약 없이 들어가 천체망원경으로 달·행성·별을 관측하고 천체투영관(플라네타리움) 상영도 볼 수 있습니다. 오후 2시부터 밤 10시까지 운영해 낮보다 저녁 방문이 알찬, 아이와 함께 가기 좋은 과학도시 대전다운 시설입니다.",
    howTo: "개인은 예약 없이 방문(월요일·공휴일 다음날 휴관) / 20인 이상 단체는 예약 필수",
    url: "https://djstar.kr",
    tags: ["천문대", "무료", "별관측", "과학체험"],
  },

  // ───────────── 울산 (보강) ─────────────
  {
    id: "ulsan-taehwagang-garden",
    name: "태화강 국가정원",
    category: "culture",
    sido: "ulsan",
    summary: "입장료 무료인 도심 속 국가정원",
    description:
      "울산 도심 태화강변에 펼쳐진 국가정원으로 입장료가 무료입니다. 대나무숲(십리대숲), 계절별 꽃밭, 생태습지를 산책하고 봄·가을엔 정원박람회·축제도 열립니다. 휠체어·유아차 이동이 쉬운 무장애 동선이 잘 갖춰져 있어 가족·어르신과 함께 부담 없이 자연을 즐기기 좋습니다.",
    howTo: "상시 무료 개방(상설 정원), 주차장·방문자센터 이용 가능",
    url: "https://www.ulsan.go.kr/s/garden/main.ulsan",
    tags: ["국가정원", "무료", "십리대숲", "산책"],
  },

  // ───────────── 강원 (보강) ─────────────
  {
    id: "gangwon-yanggu-huimang-taxi",
    name: "양구군 희망택시",
    category: "drt",
    sido: "gangwon",
    sigungu: "양구군",
    summary: "농어촌버스 안 가는 마을 호출택시",
    description:
      "농어촌버스가 닿지 않는 양구군 교통 취약 마을 주민을 위한 농촌형 수요응답 택시입니다. 양구읍·국토정중앙면·동면·방산면·해안면 등 군 전역 84개 마을에서 운영되며, 버스 요금 수준의 적은 부담으로 읍내 병원·장보기 같은 일상 이동을 할 수 있습니다.",
    howTo: "대상 마을 주민으로 등록(반기별 모집) 후 전화 호출",
    url: "https://www.yanggu.go.kr",
    tags: ["희망택시", "농어촌교통", "교통복지"],
  },

  // ───────────── 충북 (보강) ─────────────
  {
    id: "chungbuk-cheongju-happytaxi",
    name: "청주 시골마을 행복택시",
    category: "drt",
    sido: "chungbuk",
    sigungu: "청주시",
    summary: "버스 뜸한 읍·면 마을 공영버스 요금 택시",
    description:
      "버스정류장까지 400m 이상 떨어졌거나 하루 버스 운행이 1회 이하인 청주 외곽 읍·면 마을 주민을 위한 농촌형 수요응답 택시입니다. 공영버스 요금 수준만 내면 마을 집결지에서 읍·면 소재지까지 데려다줘 병원·장보기 같은 이동이 편해집니다. 운행 마을이 67개소로 꾸준히 늘고 있습니다.",
    howTo: "대상 마을 주민으로 등록 후 지정 콜센터로 전화 호출",
    url: "https://www.cheongju.go.kr",
    tags: ["행복택시", "농촌교통", "읍면", "교통복지"],
  },
  // ───────────── 충남 (보강) ─────────────
  {
    id: "chungnam-gongju-baekjessing",
    name: "공주 백제씽씽 무료 공공자전거",
    category: "mobility",
    sido: "chungnam",
    sigungu: "공주시",
    summary: "원도심·금강변에서 무료로 빌려 타는 공공자전거",
    description:
      "공주시가 운영하는 무료 공공자전거입니다. 공산성·금강변·원도심 일대 대여소에서 신분증만 맡기면 별도 요금 없이 빌려 탈 수 있어, 백제 유적과 금강 산책로를 자전거로 둘러보기 좋습니다.",
    howTo: "가까운 대여소 방문 → 신분증 제시 후 무료 대여(대여소별 운영시간 확인)",
    url: "https://www.gongju.go.kr",
    tags: ["공공자전거", "무료", "백제씽씽", "금강", "원도심"],
  },
  // ───────────── 전남 (보강) ─────────────
  {
    id: "shinan-bus-public",
    name: "신안군 버스 완전공영제",
    category: "benefit",
    sido: "jeonnam",
    sigungu: "신안군",
    summary: "섬마다 거리 상관없이 1,000원 균일 요금 버스",
    description:
      "신안군은 전국 최초로 버스 완전공영제를 도입해, 1004개 섬으로 흩어진 군 전역의 농어촌버스를 군이 직접 운영합니다. 거리와 상관없이 어른 1,000원 균일 요금이라 섬 안에서 이동하거나 여행할 때 교통비 부담이 거의 없습니다. 도입 16년째 요금이 동결될 만큼 정착된 제도입니다.",
    howTo: "신안군 농어촌버스 탑승 → 1,000원 균일 요금 결제(현금·교통카드)",
    url: "https://www.shinan.go.kr",
    tags: ["버스공영제", "균일요금", "섬", "교통복지", "전국최초"],
  },
];
