import Image from "next/image";
import Link from "next/link";

export function SectionLares() {
  const properties = [
    {
      src: "/imovel-1.jpg",
      title: "Apartamento Cohab Adventista",
      price: "R$ 320.000,00",
      location: "Av. Paulista",
      link: "/apartamento-cohab",
    },
    {
      src: "/imovel-2.jpg",
      title: "Casa em Itapecerica da Serra",
      price: "R$ 450.000,00",
      location: "Av. Carlos Lacerda",
      link: "/casa-itapecerica",
    },
    {
      src: "/imovel-3.jpg",
      title: "Apartamento Village",
      price: "R$ 550.000,00",
      location: "Est. de Itapecerica",
      link: "/apartamento-village",
    },
    {
      src: "/imovel-1.jpg",
      title: "Apartamento Cohab Adventista",
      price: "R$ 320.000,00",
      location: "Av. Paulista",
      link: "/apartamento-cohab",
    },
    {
      src: "/imovel-2.jpg",
      title: "Casa em Itapecerica da Serra",
      price: "R$ 450.000,00",
      location: "Av. Carlos Lacerda",
      link: "/casa-itapecerica",
    },
    {
      src: "/imovel-3.jpg",
      title: "Apartamento Village",
      price: "R$ 550.000,00",
      location: "Est. de Itapecerica",
      link: "/apartamento-village",
    },
    {
      src: "/imovel-1.jpg",
      title: "Apartamento Cohab Adventista",
      price: "R$ 320.000,00",
      location: "Av. Paulista",
      link: "/apartamento-cohab",
    },
    {
      src: "/imovel-2.jpg",
      title: "Casa em Itapecerica da Serra",
      price: "R$ 450.000,00",
      location: "Av. Carlos Lacerda",
      link: "/casa-itapecerica",
    },
    {
      src: "/imovel-3.jpg",
      title: "Apartamento Village",
      price: "R$ 550.000,00",
      location: "Est. de Itapecerica",
      link: "/apartamento-village",
    },
  ];

  return (
    <section className="py-6 w-full xl:mt-8">
      <div className="flex flex-col text-center gap-3">
        <h1 className="text-xl font-bold">Recomendação</h1>
        <p className="text-base">
          Procure pelo lar perfeito para sua{" "}
          <strong className="text-purple-700">moradia</strong>. <br />
          Diversas <strong className="text-purple-700">oportunidades</strong> de
          casas e apartamentos.
        </p>
      </div>
      <div className="relative mt-10 px-0 xl:px-3 mx-1">
        <div className="grid grid-cols-2 gap-4 xl:flex xl:justify-center xl:flex-wrap xl:gap-6">
          {properties.map((property, index) => (
            <Link href={property.link} key={index}>
              <div className="max-w-full w-full h-full flex-shrink-0 bg-white xl:p-4 p-0 rounded-[5px]  text-center xl:cursor-pointer xl:w-[300px] xl:h-[311px]">
                <div className="w-full overflow-hidden">
                  <Image
                    src={property.src}
                    width={300}
                    height={200}
                    alt="imagem casa"
                    className="w-full h-[167px] md:h-full object-cover"
                  />
                </div>
                <h4 className="text-blue-300 font-bold mt-3">
                  {property.price}
                </h4>
                <h3 className="text-xs font-semibold mt-3 px-[1px]">
                  {property.title}
                </h3>
                <p className="text-blue-700 text-[10px] mt-3">
                  {property.location}
                </p>
              </div>
            </Link>
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
