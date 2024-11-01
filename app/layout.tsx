import type { Metadata } from "next";
import localFont from "next/font/local";
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
    "Fullstack Developer, Frontend Developer, Backend Developer, React, Node, Typescript, Javascript, Next.js, TailwindCSS, MaterialUI, PostgreSQL, MongoDB, AWS, CI/CD, Git, Github, Gitlab, Bitbucket, REST, GraphQL, APIs, Microservices, Serverless, PWA, SPA, SSR, SSG, SEO, Accessibility, Performance, Security, Testing, Automation, Analytics, Agile, Scrum, Kanban, Waterfall, Lean, DevOps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
