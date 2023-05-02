import Image from "next/image";

const About = () => {
  return (
    <section className="bg-[#212121] flex justify-center items-center">
      <div className="max-w-xl">
        <h1 className="mb-3 text-zinc-100 underline underline-offset-4 decoration-[#55c5e9] text-xl font-bold">
          Sobre Mim
        </h1>
        <div className="flex flex-col gap-4">
        <p className="font-light text-lg text-zinc-300">
          Estou muito animado em começar minha carreira nesta área e estou
          sempre buscando aprender mais para me tornar um desenvolvedor melhor.
        </p>
        <p className="font-light text-lg text-zinc-300">
          Tenho um bom conhecimento dos fundamentos. Gosto de trabalhar em equipe e estou
          sempre disposto a ajudar e ser ajudado pelos meus colegas desenvolvedores.
        </p>
        <p className="font-light text-lg text-zinc-300">
        Eu sou
          apaixonado por desenvolvimento web e estou sempre antenado nas últimas
          tendências e novidades da indústria.
        </p>
        <p className="font-light text-lg text-zinc-300">
        No meu tempo livre, eu
          gosto de experimentar novas ferramentas e frameworks para melhorar
          minha eficiência e desenvolvimento de projetos. Eu adoro desafios e
          estou sempre buscando maneiras de melhorar o desempenho e a
          usabilidade dos sites que eu desenvolvo.
        </p>
        </div>
      </div>
      <div>
        <Image
          src={"/XZKyJCUt_2x-removebg-preview.png"}
          alt="illustration"
          width={400}
          height={400}
          quality={100}
        />
      </div>
    </section>
  );
};

export default About;
