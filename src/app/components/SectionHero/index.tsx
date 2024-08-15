import Image from "next/image";

export function SectionHero() {
  return (
    <section id="home">
      <div className="xl:ml-20 flex flex-col xl:flex-row gap-4 justify-between">
        <div className="text-center xl:text-left xl:w-1/2">
          <h1 className="text-xl w-3/5 block mx-auto xl:mx-0 py-3 font-bold text-gray-900 xl:mt-[70px] xl:text-5xl xl:w-[40%]">
            Procurando seu novo{" "}
            <strong className="text-purple-700">imóvel</strong>?
          </h1>
          <p className="text-sm xl:text-base px-4 py-3">
            Vamos encontrar sua nova casa. <br /> Todo sonho começa com uma
            paixão e toda vida começa com um sonho de vida perfeita. <br />{" "}
            Aqui, estamos ajudando você a conseguir a casa perfeita com as
            melhores ofertas.
          </p>
        </div>

        <div className="flex justify-center xl:w-1/2 xl:justify-end">
          <Image
            src={"/hero.webp"}
            width={600}
            height={400}
            alt="imagem de uma casa"
            className="rounded xl:rounded-none w-full"
          />
        </div>
      </div>
    </section>
  );
}
