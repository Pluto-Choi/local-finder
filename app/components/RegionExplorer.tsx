"use client";

import { useMemo, useState } from "react";
import { SIDOS, getSido } from "../lib/regions";
import {
  sidoWideServices,
  sigunguServices,
  sigunguServiceCounts,
  totalServiceCount,
} from "../lib/query";
import { CATEGORIES } from "../lib/categories";
import { KOREA_PATHS } from "../lib/koreaMapPaths";
import KoreaMap from "./KoreaMap";
import SearchExplorer from "./SearchExplorer";
import FilterableServiceList from "./FilterableServiceList";

// path d 문자열에서 bounding box 계산 → 선택한 도 모양만 확대해서 보여주는 미니 지도용
function pathBBox(d: string) {
  const nums = (d.match(/-?\d+(?:\.\d+)?/g) ?? []).map(Number);
  let minX = Infinity,
    minY = Infinity,
    maxX = -Infinity,
    maxY = -Infinity;
  for (let i = 0; i + 1 < nums.length; i += 2) {
    const x = nums[i];
    const y = nums[i + 1];
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  }
  const pad = 6;
  return `${minX - pad} ${minY - pad} ${maxX - minX + pad * 2} ${maxY - minY + pad * 2}`;
}

function MiniShape({ slug }: { slug: string }) {
  const p = KOREA_PATHS.find((x) => x.slug === slug);
  if (!p) return null;
  return (
    <svg
      viewBox={pathBBox(p.d)}
      className="h-14 w-14 shrink-0"
      aria-hidden
    >
      <path d={p.d} fill="#0d9488" stroke="#ffffff" strokeWidth={1} />
    </svg>
  );
}

