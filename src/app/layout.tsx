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
  title: "Imobiliária",
  description: "A imobiliária de sua confiança está aqui.",
  icons: {
    icon: "/icon.png",
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
