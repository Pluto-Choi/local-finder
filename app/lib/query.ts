import { SERVICES } from "./services";
import type { Service } from "./types";

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
