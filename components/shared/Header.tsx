"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import NavItems from "./NavItems";
import ShinyButton from "../ui/shiny-button";

const Header = () => {
  return (
    <nav className="block w-full mx-auto bg-zinc-950 bg-opacity-70 sticky top-3 shadow  backdrop-blur-lg backdrop-saturate-150 z-[50]">
      <div className="max-w-sm md:max-w-7xl container flex flex-wrap items-center justify-between mx-auto text-slate-800 relative py-1 md:py-2 lg:px-8 lg:py-2">
        <Link href="/" className="">
          <div className="flex items-center justify-center gap-2 py-1">
            <Image
              src="/assets/images/ypj.png"
              width={50}
              height={30}
              alt="YPJ Logo"
            />
            <div className="flex flex-col justify-center items-center gap-1 py-2">
              <Image
                src="/assets/images/logoEngName.png"
                width={165}
                height={8}
                alt="YPJ Logo"
                className="h-8 flex justify-center items-center"
              />
            </div>
          </div>
        </Link>
        <div className="hidden lg:block">
          <NavItems />
        </div>
        <div className="hidden md:flex">
          <ShinyButton> Get started</ShinyButton>
        </div>

        <div className="md:hidden flex justify-center items-center mr-4">
          <MobileNav />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
      </div>
    </nav>
  );
};

export default Header;
