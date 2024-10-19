"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full py-10">
      <div className="wrapper mx-auto py-5 md:px-2 lg:px-4 ">
        <div className="text-4xl md:text-6xl mb-4 max-w-4xl text-transparent bg-gradient-to-r from-start-gold via-mid-gold to-end-gold bg-clip-text font-bold">
          Our Products
        </div>
        <div className="text-neutral-300 text-sm md:text-lg max-w-lg ml-2">
          A sublime masterpiece of craftsmanship.
        </div>
      </div>

      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Gold",
    title: "Bracelet",
    src: "/assets/images/jewelry/bracelet.jpeg",
  },
  {
    category: "Gold",
    title: "Rings",
    src: "/assets/images/jewelry/ring.jpeg",
  },
  {
    category: "Gold",
    title: "Bangles",
    src: "/assets/images/jewelry/bangles.jpeg",
  },
  {
    category: "Gold",
    title: "Chain",
    src: "/assets/images/jewelry/chain.jpeg",
  },
  {
    category: "Diamond",
    title: "Rings",
    src: "/assets/images/jewelry/dRings.jpeg",
  },
  {
    category: "Gold",
    title: "Earrings",
    src: "/assets/images/jewelry/earring.jpeg",
  },
  {
    category: "Gold",
    src: "/assets/images/jewelry/necklace.jpeg",
    title: "Necklace",
  },
];
