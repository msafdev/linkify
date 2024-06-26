"use client";

import { ReactElement, useEffect, useState } from "react";
import Link from "next/link";

import { RxMoon, RxSun } from "react-icons/rx";

const Button = ({
  children,
  href,
  subtext,
  className = "",
  icon: Icon,
}: {
  children: React.ReactNode;
  href?: string;
  subtext?: string;
  className?: string;
  icon?: ReactElement;
}) => {
  return (
    <Link
      href={href || "/"}
      className="group z-10 cursor-pointer flex gap-x-2 w-full p-2 rounded-xl border hover:bg-popover/80 bg-popover backdrop-blur-sm items-center h-16 animate"
    >
      <div className="bg-accent text-accent-foreground border flex items-center justify-center w-auto h-full aspect-square rounded-lg group-hover:[&>svg]:scale-110 [&>svg]:animate animate">
        {Icon}
      </div>
      <div className="flex flex-col w-fit">
        <p className="text-clamp-sm text-left text-popover-foreground w-fit font-medium">
          {children}
        </p>
        <p className="text-clamp-xs text-left text-muted-foreground">
          {subtext}
        </p>
      </div>
    </Link>
  );
};

const DarkMode = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const toggleDark = () => setDark((prev) => !prev);
  return (
    <button
      onClick={toggleDark}
      aria-label="Toggle Dark Mode"
      className="w-8 h-8 border rounded-full bg-popover flex items-center justify-center absolute right-6 top-6 z-20"
    >
      {dark ? <RxSun size={16} /> : <RxMoon size={16} />}
    </button>
  );
};

export { Button, DarkMode };
