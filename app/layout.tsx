import { Metadata } from "next";

import { GeistSans } from "geist/font/sans";

import "./globals.css";

export const metadata: Metadata = {
  title: "Linktree Alt",
  description: "Made by @msafdev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="animate">
      <body className={`animate ${GeistSans.className}`}>{children}</body>
    </html>
  );
}
