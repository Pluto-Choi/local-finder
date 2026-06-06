"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { KOREA_PATHS, MAP_VIEWBOX } from "../lib/koreaMapPaths";
import { SIDOS, getSido } from "../lib/regions";
import { sidoServiceCount } from "../lib/query";

type RegionInfo = {
  slug: string;
  short: string;
  count: number;
  d: string;
  cx: number;
  cy: number;
};

// 서비스 개수 → teal 채도 단계 (0건은 옅은 회색)
function fillFor(count: number, active: boolean): string {
  if (active) return "#0d9488"; // teal-600
  if (count === 0) return "#e7e5e4"; // stone-200
  if (count >= 8) return "#14b8a6"; // teal-500
  if (count >= 4) return "#5eead4"; // teal-300
  return "#99f6e4"; // teal-200
}

export default function KoreaMap() {
  const router = useRouter();
  const [hover, setHover] = useState<string | null>(null);

  const regions: RegionInfo[] = KOREA_PATHS.map((p) => {
    const region = getSido(p.slug);
    return {
      slug: p.slug,
      short: region?.short ?? p.slug,
      count: sidoServiceCount(p.slug),
      d: p.d,
      cx: p.cx,
      cy: p.cy,
    };
  });

  const hovered = regions.find((r) => r.slug === hover) ?? null;

  function go(slug: string) {
    router.push(`/${slug}`);
  }

  return (
    <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_220px] sm:items-start">
      {/* 지도 */}
      <div className="relative mx-auto w-full max-w-[420px]">
        <svg
          viewBox={MAP_VIEWBOX}
          className="h-auto w-full select-none"
          role="img"
          aria-label="대한민국 지역별 편의 서비스 지도"
        >
          {regions.map((r) => {
            const active = hover === r.slug;
            return (
              <path
                key={r.slug}
                d={r.d}
                fill={fillFor(r.count, active)}
                stroke="#ffffff"
                strokeWidth={active ? 1.4 : 0.8}
                className="cursor-pointer transition-[fill,stroke-width] duration-150"
                style={{ filter: active ? "drop-shadow(0 2px 6px rgba(13,148,136,0.4))" : undefined }}
                onMouseEnter={() => setHover(r.slug)}
                onMouseLeave={() => setHover((h) => (h === r.slug ? null : h))}
                onClick={() => go(r.slug)}
                tabIndex={0}
                role="button"
                aria-label={`${r.short} ${r.count}건`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    go(r.slug);
                  }
                }}
              />
            );
          })}

          {/* 서비스가 있는 지역엔 개수 배지 */}
          {regions
            .filter((r) => r.count > 0)
            .map((r) => (
              <g key={`b-${r.slug}`} className="pointer-events-none">
                <circle
                  cx={r.cx}
                  cy={r.cy}
                  r={9}
                  fill="#ffffff"
                  opacity={0.92}
                />
                <text
                  x={r.cx}
                  y={r.cy}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={10}
                  fontWeight={700}
                  fill="#0f766e"
                >
                  {r.count}
                </text>
              </g>
            ))}
        </svg>

        {/* 호버 정보 박스 */}
        <div className="pointer-events-none absolute left-1/2 top-2 -translate-x-1/2">
          {hovered ? (
            <span className="rounded-full bg-stone-900/90 px-3 py-1 text-xs font-semibold text-white shadow-lg dark:bg-white/90 dark:text-stone-900">
              {hovered.short}
              <span className="ml-1 font-normal text-teal-300 dark:text-teal-600">
                {hovered.count > 0 ? `${hovered.count}건` : "수집 예정"}
              </span>
            </span>
          ) : null}
        </div>
      </div>

      {/* 지역 칩 목록 (모바일 탭 + 접근성용) */}
      <div className="flex flex-wrap gap-1.5 sm:flex-col sm:gap-1">
        {SIDOS.map((s) => {
          const count = sidoServiceCount(s.slug);
          const active = hover === s.slug;
          return (
            <button
              key={s.slug}
              type="button"
              onMouseEnter={() => setHover(s.slug)}
              onMouseLeave={() => setHover((h) => (h === s.slug ? null : h))}
              onClick={() => go(s.slug)}
              className={
                "flex items-center justify-between gap-2 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition " +
                (active
                  ? "border-teal-500 bg-teal-50 text-teal-800 dark:bg-teal-950/50 dark:text-teal-200"
                  : count > 0
                    ? "border-stone-200 bg-white text-stone-700 hover:border-teal-300 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200"
                    : "border-stone-100 bg-white text-stone-400 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-500")
              }
            >
              <span>{s.short}</span>
              {count > 0 ? (
                <span className="rounded-full bg-teal-100 px-1.5 text-[10px] font-semibold text-teal-700 dark:bg-teal-900/60 dark:text-teal-300">
                  {count}
                </span>
              ) : (
                <span className="text-[10px] text-stone-300 dark:text-stone-600">–</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
