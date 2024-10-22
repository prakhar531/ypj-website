import React from "react";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { BackgroundLines } from "../ui/background-lines";
import { SignupFormDemo } from "./Form";

const ContactUs = () => {
  return (
    <div className="h-[60-rem] relative mb-10">
      <div className="h-[40rem] absolute left-10 top-0 z-20 ">
        <TextHoverEffect text="YPJ ere 1960" />
      </div>
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <SignupFormDemo />
      </BackgroundLines>
    </div>
  );
};

export default ContactUs;
