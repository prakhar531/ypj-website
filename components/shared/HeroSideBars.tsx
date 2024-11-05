import React from "react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";

const HeroSideBars = () => {
  return (
    <div className="hidden md:flex">
      {" "}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-24 items-center justify-center z-50 mt-8">
        {heroSocial.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="-rotate-90 text-neutral-300 flex  items-center justify-center gap-1 hover:text-white text-lg font-semibold hover:text-xl hover:font-bold transition-all duration-300 ease-out"
          >
            {item.icon} {item.text}
          </a>
        ))}
      </div>
      <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-16 z-50">
        <a
          href="tel:+919798007011"
          className=" rotate-90 text-slate-200 flex items-center justify-center gap-1 font-semibold hover:text-start-gold text-lg hover:text-xl hover:font-semibold transition-all duration-300 ease-out"
          style={{ transformOrigin: "center" }} // Ensures rotation pivots from center
        >
          Call us on : +91-9798007011
        </a>
      </div>
    </div>
  );
};

export default HeroSideBars;

const heroSocial = [
  {
    text: "Facebook",
    link: "https://facebook.com",
    icon: <IconBrandFacebook stroke={1.25} />,
  },
  {
    text: "Twitter",
    link: "https://facebook.com",
    icon: <IconBrandX stroke={2} />,
  },
  {
    text: "Instagram",
    link: "https://facebook.com",
    icon: <IconBrandInstagram stroke={1.5} />,
  },
];
