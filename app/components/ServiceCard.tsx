import Link from "next/link";
import CategoryBadge from "./CategoryBadge";
import { categoryStyle } from "../lib/categories";
import type { Service } from "../lib/types";

export default function ServiceCard({
  service,
  region,
}: {
  service: Service;
  region?: { label: string; href: string };
}) {
  const style = categoryStyle(service.category);
  return (
    <article className="elevate elevate-hover relative overflow-hidden rounded-2xl border border-stone-200/80 bg-[var(--surface)] py-5 pl-6 pr-5 dark:border-stone-800">
      <span
        aria-hidden
        className={"absolute inset-y-0 left-0 w-1.5 " + style.bar}
      />

      {region && (
        <Link
          href={region.href}
          className="mb-2 inline-flex items-center gap-1 text-xs font-medium text-stone-400 transition hover:text-teal-600 dark:hover:text-teal-400"
        >
          📍 {region.label}
        </Link>
      )}

      <div className="mb-2 flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold leading-snug tracking-tight">
          {service.name}
        </h3>
        <CategoryBadge category={service.category} />
      </div>

      <p className="text-sm font-semibold text-teal-700 dark:text-teal-400">
        {service.summary}
      </p>

      <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
        {service.description}
      </p>

      {service.howTo && (
        <p className="mt-3 rounded-xl bg-[var(--surface-muted)] px-3 py-2 text-xs leading-relaxed text-stone-600 dark:text-stone-300">
          <span className="font-semibold text-stone-700 dark:text-stone-200">
            이용 방법{" "}
          </span>
          {service.howTo}
        </p>
      )}

      {(service.tags?.length || service.url) && (
        <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1.5">
          {service.tags?.map((t) => (
            <span key={t} className="text-xs text-stone-400">
              #{t}
            </span>
          ))}
          {service.url && (
            <a
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-1 rounded-full bg-teal-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-400 dark:text-stone-900"
            >
              공식 안내 ↗
            </a>
          )}
        </div>
      )}
    </article>
  );
}
