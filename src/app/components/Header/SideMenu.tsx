import Image from "next/image";
import Link from "next/link";

export function SideMenu() {
  return (
    <div className="items-center justify-center text-center flex flex-col cursor-pointer">
      <nav className="py-16 text-lg font-medium ">
        <ul className="flex flex-col gap-10 items-center">
          <li>
            <Link href="/" legacyBehavior>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/imoveis" legacyBehavior>
              <a>Imóveis</a>
            </Link>
          </li>
          <li>
            <Link href="/quem-somos" legacyBehavior>
              <a>Quem Somos</a>
            </Link>
          </li>
          <li>
            <Link href="/localizacao" legacyBehavior>
              <a>Localização</a>
            </Link>
          </li>
        </ul>
      </nav>
      <Image src="/whats-logo.webp" width={48} height={48} alt="Whatsapp" />
    </div>
  );
}
