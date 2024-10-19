"use client";
import React from "react";
import { ButtonsCard } from "../ui/tailwindcss-buttion";

export function TailwindcssButtons() {
  return (
    <>
      {buttons.map((button, idx) => (
        <ButtonsCard key={idx}>{button.component}</ButtonsCard>
      ))}
    </>
  );
}
export const buttons = [
  {
    name: "Lit up borders",
    description: "Gradient button with perfect corners",
    component: (
      <button className="p-[2px] relative mt-4 ml-4">
        <div className="absolute inset-0 bg-gradient-to-r from-start-gold to-end-gold rounded-[4px]" />
        <div className="px-4 py-1 bg-zinc-900 rounded-[4px] relative group transition duration-200 text-white text-bold hover:bg-transparent hover:text-zinc-900 hover:font-bold font-semibold ">
          Contact Us
        </div>
      </button>
    ),
  },
];
