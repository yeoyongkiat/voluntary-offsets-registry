import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Seeds – UC Berkeley Voluntary Offsets Registry Dashboard",
    template: "%s – Seeds",
  },
  description: "Open-source dashboard and API to explore UC Berkeley's Voluntary Registry Offsets Database.",
  keywords: [
    "UC Berkeley",
    "Voluntary Offsets",
    "Carbon Credits",
    "Supabase",
    "Climate",
    "Offsets Database",
  ],
  authors: [{ name: "Seeds" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Seeds",
    title: "Seeds – UC Berkeley Voluntary Offsets Registry Dashboard",
    description: "Explore voluntary carbon offset projects, issuances, and retirements with interactive charts and APIs.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Seeds – UC Berkeley Voluntary Offsets Registry Dashboard",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seeds – UC Berkeley Voluntary Offsets Registry Dashboard",
    description: "Open-source dashboard and API for the Voluntary Registry Offsets Database.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  icons: {
    icon: [
      { url: "/@seeds-icon.png", type: "image/png" },
      { url: "/seeds-icon.png", type: "image/png" },
    ],
    shortcut: "/@seeds-icon.png",
    apple: "/@seeds-icon.png",
  },
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
        <Script id="ld-json-website" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Seeds',
            url: siteUrl,
            potentialAction: {
              '@type': 'SearchAction',
              target: `${siteUrl}/dashboard?project_name={search_term_string}`,
              'query-input': 'required name=search_term_string',
            },
          })}
        </Script>
        <Script id="ld-json-organization" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Seeds',
            url: siteUrl,
            logo: `${siteUrl}/seeds-logo.png`,
          })}
        </Script>
        <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-black px-3 py-2 rounded-md border">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
