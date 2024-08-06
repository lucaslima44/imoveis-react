import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { ItemNav } from "./item-nav";
import {
  menuPages,
  menuImoveis,
  menuContatos,
  menuLocalizacao,
} from "@/app/utils/data";

export function Footer() {
  return (
    <footer className="py-12 xl:pt-16">
      <GridContainer>
        <div className="grid xl:flex grid-cols-2 gap-8 xl:gap-0 items-start justify-between pb-12 xl:pb-16">
          <ItemNav title="Pages" itemsMenu={menuPages} />
          <ItemNav title="Imóveis" itemsMenu={menuImoveis} />
          <ItemNav title="Contatos" itemsMenu={menuContatos} />
          <ItemNav title="Localização" itemsMenu={menuLocalizacao} />
        </div>

        <div className="flex flex-col xl:flex-row items-start xl:only:items-center justify-between gap-6 xl:gap-0 border-t border-gray-200 pt-8">
          <Image
            src="/logo.png"
            width={142}
            height={32}
            alt="Logo VA Imóveis"
          />
          <p className="text-gray-500 text-sm">
            © 2024 VA Lima Imóveis. Todos direitos reservados.
          </p>
        </div>
      </GridContainer>
    </footer>
  );
}
