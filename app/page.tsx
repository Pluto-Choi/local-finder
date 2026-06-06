import { SIDOS } from "./lib/regions";
import { totalServiceCount } from "./lib/query";
import { CATEGORIES } from "./lib/categories";
import SearchExplorer from "./components/SearchExplorer";
import RegionExplorer from "./components/RegionExplorer";

export default function Home() {
  const total = totalServiceCount();
  const sidoCount = SIDOS.length;

  return (
    <div>
      {/* 지도 우선: 지역 드릴다운 탐색 */}
      <section>
        <RegionExplorer />
      </section>

      {/* 검색으로 바로 찾기 */}
      <section className="mt-12 border-t border-stone-200/70 pt-8 dark:border-stone-800/70">
        <h2 className="mb-1 text-sm font-semibold uppercase tracking-wide text-stone-400">
          이름으로 바로 찾기
        </h2>
        <p className="mb-4 text-xs text-stone-400">
          {sidoCount}개 시·도 · {total}개 편의 서비스 · {CATEGORIES.length}개
          카테고리
        </p>
        <SearchExplorer />
      </section>
    </div>
  );
}
