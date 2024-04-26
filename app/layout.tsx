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
    <html lang="en" className="dark animate h-[100svh] relative">
      <body
        className={`animate min-h-[100svh] flex flex-col ${GeistSans.className}`}
      >
        {children}
      </body>
    </html>
  );
}
