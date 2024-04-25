import { Metadata } from "next";

import { GeistSans } from "geist/font/sans";

import "./globals.css";
import { devMode } from "@/content";
import { RxGithubLogo } from "react-icons/rx";
import Link from "next/link";

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
    <html lang="en" className="animate h-screen relative">
      <body
        className={`animate min-h-screen flex flex-col ${GeistSans.className}`}
      >
        {children}
        {devMode.template && (
          <Link
            href={"https://github.com/msafdev/msaf-link"}
            target="_blank"
            className="sticky z-50 bottom-4 left-4 w-fit px-3 py-1 rounded-md border bg-accent text-accent-foreground flex items-center gap-x-2"
          >
            <RxGithubLogo size={16} />
            Get the template
          </Link>
        )}
      </body>
    </html>
  );
}
