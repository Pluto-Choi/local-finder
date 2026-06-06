import { SIDOS } from "./lib/regions";
import { totalServiceCount } from "./lib/query";
import { CATEGORIES } from "./lib/categories";
import { SITE_NAME } from "./site";
import SearchExplorer from "./components/SearchExplorer";
import KoreaMap from "./components/KoreaMap";

export default function Home() {
  const total = totalServiceCount();
  const sidoCount = SIDOS.length;

  return (
    <div>
      {/* Hero */}
      <section className="relative mb-10 overflow-hidden rounded-3xl border border-stone-200/70 bg-gradient-to-br from-teal-50 via-white to-cyan-50 px-6 py-10 dark:border-stone-800 dark:from-teal-950/40 dark:via-stone-900 dark:to-cyan-950/30 sm:px-8">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-teal-400/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl"
        />
        <span className="relative inline-flex items-center gap-1.5 rounded-full bg-teal-600/10 px-3 py-1 text-xs font-semibold text-teal-700 dark:bg-teal-400/10 dark:text-teal-300">
          🧭 지역 편의 서비스 길잡이
        </span>
        <h1 className="relative mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-[2.6rem]">
          {SITE_NAME}
        </h1>
        <p className="relative mt-3 max-w-lg text-[15px] leading-relaxed text-stone-600 dark:text-stone-300">
          맛집·관광지 말고,{" "}
          <strong className="font-semibold text-stone-800 dark:text-stone-100">
            그 동네가 조용히 굴리는 진짜 편의 서비스
          </strong>
          . 콜버스·공공자전거·지역화폐처럼 살거나 와봐야 아는 것들을 지역별로
          모았어요.
        </p>
        <div className="relative mt-6 flex flex-wrap gap-2.5">
          <Stat value={`${sidoCount}`} unit="개" label="시·도" />
          <Stat value={`${total}`} unit="개" label="편의 서비스" />
          <Stat value={`${CATEGORIES.length}`} unit="개" label="카테고리" />
        </div>
      </section>

      {/* Search + category filter */}
      <section className="mb-12">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-stone-400">
          검색으로 찾기
        </h2>
        <SearchExplorer />
      </section>

      {/* Browse by region — map */}
      <section>
        <div className="mb-3 flex items-baseline justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-400">
            지도로 찾기
          </h2>
          <span className="text-xs text-stone-400">지역을 눌러보세요</span>
        </div>
        <div className="elevate rounded-3xl border border-stone-200/70 bg-[var(--surface)] p-4 dark:border-stone-800 sm:p-6">
          <KoreaMap />
        </div>
      </section>
    </div>
  );
}

function Stat({
  value,
  unit,
  label,
}: {
  value: string;
  unit: string;
  label: string;
}) {
  return (
    <div className="elevate rounded-2xl bg-white/80 px-4 py-2.5 backdrop-blur dark:bg-stone-900/70">
      <div className="text-xl font-extrabold tracking-tight text-teal-700 dark:text-teal-300">
        {value}
        <span className="ml-0.5 text-sm font-bold">{unit}</span>
      </div>
      <div className="mt-0.5 text-xs text-stone-500 dark:text-stone-400">
        {label}
      </div>
    </div>
  );
}
