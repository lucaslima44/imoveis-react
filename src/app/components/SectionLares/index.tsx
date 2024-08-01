import Image from "next/image";
export function SectionLares() {
  const properties = [
    {
      src: "/imovel-1.jpg",
      title: "Apartamento Cohab",
      price: "R$ 320.000,00",
      location: "Av. Paulista",
    },
    {
      src: "/imovel-2.jpg",
      title: "Casa em Itapecerica",
      price: "R$ 450.000,00",
      location: "Av. Carlos Lacerda",
    },
    {
      src: "/imovel-3.jpg",
      title: "Apartamento Village",
      price: "R$ 550.000,00",
      location: "Est. de Itapecerica.",
    },
    // Adicione mais propriedades conforme necessário
  ];
  return (
    <section className="py-6 w-full">
      <div className=" flex flex-col text-center gap-3">
        <h1 className="text-2xl/relaxed font-bold">Recomendação</h1>
        <p className="text-lg/relaxed font-semibold">
          Procure pelo lar perfeito para sua <strong className="text-purple-700">moradia</strong>. <br />
          Diversas <strong className="text-purple-700">oportunidades</strong> de casas e apartamentos.
        </p>
      </div>
      <div className="relative mt-10 px-5">
        <div className="overflow-x-scroll [&::-webkit-scrollbar]:hidden flex gap-3">
          {properties.map((property, index) => (
            <div
              key={index}
              className="max-w-[300px] flex-shrink-0 bg-white p-4 rounded-lg text-center"
            >
              <Image
                src={property.src}
                width={300}
                height={200}
                alt="imagem casa"
              />
              <h3 className="text-xl font-bold px-2 mt-6">
                {property.title}
              </h3>
              <h4 className="text-blue-300 font-bold">{property.price}</h4>
              <p className="text-blue-700 text-lg/relaxed">
                {property.location}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-3 xl:w-auto justify-center mx-auto w-[90%]">
        <button className="py-3 px-5 bg-purple-600 border border-gray-300 rounded-lg text-white font-semibold leading-normal hover:bg-gray-400 xl:hover:text-gray-700 transition-colors my-5">
          Ver todos imóveis
        </button>
      </div>
    </section>
  );
}
