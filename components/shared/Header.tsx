import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <>
      <header className="w-full">
        <div className="wrapper flex items-center justify-between">
          <Link href="/" className="">
            <div className="flex">
              <Image
                src="/assets/images/ypjenglish.png"
                width={150}
                height={38}
                alt="YPJ Logo"
              />
            </div>
          </Link>

          <nav className="md:flex-between hidden w-full max-w-md">
            <NavItems />
          </nav>

          <div className="md:hidden flex w-32 justify-end gap-3">
            <MobileNav />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
