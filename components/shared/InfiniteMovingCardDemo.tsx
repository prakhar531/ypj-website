"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-caard";
import { HeroHighlight } from "../ui/hero-highlight";
import { FlipWords } from "../ui/flip-word";

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
      <div className="mx-auto py-10 md:px-2 lg:px-4 md:py-32" id="testimonials">
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="text-3xl md:text-6xl mb-4 max-w-4xl font-bold">
            <div className="heading text-white">
              Kind words from{" "}
              <span className="text-transparent bg-gradient-to-r from-start-gold via-mid-gold to-end-gold bg-clip-text">
                Happy clients
              </span>
            </div>
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
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
