import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Haus & Gartenservice Waiblingen | Hausmeister Klaus Cornau | Handwerker Rems-Murr-Kreis",
  description:
    "Professioneller Hausmeisterservice und Handwerker in Waiblingen, Winnenden, Schorndorf. Bodenverlegung, Gartenpflege, Montage, Trockenbau, Fugenarbeiten. Klaus Cornau - Ihr zuverlässiger Partner im Rems-Murr-Kreis.",
  keywords:
    "Hausmeister Waiblingen, Handwerker Waiblingen, Bodenverlegung Waiblingen, Gartenpflege Winnenden, Montage Schorndorf, Trockenbau Rems-Murr-Kreis, Fugenarbeiten Schwaikheim, Hausmeisterservice Weinstadt, Klaus Cornau, Handwerker Rems-Murr, Renovierung Waiblingen",
  authors: [{ name: "Klaus Cornau" }],
  creator: "Klaus Cornau",
  publisher: "Haus & Gartenservice Waiblingen",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://hausgartenservice-waiblingen.de",
    title: "Haus & Gartenservice Waiblingen | Hausmeister & Handwerker Klaus Cornau",
    description:
      "Professioneller Hausmeisterservice und Handwerker in Waiblingen, Winnenden, Schorndorf. Bodenverlegung, Gartenpflege, Montage, Trockenbau im Rems-Murr-Kreis.",
    siteName: "Haus & Gartenservice Waiblingen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haus & Gartenservice Waiblingen | Hausmeister Klaus Cornau",
    description:
      "Professioneller Hausmeisterservice im Rems-Murr-Kreis. Bodenverlegung, Gartenpflege, Montage, Trockenbau in Waiblingen, Winnenden, Schorndorf.",
  },
  alternates: {
    canonical: "https://hausgartenservice-waiblingen.de",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap" rel="stylesheet" />
        <meta name="geo.region" content="DE-BW" />
        <meta name="geo.placename" content="Waiblingen" />
        <meta name="geo.position" content="48.8317;9.3156" />
        <meta name="ICBM" content="48.8317, 9.3156" />
        <link rel="canonical" href="https://hausgartenservice-waiblingen.de" />
        <link rel="stylesheet" href="/klaro/klaro-custom.css" />
      </head>
      <body>{children}
      <script defer src="/klaro/klaro-config.js"></script>
      <script defer src="/klaro/klaro.js"></script>
      </body>
    </html>
  )
}
