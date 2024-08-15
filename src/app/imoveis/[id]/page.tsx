import { notFound } from "next/navigation";
import { Imovel, properties } from "../../../lib/imoveis";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import { Bath, BedDouble, Car, Home, MapPinned } from "lucide-react";

interface ImovelPageProps {
  params: {
    id: string;
  };
}

const ImovelPage = ({ params }: ImovelPageProps) => {
  const { id } = params;

  const imovel = properties.find((property) => property.id === parseInt(id));

  if (!imovel) {
    return notFound();
  }

  return (
    <section className="p-6 w-full max-w-3xl mx-auto">
      <h1 className="text-[18px] text-center font-bold mb-4 text-gray-800">
        {imovel.title}
      </h1>

      <Carousel>
        <CarouselContent>
          {imovel.src.map((imageSrc, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-64">
                <Image
                  src={imageSrc}
                  alt={`${imovel.title} - image ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-md"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <h2 className="text-xl font-bold text-center text-blue-500 mt-4">
        {imovel.price}
      </h2>
      <p className="text-gray-700 text-center mt-2"></p>

      <div className="flex mt-5 mb-4 items-center gap-4 justify-center">
        <div className="flex items-center gap-1 text-xs">
          <MapPinned className="w-4 h-4" />
          <h4>{imovel.location}</h4>
        </div>
        <div className="flex items-center gap-1">
          <Home className="w-4 h-4" />
          <h4 className="text-gray-800">{imovel.metros}</h4>
        </div>
        <div className="flex items-center gap-1">
          <Bath className="w-4 h-4" />
          <h4 className="text-gray-800">{imovel.banheiros}</h4>
        </div>
        <div className="flex items-center gap-1">
          <BedDouble className="w-4 h-4" />
          <h4 className="text-gray-800">{imovel.quartos}</h4>
        </div>
        <div className="flex items-center gap-1">
          <Car className="w-4 h-4" />
          <h4 className="text-gray-800">{imovel.garagem}</h4>
        </div>
      </div>

      <div className="bg-gray-200 p-4 rounded-md w-full  xl:w-[50%]  grid justify-center justify-items-center mb-4 mx-auto gap-1">
        <h5>Valor do {imovel.venda ? "imóvel para venda" : "aluguel"}:</h5>
        <h4 className="font-bold">
          {imovel.price} {imovel.aluguel ? "/mês" : ""}
        </h4>
      </div>

      <div className="pt-4 pb-2">
        <h3 className="font-medium">Descrição do imóvel:</h3>
      </div>

      <p className="text-base text-gray-700 mb-3 text-justify">{imovel.description}</p>
    </section>
  );
};

export default ImovelPage;
