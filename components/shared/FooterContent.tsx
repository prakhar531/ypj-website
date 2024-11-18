import React from "react";
import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/shoooting-background";
import { ThreeDCardDemo } from "./ThreeDDemoCard";
import { footerContactUS, footerLinks, socialFollow } from "@/constants";
import Link from "next/link";
import Image from "next/image";

const FooterContent = () => {
  return (
    <div className="h-[50rem] md:h-[30rem] rounded-md bg-zinc-950 flex flex-col relative w-full mt-8">
      <ShootingStars />
      <StarsBackground />
      <div className="wrapper md:flex">
        <div className="w-full md:w-1/3">
          <div className="flex justify-center">
            <ThreeDCardDemo />
          </div>

          {/* <div className="text-slate-200 text-2xl font-semibold flex justify-center">
            GST: 10AGSPK8041MIZ4
          </div> */}
          <div className="flex gap-6 w-full justify-center">
            <div className="font-semibold text-neutral-300 my-4 text-xl">
              Follow Us On:
            </div>
            <div className="flex md:gap-3 gap-2">
              {socialFollow.map((info) => {
                return (
                  <div
                    className="flex gap-4 flex-start items-center"
                    key={info.id}
                  >
                    <div className="w-[40px] h-[40px] cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 rounded-lg border border-zinc-500 p-2 ">
                      <a href={info.links}>
                        <Image
                          src={info.img}
                          alt="icons"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col p-8 w-full md:w-1/3 items-start md:items-center">
          <div className="">
            <div className="font-bold text-transparent bg-gradient-to-r from-start-gold via-mid-gold to-end-gold bg-clip-text my-4 text-2xl">
              Information
            </div>
            <ul className=" flex w-full md:flex-col items-start md:gap-2 gap-4 flex-wrap ">
              {footerLinks.map((link) => {
                return (
                  <li
                    key={link.route}
                    className={`flex-center whitespace-nowrap text-neutral-300 hover:text-neutral-100`}
                  >
                    <Link href={link.route}>{link.label}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex flex-col px-8 md:p-8 w-full md:w-1/3">
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
                  <div className="w-[54px] h-[54px] cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 rounded-lg border border-zinc-500 p-2">
                    <a href={info.links}>
                      <Image
                        src={info.img}
                        alt="icons"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                  <a href={info.links} className="flex flex-col cursor-pointer">
                    <div className="text-lg font-bold text-neutral-300">
                      {info.title}
                    </div>
                    <div className="text-base text-neutral-400 hover:text-neutral-200">
                      {info.content}
                    </div>
                  </a>
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
