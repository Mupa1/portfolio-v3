import Image from "next/image";
import Link from "next/link";
import React from "react";

import Language from "./Language";
import MobileNavigation from "./MobileNavigation";
import Navlinks from "./Navlinks";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <nav className="body-padding-x sticky top-0 font-mono ">
      <div className="flex-between h-20">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/images/site-logo.png"
            width={36}
            height={36}
            alt="Site Logo"
          />
        </Link>
        <div className="hidden sm:block">
          <Navlinks />
        </div>
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
