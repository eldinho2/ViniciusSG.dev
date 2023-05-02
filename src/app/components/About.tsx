import Image from "next/image";

const About = () => {
  return (
    <section className="bg-[#212121] flex justify-center items-center">
      <div className="max-w-xl">
        <h1 className="text-zinc-100 underline underline-offset-4 decoration-[#55c5e9] text-lg font-bold">
          Sobre Mim
        </h1>
        <h2 className="font-semibold text-lg text-zinc-200 my-4">
          Estou muito animado em começar minha carreira nesta área e estou
          sempre buscando aprender mais para me tornar um desenvolvedor melhor.
        </h2>
        <p className="font-light text-lg text-zinc-400">
          Tenho um bom conhecimento dos fundamentos e estou sempre buscando
          aprimorar minhas habilidades. Eu gosto de trabalhar em equipe e estou
          sempre disposto a ajudar meus colegas desenvolvedores. Eu sou
          apaixonado por desenvolvimento web e estou sempre antenado nas últimas
          tendências e novidades da indústria. Eu sou especialmente interessado
          em tecnologias front-end modernas, como ReactJS, Nextjs.
          No meu tempo livre, eu
          gosto de experimentar novas ferramentas e frameworks para melhorar
          minha eficiência e desenvolvimento de projetos. Eu adoro desafios e
          estou sempre buscando maneiras de melhorar o desempenho e a
          usabilidade dos sites que eu desenvolvo.
        </p>
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
