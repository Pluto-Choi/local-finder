import { SERVICES } from "./services";
import { getSido } from "./regions";
import { categoryMeta } from "./categories";
import type { Service, ServiceCategory } from "./types";

// 전체 서비스 수 — 홈 통계용
export function totalServiceCount(): number {
  return SERVICES.length;
}

// 키워드로 서비스 검색. 이름·요약·설명·태그·지역명·카테고리 라벨을 모두 본다.
export function searchServices(
  query: string,
  category?: ServiceCategory | null,
): Service[] {
  const q = query.trim().toLowerCase();
  return SERVICES.filter((s) => {
    if (category && s.category !== category) return false;
    if (!q) return true;
    const region = getSido(s.sido);
    const haystack = [
      s.name,
      s.summary,
      s.description,
      s.howTo ?? "",
      ...(s.tags ?? []),
      region?.name ?? "",
      region?.short ?? "",
      s.sigungu ?? "",
      categoryMeta(s.category).label,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}

// 시·도 전역 서비스 (sigungu 없음)
export function sidoWideServices(sido: string): Service[] {
  return SERVICES.filter((s) => s.sido === sido && !s.sigungu);
}

// 특정 시/군/구 전용 서비스
export function sigunguServices(sido: string, sigungu: string): Service[] {
  return SERVICES.filter((s) => s.sido === sido && s.sigungu === sigungu);
}

// 시·도 단위 전체 서비스 수 (전역 + 모든 시군구) — 홈/목록 카운트용
export function sidoServiceCount(sido: string): number {
  return SERVICES.filter((s) => s.sido === sido).length;
}

// 서비스가 1건이라도 있는 시/군/구 이름 집합
export function sigunguWithServices(sido: string): Set<string> {
  const set = new Set<string>();
  for (const s of SERVICES) {
    if (s.sido === sido && s.sigungu) set.add(s.sigungu);
  }
  return set;
}

// 시/군/구별 서비스 개수 맵 — 카운트 뱃지·정렬용
export function sigunguServiceCounts(sido: string): Map<string, number> {
  const map = new Map<string, number>();
  for (const s of SERVICES) {
    if (s.sido === sido && s.sigungu) {
      map.set(s.sigungu, (map.get(s.sigungu) ?? 0) + 1);
    }
  }
  return map;
}
