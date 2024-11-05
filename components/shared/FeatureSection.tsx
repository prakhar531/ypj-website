import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCurrencyDollar,
  IconVersions,
  IconReplace,
  IconRosetteDiscountCheck,
  IconCreditCardPay,
  IconAugmentedReality,
  IconRosetteDiscount,
} from "@tabler/icons-react";
import BlurFade from "../ui/blur-fade";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Festival Offers",
      description:
        "Celebrate with us! Enjoy special discounts and exclusive offers during festive seasons.",
      icon: <IconRosetteDiscount />,
    },
    {
      title: "Guaranteed Buyback",
      description:
        "Our jewelry is not only an investment in beauty but also in value. We offer a guaranteed buyback on all products.",
      icon: <IconReplace />,
    },
    {
      title: "Uncompromised Quality",
      description:
        "Every piece is meticulously crafted to ensure lasting quality. Our commitment to excellence means you can shop with confidence.",
      icon: <IconRosetteDiscountCheck />,
    },
    {
      title: "Exclusive Designs",
      description:
        "Stand out with one-of-a-kind pieces. Our designs are as unique as you are, perfect for those who seek something special.",
      icon: <IconAugmentedReality />,
    },
    {
      title: "Wide Variety",
      description:
        "From classic to contemporary, our extensive range suits every style, occasion, and budget. Find the perfect piece to express yourself.",
      icon: <IconVersions />,
    },
    {
      title: "Flexible Payment Options",
      description:
        "Choose from multiple payment methods, including easy EMI plans, to make your shopping experience as smooth as possible.",
      icon: <IconCreditCardPay />,
    },
    {
      title: "Lifetime Maintenance",
      description:
        "Keep your jewelry looking new with our free cleaning and maintenance services. Enjoy timeless beauty with every purchase.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Transparent Pricing",
      description:
        "No hidden charges! We provide clear pricing with detailed breakdowns, so you know exactly what you're paying for.",
      icon: <IconCurrencyDollar />,
    },
  ];
  return (
    <div className="w-full py-10">
      <div className="wrapper mx-auto py-5 md:px-2 lg:px-4 ">
        <div className="flex flex-col justify-center items-center">
          <BlurFade delay={0.2} inView>
            <div className="text-4xl md:text-6xl mb-1 max-w-4xl text-transparent bg-gradient-to-r from-start-gold via-mid-gold to-end-gold bg-clip-text font-bold">
              Our Best Feature
            </div>
          </BlurFade>
          <div className="text-neutral-300 text-sm md:text-lg max-w-lg ml-2">
            Discover unmatched quality, value, and elegance in every piece.
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l border-neutral-800",
        index < 4 && "lg:border-b border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-400">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-end-gold transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-start-gold text-lg">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
