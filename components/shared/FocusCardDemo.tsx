import { FocusCards } from "@/components/ui/focus-cards";
interface Card {
  title: string;
  src: string;
}

// Define props for FocusCardsDemo to accept an array of cards
interface FocusCardsDemoProps {
  cards: Card[];
  showContactUs: boolean;
}

// Component accepts cards as props
export function FocusCardsDemo({ cards, showContactUs }: FocusCardsDemoProps) {
  return <FocusCards cards={cards} showContactUs={showContactUs} />;
}
