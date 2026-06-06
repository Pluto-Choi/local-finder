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
