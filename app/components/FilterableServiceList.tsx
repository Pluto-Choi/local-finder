"use client";

import { useMemo, useState } from "react";
import { categoryMeta } from "../lib/categories";
import type { Service, ServiceCategory } from "../lib/types";
import ServiceCard from "./ServiceCard";

export default function FilterableServiceList({
  services,
}: {
  services: Service[];
}) {
  const [category, setCategory] = useState<ServiceCategory | null>(null);

  // 목록에 실제로 존재하는 카테고리만 칩으로 노출 (순서는 등장 순)
  const present = useMemo(() => {
    const seen: ServiceCategory[] = [];
    for (const s of services) {
      if (!seen.includes(s.category)) seen.push(s.category);
    }
    return seen;
  }, [services]);

  const shown = category
    ? services.filter((s) => s.category === category)
    : services;

  return (
    <div>
      {present.length > 1 && (
        <div className="mb-3 flex flex-wrap gap-2">
          <FilterChip
            label="전체"
            active={category === null}
            onClick={() => setCategory(null)}
          />
          {present.map((key) => {
            const meta = categoryMeta(key);
            return (
              <FilterChip
                key={key}
                label={`${meta.emoji} ${meta.label}`}
                active={category === key}
                onClick={() => setCategory(category === key ? null : key)}
              />
            );
          })}
        </div>
      )}
      <div className="grid gap-3">
        {shown.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </div>
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "rounded-full border px-3 py-1 text-xs font-medium transition " +
        (active
          ? "border-teal-500 bg-teal-500 text-white"
          : "border-stone-200 bg-white text-stone-600 hover:border-teal-300 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-300")
      }
    >
      {label}
    </button>
  );
}
