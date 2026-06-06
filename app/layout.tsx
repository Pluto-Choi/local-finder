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
        <header className="border-b border-stone-200 dark:border-stone-800">
          <div className="mx-auto flex max-w-3xl items-center gap-2 px-5 py-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl">🧭</span>
              <span className="text-base font-bold tracking-tight">
                {SITE_NAME}
              </span>
            </Link>
          </div>
        </header>
        <main className="mx-auto max-w-3xl px-5 py-6">{children}</main>
        <footer className="mx-auto max-w-3xl px-5 py-10 text-xs text-stone-400">
          {SITE_TAGLINE}
        </footer>
      </body>
    </html>
  );
}
