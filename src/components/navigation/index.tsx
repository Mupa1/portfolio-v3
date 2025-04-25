import Link from "next/link";
import React from "react";

import Language from "./Language";
import MobileNavigation from "./MobileNavigation";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <nav className="body-padding-x fixed top-0 w-full bg-neutral-100 dark:bg-black">
      <div className="flex-between max-width h-20">
        <Link href="/" className="flex flex-col gap-1 text-base leading-4">
          <h1>
            <div>Mupa</div>
            <div>Nzaphila</div>
          </h1>
        </Link>
        <div className="flex-between gap-0 sm:gap-3">
          <Language />
          <Theme />
          <MobileNavigation />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
