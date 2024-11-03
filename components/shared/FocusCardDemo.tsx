import { FocusCards } from "@/components/ui/focus-cards";
interface Card {
  title: string;
  src: string;
}

// Define props for FocusCardsDemo to accept an array of cards
interface FocusCardsDemoProps {
  cards: Card[];
}

// Component accepts cards as props
export function FocusCardsDemo({ cards }: FocusCardsDemoProps) {
  return <FocusCards cards={cards} />;
}
