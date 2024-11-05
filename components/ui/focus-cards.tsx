"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

type CardType = {
  title: string;
  src: string;
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: CardType;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end justify-between py-8 px-4 transition-opacity duration-300 ",
          hovered === index ? "opacity-100 " : "opacity-0"
        )}
      >
        <div>
          <div className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.title}
          </div>
          <div className="text-base text-white">Available</div>
        </div>

        <button
          type="button"
          className="bg-gradient-to-r from-start-gold via-mid-gold to-end-gold hover:bg-end-gold focus:ring-4 focus:outline-none focus:ring-start-gold rounded-lg text-sm px-2 py-2 text-center text-zinc-900 font-bold"
        >
          Contact Us
        </button>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
