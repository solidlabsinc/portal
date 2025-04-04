import type { Metadata } from "next";
import { Inter, Spline_Sans } from "next/font/google";

import "./styles.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const splineSans = Spline_Sans({
  variable: "--font-spline-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Solid | Universal Digital Identity",
  description:
    "Verify once, use anywhere, we provides a global standard for digital identity and data self sovereignty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${splineSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
