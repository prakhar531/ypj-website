"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import NavItems from "./NavItems";

const Header = () => {
  return (
    <nav className="block w-full max-w-sm md:max-w-7xl px-5 py-2 mx-auto bg-zinc-950 bg-opacity-70 sticky top-3 shadow lg:px-8 lg:py-2 backdrop-blur-lg backdrop-saturate-150 z-[50] ">
      <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
        <Link href="/" className="">
          <div className="flex">
            <Image
              src="/assets/images/ypjenglish.png"
              width={130}
              height={30}
              alt="YPJ Logo"
            />
          </div>
        </Link>
        <div className="hidden lg:block">
          <NavItems />
        </div>
        <div className="hidden md:flex justify-end gap-3">
          <button
            type="button"
            className="bg-gradient-to-r from-start-gold via-mid-gold to-end-gold hover:bg-end-gold focus:ring-4 focus:outline-none focus:ring-start-gold rounded-lg text-base px-4 py-2 text-center text-zinc-900 font-bold"
          >
            Get started
          </button>
        </div>

        <div className="md:hidden flex justify-center items-center mr-4">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Header;
