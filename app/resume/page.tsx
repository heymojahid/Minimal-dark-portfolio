import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import Container from "@/components/layouts/Container";
import { resumeConfig } from "@/config/resume";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sahilcodex.vercel.app";

export const metadata: Metadata = {
  title: "Resume — Professional Profile & Experience",
  description: "View the official resume, technical skills, background, and professional qualifications of Mojahid Hassan.",
  alternates: {
    canonical: `${siteUrl}/resume`,
  },
  openGraph: {
    title: "Resume — Mojahid Hassan | Professional Profile",
    description: "View the official resume, technical skills, background, and professional qualifications of Mojahid Hassan.",
    url: `${siteUrl}/resume`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.webp`,
        width: 1200,
        height: 630,
        alt: "Mojahid Hassan | Resume & Qualifications",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume — Mojahid Hassan | Professional Profile",
    description: "View the official resume, technical skills, background, and professional qualifications of Mojahid Hassan.",
    images: [`${siteUrl}/og-image.webp`],
    creator: "@heymojahid",
  },
};

export default function ResumePage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Resume
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            My resume.
          </p>
        </div>
        <Separator />
        <div className="mx-auto max-w-2xl">
          <iframe
            src={resumeConfig.url}
            className="min-h-screen w-full"
          ></iframe>
        </div>
      </div>
    </Container>
  );
}
