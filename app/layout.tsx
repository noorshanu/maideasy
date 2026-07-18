import type { Metadata } from "next";
import { Lora, DM_Sans } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MaidEazy | Bringing Trust Home",
    template: "%s | MaidEazy",
  },
  description: "Maid Eazy connects you with verified, trained, and reliable household professionals for your everyday needs including cleaning, cooking, and childcare.",
  keywords: ["Maid Service", "Household Help", "Domestic Workers", "Verified Maids", "Cleaning Services", "Nanny", "Cook", "MaidEazy", "Hire Maid"],
  authors: [{ name: "MaidEazy" }],
  creator: "MaidEazy",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.maideazy.in",
    title: "MaidEazy | Bringing Trust Home",
    description: "Maid Eazy connects you with verified, trained, and reliable household professionals for your everyday needs.",
    siteName: "MaidEazy",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "MaidEazy Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MaidEazy | Bringing Trust Home",
    description: "Maid Eazy connects you with verified, trained, and reliable household professionals for your everyday needs.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicons/favicon.ico" },
      { url: "/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicons/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/favicons/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FCF9F9] text-gray-800">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
