"use client";

import { ReactElement, useEffect, useState } from "react";
import { RxMoon, RxSun } from "react-icons/rx";
import { IconType } from "react-icons/lib";

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
    <button className="group cursor-pointer flex gap-x-2 w-full p-2 rounded-xl border hover:bg-popover-60 bg-popover/80 backdrop-blur-sm items-center h-16 animate">
      <div className="bg-accent text-accent-foreground border flex items-center justify-center w-auto h-full aspect-square rounded-lg group-hover:[&>svg]:scale-125 [&>svg]:animate animate">
        {Icon}
      </div>
      <div className="flex flex-col w-fit">
        <h3 className="text-clamp-sm text-left text-popover-foreground w-fit font-medium">
          {children}
        </h3>
        <p className="text-clamp-xs text-left text-muted-foreground">
          {subtext}
        </p>
      </div>
    </button>
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
      className="w-8 h-8 border rounded-full bg-popover flex items-center justify-center absolute right-6 top-6"
    >
      {dark ? <RxSun size={16} /> : <RxMoon size={16} />}
    </button>
  );
};

export { Button, DarkMode };
