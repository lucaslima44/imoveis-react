"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; 

export function SectionLares() {
  const router = useRouter();

  const properties = [
    {
      id: 1, // Adicione um ID único para cada imóvel
      src: "/imovel-1.webp",
      title: "Apartamento Cohab Adventista",
      price: "R$ 3.000,00 /mês",
      location: "Av. Paulista",
    },
    {
      id: 2,
      src: "/imovel-2.webp",
      title: "Casa em Itapecerica da Serra",
      price: "R$ 450.000,00",
      location: "Av. Carlos Lacerda",
    },
    {
      id: 3,
      src: "/imovel-3.webp",
      title: "Apartamento Village",
      price: "R$ 5.000,00 /mês",
      location: "Est. de Itapecerica",
    },
  ];

  const handleNavigation = (id: number) => {
    router.push(`/imoveis/${id}`); 
  };

  const handleViewAll = () => {
    router.push('/imoveis');
  };
  return (
    <section className="py-6 w-full xl:mt-8">
      <div className="flex flex-col text-center gap-3">
        <h4 id="recomendacao" className="text-xl font-bold">Recomendação</h4>
        <p className="text-base">
          Procure pelo lar perfeito para sua{" "}
          <strong className="text-purple-700">moradia</strong>. <br />
          Diversas <strong className="text-purple-700">oportunidades</strong> de
          casas e apartamentos.
        </p>
      </div>
      <div className="relative mt-10 px-0 xl:px-3 mx-1">
        <div className="overflow-x-scroll [&::-webkit-scrollbar]:hidden flex gap-3 xl:grid-cols-2 xl:justify-center xl:flex-wrap xl:gap-6">
          {properties.map((property) => (
            <Link 
              key={property.id} 
              href={`/imoveis/${property.id}`} 
              passHref 
              legacyBehavior
            >
              <a 
                target="_blank" 
                rel="noopener noreferrer" 
                className="max-w-full h-full flex-shrink-0 bg-white p-0 rounded-[5px] text-center xl:cursor-pointer xl:w-[300px] xl:h-[311px]"
              >
                <div className="w-full overflow-hidden">
                  <Image
                    src={property.src}
                    width={300}
                    height={200}
                    alt="imagem casa"
                    className="w-full h-[167px] md:h-full object-cover"
                  />
                </div>
                <h4 className="text-blue-300 font-bold mt-3">{property.price}</h4>
                <h3 className="text-xs font-semibold mt-3 px-[1px]">
                  {property.title}
                </h3>
                <p className="text-blue-700 text-[10px] mb-[10px] mt-3">
                  {property.location}
                </p>
              </a>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-3 xl:w-auto justify-center mx-auto w-[90%]">
        <button
          onClick={handleViewAll}
          className="py-3 px-5 bg-purple-600 border border-gray-300 rounded-lg text-white font-semibold leading-normal hover:bg-gray-400 xl:hover:text-gray-700 transition-colors my-5"
        >
          Ver todos imóveis
        </button>
      </div>
    </section>
  );
}