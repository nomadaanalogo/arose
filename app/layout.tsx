import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Arose Contractor | Premium General Contractor Services in Florida",
  description:
    "Transform your space with Florida's most trusted general contractor. 25+ years of excellence in kitchen remodeling, bathroom renovation, home additions, roofing, and custom closets. Licensed & insured.",
  keywords: [
    "general contractor Florida",
    "kitchen remodeling Florida",
    "bathroom renovation",
    "home additions",
    "roofing services",
    "custom closets",
    "Arose Contractor",
    "licensed contractor Florida",
    "home remodeling",
    "commercial remodeling",
    "Sunrise FL contractor",
    "Fort Lauderdale contractor",
    "Boca Raton contractor",
    "West Palm Beach contractor",
    "Pompano Beach contractor",
    "Coral Springs contractor",
    "Plantation contractor",
    "Weston contractor",
    "Davie contractor",
    "Pembroke Pines contractor",
  ],
  authors: [{ name: "Arose Contractor" }],
  creator: "Arose Contractor",
  publisher: "Arose Contractor",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://arosecontractor.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Arose Contractor | Premium General Contractor Services in Florida",
    description:
      "Transform your space with Florida's most trusted general contractor. 25+ years of excellence in kitchen remodeling, bathroom renovation, home additions, roofing, and custom closets.",
    url: "https://arosecontractor.com",
    siteName: "Arose Contractor",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arose Contractor - Premium General Contractor Services in Florida",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arose Contractor | Premium General Contractor Services in Florida",
    description:
      "Transform your space with Florida's most trusted general contractor. 25+ years of excellence in kitchen remodeling, bathroom renovation, home additions, roofing, and custom closets.",
    images: ["/og-image.jpg"],
    creator: "@arosecontractor",
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme Color */}
        <meta name="theme-color" content="#18181b" />
        <meta name="msapplication-TileColor" content="#18181b" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MQMMPJJT');
          `}
        </Script>

        {/* Google Ads (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-16736798051" strategy="afterInteractive" />
        <Script id="google-ads-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16736798051');
          `}
        </Script>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Arose Contractor",
              image: "https://arosecontractor.com/og-image.jpg",
              description:
                "Premium general contractor services in Florida. Specializing in kitchen remodeling, bathroom renovation, home additions, roofing, and custom closets.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "10228 NW 50th St",
                addressLocality: "Sunrise",
                addressRegion: "FL",
                postalCode: "33351",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "26.1669",
                longitude: "-80.3064",
              },
              telephone: "+1-954-882-9589",
              email: "info@arosecontractor.com",
              url: "https://arosecontractor.com",
              sameAs: ["https://www.facebook.com/arosecontractor", "https://www.instagram.com/arosecontractor"],
              openingHours: "Mo-Fr 08:00-18:00, Sa 09:00-16:00",
              priceRange: "$$",
              paymentAccepted: "Cash, Credit Card, Check, Financing",
              currenciesAccepted: "USD",
              areaServed: [
                {
                  "@type": "City",
                  name: "West Palm Beach, FL",
                },
                {
                  "@type": "City",
                  name: "Boynton Beach, FL",
                },
                {
                  "@type": "City",
                  name: "Delray Beach, FL",
                },
                {
                  "@type": "City",
                  name: "Boca Raton, FL",
                },
                {
                  "@type": "City",
                  name: "Deerfield Beach, FL",
                },
                {
                  "@type": "City",
                  name: "Pompano Beach, FL",
                },
                {
                  "@type": "City",
                  name: "Fort Lauderdale, FL",
                },
                {
                  "@type": "City",
                  name: "Coral Springs, FL",
                },
                {
                  "@type": "City",
                  name: "Plantation, FL",
                },
                {
                  "@type": "City",
                  name: "Weston, FL",
                },
                {
                  "@type": "City",
                  name: "Davie, FL",
                },
                {
                  "@type": "City",
                  name: "Pembroke Pines, FL",
                },
                {
                  "@type": "City",
                  name: "Sunrise, FL",
                },
              ],
              serviceType: [
                "General Contracting",
                "Kitchen Remodeling",
                "Bathroom Renovation",
                "Home Additions",
                "Roofing Services",
                "Custom Closets",
                "Commercial Remodeling",
                "Residential Remodeling",
              ],
              hasCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "license",
                  recognizedBy: {
                    "@type": "Organization",
                    name: "State of Florida",
                  },
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "150",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Thomas O'Hara",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  reviewBody:
                    "Exceptional attention to detail. Roy and his team transformed our bathrooms into something truly special.",
                },
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "John J.",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  reviewBody: "Professional, reliable, and the quality exceeded our expectations. Highly recommend.",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MQMMPJJT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
      </body>
    </html>
  )
}
