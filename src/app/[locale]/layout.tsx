import type { Metadata } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import ThemeProvider from "@/app/[locale]/context/Theme";
import Navbar from "@/components/navigation";
import { routing } from "@/i18n/routing";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mupa M'mbetsa Nzaphila | Portfolio",
  description:
    "Frontend Developer, Product Designer, UI/UX Designer, React, Node, Typescript, Javascript, Next.js, TailwindCSS, MaterialUI, SQL, NoSQL, AWS, CI/CD, Git, Github, Gitlab, Bitbucket, RESTful APIs, GraphQL, Serverless, PWA, SPA, SSR, SSG, SEO, Accessibility, Performance, Security, Testing, Automation, Analytics, Agile, Scrum, Kanban, DevOps",
};

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "de" | "en")) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NextIntlClientProvider messages={messages}>
              <Navbar />
              {children}
            </NextIntlClientProvider>
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
