import Image from "next/image";
import Link from "next/link";

export function SectionSobre() {
  return (
    <section id="sobre" className="pt-6 w-[90%] mx-auto">
      <div  className="flex flex-col items-center">
        <h4 className="text-purple-700 font-bold text-2xl">Quem somos</h4>
        <p className="text-base/relaxed pt-6">
          Fundada em 2021, a V.A. Lima Imobiliária tem como missão ajudar todos
          a encontrarem seu próprio lar. <br /> Oferecemos uma variedade de
          serviços para atender às necessidades dos nossos clientes: <br />
          <strong className="font-semibold">
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

        {/* Adicione um id ao contêiner do iframe */}
        <div id="localizacao" className="my-10 w-full h-full xl:w-[50%] xl:h-[300px]">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.1624220294298!2d-46.79073124997008!3d-23.670148871427152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce53e491fd9f57%3A0x57745de00eca9583!2sV.A.Lima%20Imobili%C3%A1ria!5e0!3m2!1spt-BR!2sbr!4v1679011280861!5m2!1spt-BR!2sbr"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
