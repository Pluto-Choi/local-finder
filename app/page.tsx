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
      <section className="relative mb-8 overflow-hidden rounded-3xl border border-stone-200 bg-gradient-to-br from-teal-50 via-white to-cyan-50 px-6 py-9 dark:border-stone-800 dark:from-teal-950/40 dark:via-stone-900 dark:to-cyan-950/30">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-teal-400/20 blur-3xl"
        />
        <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-600/10 px-3 py-1 text-xs font-semibold text-teal-700 dark:bg-teal-400/10 dark:text-teal-300">
          🧭 지역 편의 서비스 길잡이
        </span>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          {SITE_NAME}
        </h1>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-stone-600 dark:text-stone-300">
          맛집·관광지 말고, <strong className="font-semibold text-stone-800 dark:text-stone-100">그 동네가 조용히 굴리는 진짜 편의 서비스</strong>.
          콜버스·공공자전거·지역화폐처럼 살거나 와봐야 아는 것들을 지역별로 모았어요.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Stat value={`${sidoCount}개`} label="시·도" />
          <Stat value={`${total}개`} label="편의 서비스" />
          <Stat value={`${CATEGORIES.length}개`} label="카테고리" />
        </div>
      </section>

      {/* Search + category filter */}
      <section className="mb-10">
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
        <KoreaMap />
      </section>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-white/70 px-4 py-2 backdrop-blur dark:bg-stone-900/60">
      <div className="text-lg font-extrabold tracking-tight text-teal-700 dark:text-teal-300">
        {value}
      </div>
      <div className="text-xs text-stone-500 dark:text-stone-400">{label}</div>
    </div>
  );
}
