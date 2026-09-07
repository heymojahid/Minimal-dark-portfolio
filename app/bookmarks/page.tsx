import type { Metadata } from "next";
import BookmarksPage from "@/components/bookmarks/Bookmarks";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sahilcodex.vercel.app";

export const metadata: Metadata = {
  title: "Bookmarks — Developer Resources & UI Inspiration",
  description: "A curated list of developer tools, design inspiration, frontend collections, and productivity resources by Mojahid Hassan.",
  alternates: {
    canonical: `${siteUrl}/bookmarks`,
  },
  openGraph: {
    title: "Bookmarks — Developer Resources & UI Inspiration",
    description: "A curated list of developer tools, design inspiration, frontend collections, and productivity resources by Mojahid Hassan.",
    url: `${siteUrl}/bookmarks`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.webp`,
        width: 1200,
        height: 630,
        alt: "Mojahid Hassan | Bookmarks & Resources",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bookmarks — Developer Resources & UI Inspiration",
    description: "A curated list of developer tools, design inspiration, frontend collections, and productivity resources by Mojahid Hassan.",
    images: [`${siteUrl}/og-image.webp`],
    creator: "@heymojahid",
  },
};

export default function Page() {
  return <BookmarksPage />;
}
