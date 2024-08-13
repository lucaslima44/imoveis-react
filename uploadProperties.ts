import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ntznjzdtsnxoixudxrza.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50em5qemR0c254b2l4dWR4cnphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM1NjA0NTMsImV4cCI6MjAzOTEzNjQ1M30.ISBZ7XkF_HsQH3XBXZp91pfKe7SDu7Mh7QEZaebK_88";

const supabase = createClient(supabaseUrl, supabaseKey);

const properties = [
  {
    id: 1,
    src: [
      "/imovel-1.webp",
      "/imovel-11.webp",
      "/imovel-3.webp",
      "/imovel-4.webp",
      "/imovel-5.webp",
      "/imovel-6.webp",
    ],
    title: "Apartamento Cohab Adventista",
    price: "R$ 320.000,00",
    location: "Av. Paulista",
    link: "/apartamentoCohab",
    description:
      "Este encantador apartamento, localizado em uma das avenidas mais icônicas de São Paulo, oferece a combinação perfeita de conforto e conveniência. Situado na prestigiada Av. Paulista, o imóvel é ideal para quem busca viver no coração da cidade, com fácil acesso a uma variedade de opções culturais, gastronômicas e de entretenimento.",
    metros: "44m²",
    banheiros: "2",
    garagem: "1",
    quartos: "3",
  },
  {
    id: 2,
    src: [
      "/imovel-2.webp",
      "/imovel-3.webp",
      "/imovel-4.webp",
      "/imovel-5.webp",
      "/imovel-6.webp",
      "/imovel-1.webp",
    ],
    title: "Casa em Itapecerica da Serra",
    price: "R$ 450.000,00",
    location: "Av. Carlos Lacerda",
    link: "/casa-itapecerica",
    description:
      "Uma residência espaçosa e confortável localizada em um bairro tranquilo de Itapecerica da Serra. Com um grande jardim e área para churrasco, esta casa é perfeita para famílias que buscam um lar com espaço e privacidade.",
    metros: "120m²",
    banheiros: "3",
    garagem: "2",
    quartos: "4",
  },
  {
    id: 3,
    src: [
      "/imovel-3.webp",
      "/imovel-4.webp",
      "/imovel-5.webp",
      "/imovel-6.webp",
      "/imovel-1.webp",
      "/imovel-2.webp",
    ],
    title: "Apartamento Village",
    price: "R$ 550.000,00",
    location: "Est. de Itapecerica",
    link: "/apartamento-village",
    description:
      "Moderno apartamento com acabamentos de alta qualidade, localizado em um condomínio com diversas áreas de lazer. Perfeito para quem aprecia conforto e está em busca de um ambiente acolhedor e bem equipado.",
    metros: "68m²",
    banheiros: "2",
    garagem: "1",
    quartos: "2",
  },
  {
    id: 4,
    src: [
      "/imovel-4.webp",
      "/imovel-5.webp",
      "/imovel-6.webp",
      "/imovel-1.webp",
      "/imovel-2.webp",
      "/imovel-3.webp",
    ],
    title: "Cobertura Duplex em Moema",
    price: "R$ 1.200.000,00",
    location: "Rua Moema",
    link: "/cobertura-moema",
    description:
      "Uma cobertura duplex de luxo com vista panorâmica da cidade. Conta com piscina privativa, churrasqueira e um design contemporâneo que oferece o máximo em conforto e sofisticação.",
    metros: "200m²",
    banheiros: "4",
    garagem: "3",
    quartos: "3",
  },
  {
    id: 5,
    src: [
      "/imovel-5.webp",
      "/imovel-6.webp",
      "/imovel-1.webp",
      "/imovel-2.webp",
      "/imovel-3.webp",
      "/imovel-4.webp",
    ],
    title: "Casa de Campo em Atibaia",
    price: "R$ 750.000,00",
    location: "Estrada do Campo",
    link: "/casa-atibaia",
    description:
      "Casa de campo perfeita para quem deseja fugir da agitação urbana e desfrutar de um ambiente tranquilo, rodeado pela natureza. Ideal para momentos de lazer e descanso com a família.",
    metros: "150m²",
    banheiros: "3",
    garagem: "2",
    quartos: "4",
  },
  {
    id: 6,
    src: [
      "/imovel-6.webp",
      "/imovel-1.webp",
      "/imovel-2.webp",
      "/imovel-3.webp",
      "/imovel-4.webp",
      "/imovel-5.webp",
    ],
    title: "Apartamento em Pinheiros",
    price: "R$ 480.000,00",
    location: "Rua dos Pinheiros",
    link: "/apartamento-pinheiros",
    description:
      "Apartamento moderno em uma localização privilegiada, com acesso fácil a transportes e comércio local. Ideal para quem procura uma vida prática e dinâmica na cidade.",
    metros: "55m²",
    banheiros: "1",
    garagem: "1",
    quartos: "2",
  },
  {
    id: 7,
    src: [
      "/imovel-1.webp",
      "/imovel-2.webp",
      "/imovel-3.webp",
      "/imovel-4.webp",
      "/imovel-5.webp",
      "/imovel-6.webp",
    ],
    title: "Sítio em São Roque",
    price: "R$ 900.000,00",
    location: "Estrada do Sítio",
    link: "/sitio-sao-roque",
    description:
      "Sítio amplo com área de lazer completa, incluindo piscina, campo de futebol e espaço para eventos. Ideal para quem busca uma vida rural com conforto e comodidade.",
    metros: "300m²",
    banheiros: "4",
    garagem: "5",
    quartos: "5",
  },
  {
    id: 8,
    src: [
      "/imovel-2.webp",
      "/imovel-3.webp",
      "/imovel-4.webp",
      "/imovel-5.webp",
      "/imovel-6.webp",
      "/imovel-1.webp",
    ],
    title: "Apartamento em Vila Madalena",
    price: "R$ 600.000,00",
    location: "Rua da Vila",
    link: "/apartamento-vila-madalena",
    description:
      "Charmoso apartamento em um dos bairros mais descolados de São Paulo. Conta com design arrojado e áreas de lazer que incluem um rooftop com vista para a cidade.",
    metros: "70m²",
    banheiros: "2",
    garagem: "1",
    quartos: "3",
  },
  {
    id: 9,
    src: [
      "/imovel-3.webp",
      "/imovel-4.webp",
      "/imovel-5.webp",
      "/imovel-6.webp",
      "/imovel-1.webp",
      "/imovel-2.webp",
    ],
    title: "Casa de Praia em Guarujá",
    price: "R$ 1.000.000,00",
    location: "Praia das Astúrias",
    link: "/casa-guaruja",
    description:
      "Casa de praia com acesso direto à areia e vista para o mar. Perfeita para quem busca relaxar e aproveitar o melhor que o litoral paulista tem a oferecer.",
    metros: "180m²",
    banheiros: "3",
    garagem: "2",
    quartos: "4",
  },
  {
    id: 10,
    src: [
      "/imovel-4.webp",
      "/imovel-5.webp",
      "/imovel-6.webp",
      "/imovel-1.webp",
      "/imovel-2.webp",
      "/imovel-3.webp",
    ],
    title: "Apartamento em Jardins",
    price: "R$ 850.000,00",
    location: "Rua dos Jardins",
    link: "/apartamento-jardins",
    description:
      "Apartamento elegante em um dos bairros mais sofisticados da cidade. Com acabamentos luxuosos e perto de restaurantes, boutiques e centros culturais.",
    metros: "90m²",
    banheiros: "2",
    garagem: "2",
    quartos: "3",
  },
  {
    id: 11,
    src: [
      "/imovel-5.webp",
      "/imovel-6.webp",
      "/imovel-1.webp",
      "/imovel-2.webp",
      "/imovel-3.webp",
      "/imovel-4.webp",
    ],
    title: "Chácara em Mairiporã",
    price: "R$ 700.000,00",
    location: "Estrada da Chácara",
    link: "/chacara-mairipora",
    description:
      "Chácara ampla com área verde, perfeita para quem procura um refúgio perto da cidade, com espaço para criação de animais e cultivo de hortas.",
    metros: "250m²",
    banheiros: "3",
    garagem: "3",
    quartos: "4",
  },
  {
    id: 12,
    src: [
      "/imovel-6.webp",
      "/imovel-1.webp",
      "/imovel-2.webp",
      "/imovel-3.webp",
      "/imovel-4.webp",
      "/imovel-5.webp",
    ],
    title: "Apartamento em Santana",
    price: "R$ 400.000,00",
    location: "Rua de Santana",
    link: "/apartamento-santana",
    description:
      "Apartamento bem localizado com fácil acesso a transportes públicos e serviços essenciais. Ideal para quem busca praticidade e conforto.",
    metros: "50m²",
    banheiros: "1",
    garagem: "1",
    quartos: "2",
  },
  {
    id: 13,
    src: [
      "/imovel-1.webp",
      "/imovel-2.webp",
      "/imovel-3.webp",
      "/imovel-4.webp",
      "/imovel-5.webp",
      "/imovel-6.webp",
    ],
    title: "Casa em Campinas",
    price: "R$ 900.000,00",
    location: "Rua das Flores",
    link: "/casa-campinas",
    description:
      "Casa espaçosa com grande área externa e área gourmet. Perfeita para quem gosta de receber visitas e desfrutar de momentos ao ar livre.",
    metros: "200m²",
    banheiros: "4",
    garagem: "3",
    quartos: "4",
  },
  {
    id: 14,
    src: [
      "/imovel-2.webp",
      "/imovel-3.webp",
      "/imovel-4.webp",
      "/imovel-5.webp",
      "/imovel-6.webp",
      "/imovel-1.webp",
    ],
    title: "Apartamento em Santo Amaro",
    price: "R$ 420.000,00",
    location: "Avenida Santo Amaro",
    link: "/apartamento-santo-amaro",
    description:
      "Apartamento moderno com acesso facilitado a shoppings e centros comerciais. Ideal para quem procura conforto e comodidade no dia a dia.",
    metros: "60m²",
    banheiros: "2",
    garagem: "1",
    quartos: "2",
  },
  {
    id: 15,
    src: [
      "/imovel-3.webp",
      "/imovel-4.webp",
      "/imovel-5.webp",
      "/imovel-6.webp",
      "/imovel-1.webp",
      "/imovel-2.webp",
    ],
    title: "Cobertura em São Bernardo",
    price: "R$ 1.300.000,00",
    location: "Rua da Cobertura",
    link: "/cobertura-sao-bernardo",
    description:
      "Cobertura ampla com várias suítes e uma vista deslumbrante. Equipado com espaço gourmet, piscina e área de lazer para toda a família.",
    metros: "250m²",
    banheiros: "4",
    garagem: "4",
    quartos: "4",
  },
];

async function uploadData() {
  for (const property of properties) {
    const { data, error } = await supabase
      .from("properties")
      .insert([property]);

    if (error) {
      console.error("Erro ao inserir propriedade:", error.message);
    } else {
      console.log("Propriedade inserida com sucesso:", data);
    }
  }
}

uploadData();
