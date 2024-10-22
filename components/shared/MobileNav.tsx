import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger className="align-middle">
          <div className="flex justify-center items-center max-h-[28px] max-w-[28px] mt-4">
            <Image
              src="/assets/icon/bars-solid.svg"
              width={50}
              height={50}
              alt="YPJ Logo"
              className="object-cover w-full"
            />
          </div>
          ;
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-zinc-900 bg-opacity-90 w-1/2 md:hidden">
          <Image
            src="/assets/images/ypjenglish.png"
            alt="logo"
            width={140}
            height={38}
            className="cursor-pointer"
          />
          <div className="bg-gradient-to-r from-transparent via-end-gold to-transparent h-[1px] w-full" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
