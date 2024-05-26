import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/sections/Footer/Footer";

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
  title: "Florent MENUS - Développeur Junior",
  description:
    "Portfolio de Florent MENUS, développeur junior. Découvrez mes projets, mes compétences et comment me contacter.",
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
  return (
    <html
      lang="fr"
      className={hind.className}
      content="text/html; charset=UTF-8"
    >
      <body>{children}</body>
    </html>
  );
}
