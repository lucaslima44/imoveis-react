"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { properties, Imovel } from '../../lib/imoveis'; 

const Imoveis = () => {
  const [propertyList] = useState<Imovel[]>(properties); 
  const router = useRouter();

  const handleNavigation = (id: number) => {
    router.push(`/imoveis/${id}`);
  };

  return (
    <section className="bg-gray-100 py-6 xl:pb-12 w-full xl:mt-0">
      <div className="flex flex-col text-center gap-3">
        <h1 className="text-xl font-bold">Todos os Imóveis</h1>
        <p className="text-base">
          Explore a lista completa dos imóveis disponíveis.
        </p>
      </div>
      <div className="relative mt-10 px-0 xl:px-3 mx-1">
        <div className="grid grid-cols-2 gap-4 xl:flex xl:justify-center xl:flex-wrap xl:gap-6">
          {propertyList.map((property) => (
            <div
              key={property.id}
              onClick={() => handleNavigation(property.id)} 
              className="max-w-full w-full h-full flex-shrink-0 bg-white xl:p-4 p-0 rounded-[5px] text-center xl:cursor-pointer xl:w-[300px] xl:h-[311px]"
            >
              <div className="w-full overflow-hidden">
                <Image
                  src={property.src[0]}
                  width={300}
                  height={200}
                  alt={property.title}
                  className="w-full h-[167px] md:h-full object-cover"
                />
              </div>
              <h4 className="text-blue-300 font-bold mt-3">{property.price}</h4>
              <h3 className="text-xs font-semibold mt-3 px-[1px]">
                {property.title}
              </h3>
              <p className="text-blue-700 text-[10px] mt-3">
                {property.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Imoveis;
