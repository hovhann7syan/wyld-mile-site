import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Подключаем современный гладкий шрифт
const inter = Inter({ subsets: ["latin"] });

// Настройки SEO и Open Graph
export const metadata: Metadata = {
  title: "WYLD MILE | Independent Travel Atelier",
  description: "Hand-crafted routes. No mass tourism, just your rhythm and wild places. Book your perfect 3 or 7-day travel itinerary.",
  openGraph: {
    title: "WYLD MILE | Independent Travel Atelier",
    description: "Hand-crafted routes. No mass tourism, just your rhythm and wild places.",
    url: "https://wyldmile.com",
    siteName: "WYLD MILE",
    images: [
      {
        url: "https://wyldmile.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WYLD MILE Travel Experiences",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico", // <--- Исправили на правильный формат .ico
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-slate-50 text-slate-900`}>
        {children}
      </body>
    </html>
  );
}