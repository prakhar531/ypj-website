import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <nav>
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src="/assets/icon/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer bg-slate-300"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-gray-700 md:hidden">
          <Image
            src="/assets/images/ypjenglish.png"
            alt="logo"
            width={140}
            height={38}
            className="cursor-pointer"
          />
          <Separator className="border border-gray-50" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
