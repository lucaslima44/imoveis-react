import Image from "next/image";

export function SectionHero() {
  return (
    <section className="gap-4">
      <div className="text-center pt-5 flex flex-wrap gap-4">
        <h1 className="w-2/4 block mx-auto text-xl py-3 xl:text-5xl font-bold text-gray-900">
          Procurando seu novo{" "}
          <strong className="text-purple-700">imóvel</strong>?
        </h1>
        <p className="text-base flex justify-between px-4">
          Vamos encontrar sua nova casa. <br /> Todo sonho começa com uma paixão
          e toda vida começa com um sonho de vida perfeita. <br /> Aqui, estamos
          ajudando você a conseguir a casa perfeita com as melhores ofertas.
        </p>
        <Image
          src={"/hero.jpg"}
          width={600}
          height={400}
          alt="imagem casa"
          className="w-full xl:w-[600px] xl:h-[400px] flex items-center justify-center mx-auto rounded mt-8"
        />
      </div>
    </section>
    // display: block;
    // margin: auto;
    //  font-size: 23px;
  );
}
