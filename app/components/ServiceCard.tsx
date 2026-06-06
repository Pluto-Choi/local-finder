import Link from "next/link";
import CategoryBadge from "./CategoryBadge";
import type { Service } from "../lib/types";

export default function ServiceCard({
  service,
  region,
}: {
  service: Service;
  region?: { label: string; href: string };
}) {
  return (
    <article className="rounded-2xl border border-stone-200 bg-white p-5 transition hover:border-stone-300 hover:shadow-sm dark:border-stone-800 dark:bg-stone-900 dark:hover:border-stone-700">
      {region && (
        <Link
          href={region.href}
          className="mb-2 inline-flex items-center gap-1 text-xs font-medium text-stone-400 transition hover:text-teal-600 dark:hover:text-teal-400"
        >
          📍 {region.label}
        </Link>
      )}
      <div className="mb-2 flex items-center justify-between gap-3">
        <h3 className="text-lg font-bold tracking-tight">{service.name}</h3>
        <CategoryBadge category={service.category} />
      </div>

      <p className="text-sm font-medium text-teal-700 dark:text-teal-400">
        {service.summary}
      </p>

      <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
        {service.description}
      </p>

      {service.howTo && (
        <p className="mt-3 rounded-lg bg-stone-50 px-3 py-2 text-xs leading-relaxed text-stone-600 dark:bg-stone-800 dark:text-stone-300">
          <span className="font-semibold">이용 방법 </span>
          {service.howTo}
        </p>
      )}

      <div className="mt-3 flex flex-wrap items-center gap-2">
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
            className="ml-auto text-xs font-semibold text-teal-700 underline-offset-2 hover:underline dark:text-teal-400"
          >
            공식 안내 ↗
          </a>
        )}
      </div>
    </article>
  );
}
