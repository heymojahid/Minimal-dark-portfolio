import type { Metadata } from 'next';
import { Geist, Pixelify_Sans } from 'next/font/google';
import Script from 'next/script';
import '@/index.css';
import { ThemeProvider } from '@/components/landing/theme-provider';
import Container from '@/components/layouts/Container';
import Layout from '@/components/common/Layout';
import { Quote } from '@/components/common/Quote';
import Footer from '@/components/common/Footer';
import PageTracker from '@/components/common/PageTracker';
import { Analytics } from '@vercel/analytics/react';

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
});

const pixelifySans = Pixelify_Sans({
  variable: '--font-pixelify',
  subsets: ['latin'],
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sahilcodex.vercel.app';

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Mojahid Hassan',
      jobTitle: 'Full-Stack Developer & Indie Maker',
      url: siteUrl,
      sameAs: [
        'https://github.com/heymojahid',
        'https://x.com/heymojahid',
      ],
      knowsAbout: [
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'Node.js',
        'Tailwind CSS',
        'PostgreSQL',
        'MongoDB',
        'Full-Stack Development',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Mojahid Hassan Portfolio',
      description: 'Personal portfolio, technical blogs, projects, and work experience of Mojahid Hassan.',
      publisher: {
        '@id': `${siteUrl}/#person`,
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Mojahid Hassan | Full-Stack Developer & Indie Maker',
    template: '%s | Mojahid Hassan',
  },
  description:
    'Portfolio of Mojahid Hassan — Full-Stack Developer & Indie Maker passionate about turning ideas into useful digital products.',
  keywords: [
    'Mojahid Hassan',
    'Mojahid',
    'Full-Stack Developer',
    'Indie Maker',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'Node.js',
    'Tailwind CSS',
    'Web Developer Portfolio',
  ],
  authors: [{ name: 'Mojahid Hassan', url: 'https://github.com/heymojahid' }],
  creator: 'Mojahid Hassan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Mojahid Hassan | Full-Stack Developer & Indie Maker',
    description:
      'Portfolio of Mojahid Hassan — Full-Stack Developer & Indie Maker passionate about turning ideas into useful digital products.',
    siteName: 'Mojahid Hassan Portfolio',
    images: [
      {
        url: `${siteUrl}/og-image.webp`,
        width: 1200,
        height: 630,
        alt: 'Mojahid Hassan | Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mojahid Hassan | Full-Stack Developer & Indie Maker',
    description:
      'Portfolio of Mojahid Hassan — Full-Stack Developer & Indie Maker passionate about turning ideas into useful digital products.',
    images: [`${siteUrl}/og-image.webp`],
    creator: '@heymojahid',
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },

  manifest: '/site.webmanifest',
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${pixelifySans.variable} min-h-screen font-sans antialiased`}
      >
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var key = "vite-ui-theme";
                  var theme = localStorage.getItem(key);
                  if (theme === "dark" || (!theme && "dark" === "dark")) {
                    document.documentElement.classList.add("dark");
                  } else if (theme === "light") {
                    document.documentElement.classList.add("light");
                  } else if (theme === "system") {
                    var dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                    document.documentElement.classList.add(dark ? "dark" : "light");
                  }
                } catch (e) {}
              })()
            `,
          }}
        />
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <PageTracker />
          <Analytics />
          <div className="min-h-screen dark:bg-black/50">
          <Container>
              <Layout>
                {children}
                <Quote />
                <Footer />
              </Layout>
            </Container>
            <div className="from-background pointer-events-none fixed inset-x-0 bottom-0 z-40 h-10 bg-linear-to-t to-transparent [mask-image:linear-gradient(to_top,black_10%,transparent)] opacity-100 backdrop-blur-[5px] select-none dark:[mask-image:linear-gradient(to_top,black_20%,transparent)]" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
