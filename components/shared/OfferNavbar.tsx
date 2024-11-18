import React from "react";
import AnimatedShinyText from "../ui/animated-shiny-text";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const OfferNavbar = () => {
  return (
    <div className="bg-violet-700 h-6 w-full flex justify-center items-center p-4">
      <AnimatedShinyText className="text-xs md:text-base inline-flex items-center justify-center px-4 py-1 transition ease-out hover:duration-300 font-semibold hover:text-neutral-400 ">
        <a href="#products" className="flex gap-1">
          <div className="hidden md:flex">
            {" "}
            ✨ Unwrap Joy this Festive Season!{" "}
          </div>
          🎁 Explore Our Exclusive Offers! 💎
        </a>
        <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedShinyText>
    </div>
  );
};

export default OfferNavbar;
