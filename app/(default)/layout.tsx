import Link from "next/link";
import { Metadata } from "next";

import { GeistSans } from "geist/font/sans";

import { devMode } from "@/lib/content/content";
import { RxGithubLogo, RxLayout } from "react-icons/rx";

export const metadata: Metadata = {
  title: "Linktree Alt",
  description: "Made by @msafdev",
};

export default function GenerateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`animate min-h-[100svh] flex flex-col ${GeistSans.className}`}
    >
      {children}
      {devMode.template && (
        <div className="flex flex-col sticky z-50 bottom-4 px-4 gap-y-2">
          <Link
            href={"https://github.com/msafdev/msaf-link"}
            target="_blank"
            className="px-3 py-1 rounded-md border bg-accent text-accent-foreground flex items-center gap-x-2 w-fit"
          >
            <RxGithubLogo size={16} />
            Get the template
          </Link>
          <Link
            href={"/generate"}
            className="px-3 py-1 rounded-md border bg-accent text-accent-foreground flex items-center gap-x-2 w-fit"
          >
            <RxLayout size={16} />
            Generate your content
          </Link>
        </div>
      )}
    </main>
  );
}
