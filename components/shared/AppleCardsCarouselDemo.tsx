"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { FocusCardsDemo } from "./FocusCardDemo";
import {
  diamondNecklace,
  diamondRing,
  goldBracelet,
  goldChain,
  goldEarrings,
  goldMangalsutra,
  goldNecklace,
  goldNoseRings,
  goldRing,
} from "@/constants/item";
import BlurFade from "../ui/blur-fade";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full py-10">
      <div className="wrapper mx-auto py-5 md:px-2 lg:px-4 ">
        <div className="flex flex-col justify-center items-center">
          <BlurFade delay={0.2} inView>
            <div className="text-4xl md:text-6xl mb-1 max-w-4xl text-transparent bg-gradient-to-r from-start-gold via-mid-gold to-end-gold bg-clip-text font-bold">
              Our Products
            </div>
          </BlurFade>
          <div className="text-neutral-300 text-sm md:text-lg max-w-lg ml-2">
            A sublime masterpiece of craftsmanship.
          </div>
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
    content: <FocusCardsDemo cards={goldBracelet} />,
  },
  {
    category: "Gold",
    title: "Rings",
    src: "/assets/images/jewelry/ring.jpeg",
    content: <FocusCardsDemo cards={goldRing} />,
  },
  {
    category: "Gold",
    title: "MangalSutra",
    src: "/assets/items/mangalsutra/mangalsutra (17).jpeg",
    content: <FocusCardsDemo cards={goldMangalsutra} />,
  },
  {
    category: "Gold",
    title: "Chain",
    src: "/assets/images/jewelry/chain.jpeg",
    content: <FocusCardsDemo cards={goldChain} />,
  },
  {
    category: "Gold",
    title: "Nose Ring",
    src: "/assets/images/jewelry/covernoseri.jpeg",
    content: <FocusCardsDemo cards={goldNoseRings} />,
  },
  {
    category: "Gold",
    title: "Earrings",
    src: "/assets/images/jewelry/earring.jpeg",
    content: <FocusCardsDemo cards={goldEarrings} />,
  },
  {
    category: "Gold",
    src: "/assets/images/jewelry/necklace.jpeg",
    title: "Necklace",
    content: <FocusCardsDemo cards={goldNecklace} />,
  },
  {
    category: "Diamond",
    src: "/assets/images/jewelry/dRings.jpeg",
    title: "Rings",
    content: <FocusCardsDemo cards={diamondRing} />,
  },
  {
    category: "Diamond",
    src: "/assets/items/dnecklace/dnecklace (6).jpeg",
    title: "Necklace",
    content: <FocusCardsDemo cards={diamondNecklace} />,
  },
];
