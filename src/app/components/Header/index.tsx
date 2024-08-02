import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { ItemMenu } from "./ItemMenu";
import Link from "next/link";

const menuItems = [
  {
    url: "/",
    title: "Home",
    dropdown: false,
  },
  {
    url: "/imoveis",
    title: "Imoveis",
    dropdown: true,
  },
  {
    url: "/sobre",
    title: "Quem somos",
    dropdown: false,
  },
  {
    url: "/localizacao",
    title: "Localização",
    dropdown: false,
  },
];
export function Header() {
  return (
    <header className="sticky top-0 w-full h-[80px] z-50 bg-white flex items-center border-b border-gray-100">
      <GridContainer className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Image src="/logo.png" width={200} height={48} alt="VA Imóveis" />
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
        <div>
          <Link href="https://wa.me/5511999999999" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <Image
                src="/whats-logo.webp"
                width={40}
                height={40}
                alt="Whats logo"
                className="w-[30px] h-[30px] xl:w-[40px] xl:h-[40px]"
              />
            </a>
          </Link>
        </div>
      </GridContainer>
    </header>
  );
}
