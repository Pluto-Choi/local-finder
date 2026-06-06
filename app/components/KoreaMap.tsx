"use client";

import { useMemo, useState } from "react";
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

// 인접 지역 배지가 겹치지 않도록 살짝 밀어내는 declutter (결정적)
function declutter(
  points: { slug: string; x: number; y: number }[],
  minDist = 21,
  iterations = 60,
) {
  const pos = points.map((p) => ({ ...p }));
  for (let it = 0; it < iterations; it++) {
    for (let i = 0; i < pos.length; i++) {
      for (let j = i + 1; j < pos.length; j++) {
        const dx = pos[j].x - pos[i].x;
        const dy = pos[j].y - pos[i].y;
        let dist = Math.hypot(dx, dy);
        if (dist === 0) dist = 0.01;
        if (dist < minDist) {
          const push = (minDist - dist) / 2;
          const ux = dx / dist;
          const uy = dy / dist;
          pos[i].x -= ux * push;
          pos[i].y -= uy * push;
          pos[j].x += ux * push;
          pos[j].y += uy * push;
        }
      }
    }
  }
  // viewBox(0 0 420 520) 안으로 클램프
  const map = new Map<string, { x: number; y: number }>();
  for (const p of pos) {
    map.set(p.slug, {
      x: Math.max(12, Math.min(408, p.x)),
      y: Math.max(12, Math.min(508, p.y)),
    });
  }
  return map;
}

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
          count: sidoServiceCount(p.slug),
          d: p.d,
          cx: p.cx,
          cy: p.cy,
        };
      }),
    [],
  );

  const badgePos = useMemo(
    () =>
      declutter(
        regions
          .filter((r) => r.count > 0)
          .map((r) => ({ slug: r.slug, x: r.cx, y: r.cy })),
      ),
    [regions],
  );

  const hovered = regions.find((r) => r.slug === hover) ?? null;

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_210px] sm:items-start">
        {/* 지도 */}
        <div className="relative mx-auto w-full max-w-[400px]">
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
                  style={{
                    filter: active
                      ? "drop-shadow(0 2px 6px rgba(13,148,136,0.4))"
                      : undefined,
                  }}
                  onMouseEnter={() => setHover(r.slug)}
                  onMouseLeave={() => setHover((h) => (h === r.slug ? null : h))}
                  onClick={() => onSelect(r.slug)}
                  tabIndex={0}
                  role="button"
                  aria-label={`${r.short} ${r.count}건`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onSelect(r.slug);
                    }
                  }}
                />
              );
            })}

            {/* 서비스가 있는 지역 개수 배지 (겹침 방지 위치) */}
            {regions
              .filter((r) => r.count > 0)
              .map((r) => {
                const p = badgePos.get(r.slug);
                if (!p) return null;
                const moved = Math.hypot(p.x - r.cx, p.y - r.cy) > 1.5;
                const active = hover === r.slug;
                return (
                  <g
                    key={`b-${r.slug}`}
                    className="pointer-events-none"
                  >
                    {moved && (
                      <line
                        x1={r.cx}
                        y1={r.cy}
                        x2={p.x}
                        y2={p.y}
                        stroke="#0f766e"
                        strokeWidth={0.5}
                        opacity={0.35}
                      />
                    )}
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r={9}
                      fill={active ? "#0f766e" : "#ffffff"}
                      stroke="#0f766e"
                      strokeWidth={active ? 0 : 0.6}
                      opacity={active ? 1 : 0.95}
                    />
                    <text
                      x={p.x}
                      y={p.y}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize={10}
                      fontWeight={700}
                      fill={active ? "#ffffff" : "#0f766e"}
                    >
                      {r.count}
                    </text>
                  </g>
                );
              })}
          </svg>

          {/* 호버 정보 박스 */}
          <div className="pointer-events-none absolute left-1/2 top-1 -translate-x-1/2">
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

        {/* 지역 칩 목록 (모바일 탭 + 접근성용 보조 수단) */}
        <div>
          <p className="mb-1.5 hidden text-[11px] font-medium text-stone-400 sm:block">
            또는 목록에서 선택
          </p>
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
                  onClick={() => onSelect(s.slug)}
                  className={
                    "flex items-center justify-between gap-2 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition " +
                    (active
                      ? "border-teal-500 bg-teal-50 text-teal-800 dark:border-teal-500 dark:bg-teal-950/60 dark:text-teal-100"
                      : count > 0
                        ? "border-stone-200 bg-white text-stone-700 hover:border-teal-400 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-100"
                        : "border-stone-100 bg-stone-50 text-stone-400 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-500")
                  }
                >
                  <span>{s.short}</span>
                  {count > 0 ? (
                    <span className="rounded-full bg-teal-100 px-1.5 text-[10px] font-semibold text-teal-700 dark:bg-teal-900 dark:text-teal-200">
                      {count}
                    </span>
                  ) : (
                    <span className="text-[10px] text-stone-300 dark:text-stone-600">
                      –
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 색상 범례 */}
      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t border-stone-200/70 pt-3 text-[11px] text-stone-500 dark:border-stone-800/70 dark:text-stone-400">
        <span className="font-medium text-stone-400">서비스 수</span>
        <LegendItem color="#99f6e4" label="1–3" />
        <LegendItem color="#5eead4" label="4–7" />
        <LegendItem color="#14b8a6" label="8+" />
        <LegendItem color="#e7e5e4" label="수집 예정" />
      </div>
    </div>
  );
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1">
      <span
        aria-hidden
        className="h-2.5 w-2.5 rounded-[3px]"
        style={{ backgroundColor: color }}
      />
      {label}
    </span>
  );
}
