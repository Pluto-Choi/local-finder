"use client";

import { useMemo, useState } from "react";
import { CATEGORIES } from "../lib/categories";
import { searchServices } from "../lib/query";
import { regionHref, regionLabel } from "../lib/regions";
import type { ServiceCategory } from "../lib/types";
import ServiceCard from "./ServiceCard";

export default function SearchExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ServiceCategory | null>(null);

  const active = query.trim().length > 0 || category !== null;

  const results = useMemo(
    () => (active ? searchServices(query, category) : []),
    [query, category, active],
  );

  return (
    <div>
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-400">
          🔍
        </span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="서비스·지역·키워드로 검색 (예: 콜버스, 부산, 지역화폐)"
          className="w-full rounded-2xl border border-stone-200 bg-white py-3.5 pl-11 pr-4 text-sm shadow-sm outline-none transition placeholder:text-stone-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 dark:border-stone-700 dark:bg-stone-900"
          aria-label="서비스 검색"
        />
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <Chip
          label="전체"
          emoji="✨"
          active={category === null}
          onClick={() => setCategory(null)}
        />
        {CATEGORIES.map((c) => (
          <Chip
            key={c.key}
            label={c.label}
            emoji={c.emoji}
            active={category === c.key}
            onClick={() => setCategory(category === c.key ? null : c.key)}
          />
        ))}
      </div>

      {active && (
        <div className="mt-5">
          <p className="mb-3 text-xs text-stone-400">
            {results.length > 0
              ? `${results.length}개 서비스`
              : "조건에 맞는 서비스가 없어요."}
          </p>
          <div className="grid gap-3">
            {results.map((s) => (
              <ServiceCard
                key={s.id}
                service={s}
                region={{
                  label: regionLabel(s.sido, s.sigungu),
                  href: regionHref(s.sido, s.sigungu),
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Chip({
  label,
  emoji,
  active,
  onClick,
}: {
  label: string;
  emoji: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs font-medium transition " +
        (active
          ? "border-teal-500 bg-teal-500 text-white shadow-sm"
          : "border-stone-200 bg-white text-stone-600 hover:border-teal-300 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-300")
      }
    >
      <span aria-hidden>{emoji}</span>
      {label}
    </button>
  );
}
