import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://primelearning.example.com"),
  title: {
    default: "Prime Learning — Master what matters. Learn from the best.",
    template: "%s · Prime Learning",
  },
  description:
    "10,000+ courses taught by world-class practitioners. Watch, build, and ship — at your pace. Career-grade certificates, hands-on projects, and adaptive learning paths.",
  keywords: [
    "online learning",
    "LMS",
    "courses",
    "certificates",
    "engineering",
    "design",
    "business",
    "data science",
  ],
  openGraph: {
    title: "Prime Learning — Master what matters",
    description:
      "Premium online learning, taught by world-class practitioners. Watch, build, ship.",
    url: "https://primelearning.example.com",
    siteName: "Prime Learning",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prime Learning — Master what matters",
    description: "Premium online learning, taught by world-class practitioners.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} dark`}>
      <body className="bg-ink-950 text-white antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
