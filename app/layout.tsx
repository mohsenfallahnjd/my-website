import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/theme";
import "./globals.css";
import type { ReactNode } from "react";
import { font } from "@/theme/theme";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://themohsen.me/"),
  title: "Mohsen Fallahnejad | Front‑End Developer",
  authors: [{ name: "Mohsen Fallahnejad", url: "https://themohsen.me/" }],
  description: "Hi, I'm Mohsen, a front-end developer and usually code on #JS for creating beautiful things 🤠",
  alternates: { canonical: "https://themohsen.me/" },
  openGraph: {
    locale: "en",
    siteName: "themohsen.me",
    title: "Mohsen Fallahnejad | Front‑End Developer",
    description: "Hi, I'm Mohsen, a front-end developer and usually code on #JS for creating beautiful things 🤠",
    images: "/logo.svg",
    url: "https://themohsen.me/",
    type: "website",
  },
  twitter: {
    title: "Mohsen Fallahnejad | Front‑End Developer",
    description: "Hi, I'm Mohsen, a front-end developer and usually code on #JS for creating beautiful things 🤠",
    creator: "@mohsenfallahnjd",
    images: "/logo.svg",
    card: "summary_large_image",
    site: "https://themohsen.me/",
  },
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
