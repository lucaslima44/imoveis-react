import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Imobiliária - Encontre seu novo lar",
  description:
    "A imobiliária de sua confiança está aqui. Oferecemos imóveis à venda e aluguel em diversas localidades.",
  icons: {
    icon: "/teste33.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        {/* Meta Tags de SEO */}
        <meta
          name="description"
          content="A imobiliária de sua confiança está aqui. Oferecemos imóveis à venda e aluguel em diversas localidades."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.seusite.com.br/" />

        {/* Open Graph Tags (para redes sociais) */}
        <meta
          property="og:title"
          content="Imobiliária - Encontre seu novo lar"
        />
        <meta
          property="og:description"
          content="A imobiliária de sua confiança está aqui. Oferecemos imóveis à venda e aluguel em diversas localidades."
        />
        <meta
          property="og:image"
          content="https://www.seusite.com.br/imagem_og.jpg"
        />
        <meta property="og:url" content="https://www.seusite.com.br/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Imobiliária - Encontre seu novo lar"
        />
        <meta
          name="twitter:description"
          content="A imobiliária de sua confiança está aqui. Oferecemos imóveis à venda e aluguel em diversas localidades."
        />
        <meta
          name="twitter:image"
          content="https://www.seusite.com.br/imagem_twitter.jpg"
        />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="uBCc2gignNU_YwGN5o18u0pEiYAdx9N5MfTBYURhzMI"
        />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
