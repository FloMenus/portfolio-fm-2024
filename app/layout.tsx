import "./globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";
import { Providers } from "./providers";

const hind = localFont({
  src: [
    {
      path: "../public/font/Hind-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/Hind-Light.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "../public/font/Hind-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/font/Hind-SemiBold.woff2",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../public/font/Hind-Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://florent-menus.com'),
  title: {
    default: "Florent Menus - Développeur Web Full Stack | Portfolio",
    template: "%s | Florent Menus"
  },
  description:
    "Développeur Web Full Stack à Paris & Île-de-France, spécialisé en React, Next.js, Node.js, Laravel et WordPress. Découvrez mon portfolio, mes projets professionnels et personnels.",
  keywords: "développeur, développeur web, fullstack, frontend, backend, React, Next.js, Node.js, Laravel, PHP, WordPress, Paris, Île-de-France, JavaScript, TypeScript",
  authors: [{ name: "Florent Menus" }],
  creator: "Florent Menus",
  publisher: "Florent Menus",
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
  alternates: {
    canonical: 'https://florent-menus.com',
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://florent-menus.com",
    title: "Florent Menus - Développeur Web Full Stack",
    description: "Portfolio de Florent Menus, développeur web full stack à Paris & Île-de-France. Expertise React, Next.js, Node.js, Laravel et WordPress.",
    siteName: "Portfolio Florent Menus",
    images: [
      {
        url: "/assets/fm-logo.png",
        width: 1000,
        height: 1000,
        alt: "Florent Menus - Développeur Web Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Florent Menus - Développeur Web Full Stack",
    description: "Portfolio de Florent Menus, développeur web full stack à Paris. Expertise React, Next.js, Node.js, Laravel et WordPress.",
    images: ["/assets/fm-logo.png"],
    creator: "@florentmenus",
  },
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Florent Menus',
    url: 'https://florent-menus.com',
    image: 'https://florent-menus.com/assets/fm-logo.png',
    jobTitle: 'Développeur Web Full Stack',
    description: 'Développeur Web Full Stack spécialisé en React, Next.js, Node.js, Laravel et WordPress',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Île-de-France',
      addressLocality: 'Paris',
      addressCountry: 'FR',
    },
    knowsAbout: ['React', 'Next.js', 'Node.js', 'JavaScript', 'TypeScript', 'Laravel', 'PHP', 'WordPress'],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'ESGI - École Supérieure de Génie Informatique',
    },
  };

  return (
    <html
      lang="fr"
      className={hind.className}
      content="text/html; charset=UTF-8"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
