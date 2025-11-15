import { Depoimentos } from "./_components/Depoimentos";
import { Hero } from "./_components/Hero";
import { NossoTime } from "./_components/NossoTime";
import { Projetos } from "./_components/Projetos";
import { QuemSomos } from "./_components/QuemSomo";
import { SecaoCTA } from "./_components/SecaoCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <QuemSomos />
      <Projetos />
      <Depoimentos />
      <NossoTime />
      <SecaoCTA />
    </>
  );
}
