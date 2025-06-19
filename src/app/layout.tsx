import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';
import Providers from "@/components/Providers"; // <-- 1. IMPORTAMOS PROVIDERS

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tiyo",
  description: "Genera catalogo en segundos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* 👇 2. ENVOLVEMOS A LOS CHILDREN CON PROVIDERS */}
        <Providers>
          {children}
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-16FPV6BY2P" />
    </html>
  );
}