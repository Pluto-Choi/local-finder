import type { CategoryMeta, ServiceCategory } from "./types";

export const CATEGORIES: CategoryMeta[] = [
  {
    key: "drt",
    label: "수요응답형 교통",
    emoji: "🚐",
    desc: "정해진 노선 없이 앱으로 부르면 오는 콜버스(DRT)",
  },
  {
    key: "mobility",
    label: "공유 모빌리티",
    emoji: "🚲",
    desc: "지자체가 운영하는 공공자전거·전동 모빌리티",
  },
  {
    key: "shuttle",
    label: "투어·순환버스",
    emoji: "🚌",
    desc: "시티투어·순환·무료 셔틀버스",
  },
  {
    key: "benefit",
    label: "지역 혜택",
    emoji: "💳",
    desc: "지역화폐·대중교통 할인·관광패스",
  },
  {
    key: "convenience",
    label: "생활 편의",
    emoji: "🛎️",
    desc: "짐보관·무인민원 등 알아두면 편한 서비스",
  },
  {
    key: "culture",
    label: "문화·여가",
    emoji: "🎫",
    desc: "공공이 운영하는 체험·문화 시설",
  },
];

const BY_KEY: Record<ServiceCategory, CategoryMeta> = Object.fromEntries(
  CATEGORIES.map((c) => [c.key, c]),
) as Record<ServiceCategory, CategoryMeta>;

export function categoryMeta(key: ServiceCategory): CategoryMeta {
  return BY_KEY[key];
}

// 카테고리별 색상 토큰. Tailwind JIT가 인식하도록 전체 클래스 문자열을 그대로 둔다.
export type CategoryStyle = { badge: string; bar: string; dot: string };

export const CATEGORY_STYLES: Record<ServiceCategory, CategoryStyle> = {
  drt: {
    badge:
      "bg-sky-100 text-sky-700 dark:bg-sky-950/50 dark:text-sky-300",
    bar: "bg-sky-400",
    dot: "bg-sky-500",
  },
  mobility: {
    badge:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300",
    bar: "bg-emerald-400",
    dot: "bg-emerald-500",
  },
  shuttle: {
    badge:
      "bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300",
    bar: "bg-amber-400",
    dot: "bg-amber-500",
  },
  benefit: {
    badge:
      "bg-violet-100 text-violet-700 dark:bg-violet-950/50 dark:text-violet-300",
    bar: "bg-violet-400",
    dot: "bg-violet-500",
  },
  convenience: {
    badge:
      "bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300",
    bar: "bg-rose-400",
    dot: "bg-rose-500",
  },
  culture: {
    badge:
      "bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-950/50 dark:text-fuchsia-300",
    bar: "bg-fuchsia-400",
    dot: "bg-fuchsia-500",
  },
};

export function categoryStyle(key: ServiceCategory): CategoryStyle {
  return CATEGORY_STYLES[key];
}
