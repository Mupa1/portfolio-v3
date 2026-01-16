import type { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml", sizes: "32x32" },
      { url: "/favicon.ico", sizes: "16x16 32x32" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
