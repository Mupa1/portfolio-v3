import type { Metadata } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";

import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import Navbar from "@/components/navigation";
import ErrorBoundary from "@/components/ui/error-boundary";
import FixedSocialIcons from "@/components/ui/fixed-social-icons";
import Overlay from "@/components/ui/overlay";
import SkipLink from "@/components/ui/skip-link";
import { SocialIconsVisibilityProvider } from "@/context/SocialIconsVisibility";
import ThemeProvider from "@/context/Theme";
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "de" | "en")) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    metadataBase: new URL(
      process.env.NODE_ENV === "production"
        ? "https://mupanzaphila.com"
        : "http://localhost:3001"
    ),
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    authors: [{ name: t("author") }],
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [
        {
          url: t("ogImage"),
          width: 1200,
          height: 630,
          alt: t("ogTitle"),
        },
      ],
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
      images: [t("twitterImage")],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: "/icon.svg", type: "image/svg+xml", sizes: "32x32" },
        { url: "/favicon.ico", sizes: "16x16 32x32" },
      ],
    },
  };
}

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
  const t = await getTranslations({ locale, namespace: "metadata" });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mupa M'mbetsa Nzaphila",
    jobTitle:
      locale === "de" ? "Fullstack-Entwicklerin" : "Full Stack Engineer",
    description: t("description"),
    url: `https://mupanzaphila.com/${locale}`,
    image: "https://mupanzaphila.com/images/photo.png",
    sameAs: [
      "https://github.com/Mupa1",
      "https://linkedin.com/in/mupa-nzaphila",
      "https://x.com/mupa_mmbetsa",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "Web Development",
      "Frontend Development",
      "Backend Development",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: locale === "de" ? "Fullstack-Entwicklerin" : "Full Stack Engineer",
      description: t("description"),
    },
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics
            measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
          />
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <ErrorBoundary>
            <SocialIconsVisibilityProvider>
                <SkipLink />
              <Overlay />
              <Navbar />
              <FixedSocialIcons />
                <main id="main-content" tabIndex={-1}>
                  {children}
                </main>
            </SocialIconsVisibilityProvider>
            </ErrorBoundary>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
