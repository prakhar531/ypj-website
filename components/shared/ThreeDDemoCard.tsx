"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var z-20">
      <CardBody className="relative group/card w-auto sm:w-[30rem] h-auto rounded-xl md:p-4 p-2 ">
        <CardItem translateZ="100" className="w-full">
          <Image
            src="/assets/images/ypjenglish.png"
            height="500"
            width="400"
            className="object-cover inset-0 rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
