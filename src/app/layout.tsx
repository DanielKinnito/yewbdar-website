import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { localBusinessJsonLd } from "@/lib/seo-schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yewbdarjunk.com"),
  title: "Yewbdar Junk Removal | Atlanta's Same-Day Hauling & Cleanouts",
  description:
    "Lower prices than the 1-800 guys. Fast, affordable same-day junk removal across Metro Atlanta. Free upfront firm estimates, 65% recycled or donated, and uniformed 5-star crews. Call (770) 676-0810.",
  keywords: [
    "Atlanta junk removal",
    "same day junk removal Atlanta",
    "affordable junk removal Metro Atlanta",
    "residential junk hauling Atlanta",
    "commercial cleanout Atlanta",
    "estate cleanout Atlanta",
    "furniture removal Atlanta",
    "junk removal Buckhead",
    "junk removal Sandy Springs",
    "junk removal Marietta",
  ],
  authors: [{ name: "Yewbdar Junk Removal" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Yewbdar Junk Removal | Atlanta's Same-Day Hauling & Cleanouts",
    description:
      "Lower prices than the 1-800 guys. Same-day cleanouts across Metro Atlanta. 65% recycled or donated. Call (770) 676-0810.",
    url: "https://yewbdarjunk.com",
    siteName: "Yewbdar Junk Removal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yewbdar Junk Removal | Atlanta's Same-Day Hauling & Cleanouts",
    description:
      "Lower prices than the 1-800 guys. Same-day cleanouts across Metro Atlanta. Call (770) 676-0810.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body className="min-h-screen bg-canvas text-charcoal font-sans antialiased selection:bg-forest-light selection:text-forest-dark">
        {children}
      </body>
    </html>
  );
}

