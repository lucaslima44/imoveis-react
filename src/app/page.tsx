import { SectionHero } from "./components/SectionHero";
import { SectionLares } from "./components/SectionLares";
import { SectionSobre } from "./components/SectionSobre";

export default function Home() {
  return (
    <section className="bg-gray-100">
      <SectionHero />
      <SectionLares />
      <SectionSobre />
    </section>
  )
}
