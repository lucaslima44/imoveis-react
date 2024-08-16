"use client";
import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { ItemMenu } from "./ItemMenu";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import { SideMenu } from "./SideMenu";
import { useState } from "react";

const menuItems = [
  {
    url: "/",
    title: "Home",
    dropdown: false,
  },
  {
    url: "/imoveis",
    title: "Imóveis",
    dropdown: false,
  },
  {
    url: "/#sobre",
    title: "Quem somos",
    dropdown: false,
  },
  {
    url: "/#localizacao",
    title: "Localização",
    dropdown: false,
  },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <header className="sticky top-0 w-full h-[63px] z-50 bg-white flex items-center border-b border-gray-100">
      <GridContainer className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/">
            <Image src="/vector.webp" width={32} height={32} alt="VA Imóveis" />
          </Link>

          <nav className="flex items-center gap-8 mx-auto">
            {menuItems.map(({ url, title, dropdown }, index) => (
              <ItemMenu
                key={index}
                url={url}
                title={title}
                hasDropdown={dropdown}
              />
            ))}
          </nav>
        </div>

        <div className="block xl:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={handleOpen}
              >
                <MenuIcon size={18} />
              </Button>
            </SheetTrigger>

            <SheetContent className="p-0">
              <SideMenu onClose={handleClose} />
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden xl:flex">
          <Link
            href="https://wa.me/5511997111030"
            target="_blank"
            rel="noopener noreferrer"
          >
            
            <Image
              src="/wpp.webp"
              width={40}
              height={40}
              alt="Whats logo"
              className="w-[30px] h-[30px]"
            />
          </Link>
        </div>
      </GridContainer>
    </header>
  );
}
