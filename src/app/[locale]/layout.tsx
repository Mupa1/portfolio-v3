import type { Metadata } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import Navbar from "@/components/navigation";
import FixedSocialIcons from "@/components/ui/fixed-social-icons";
import Overlay from "@/components/ui/overlay";
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

export const metadata: Metadata = {
  title: "Mupa M'mbetsa Nzaphila | Portfolio",
  description: "Fullstack Developer, Frontend Developer and Designer Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <SocialIconsVisibilityProvider>
              <Overlay />
              <Navbar />
              <FixedSocialIcons />
              <main>{children}</main>
            </SocialIconsVisibilityProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
