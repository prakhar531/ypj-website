import { AppleCardsCarouselDemo } from "@/components/shared/AppleCardsCarouselDemo";
import ContactUs from "@/components/shared/ContactUs";
import FooterContent from "@/components/shared/FooterContent";
import Header from "@/components/shared/Header";
import { HeroHighlightDemo } from "@/components/shared/HeroHighlightDemo";
import { InfiniteMovingCardsDemo } from "@/components/shared/InfiniteMovingCardDemo";
import Maps from "@/components/shared/Maps";
import { TimelineDemo } from "@/components/shared/TimelineDemo";

export default async function Home() {
  return (
    <>
      <Header />
      <div id="home">
        <HeroHighlightDemo />
      </div>
      <div id="aboutus">
        {" "}
        <TimelineDemo />
      </div>

      <div id="products">
        {" "}
        <AppleCardsCarouselDemo />
      </div>

      <InfiniteMovingCardsDemo />
      <Maps />
      <div id="contactus">
        <ContactUs />
      </div>
      <FooterContent />
    </>
  );
}
