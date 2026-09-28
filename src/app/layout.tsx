import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IMCA Exit Blueprint: 6th Sem ke Baad BCA Degree Kaise Le?",
  description:
    "RGPV Ordinance 33 (Clause 5.8 & 5.9) ke tehat 5-Year Integrated MCA se 6th semester ke baad BCA degree lekar exit karne ki complete step-by-step process, eligibility, aur ground reality.",
  keywords: [
    "IMCA Exit",
    "RGPV Ordinance 33",
    "BCA Degree after 6th sem",
    "Integrated MCA exit rules",
    "RGPV Dual Degree BCA",
    "Imran Hussain",
  ],
  authors: [{ name: "Imran Hussain" }],
  openGraph: {
    title: "IMCA Exit Blueprint: 6th Sem ke Baad BCA Degree Kaise Le?",
    description:
      "RGPV Ordinance 33 ke clauses 5.8 & 5.9 ke tehat BCA degree lekar exit karne ki poori legal process aur practical guide.",
    type: "article",
    locale: "hi_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "IMCA Exit Blueprint: 6th Sem ke Baad BCA Degree Kaise Le?",
    description:
      "RGPV Ordinance 33 ke clauses 5.8 & 5.9 ke tehat BCA degree lekar exit karne ki poori legal process.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" className={`${dmSerif.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-[#FAF6F0] text-[#3B2E27] antialiased selection:bg-[#C56A3C]/20 selection:text-[#C56A3C]">
        {children}
      </body>
    </html>
  );
}
