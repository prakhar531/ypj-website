"use client";
import { HeroHighlight } from "../ui/hero-highlight";
import { CardStackDemo } from "./CardStackDemo";
import { FlipWords } from "../ui/flip-word";

import AnimatedShinyText from "../ui/animated-shiny-text";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import HeroSideBars from "./HeroSideBars";

export function HeroHighlightDemo() {
  const words = ["Divine", "Refined", "Radiant", "Pristine"];
  return (
    <HeroHighlight>
      <HeroSideBars />
      <div className="wrapper p-8 md:flex justify-evenly ">
        <div className="flex justify-center items-center w-full md:w-1/2 md:ml-8 mb-4 mt-8 md:mt-20">
          <div className="flex flex-col my-8">
            <div className="text-2xl md:text-4xl mx-auto font-normal text-white w-full">
              <FlipWords
                words={words}
                className="text-5xl md:text-7xl font-bold "
              />
              <br />
              <div className="mt-1 ml-3 w-full">
                <span className="text-transparent bg-gradient-to-r from-start-gold via-mid-gold to-end-gold bg-clip-text font-bold">
                  Jewelry
                </span>{" "}
                for{" "}
                <span className="text-transparent bg-gradient-to-r from-start-gold via-mid-gold to-end-gold  bg-clip-text font-bold">
                  Extraordinary
                </span>{" "}
                You.
                <br />
              </div>
            </div>
            {/* <TailwindcssButtons /> */}
            <div className="hidden mt-4 text-xs md:text-base md:inline-flex items-center justify-center px-4 transition ease-out hover:duration-300 font-semibold text-neutral-500">
              Trusted since 1960, Yogendra Prashad Jewellers brings you beauty
              and purity. <br></br>Our gold, silver, and diamond designs make
              life’s moments shine, crafted with care, trust, and style refined.
            </div>

            <div
              className={cn(
                "group rounded-full border text-base text-white transition-all ease-in hover:cursor-pointer  border-white/5 bg-neutral-900 hover:bg-neutral-800 w-fit mt-2 md:mt-4"
              )}
            >
              <AnimatedShinyText className="text-xs md:text-base inline-flex items-center justify-center px-4 py-1 transition ease-out hover:duration-300 font-semibold hover:text-neutral-400">
                <a href="#products" className="">
                  ✨ Discover our latest Jewelry collections.
                </a>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>

            <div
              className={cn(
                "group rounded-full border text-base text-white transition-all ease-in hover:cursor-pointer  border-white/5 bg-neutral-900 hover:bg-neutral-800 w-fit my-2 md:my-4"
              )}
            >
              <AnimatedShinyText className="text-xs md:text-base inline-flex items-center justify-center px-4 py-1 transition ease-out hover:duration-300 font-semibold hover:text-neutral-400">
                <span>🎁 Explore our exclusive Festival Offers.</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>
          </div>
        </div>

        <div className="md:w-1/2">
          <CardStackDemo />
        </div>
      </div>
    </HeroHighlight>
  );
}
