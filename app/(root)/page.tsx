import { AppleCardsCarouselDemo } from "@/components/shared/AppleCardsCarouselDemo";
import { SignupFormDemo } from "@/components/shared/Form";
import { HeroHighlightDemo } from "@/components/shared/HeroHighlightDemo";
import { InfiniteMovingCardsDemo } from "@/components/shared/InfiniteMovingCardDemo";
import Maps from "@/components/shared/Maps";
import { TimelineDemo } from "@/components/shared/TimelineDemo";
import { BackgroundLines } from "@/components/ui/background-lines";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default async function Home() {
  return (
    <>
      <HeroHighlightDemo />
      <TimelineDemo />
      <AppleCardsCarouselDemo />
      <InfiniteMovingCardsDemo />
      <Maps />
      <div className="h-[30-rem] relative">
        <div className="h-[40rem] absolute left-10 top-0 z-20 ">
          <TextHoverEffect text="YPJ ere 1960" />
        </div>
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <SignupFormDemo />
        </BackgroundLines>
      </div>
    </>
  );
}
