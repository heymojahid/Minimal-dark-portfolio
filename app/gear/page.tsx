import type { Metadata } from "next";
import GearsPage from "@/components/gear/Gear";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sahilcodex.vercel.app";

export const metadata: Metadata = {
  title: "Gears & Development Setup",
  description: "A detailed breakdown of hardware, desk setup, software, developer tools, and extensions used by Mojahid Hassan.",
  alternates: {
    canonical: `${siteUrl}/gear`,
  },
  openGraph: {
    title: "Gears & Development Setup — Mojahid Hassan",
    description: "A detailed breakdown of hardware, desk setup, software, developer tools, and extensions used by Mojahid Hassan.",
    url: `${siteUrl}/gear`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.webp`,
        width: 1200,
        height: 630,
        alt: "Mojahid Hassan | Gear & Software Setup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gears & Development Setup — Mojahid Hassan",
    description: "A detailed breakdown of hardware, desk setup, software, developer tools, and extensions used by Mojahid Hassan.",
    images: [`${siteUrl}/og-image.webp`],
    creator: "@heymojahid",
  },
};

export default function GearPage() {
  return <GearsPage />;
}
