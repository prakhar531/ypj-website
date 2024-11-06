import { AppleCardsCarouselDemo } from "@/components/shared/AppleCardsCarouselDemo";
import ContactUs from "@/components/shared/ContactUs";
import { FeaturesSectionDemo } from "@/components/shared/FeatureSection";
import FooterContent from "@/components/shared/FooterContent";
import Header from "@/components/shared/Header";
import { HeroHighlightDemo } from "@/components/shared/HeroHighlightDemo";
import { InfiniteMovingCardsDemo } from "@/components/shared/InfiniteMovingCardDemo";
import Maps from "@/components/shared/Maps";
import OfferNavbar from "@/components/shared/OfferNavbar";
import { TimelineDemo } from "@/components/shared/TimelineDemo";

export default async function Home() {
  return (
    <>
      <OfferNavbar />
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

      <FeaturesSectionDemo />

      <InfiniteMovingCardsDemo />
      <Maps />
      <div id="contactus">
        <ContactUs />
      </div>
      <FooterContent />
    </>
  );
}
