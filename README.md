# 이 동네 뭐있지? (local-finder)

맛집·관광지 말고, **그 지역이 조용히 굴리는 진짜 편의 서비스**를 지역별로 모아 보여주는 사이트.
콜버스(DRT)·공공자전거·지역화폐·시티투어버스처럼 그 동네에 살거나 와봐야 아는 것들을 시/도 → 시/군/구 단위로 탐색한다.

## 스택

Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · TypeScript

## 구조

```
app/
  page.tsx                     홈 (카테고리 안내 + 시·도 그리드)
  [sido]/page.tsx              시·도 전역 서비스 + 시·군·구 그리드
  [sido]/[sigungu]/page.tsx    시·군·구 전용 + 시·도 전역 서비스
  components/                  ServiceCard, CategoryBadge
  lib/
    types.ts                   타입 정의
    categories.ts              서비스 카테고리 메타
    regions.ts                 전국 17개 시·도 → 시·군·구 트리
    services.ts                서비스 시드 데이터  ← 여기에 항목 추가
    query.ts                   지역별 필터 헬퍼
  site.ts                      사이트 상수 (도메인 등)
```

## 서비스 추가하는 법

`app/lib/services.ts`의 `SERVICES` 배열에 항목 하나 추가하면 라우팅·필터·카운트가 자동 반영된다.

```ts
{
  id: "busan-something",
  name: "서비스명",
  category: "drt",        // drt | mobility | shuttle | benefit | convenience | culture
  sido: "busan",          // regions.ts의 slug
  sigungu: "기장군",       // 생략하면 시·도 전역 서비스
  summary: "한 줄 소개",
  description: "무엇인지 / 왜 편한지",
  howTo: "이용 방법",      // 선택
  url: "https://...",     // 선택
  tags: ["콜버스"],        // 선택
}
```

> 원칙: **실제 운영 중인 공공 서비스만** 넣는다. 불확실하면 넣지 않는다.

## 향후 확장

- 공공데이터포털(data.go.kr)의 교통·관광 API로 시드 데이터 자동 보강
- 위치 기반("내 주변") 자동 지역 감지
- 카테고리/검색 필터

## 개발

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```
