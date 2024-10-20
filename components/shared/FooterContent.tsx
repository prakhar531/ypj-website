import React from "react";

const FooterContent = () => {
  return (
    <div className="wrapper my-10">
      <div className="bg-gradient-to-r from-transparent via-end-gold to-transparent my-8 h-[1px] w-full" />
      <div className="flex mt-4 md:flex-row flex-col justify-between items-center gap-3">
        <p className="md:text-base text-sm md:font-normal font-light text-white">
          © 2024 Yogendra Prasad Jewellers Company Limited. All Rights Reserved.
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
  );
};

export default FooterContent;
