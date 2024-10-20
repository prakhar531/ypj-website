import React from "react";

const Maps = () => {
  return (
    <div className="w-full mx-auto py-10 md:px-2 lg:px-4 md:py-24">
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="text-3xl md:text-6xl mb-4 max-w-4xl font-bold">
          <div className="heading text-white">
            Visit our{" "}
            <span className="text-transparent bg-gradient-to-r from-start-gold via-mid-gold to-end-gold bg-clip-text">
              Store
            </span>
          </div>
        </div>
      </div>
      <div
        className="overflow-hidden relative h-0 mt-5 md:mt-10"
        style={{ paddingBottom: "30%" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.6612626111014!2d85.27851457934568!3d25.3155825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f297c8065c2ccb%3A0x47de3ba29af4c31e!2sYogendra%20Prasad%20Jewellers!5e0!3m2!1sen!2sin!4v1729357061166!5m2!1sen!2sin"
          width="600"
          height="450"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute w-full h-full left-0 top-0 "
        ></iframe>
      </div>
    </div>
  );
};

export default Maps;
