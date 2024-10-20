"use client";
import { HeroHighlight } from "../ui/hero-highlight";
import { CardStackDemo } from "./CardStackDemo";
import { FlipWords } from "../ui/flip-word";
import { TailwindcssButtons } from "./TailwindCssButtons";

export function HeroHighlightDemo() {
  const words = ["Divine", "Luxurious", "Refined", "Radiant", "Pristine"];
  return (
    <HeroHighlight>
      <div className="wrapper flex justify-evenly">
        <div className="flex justify-center items-center w-1/2 px-1">
          <div className="flex flex-col">
            <div className="text-4xl mx-auto font-normal text-white">
              <FlipWords words={words} className="text-7xl font-bold " />
              <br />
              <div className="mt-1 ml-3">
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
            <TailwindcssButtons />
          </div>
        </div>

        <div className="w-1/2">
          <CardStackDemo />
        </div>
      </div>
    </HeroHighlight>
  );
}
