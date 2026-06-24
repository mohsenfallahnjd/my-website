import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/theme";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import type { ReactNode } from "react";
import { font } from "@/theme/theme";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

const title = "Mohsen Fallahnejad — Fullstack Developer";
const description = "I build clean, fast web products. React, Next.js, TypeScript. Open to work.";
const url = "https://themohsen.me";
const ogImage = "https://themohsen.me/og.png";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: title,
    template: "%s | Mohsen Fallahnejad",
  },
  description,
  keywords: ["Mohsen Fallahnejad", "Frontend Developer", "Fullstack Developer", "React", "Next.js", "TypeScript", "Web Development", "Portfolio"],
  authors: [{ name: "Mohsen Fallahnejad", url }],
  creator: "Mohsen Fallahnejad",
  alternates: { canonical: url },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    locale: "en_US",
    url,
    siteName: "Mohsen Fallahnejad",
    title,
    description,
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Mohsen Fallahnejad — Fullstack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@mohsenfallahnjd",
    images: [ogImage],
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
