import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { FocusCardsDemo } from "./FocusCardDemo";

export function TimelineDemo() {
  const data = [
    {
      title: "1960",
      content: (
        <div className="text-neutral-400 text-base md:text-lg font-normal mb-8">
          <div className="my-5">
            Founded in 1960 by the visionary
            <span className="text-transparent bg-gradient-to-r from-start-gold via-mid-gold to-end-gold bg-clip-text font-bold">
              {" "}
              Yogendra Prasad Arya.
            </span>
            <br />{" "}
            <span className="text-transparent bg-gradient-to-r from-start-gold via-mid-gold to-end-gold bg-clip-text font-bold">
              {" "}
              Yogendra Prashad Jewellers
            </span>{" "}
            has become a cornerstone of trust and excellence in the world of
            jewelry. Located in{" "}
            <span className="text-transparent bg-gradient-to-r from-start-gold via-mid-gold to-end-gold bg-clip-text font-bold">
              {" "}
              Hilsa, Nalanda, Bihar
            </span>
            , our shop has been a beacon for high-quality gold, silver, and
            diamond products for over six decades. We take immense pride in
            being a family-run business that continues to uphold the legacy of
            craftsmanship, authenticity, and customer satisfaction that began
            with our founder.
          </div>
          <div className="my-4">
            Our Journey What started as a humble endeavor by Yogendra Prashad
            Arya quickly grew into a household name synonymous with trust and
            quality. From the very beginning, our focus has been on delivering
            not just jewelry but a promise of excellence. Over the years, we
            have expanded our offerings, and today, we are known for our wide
            range of exquisite
            <span className="text-transparent bg-gradient-to-r from-start-gold via-mid-gold to-end-gold bg-clip-text font-bold">
              {" "}
              GOLD, SILVER, and DIAMOND{" "}
            </span>{" "}
            ornaments. Whether it’s a simple piece for everyday wear or a
            custom-made design for special occasions, we provide a vast array of
            options to suit every taste and budget.
          </div>
          <div className="my-4">
            We are known for our
            <span className="text-transparent bg-gradient-to-r from-start-gold via-mid-gold to-end-gold bg-clip-text font-bold">
              {" "}
              Great Festival Discounts
            </span>
            , we love to celebrate with our customers by offering unbeatable
            deals during key festive seasons. Our customers know they can rely
            on us not only for the best prices but also for a level of quality
            and variety that remains unmatched in the region.
          </div>
        </div>
      ),
    },
    {
      title: "Legacy",
      content: (
        <div className="text-neutral-400 text-base md:text-lg font-normal mb-8">
          <div className="my-5">
            <div className="text-white font-bold mb-2">Mission</div>
            At
            <span className="text-transparent bg-gradient-to-r from-start-gold via-mid-gold to-end-gold bg-clip-text font-bold">
              {" "}
              Yogendra Prashad Jewellers
            </span>{" "}
            , our mission is to craft and provide the finest quality gold,
            silver, and diamond jewelry, offering unparalleled craftsmanship,
            authenticity, and value to our customers. We aim to build lifelong
            relationships by delivering exquisite designs that celebrate life’s
            precious moments, all while maintaining the highest standards of
            trust, transparency, and customer satisfaction.
          </div>
          <div className="my-5">
            <div className="text-white font-bold mb-2">Vision</div>
            Our vision is to be the leading and most trusted jewelry destination
            in Bihar and beyond, renowned for our legacy of craftsmanship,
            variety, and innovation. By continually setting new benchmarks in
            quality, customer service, and ethical practices, we strive to
            inspire confidence and loyalty in every individual who chooses
            <span className="text-transparent bg-gradient-to-r from-start-gold via-mid-gold to-end-gold bg-clip-text font-bold">
              {" "}
              Yogendra Prashad Jewellers
            </span>
            .
          </div>
        </div>
      ),
    },
    {
      title: "Certifications",
      content: (
        <>
          <div className=" text-neutral-400 text-base md:text-lg font-normal my-4 ">
            We have always been pioneers in the local jewelry industry. We were
            the first jewelry shop in Hilsa to receive the prestigious
            <span className="text-transparent bg-gradient-to-r from-start-gold via-mid-gold to-end-gold bg-clip-text font-bold">
              {" "}
              GST certification
            </span>
            , ensuring transparency and compliance with the highest standards of
            business integrity. This commitment to staying ahead of the curve
            has only strengthened the trust our customers place in us.
          </div>

          {/* <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/images/hero/heroDemo2.jpeg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/images/hero/heroDemo2.jpeg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/images/hero/heroDemo2.jpeg"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/images/hero/heroDemo2.jpeg"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div> */}
          <FocusCardsDemo />
        </>
      ),
    },
    {
      title: "Team",
      content: (
        <>
          <div className=" text-neutral-400 text-base md:text-lg font-normal my-4 ">
            <span className="text-transparent bg-gradient-to-r from-start-gold via-mid-gold to-end-gold bg-clip-text font-bold">
              {" "}
              Yogendra Prashad Arya
            </span>
            , our esteemed founder, established Yogendra Prashad Jewellers in
            <span className="text-transparent bg-gradient-to-r from-start-gold via-mid-gold to-end-gold bg-clip-text font-bold">
              {" "}
              1960
            </span>
            , laying the foundation for a business built on trust, quality, and
            craftsmanship. Today, under the leadership of
            <span className="text-transparent bg-gradient-to-r from-start-gold via-mid-gold to-end-gold bg-clip-text font-bold">
              {" "}
              Rakesh Kumar Arya
            </span>
            , the current Proprietor, the shop continues to flourish, blending
            the rich legacy of tradition with modern innovation to remain the
            leading destination for gold, silver, and diamond jewelry in Hilsa,
            Nalanda.
          </div>

          <FocusCardsDemo />
        </>
      ),
    },
  ];
  return (
    <div className="w-full mt-20">
      <Timeline data={data} />
    </div>
  );
}
