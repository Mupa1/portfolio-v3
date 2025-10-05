"use client";

import Link from "next/link";
import React from "react";

import Language from "./Language";
import Menu from "./Menu";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <nav className="body-padding-x fixed top-0 z-20 w-full border-b border-neutral-200/50 bg-white/80 backdrop-blur-md dark:border-neutral-800/50 dark:bg-neutral-950/80">
      <div className="flex-between max-width h-20">
        <Link
          href="/"
          className="flex flex-col gap-1 text-base leading-4 text-neutral-900 transition-colors hover:text-blue-600 dark:text-neutral-100 dark:hover:text-blue-400"
        >
          <h1>
            <div>Mupa</div>
            <div>Nzaphila</div>
          </h1>
        </Link>
        <div className="flex-between gap-4 md:gap-8">
          <Language />
          <Theme />
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
