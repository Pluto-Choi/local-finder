import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "./site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — 지역별 숨은 편의 서비스`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_TAGLINE,
  openGraph: {
    title: SITE_NAME,
    description: SITE_TAGLINE,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className="min-h-dvh antialiased">
        <header className="sticky top-0 z-30 border-b border-stone-200/70 bg-[var(--background)]/80 backdrop-blur-md dark:border-stone-800/70">
          <div className="mx-auto flex max-w-4xl items-center gap-2 px-5 py-3.5">
            <Link href="/" className="group flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-teal-600/10 text-lg transition group-hover:bg-teal-600/20 dark:bg-teal-400/10">
                🧭
              </span>
              <span className="text-[15px] font-bold tracking-tight">
                {SITE_NAME}
              </span>
            </Link>
          </div>
        </header>
        <main className="mx-auto max-w-4xl px-5 py-7">{children}</main>
        <footer className="mx-auto max-w-4xl px-5 pb-12 pt-6">
          <div className="border-t border-stone-200/70 pt-6 text-xs leading-relaxed text-stone-400 dark:border-stone-800/70">
            <p className="font-medium text-stone-500 dark:text-stone-400">
              {SITE_NAME}
            </p>
            <p className="mt-1">{SITE_TAGLINE}</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
