import Link from "next/link";
import { CATEGORIES } from "./lib/categories";
import { SIDOS } from "./lib/regions";
import { sidoServiceCount } from "./lib/query";
import { SITE_NAME, SITE_TAGLINE } from "./site";

export default function Home() {
  return (
    <div>
      <section className="mb-8">
        <h1 className="text-2xl font-extrabold leading-snug tracking-tight">
          {SITE_NAME}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-stone-500 dark:text-stone-400">
          {SITE_TAGLINE}. 콜버스·공공자전거·지역화폐처럼 그 동네에 살거나 와봐야
          아는 서비스를 지역별로 모았어요.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-stone-400">
          이런 걸 모아요
        </h2>
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {CATEGORIES.map((c) => (
            <li
              key={c.key}
              className="rounded-xl border border-stone-200 bg-white px-3 py-2.5 dark:border-stone-800 dark:bg-stone-900"
            >
              <div className="text-sm font-semibold">
                <span aria-hidden className="mr-1">
                  {c.emoji}
                </span>
                {c.label}
              </div>
              <div className="mt-0.5 text-xs leading-snug text-stone-400">
                {c.desc}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-stone-400">
          지역 선택
        </h2>
        <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4">
          {SIDOS.map((s) => {
            const count = sidoServiceCount(s.slug);
            return (
              <li key={s.slug}>
                <Link
                  href={`/${s.slug}`}
                  className="flex h-full flex-col items-start justify-between gap-2 rounded-xl border border-stone-200 bg-white px-3 py-3 transition hover:border-teal-400 hover:bg-teal-50/50 dark:border-stone-800 dark:bg-stone-900 dark:hover:border-teal-600 dark:hover:bg-teal-950/30"
                >
                  <span className="text-sm font-semibold">{s.short}</span>
                  <span className="text-xs text-stone-400">
                    {count > 0 ? `${count}건` : "수집 예정"}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
