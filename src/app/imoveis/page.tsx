"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { properties, Imovel } from '../../lib/imoveis'; 

const Imoveis = () => {
  const [filter, setFilter] = useState<string>('all');
  const [propertyList, setPropertyList] = useState<Imovel[]>(properties); 
  const router = useRouter();

  const handleNavigation = (id: number) => {
    router.push(`/imoveis/${id}`);
  };

  const handleFilterChange = (type: string) => {
    setFilter(type);

    if (type === 'venda') {
      setPropertyList(properties.filter(property => property.venda));
    } else if (type === 'aluguel') {
      setPropertyList(properties.filter(property => property.aluguel));
    } else {
      setPropertyList(properties);
    }
  };

  return (
    <section className="bg-gray-100 py-6 xl:pb-12 w-full xl:mt-0">
      <div className="flex flex-col text-center gap-3">
        <h4 className="text-base xl:text-xl font-bold">Todos os Imóveis</h4>
        <p className="text-sm xl:text-base">
          Explore a lista completa dos imóveis disponíveis.
        </p>

        <div className="flex justify-center gap-4 mt-4 font-semibold">
          <button
            onClick={() => handleFilterChange('all')}
            className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 text-sm'}`}
          >
            Todos
          </button>
          <button
            onClick={() => handleFilterChange('venda')}
            className={`px-4 py-2 rounded ${filter === 'venda' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 text-sm'}`}
          >
            Venda
          </button>
          <button
            onClick={() => handleFilterChange('aluguel')}
            className={`px-4 py-2 rounded ${filter === 'aluguel' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 text-sm'}`}
          >
            Aluguel
          </button>
        </div>
      </div>

      <div className="relative mt-10 px-0 xl:px-3 mx-1">
        <div className="grid grid-cols-2 gap-4 xl:flex xl:justify-center xl:flex-wrap xl:gap-6">
          {propertyList.map((property) => (
            <div
              key={property.id}
              onClick={() => handleNavigation(property.id)} 
              className="max-w-full w-full h-full flex-shrink-0 bg-white p-0 rounded-[5px] text-center xl:cursor-pointer xl:w-[300px] xl:h-[311px]"
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
              <h4 className="text-blue-300 text-xs font-bold mt-3">{property.price}</h4>
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
