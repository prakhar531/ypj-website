import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Forest Adventure",
      src: "/assets/images/hero/heroDemo2.jpeg",
    },
    {
      title: "Valley of life",
      src: "/assets/images/hero/heroDemo3.jpeg",
    },
    {
      title: "Sala behta hi jayega",
      src: "/assets/images/hero/heroDemo4.jpeg",
    },
  ];

  return <FocusCards cards={cards} />;
}
