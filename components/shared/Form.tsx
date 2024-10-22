"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { DropDown } from "../ui/dropdown";
import { TextArea } from "../ui/textarea";

export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="max-w-lg w-full mx-auto rounded-xl md:rounded-2xl p-8 md:px-10 md:py-8 shadow-[0px_0px_1px_1px_var(--neutral-700)] bg-zinc-950 z-40">
      <div className="flex flex-col justify-center items-center">
        <div className="font-bold text-xl md:text-3xl text-transparent bg-gradient-to-r from-start-gold via-mid-gold to-end-gold bg-clip-text">
          Contact Us
        </div>
        <div className=" text-sm max-w-sm mt-2 text-neutral-300">
          Get in touch with us for any questions, feedback, or support,
        </div>
      </div>
      <div className="bg-gradient-to-r from-transparent via-end-gold to-transparent my-4 md:my-8 h-[1px] w-full" />
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Phone Number</Label>
          <Input id="phone" placeholder="9934247170" type="password" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="type">Query type</Label>
          <DropDown id="type" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="desc">Description</Label>
          <TextArea
            id="desc"
            placeholder="What is the current price of gold today?"
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Submit &rarr;
          <BottomGradient />
        </button>

        {/* <div className="bg-gradient-to-r from-transparent via-end-gold to-transparent my-8 h-[1px] w-full" /> */}
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-start-gold to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-end-gold to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
