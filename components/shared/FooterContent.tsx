import React from "react";
import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/shoooting-background";
import { ThreeDCardDemo } from "./ThreeDDemoCard";
import { footerContactUS, footerLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";

const FooterContent = () => {
  return (
    <div className="h-[30rem] rounded-md bg-zinc-950 flex flex-col relative w-full">
      <ShootingStars />
      <StarsBackground />
      <div className="wrapper flex">
        <div className="w-1/3">
          <ThreeDCardDemo />
          <div className="text-slate-200 text-2xl font-semibold flex justify-center">
            GST: 10AGSPK8041MIZ4
          </div>
        </div>
        <div className="flex flex-col p-8 w-1/3 items-center">
          <div className="">
            <div className="font-bold text-transparent bg-gradient-to-r from-start-gold via-mid-gold to-end-gold bg-clip-text my-4 text-2xl">
              Information
            </div>
            <ul className=" flex w-full flex-col items-start gap-2  ">
              {footerLinks.map((link) => {
                return (
                  <li
                    key={link.route}
                    className={`flex-center whitespace-nowrap text-slate-200`}
                  >
                    <Link href={link.route}>{link.label}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex flex-col p-8 w-1/3">
          <div className="font-bold text-transparent bg-gradient-to-r from-start-gold via-mid-gold to-end-gold bg-clip-text my-4 text-2xl">
            Contact Us
          </div>
          <div className="flex flex-col md:gap-3 gap-6">
            {footerContactUS.map((info) => {
              return (
                <div
                  className="flex gap-4 flex-start items-center"
                  key={info.id}
                >
                  <div className="w-[54px] h-[54px] cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 rounded-lg border border-black-300 p-2">
                    <a href={info.links}>
                      <Image
                        src={info.img}
                        alt="icons"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-lg font-bold text-white">
                      {info.title}
                    </div>
                    <div className="text-base text-slate-200">
                      {info.content}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="bg-gradient-to-r from-transparent via-end-gold to-transparent mb-4 h-[1px] w-full" />
        <div className="flex mt-8 md:flex-row flex-col justify-between items-center gap-3">
          <p className="md:text-base text-sm md:font-normal font-light text-white">
            © 2024 Yogendra Prasad Jewellers Company Limited. All Rights
            Reserved.
          </p>

          <div className="flex items-center md:gap-3 gap-6 text-white">
            <p className="md:text-base text-sm md:font-normal font-light">
              Terms and Conditions
            </p>
            <p>|</p>

            <p className="md:text-base text-sm md:font-normal font-light">
              Private Polices
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
