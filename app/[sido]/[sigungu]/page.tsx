import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SIDOS, getSido, hasSigungu } from "../../lib/regions";
import { sigunguServices, sidoWideServices } from "../../lib/query";
import FilterableServiceList from "../../components/FilterableServiceList";

export function generateStaticParams() {
  return SIDOS.flatMap((s) =>
    s.sigungu.map((gu) => ({ sido: s.slug, sigungu: gu })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sido: string; sigungu: string }>;
}): Promise<Metadata> {
  const { sido, sigungu } = await params;
  const region = getSido(sido);
  const gu = decodeURIComponent(sigungu);
  if (!region) return {};
  return {
    title: `${region.short} ${gu} 숨은 편의 서비스`,
    description: `${region.short} ${gu}에서 이용할 수 있는 콜버스·공공자전거·지역 혜택 등.`,
  };
}

export default async function SigunguPage({
  params,
}: {
  params: Promise<{ sido: string; sigungu: string }>;
}) {
  const { sido, sigungu } = await params;
  const region = getSido(sido);
  const gu = decodeURIComponent(sigungu);
  if (!region || !hasSigungu(sido, gu)) notFound();

  const local = sigunguServices(sido, gu);
  const wide = sidoWideServices(sido);

  return (
    <div>
      <nav className="mb-4 text-xs text-stone-400">
        <Link href="/" className="hover:text-stone-600 dark:hover:text-stone-200">
          전국
        </Link>
        <span className="mx-1">›</span>
        <Link
          href={`/${region.slug}`}
          className="hover:text-stone-600 dark:hover:text-stone-200"
        >
          {region.short}
        </Link>
        <span className="mx-1">›</span>
        <span className="text-stone-600 dark:text-stone-300">{gu}</span>
      </nav>

      <h1 className="mb-6 text-2xl font-extrabold tracking-tight">
        {region.short} {gu}
      </h1>

      {local.length > 0 ? (
        <section className="mb-8">
          <h2 className="mb-3 text-sm font-semibold text-stone-500 dark:text-stone-400">
            {gu} 전용 서비스
          </h2>
          <FilterableServiceList services={local} />
        </section>
      ) : (
        <p className="mb-8 rounded-xl border border-dashed border-stone-300 px-4 py-6 text-center text-sm text-stone-400 dark:border-stone-700">
          아직 {gu} 전용으로 등록된 서비스가 없어요.
        </p>
      )}

      {wide.length > 0 && (
        <section>
          <h2 className="mb-3 text-sm font-semibold text-stone-500 dark:text-stone-400">
            {region.short} 전역에서도 이용 가능
          </h2>
          <FilterableServiceList services={wide} />
        </section>
      )}
    </div>
  );
}
