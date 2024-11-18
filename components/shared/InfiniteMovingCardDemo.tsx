"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-caard";
import { HeroHighlight } from "../ui/hero-highlight";
import { FlipWords } from "../ui/flip-word";
import BlurFade from "../ui/blur-fade";

export function InfiniteMovingCardsDemo() {
  const words = [
    "Guaranteed Purity and Authenticity of Every Piece",
    "100+ Unique Categories Served with Excellence",
    "2k+ Exquisite Jewelry Pieces in Our Collection",
    "60+ Years of Unmatched Craftsmanship and Expertise",
    "Exclusive Festival Offers and Discounts, Year After Year",
    "20k+ Satisfied Customers, Continuing our Legacy of Trust",
  ];
  return (
    <HeroHighlight>
      <div className="mx-auto py-28 md:px-2 lg:px-4 md:py-32" id="testimonials">
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="text-3xl md:text-6xl mb-4 max-w-4xl font-bold">
            <BlurFade delay={0.2} inView>
              <div className="heading text-white">
                Our{" "}
                <span className="text-transparent bg-gradient-to-r from-start-gold via-mid-gold to-end-gold bg-clip-text">
                  Happy clients
                </span>
              </div>
            </BlurFade>
          </div>
          <FlipWords
            words={words}
            className="text-base md:text-2xl font-bold"
          />
        </div>

        <div className="flex flex-col items-center max-lg:mt-10 md:my-20">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </HeroHighlight>
  );
}

const testimonials = [
  {
    quote:
      "The experience was simply remarkable! Each piece of jewelry felt like it held a unique story of its own.",
    name: "Arya Sharma",
    title: "Happy Customer",
  },
  {
    quote:
      "The craftsmanship and design are so intricate and beautiful, it captures everyone’s heart. Truly a work of art!",
    name: "Vikram Gupta",
    title: "Satisfied Customer",
  },
  {
    quote:
      "There's something special for every occasion here. Visiting Yogendra Prasad Jewellers brought me pure joy.",
    name: "Neha Mehta",
    title: "Regular Customer",
  },
  {
    quote:
      "The sparkle and quality of the jewelry here is unmatched. This is a place I trust wholeheartedly.",
    name: "Arjun Singh",
    title: "Loyal Customer",
  },
  {
    quote:
      "From my first visit, it felt like home. The jewelry here truly touches the soul.",
    name: "Sakshi Mishra",
    title: "First-Time Customer",
  },
];
