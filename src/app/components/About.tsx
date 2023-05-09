import Image from "next/image";

import { FadeUp, FadeLeft, FadeRight } from "./animations";

const About = () => {
  return (
    <section id="about" className="flex justify-center items-center">
      <FadeLeft>
        <div className="relative xsm:hidden">
          <Image
            src={"/XZKyJCUt_2x-removebg-preview.png"}
            alt="illustration"
            width={420}
            height={420}
            quality={100}
            className="relative"
          />
          <Image
            src={"/male-technologist-type-4_1f468-1f3fd-200d-1f4bb.png"}
            alt="illustration male pc"
            width={70}
            height={70}
            quality={100}
            className="absolute z-10 -top-[10px] -left-[10px]"
          />
          <span className="bg-[#414155] rounded-full absolute animate-spin-slow -top-[40px] -left-[48px]">
            <Image
              src={"/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg"}
              alt="illustration spinner"
              width={150}
              height={150}
              quality={100}
              className=""
            />
          </span>
        </div>
      </FadeLeft>
      <div className="max-w-xl">
        <FadeUp>
          <h1 className="text-zinc-100 underline underline-offset-4 decoration-[#55c5e9] text-2xl font-semibold mb-10 xsm:mx-7">
            Sobre Mim
          </h1>
        </FadeUp>
        <FadeRight>
          <div className="flex flex-col gap-4 xsm:mx-7">
            <FadeRight>
              <p className="font-light text-lg text-zinc-300 relative">
                Estou muito animado em começar minha carreira nesta área e estou
                sempre buscando aprender mais para me tornar um desenvolvedor
                melhor.
              </p>
              <div className="hidden xsm:block">
                <Image
                  src={"/male-technologist-type-4_1f468-1f3fd-200d-1f4bb.png"}
                  alt="illustration male pc"
                  width={70}
                  height={70}
                  quality={100}
                  className="absolute z-20 -top-[113px] left-[166px]"
                />
                <span className="bg-[#414155] rounded-full absolute animate-spin-slow -top-[144px] left-[128px]">
                  <Image
                    src={"/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg"}
                    alt="illustration spinner"
                    width={150}
                    height={150}
                    quality={100}
                    className=""
                  />
                </span>
              </div>
            </FadeRight>
            <FadeRight>
              <p className="font-light text-lg text-zinc-300">
                Tenho um bom conhecimento dos fundamentos. Gosto de trabalhar em
                equipe e estou sempre disposto a ajudar e ser ajudado pelos meus
                colegas desenvolvedores.
              </p>
            </FadeRight>
            <FadeRight>
              <p className="font-light text-lg text-zinc-300">
                Eu sou apaixonado por desenvolvimento web e estou sempre
                antenado nas últimas tendências e novidades da indústria.
              </p>
            </FadeRight>
            <FadeRight>
              <p className="font-light text-lg text-zinc-300">
                No meu tempo livre, eu gosto de experimentar novas ferramentas e
                frameworks para melhorar minha eficiência e desenvolvimento de
                projetos. Eu adoro desafios e estou sempre buscando maneiras de
                melhorar o desempenho e a usabilidade dos sites que eu
                desenvolvo.
              </p>
            </FadeRight>
          </div>
        </FadeRight>
      </div>
    </section>
  );
};

export default About;
