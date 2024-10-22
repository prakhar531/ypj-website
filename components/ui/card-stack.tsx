"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval: NodeJS.Timeout | number;

type Card = {
  id: number;
  src: string;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-full w-[24rem] mt-10 md:h-[30rem] md:w-[35rem] ml-8">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute h-[20rem] w-[22rem] md:h-[38rem] md:w-[35rem] rounded-3xl p-4 shadow-xl border border-white/[0.1] shadow-yellow/[0.2] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <motion.img
              key={card.id}
              src={card.src}
              initial="initial"
              animate="visible"
              className="image h-full w-full absolute inset-0 object-cover object-center rounded-3xl"
            />
          </motion.div>
        );
      })}
    </div>
  );
};
