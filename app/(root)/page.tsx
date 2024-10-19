import { AppleCardsCarouselDemo } from "@/components/shared/AppleCardsCarouselDemo";
import { HeroHighlightDemo } from "@/components/shared/HeroHighlightDemo";
import { InfiniteMovingCardsDemo } from "@/components/shared/InfiniteMovingCardDemo";
import { TimelineDemo } from "@/components/shared/TimelineDemo";

export default async function Home() {
  return (
    <>
      <HeroHighlightDemo />
      <TimelineDemo />
      <AppleCardsCarouselDemo />
      <InfiniteMovingCardsDemo />
    </>
  );
}
