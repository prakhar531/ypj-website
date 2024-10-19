"use client";
import { CardStack } from "../ui/card-stack";
import { cn } from "@/lib/utils";
export function CardStackDemo() {
  return (
    <div className="h-[35rem] flex items-center justify-center">
      <CardStack items={CARDS} />
    </div>
  );
}

const CARDS = [
  {
    id: 0,
    src: "/assets/images/hero/heroDemo1.jpeg",
  },
  {
    id: 1,
    src: "/assets/images/hero/heroDemo2.jpeg",
  },
  {
    id: 2,
    src: "/assets/images/hero/heroDemo3.jpeg",
  },
  {
    id: 3,
    src: "/assets/images/hero/heroDemo4.jpeg",
  },
];
