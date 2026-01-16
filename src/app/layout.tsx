import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

// 1. Load the fonts
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit", 
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sage & Stone | Digital Product Studio",
  description: "Wisdom in Design. Stability in Code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}