import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WYLD — турагентство",
  description: "Дикие маршруты и свободные путешествия. Выберите свой тур.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
