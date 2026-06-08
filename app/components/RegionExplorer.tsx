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
    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-teal-50 dark:bg-teal-950/40">
      <svg viewBox={pathBBox(p.d)} className="h-10 w-10" aria-hidden>
        <path d={p.d} fill="#0d9488" stroke="#ffffff" strokeWidth={1} />
      </svg>
    </div>
  );
}

export default function RegionExplorer() {
  const [sido, setSido] = useState<string | null>(null);
  const [sigungu, setSigungu] = useState<string | null>(null);
  const [showAllCities, setShowAllCities] = useState(false);

  function goHome() {
    setSido(null);
    setSigungu(null);
    setShowAllCities(false);
  }
  function openProvince(slug: string) {
    setSido(slug);
    setSigungu(null);
    setShowAllCities(false);
  }

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
          <KoreaMap onSelect={openProvince} />
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

  // ── 도/도시 통합 화면: 상단 스코프 버튼으로 전환 ──────────
  const citiesWith = sigunguSorted.filter((gu) => (counts.get(gu) ?? 0) > 0);
  const citiesWithout = sigunguSorted.filter((gu) => (counts.get(gu) ?? 0) === 0);

  return (
    <div>
      <Breadcrumb
        onHome={goHome}
        onProvince={sigungu ? () => setSigungu(null) : undefined}
        provinceLabel={region.short}
        cityLabel={sigungu ?? undefined}
      />
      <div className="mt-3 flex items-center gap-3">
        <MiniShape slug={region.slug} />
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight">
            {region.short}
            {sigungu ? ` ${sigungu}` : ""}
          </h1>
          <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
            {sigunguTotal + wide.length}개 서비스
            {wide.length > 0 && ` · 전역 ${wide.length}`}
            {sigunguTotal > 0 && ` · 도시별 ${sigunguTotal}`}
          </p>
        </div>
      </div>

      {/* 스코프 버튼 바: 지역 전체 + 서비스 있는 도시. 클릭하면 아래 목록만 바뀜 */}
      {citiesWith.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          <ScopeButton
            label="지역 전체"
            count={wide.length}
            active={sigungu === null}
            onClick={() => setSigungu(null)}
          />
          {citiesWith.map((gu) => (
            <ScopeButton
              key={gu}
              label={gu}
              count={counts.get(gu) ?? 0}
              active={sigungu === gu}
              onClick={() => setSigungu(gu)}
            />
          ))}
        </div>
      )}

      {/* 선택된 스코프의 서비스 목록 */}
      {sigungu === null ? (
        wide.length > 0 ? (
          <section className="mt-6">
            <SectionTitle>
              {region.short} 전역에서 이용 가능 ({wide.length})
            </SectionTitle>
            <FilterableServiceList services={wide} />
          </section>
        ) : citiesWith.length > 0 ? (
          <p className="mt-6 rounded-xl border border-dashed border-stone-300 px-4 py-6 text-center text-sm text-stone-400 dark:border-stone-700">
            {region.short} 전역 공통 서비스는 없어요. 위 도시 버튼에서 골라보세요.
          </p>
        ) : (
          <p className="mt-6 rounded-xl border border-dashed border-stone-300 px-4 py-6 text-center text-sm text-stone-400 dark:border-stone-700">
            {region.short} 지역 서비스를 모으는 중이에요. 알고 있는 서비스가
            있다면 제보해 주세요.
          </p>
        )
      ) : (
        <>
          {local.length > 0 ? (
            <section className="mt-6">
              <SectionTitle>{sigungu} 전용 서비스</SectionTitle>
              <FilterableServiceList services={local} />
            </section>
          ) : (
            <p className="mt-6 rounded-xl border border-dashed border-stone-300 px-4 py-6 text-center text-sm text-stone-400 dark:border-stone-700">
              아직 {sigungu} 전용으로 등록된 서비스가 없어요.
            </p>
          )}

          {wide.length > 0 && (
            <section className="mt-8">
              <SectionTitle>{region.short} 전역에서도 이용 가능</SectionTitle>
              <FilterableServiceList services={wide} />
            </section>
          )}
        </>
      )}

      {/* 아직 서비스가 없는 동네 (접이식, 참고용) */}
      {citiesWithout.length > 0 && (
        <div className="mt-8 border-t border-stone-200/70 pt-4 dark:border-stone-800/70">
          {showAllCities ? (
            <>
              <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                {citiesWithout.map((gu) => (
                  <li key={gu}>
                    <CityButton name={gu} count={0} />
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => setShowAllCities(false)}
                className="mt-3 text-xs font-medium text-stone-400 hover:text-teal-600 dark:hover:text-teal-400"
              >
                접기 ▴
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => setShowAllCities(true)}
              className="text-xs font-medium text-stone-400 hover:text-teal-600 dark:hover:text-teal-400"
            >
              아직 서비스가 없는 동네 {citiesWithout.length}곳 보기 ▾
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function ScopeButton({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition " +
        (active
          ? "border-teal-500 bg-teal-500 text-white"
          : "border-stone-200 bg-[var(--surface)] text-stone-600 hover:border-teal-300 dark:border-stone-700 dark:text-stone-300")
      }
    >
      <span>{label}</span>
      <span
        className={
          "rounded-full px-1.5 py-0.5 text-xs font-semibold " +
          (active
            ? "bg-white/25 text-white"
            : "bg-teal-50 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300")
        }
      >
        {count}
      </span>
    </button>
  );
}

function CityButton({
  name,
  count,
  onClick,
}: {
  name: string;
  count: number;
  onClick?: () => void;
}) {
  const active = count > 0;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!active}
      className={
        "flex w-full items-center justify-between gap-1 rounded-xl border px-3 py-2.5 text-sm transition " +
        (active
          ? "elevate-hover cursor-pointer border-stone-200 bg-[var(--surface)] hover:border-teal-400 dark:border-stone-800 dark:hover:border-teal-600"
          : "cursor-default border-stone-100 bg-[var(--surface-muted)] text-stone-400 dark:border-stone-800/60 dark:text-stone-500")
      }
    >
      <span>{name}</span>
      {active && (
        <span className="rounded-full bg-teal-50 px-1.5 py-0.5 text-xs font-semibold text-teal-700 dark:bg-teal-950/50 dark:text-teal-300">
          {count}
        </span>
      )}
    </button>
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
