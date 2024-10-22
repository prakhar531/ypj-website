"use client";
import { HeroHighlight } from "../ui/hero-highlight";
import { CardStackDemo } from "./CardStackDemo";
import { FlipWords } from "../ui/flip-word";
import { TailwindcssButtons } from "./TailwindCssButtons";

export function HeroHighlightDemo() {
  const words = ["Divine", "Luxurious", "Refined", "Radiant", "Pristine"];
  return (
    <HeroHighlight>
      <div className="wrapper p-8 md:flex justify-evenly">
        <div className="flex justify-center items-center w-1/2 px-1 ml-8 mb-4">
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
