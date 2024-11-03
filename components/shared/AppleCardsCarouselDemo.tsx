"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";
import { FocusCardsDemo } from "./FocusCardDemo";
import { goldRings } from "@/constants/item";

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
const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="/assets/images/jewelry/bracelet.jpeg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Gold",
    title: "Bracelet",
    src: "/assets/images/jewelry/bracelet.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Gold",
    title: "Rings",
    src: "/assets/images/jewelry/ring.jpeg",
    content: <FocusCardsDemo cards={goldRings} />,
  },
  {
    category: "Gold",
    title: "Bangles",
    src: "/assets/images/jewelry/bangles.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Gold",
    title: "Chain",
    src: "/assets/images/jewelry/chain.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Diamond",
    title: "Rings",
    src: "/assets/images/jewelry/dRings.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Gold",
    title: "Earrings",
    src: "/assets/images/jewelry/earring.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Gold",
    src: "/assets/images/jewelry/necklace.jpeg",
    title: "Necklace",
    content: <DummyContent />,
  },
];
