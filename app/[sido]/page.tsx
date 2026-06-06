import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SIDOS, getSido } from "../lib/regions";
import { sidoWideServices, sigunguWithServices } from "../lib/query";
import ServiceCard from "../components/ServiceCard";

export function generateStaticParams() {
  return SIDOS.map((s) => ({ sido: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sido: string }>;
}): Promise<Metadata> {
  const { sido } = await params;
  const region = getSido(sido);
  if (!region) return {};
  return {
    title: `${region.name} 숨은 편의 서비스`,
    description: `${region.name}에서 운영하는 콜버스·공공자전거·지역화폐 등 알아두면 편한 서비스 모음.`,
  };
}

export default async function SidoPage({
  params,
}: {
  params: Promise<{ sido: string }>;
}) {
  const { sido } = await params;
  const region = getSido(sido);
  if (!region) notFound();

  const wide = sidoWideServices(sido);
  const withServices = sigunguWithServices(sido);

  return (
    <div>
      <nav className="mb-4 text-xs text-stone-400">
        <Link href="/" className="hover:text-stone-600 dark:hover:text-stone-200">
          전국
        </Link>
        <span className="mx-1">›</span>
        <span className="text-stone-600 dark:text-stone-300">{region.short}</span>
      </nav>

      <h1 className="mb-6 text-2xl font-extrabold tracking-tight">
        {region.name}
      </h1>

      {wide.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-3 text-sm font-semibold text-stone-500 dark:text-stone-400">
            {region.short} 전역에서 이용 가능
          </h2>
          <div className="grid gap-3">
            {wide.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </section>
      )}

      {region.sigungu.length > 0 ? (
        <section>
          <h2 className="mb-3 text-sm font-semibold text-stone-500 dark:text-stone-400">
            시·군·구별 보기
          </h2>
          <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4">
            {region.sigungu.map((gu) => {
              const has = withServices.has(gu);
              return (
                <li key={gu}>
                  <Link
                    href={`/${region.slug}/${encodeURIComponent(gu)}`}
                    className="flex items-center justify-between gap-1 rounded-lg border border-stone-200 bg-white px-3 py-2.5 text-sm transition hover:border-teal-400 dark:border-stone-800 dark:bg-stone-900 dark:hover:border-teal-600"
                  >
                    <span>{gu}</span>
                    {has && (
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-teal-500"
                        aria-label="등록된 서비스 있음"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ) : (
        <p className="text-sm text-stone-400">
          {region.short}은(는) 별도 시·군·구 구분이 없어요.
        </p>
      )}

      {wide.length === 0 && withServices.size === 0 && (
        <p className="mt-6 rounded-xl border border-dashed border-stone-300 px-4 py-6 text-center text-sm text-stone-400 dark:border-stone-700">
          아직 {region.short} 지역 서비스를 수집 중이에요.
        </p>
      )}
    </div>
  );
}
