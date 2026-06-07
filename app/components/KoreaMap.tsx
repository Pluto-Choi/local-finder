"use client";

import { useMemo, useState } from "react";
import { KOREA_PATHS, MAP_VIEWBOX } from "../lib/koreaMapPaths";
import { SIDOS, getSido } from "../lib/regions";

type RegionInfo = {
  slug: string;
  short: string;
  d: string;
  cx: number;
  cy: number;
};

export default function KoreaMap({
  onSelect,
}: {
  onSelect: (slug: string) => void;
}) {
  const [hover, setHover] = useState<string | null>(null);

  const regions: RegionInfo[] = useMemo(
    () =>
      KOREA_PATHS.map((p) => {
        const region = getSido(p.slug);
        return {
          slug: p.slug,
          short: region?.short ?? p.slug,
          d: p.d,
          cx: p.cx,
          cy: p.cy,
        };
      }),
    [],
  );

  const hovered = regions.find((r) => r.slug === hover) ?? null;

  return (
    <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_210px] sm:items-start">
      {/* 지도 */}
      <div className="relative mx-auto w-full max-w-[400px]">
        <svg
          viewBox={MAP_VIEWBOX}
          className="h-auto w-full select-none"
          role="img"
          aria-label="대한민국 지역 지도"
        >
          {regions.map((r) => {
            const active = hover === r.slug;
            return (
              <path
                key={r.slug}
                d={r.d}
                fill={active ? "#0d9488" : "#5eead4"}
                stroke={active ? "#0f766e" : "#0d9488"}
                strokeWidth={active ? 1.6 : 1}
                strokeLinejoin="round"
                className="cursor-pointer transition-[fill,stroke-width] duration-150"
                style={{
                  filter: active
                    ? "drop-shadow(0 2px 6px rgba(13,148,136,0.45))"
                    : undefined,
                }}
                onMouseEnter={() => setHover(r.slug)}
                onMouseLeave={() => setHover((h) => (h === r.slug ? null : h))}
                onClick={() => onSelect(r.slug)}
                tabIndex={0}
                role="button"
                aria-label={r.short}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelect(r.slug);
                  }
                }}
              />
            );
          })}

          {/* 지역명 라벨 (도 식별용) */}
          {regions.map((r) => (
            <text
              key={`label-${r.slug}`}
              x={r.cx}
              y={r.cy}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={10}
              fontWeight={700}
              fill="#134e4a"
              stroke="#ffffff"
              strokeWidth={2.4}
              paintOrder="stroke"
              strokeLinejoin="round"
              className="pointer-events-none select-none"
            >
              {r.short}
            </text>
          ))}
        </svg>

        {/* 호버 지역명 */}
        <div className="pointer-events-none absolute left-1/2 top-1 -translate-x-1/2">
          {hovered ? (
            <span className="rounded-full bg-stone-900/90 px-3 py-1 text-xs font-semibold text-white shadow-lg dark:bg-white/90 dark:text-stone-900">
              {hovered.short}
            </span>
          ) : null}
        </div>
      </div>

      {/* 지역 목록 (모바일 탭 + 접근성용 보조 수단) */}
      <div>
        <p className="mb-1.5 hidden text-[11px] font-medium text-stone-400 sm:block">
          또는 목록에서 선택
        </p>
        <div className="flex flex-wrap gap-1.5 sm:flex-col sm:gap-1">
          {SIDOS.map((s) => {
            const active = hover === s.slug;
            return (
              <button
                key={s.slug}
                type="button"
                onMouseEnter={() => setHover(s.slug)}
                onMouseLeave={() => setHover((h) => (h === s.slug ? null : h))}
                onClick={() => onSelect(s.slug)}
                className={
                  "rounded-lg border px-2.5 py-1.5 text-xs font-medium transition " +
                  (active
                    ? "border-teal-500 bg-teal-50 text-teal-800 dark:border-teal-500 dark:bg-teal-950/60 dark:text-teal-100"
                    : "border-stone-200 bg-white text-stone-700 hover:border-teal-400 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-100")
                }
              >
                {s.short}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
