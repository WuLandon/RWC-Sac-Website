import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Anton, Archivo_Black, Roboto_Mono } from "next/font/google";
import { SanityLive } from "@/sanity/lib/live";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rwcsacramento.com/"),

  title: {
    default: "Run With Christ Sacramento",
    template: "%s | Run With Christ Sacramento",
  },

  description:
    "We are not just a run club, but a movement to make heaven full.",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/manifest.webmanifest",

  openGraph: {
    title: "Run With Christ Sacramento",
    description:
      "We are not just a run club, but a movement to make heaven full.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Run With Christ Sacramento",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Run With Christ Sacramento",
    images: ["/images/og-image.jpg"],
    description:
      "We are not just a run club, but a movement to make heaven full.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${anton.variable} ${archivoBlack.variable} ${robotoMono.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        {children}
        <SanityLive />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
