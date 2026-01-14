import { Sora } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import { CategoryProvider } from "@/context/categoryContext";
import { system } from "./theme";
import "./globals.css";

import LenisWrapper from "@/components/LenisWrapper";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata = {
  metadataBase: new URL("https://www.joseonewhа.com"),

  title: {
    default: "JOSEON EWHA Platform | Premium Spirits & Liquor",
    template: "%s | JOSEON EWHA Platform",
  },

  description: "JOSEON EWHA - Premium Korean Spirits and Liquor Platform",

  keywords: [
    "JOSEON EWHA",
    "Liquor",
    "Spirits",
    "Korean Alcohol",
    "Premium Drinks",
    "Wine",
    "Whiskey",
    "소주",
    "한국주",
  ],

  authors: [{ name: "JOSEON EWHA", url: "https://www.joseonewhа.com" }],
  creator: "JOSEON EWHA",
  publisher: "JOSEON EWHA Platform",
  generator: "Next.js",

  applicationName: "JOSEON EWHA Platform",

  referrer: "origin-when-cross-origin",

  manifest: "/manifest.json",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  category: "beverage",
  classification: "Beverage, Alcohol, Liquor, Spirits",

  alternates: {
    canonical: "https://www.joseonewhа.com",
    languages: {
      "en-US": "https://www.joseonewhа.com/en",
      "ko-KR": "https://www.joseonewhа.com/ko",
      "ja-JP": "https://www.joseonewhа.com/ja",
      "zh-CN": "https://www.joseonewhа.com/zh",
    },
    types: {
      "application/rss+xml": "https://www.joseonewhа.com/feed.xml",
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icons/icon-64x64.png", sizes: "64x64", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },

  openGraph: {
    url: "https://www.joseonewhа.com",
    siteName: "JOSEON EWHA",
    title: "JOSEON EWHA Platform - Premium Spirits",
    description:
      "JOSEON EWHA is the ultimate platform for premium Korean spirits, liquor, and beverages. Discover authentic flavors and exclusive collections.",
    images: [
      {
        url: "/background_image_joseon.png",
        width: 1200,
        height: 600,
        alt: "JOSEON EWHA - Premium Spirits Platform",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  verification: {
    other: {
      me: ["contact@joseonewhа.io", "https://www.joseonewhа.com"],
      "naver-site-verification": "496e1462dfb901aaaaf9f8d32e0348a5bceb0ee2",
    },
  },

  appLinks: {
    web: {
      url: "https://www.joseonewhа.com",
      should_fallback: true,
    },
  },

  bookmarks: ["https://www.joseonewhа.com/favorites"],
  archives: ["https://www.joseonewhа.com/archives"],
  assets: ["https://www.joseonewhа.com/assets"],

  other: {
    "msapplication-TileColor": "#8B0000",
    "msapplication-config": "/browserconfig.xml",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "JOSEON EWHA",
    "mobile-web-app-capable": "yes",
    google: "notranslate",
    "google-play-app": "app-id=io.joseonewhа.app",
    "fb:app_id": "your-facebook-app-id",
    "fb:pages": "your-facebook-page-id",
    "article:author": "https://www.facebook.com/joseonewhа",
    "article:publisher": "https://www.facebook.com/joseonewhа",
  },
};

// ✅ Viewport export cho Next.js v16
export const viewport = {
  colorScheme: "light dark",
  themeColor: "#8B0000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="shortcut icon" content="shortcut icon" />
        <link rel="icon" href="/favicon.ico" sizes="64x64" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body cz-shortcut-listen="true">
        <ChakraProvider value={system}>
          <LenisWrapper>
            <CategoryProvider>
              <Header />
              {children}
              <Footer />
            </CategoryProvider>
          </LenisWrapper>
        </ChakraProvider>
      </body>
    </html>
  );
}
