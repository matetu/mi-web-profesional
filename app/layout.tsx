import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mateo | Systems Engineering Student & Developer",
  description: "Portfolio of Mateo, a 2nd-year Systems Engineering student at UTN FRC. Specialized in Python, AI automation, and web development. Fluent in English (C1).",
  keywords: ["Systems Engineering", "UTN FRC", "Python Developer", "AI Automation", "Software Engineering Student", "Argentina"],
  authors: [{ name: "Mateo" }],
  openGraph: {
    title: "Mateo | Software Developer Portfolio",
    description: "Discover my projects in Python, AI, and web development.",
    url: "https://mi-web-profesional-six.vercel.app/",
    siteName: "Mateo Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        {children}
      </body>
    </html>
  );
}
