import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Maid | MaidEazy",
  description: "Book verified and highly trained household professionals in minutes. Find the perfect maid, cook, or nanny for your specific needs.",
  openGraph: {
    title: "Book a Maid | MaidEazy",
    description: "Book verified and highly trained household professionals in minutes. Find the perfect maid, cook, or nanny for your specific needs.",
    url: "https://www.maideazy.in/book-now",
  },
};

export default function BookNowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
