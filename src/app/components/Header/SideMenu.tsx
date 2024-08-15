import Image from "next/image";
import Link from "next/link";

interface SideMenuProps {
  onClose: () => void; // Função para fechar o menu
}

export function SideMenu({ onClose }: SideMenuProps) {
  return (
    <div className="items-center justify-center text-center flex flex-col cursor-pointer">
      <nav className="py-16 text-base font-medium ">
        <ul className="flex flex-col gap-10 items-center">
          <li>
            <Link href="/" onClick={onClose}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/imoveis" onClick={onClose}>
              Imóveis
            </Link>
          </li>
          <li>
            <Link href="/#sobre" onClick={onClose}>
              Quem Somos
            </Link>
          </li>
          <li>
            <Link href="/#localizacao" onClick={onClose}>
              Localização
            </Link>
          </li>
        </ul>
      </nav>
      <Link
            href="https://wa.me/5511997111030"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/whats.webp"
              width={40}
              height={40}
              alt="Whats logo"
              className="w-[40px] h-[40px] rounded-md"
            />
          </Link>
    </div>
  );
}