export default function RegionExplorer() {
  const [sido, setSido] = useState<string | null>(null);
  const [sigungu, setSigungu] = useState<string | null>(null);

  const region = sido ? getSido(sido) : null;

  const counts = useMemo(
    () => (sido ? sigunguServiceCounts(sido) : new Map<string, number>()),
    [sido],
  );
  const wide = useMemo(
    () => (sido ? sidoWideServices(sido) : []),
    [sido],
  );
  const local = useMemo(
    () => (sido && sigungu ? sigunguServices(sido, sigungu) : []),
    [sido, sigungu],
  );

  // ── 전국 지도 화면 ────────────────────────────────
  if (!region) {
    return (
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          어떤 지역으로 가시나요?
        </h1>
        <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">
          지도에서 지역을 눌러, 그 동네가 조용히 굴리는 숨은 편의 서비스를
          찾아보세요.
        </p>
        <div className="elevate mt-5 rounded-3xl border border-stone-200/70 bg-[var(--surface)] p-4 dark:border-stone-800 sm:p-6">
          <KoreaMap onSelect={(s) => {
            setSido(s);
            setSigungu(null);
          }} />
        </div>

        {/* 검색은 메인(전국) 화면에서만 노출 */}
        <section className="mt-12 border-t border-stone-200/70 pt-8 dark:border-stone-800/70">
          <h2 className="mb-1 text-sm font-semibold uppercase tracking-wide text-stone-400">
            이름으로 바로 찾기
          </h2>
          <p className="mb-4 text-xs text-stone-400">
            {SIDOS.length}개 시·도 · {totalServiceCount()}개 편의 서비스 ·{" "}
            {CATEGORIES.length}개 카테고리
          </p>
          <SearchExplorer />
        </section>
      </div>
    );
  }

  const sigunguSorted = [...region.sigungu].sort(
    (a, b) => (counts.get(b) ?? 0) - (counts.get(a) ?? 0),
  );
  const sigunguTotal = [...counts.values()].reduce((a, b) => a + b, 0);

  // ── 도시(시·군·구) 서비스 화면 ──────────────────────
  if (sigungu) {
    return (
      <div>
        <Breadcrumb
          onHome={() => {
            setSido(null);
            setSigungu(null);
          }}
          onProvince={() => setSigungu(null)}
          provinceLabel={region.short}
          cityLabel={sigungu}
        />
        <h1 className="mt-3 text-2xl font-extrabold tracking-tight">
          {region.short} {sigungu}
        </h1>

        {local.length > 0 ? (
          <section className="mt-5">
            <SectionTitle>{sigungu} 전용 서비스</SectionTitle>
            <FilterableServiceList services={local} />
          </section>
        ) : (
          <p className="mt-5 rounded-xl border border-dashed border-stone-300 px-4 py-6 text-center text-sm text-stone-400 dark:border-stone-700">
            아직 {sigungu} 전용으로 등록된 서비스가 없어요.
          </p>
        )}

        {wide.length > 0 && (
          <section className="mt-8">
            <SectionTitle>{region.short} 전역에서도 이용 가능</SectionTitle>
            <FilterableServiceList services={wide} />
          </section>
        )}
      </div>
    );
  }

  // ── 도 단위 → 도시 목록 화면 ────────────────────────
  return (
    <div>
      <Breadcrumb
        onHome={() => {
          setSido(null);
          setSigungu(null);
        }}
        provinceLabel={region.short}
      />
      <div className="mt-3 flex items-center gap-3">
        <MiniShape slug={region.slug} />
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight">
            {region.short}, 어느 도시로?
          </h1>
          <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
            {sigunguTotal + wide.length}개 서비스
            {wide.length > 0 && ` · 전역 ${wide.length}`}
            {sigunguTotal > 0 && ` · 도시별 ${sigunguTotal}`}
          </p>
        </div>
      </div>

      {region.sigungu.length > 0 ? (
        <section className="mt-6">
          <SectionTitle>도시(시·군·구) 선택</SectionTitle>
          <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4">
            {sigunguSorted.map((gu) => {
              const n = counts.get(gu) ?? 0;
              return (
                <li key={gu}>
                  <button
                    type="button"
                    onClick={() => n > 0 && setSigungu(gu)}
                    disabled={n === 0}
                    className={
                      "flex w-full items-center justify-between gap-1 rounded-xl border px-3 py-2.5 text-sm transition " +
                      (n > 0
                        ? "elevate-hover cursor-pointer border-stone-200 bg-[var(--surface)] hover:border-teal-400 dark:border-stone-800 dark:hover:border-teal-600"
                        : "cursor-default border-stone-100 bg-[var(--surface-muted)] text-stone-400 dark:border-stone-800/60 dark:text-stone-500")
                    }
                  >
                    <span>{gu}</span>
                    {n > 0 && (
                      <span className="rounded-full bg-teal-50 px-1.5 py-0.5 text-xs font-semibold text-teal-700 dark:bg-teal-950/50 dark:text-teal-300">
                        {n}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      ) : (
        <p className="mt-6 text-sm text-stone-400">
          {region.short}은(는) 별도 시·군·구 구분이 없어요.
        </p>
      )}

      {wide.length > 0 && (
        <section className="mt-8">
          <SectionTitle>{region.short} 전역에서 이용 가능 ({wide.length})</SectionTitle>
          <FilterableServiceList services={wide} />
        </section>
      )}

      {wide.length === 0 && sigunguTotal === 0 && (
        <p className="mt-6 rounded-xl border border-dashed border-stone-300 px-4 py-6 text-center text-sm text-stone-400 dark:border-stone-700">
          아직 {region.short} 지역 서비스를 수집 중이에요.
        </p>
      )}
    </div>
  );
}

function Breadcrumb({
  onHome,
  onProvince,
  provinceLabel,
  cityLabel,
}: {
  onHome: () => void;
  onProvince?: () => void;
  provinceLabel: string;
  cityLabel?: string;
}) {
  return (
    <nav className="flex items-center gap-1 text-xs text-stone-400">
      <button
        type="button"
        onClick={onHome}
        className="font-medium hover:text-teal-600 dark:hover:text-teal-400"
      >
        ← 전체 지도
      </button>
      <span className="mx-0.5">·</span>
      {cityLabel && onProvince ? (
        <button
          type="button"
          onClick={onProvince}
          className="hover:text-teal-600 dark:hover:text-teal-400"
        >
          {provinceLabel}
        </button>
      ) : (
        <span className="text-stone-600 dark:text-stone-300">
          {provinceLabel}
        </span>
      )}
      {cityLabel && (
        <>
          <span className="mx-0.5">›</span>
          <span className="text-stone-600 dark:text-stone-300">{cityLabel}</span>
        </>
      )}
    </nav>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 text-sm font-semibold text-stone-500 dark:text-stone-400">
      {children}
    </h2>
  );
}
