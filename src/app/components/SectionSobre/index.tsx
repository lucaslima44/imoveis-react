import Image from "next/image";

export function SectionSobre() {
  return (
    <section className="pt-6  w-[90%] mx-auto">
      <div className="flex flex-col items-center">
        <h4 className="text-purple-700 font-bold text-2xl ">Quem somos</h4>
        <p className="text-base/relaxed pt-6">
          Fundada em 2021, a V.A. Lima Imobiliária tem como missão ajudar todos
          a encontrarem seu próprio lar. <br /> Oferecemos uma variedade de
          serviços para atender às necessidades dos nossos clientes: <br />
          <strong className="font-semibold">
            {" "}
            Administração de Imóveis; <br />
            Aluguel de Casas e Apartamentos; <br />
            Venda de Imóveis; <br />
            Avaliação de Propriedades; <br />
            Documentação de Imóveis. <br /> <br />
          </strong>
          Estamos comprometidos em tornar a jornada imobiliária uma experiência
          positiva e gratificante para todos os envolvidos. Entre em contato
          conosco para obter mais informações ou agendar uma consulta.
        </p>
        <Image
          src="/localizacao.jpg"
          width={650}
          height={450}
          alt="localizacao"
          className="mt-10 w-[500px] h-[150px]"
        />
      </div>
    </section>
  );
}
