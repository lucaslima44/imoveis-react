import Image from "next/image";
import Link from "next/link";
import { SheetHeader, SheetTitle } from "../ui/sheet";
import { Button } from "../ui/button"; // Certifique-se de importar o Button
import { BookUser, Home, Hotel, MapPin } from "lucide-react";

interface SideMenuProps {
  onClose: () => void; // Função para fechar o menu
}

export function SideMenu({ onClose }: SideMenuProps) {
  return (
    <>
      <SheetHeader className="border-b border-solid border-zinc-700 p-5 text-left">
        <SheetTitle className="text-[#F8FAFC] font-semibold">Menu</SheetTitle>
      </SheetHeader>
      <div className="flex flex-col cursor-pointer">
        <nav className="py-16 text-base font-medium flex flex-col gap-10 ">
          <div className="px-5 gap-6 grid">
            <div>
              <Button
                variant="outline"
                className="border border-solid border-zinc-700 py-2 mx-2 px-4 w-[95%] justify-start bg-transparent text-[#F8FAFC] gap-4"
                onClick={onClose}
              >
                <Home height={16} width={16} />
                <Link href="/">Home</Link>
              </Button>
            </div>
            <div>
              <Button
                variant="outline"
                className="border border-solid border-zinc-700 py-2 mx-2 px-4 w-[95%] justify-start bg-transparent text-[#F8FAFC] gap-4"
                onClick={onClose}
              >
                <Hotel height={16} width={16} />
                <Link href="/imoveis">Imóveis</Link>
              </Button>
            </div>
            <div>
              <Button
                variant="outline"
                className="border border-solid border-zinc-700 py-2 mx-2 px-4 w-[95%] justify-start bg-transparent text-[#F8FAFC] gap-4"
                onClick={onClose}
              >
                <BookUser height={16} width={16} />
                <Link href="/#sobre">Quem Somos</Link>
              </Button>
            </div>
            <div>
              <Button
                variant="outline"
                className="border border-solid border-zinc-700 py-2 mx-2 px-4 w-[95%] justify-start bg-transparent text-[#F8FAFC] gap-4"
                onClick={onClose}
              >
                <MapPin height={16} width={16} />
                <Link href="/#localizacao">Localização</Link>
              </Button>
            </div>
            <div>
              <Button
                variant="outline"
                className="border border-solid border-zinc-700 py-2 mx-2 px-4 w-[95%] justify-start bg-transparent text-[#F8FAFC] gap-4"
                onClick={onClose}
              >
                <Image
                  src="/whatsapp.webp"
                  width={16}
                  height={16}
                  alt="Logo WhatsApp"
                />
                <Link
                  href="https://wa.me/5511997111030"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center"
                >
                  {" "}
                  WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
