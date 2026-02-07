import { Suspense } from "react";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import Navbar from "@/components/Navbar/Navbar";
import MenuOverlay from "@/components/MenuOverlay/MenuOverlay";

import "./globals.css";

export const metadata = {
  title: {
    default: "Kenesis",
    template: "%s | Kenesis"
  },
  description: "Kenesis Labs Private Limited is a Chennai-based deep tech startup specializing in computer vision and smartglasses technology for assistive tech solutions for visually impaired and blind individuals.",
  keywords: ["Kenesis", "Kenesis Labs", "Deep Tech Startup", "Computer Vision", "Smartglasses", "Assistive Technology", "Visually Impaired", "Blind", "Chennai", "India", "AI", "Machine Learning", "Accessibility"],
  authors: [{ name: "Kenesis Labs Private Limited" }],
  creator: "Kenesis Labs Private Limited",
  publisher: "Kenesis Labs Private Limited",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://kenesis.ai",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kenesis.ai",
    title: "Kenesis",
    description: "Revolutionary computer vision and smartglasses technology for visually impaired and blind individuals. Based in Chennai, India.",
    siteName: "Kenesis",
    images: [
      {
        url: "https://kenesis.ai/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Kenesis - Deep Tech Startup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenesis",
    description: "Revolutionary computer vision and smartglasses technology for visually impaired and blind individuals. Based in Chennai, India.",
    images: ["https://kenesis.ai/android-chrome-512x512.png"],
    creator: "@kenesis_labs",
    site: "@kenesis_labs",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#000000",
    "application-name": "Kenesis",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Additional Meta Tags for SEO */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="coverage" content="worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="format-detection" content="telephone=no" />

        {/* Comprehensive Favicon Support */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Kenesis Labs Private Limited",
            "url": "https://kenesis.ai",
            "logo": {
              "@type": "ImageObject",
              "url": "https://kenesis.ai/kenlogo.png",
              "width": 200,
              "height": 200
            },
            "description": "Deep tech startup specializing in computer vision and smartglasses technology for assistive tech solutions",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Chennai",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "contact@kenesis.ai"
            },
            "sameAs": [
              "https://linkedin.com/company/kenesis-labs",
              "https://twitter.com/kenesis_labs"
            ],
            "foundingDate": "2023",
            "industry": "Assistive Technology",
            "numberOfEmployees": "10-50"
          })}
        </script>

        {/* Structured Data - WebSite */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Kenesis",
            "url": "https://kenesis.ai",
            "description": "Deep tech startup specializing in computer vision and smartglasses technology for visually impaired and blind individuals",
            "publisher": {
              "@type": "Organization",
              "name": "Kenesis Labs Private Limited"
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://kenesis.ai/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>

        {/* Structured Data - Product */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Kenesis Smartglasses",
            "description": "Computer vision-powered smartglasses for visually impaired and blind individuals",
            "category": "Assistive Technology",
            "brand": {
              "@type": "Brand",
              "name": "Kenesis"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Kenesis Labs Private Limited"
            },
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/PreOrder",
              "priceCurrency": "INR"
            },
            "image": {
              "@type": "ImageObject",
              "url": "https://kenesis.ai/images/product/smartglasses.jpg",
              "width": 800,
              "height": 600
            }
          })}
        </script>

        {/* Structured Data - Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Kenesis Labs Private Limited",
            "description": "Deep tech startup specializing in computer vision and smartglasses technology",
            "url": "https://kenesis.ai",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Chennai",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "13.0827",
              "longitude": "80.2707"
            },
            "openingHours": "Mo-Fr 09:00-18:00",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "contact@kenesis.ai"
            }
          })}
        </script>
      </head>
      <body>
        <Suspense>
          <ProgressBar />
        </Suspense>
        <Navbar />
        <MenuOverlay />
        {children}
      </body>
    </html>
  );
}
