import Image from "next/image";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import {FadeUp, FadeLeft, FadeRight} from "./animations";

const Portifolio = () => {
  return (
    <section className="mt-28 overflow-hidden">
      <FadeUp>
      <h1 id="projects" className="text-center text-white text-2xl font-semibold underline underline-offset-4 decoration-[#55c5e9] mb-10">
        Meu portfólio
      </h1>
      </FadeUp>
      <div className="flex flex-col items-center justify-center gap-10">
      <FadeLeft>
        <div className="flex gap-5 p-4 text-white shadow-lg bg-neutral-800 rounded-lg w-[700px] xsm:w-[330px] xsm:flex-col">
          <div className="overflow-hidden h-[300px]">
            <a
              href="https://gym-website-sigma.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/gymwebsite.png"}
                alt="gymwebsite"
                width={400}
                height={400}
                quality={100}
                className="translate-y-[0%] ease-[cubic-bezier(0.33,0.42,0.15,1.14)] transition-transform duration-[15s] hover:translate-y-[-73%] hover:transition-transform hover:duration-[15s] hover:ease-[cubic-bezier(0.33,0.42,0.15,1.14)]"
              />
            </a>
          </div>
          <div className="flex justify-center items-center flex-col gap-3">
            <div>
              <p className="max-w-xl font-medium text-base">
                Este é um projeto de site para academia, O objetivo deste projeto é
                fornecer uma solução simples e elegante para apresentar
                informações sobre uma academia e seus serviços aos usuários.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-xl font-black">React</span>
              <span className="text-xl font-black">TailwindCss</span>
            </div>
            <div className="flex gap-10">
              <a
                href="https://github.com/eldinho2/Gym-Website"
                target="_blank"
                className="flex items-center gap-1 p-1 border-2 border-[#55c5e9] text-base font-semibold rounded-md hover:border-[#21212b] hover:text-[#21212b] text-[#424156] bg-[#55c5e9] "
              >
                Code
                <FaGithubSquare />
              </a>
              <a
                href="https://gym-website-sigma.vercel.app/"
                target="_blank"
                className="flex items-center gap-1 p-1 border-2 border-[#55c5e9] text-base font-semibold rounded-md hover:border-[#21212b] hover:text-[#21212b] text-[#424156] bg-[#55c5e9]"
              >
                Live Demo
                <BsBoxArrowUpRight />
              </a>
            </div>
          </div>
        </div>
        </FadeLeft>
        <FadeRight>
        <div className="flex flex-row-reverse gap-5 p-4 text-white shadow-lg bg-neutral-800 rounded-lg w-[700px] xsm:w-[330px] xsm:flex-col">
        <div className="overflow-hidden h-[300px]">
            <a
              href="https://github.com/eldinho2/E-commerce"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/planPlant.jpeg"}
                alt="planPlant"
                width={400}
                height={400}
                quality={100}
                className="translate-y-[0%] ease-[cubic-bezier(0.33,0.42,0.15,1.14)] transition-transform duration-[15s] hover:translate-y-[-80%] hover:transition-transform hover:duration-[15s] hover:ease-[cubic-bezier(0.33,0.42,0.15,1.14)]"
              />
            </a>
          </div>
          <div className="flex justify-center items-center flex-col gap-3">
            <div>
              <p className="max-w-xl font-medium text-base">
                É um E-commerce de Venda de Plantas desenvolvido com React e Redux e CSS Modules. Com design clean, essa loja prioriza a experiência do usuário, facilitando a localização e compra dos produtos que o cliente precisa.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-xl font-black">React</span>
              <span className="text-xl font-black">Vanila CSS</span>
            </div>
            <div className="flex gap-10">
              <a
                href="https://github.com/eldinho2/E-commerce"
                target="_blank"
                className="flex items-center gap-1 p-1 border-2 border-[#55c5e9] text-base font-semibold rounded-md hover:border-[#21212b] hover:text-[#21212b] text-[#424156] bg-[#55c5e9] "
              >
                Code
                <FaGithubSquare />
              </a>
              <a
                href="https://e-commerce-eldinho2.vercel.app/"
                target="_blank"
                className="flex items-center gap-1 p-1 border-2 border-[#55c5e9] text-base font-semibold rounded-md hover:border-[#21212b] hover:text-[#21212b] text-[#424156] bg-[#55c5e9]"
              >
                Live Demo
                <BsBoxArrowUpRight />
              </a>
            </div>
          </div>
        </div>
        </FadeRight>
        <FadeRight>
        <div className="flex flex-row-reverse gap-5 p-4 text-white shadow-lg bg-neutral-800 rounded-lg w-[700px] xsm:w-[330px] xsm:flex-col">
          <div className="flex items-center justify-center">
            <a
              href="https://kanban-app-zeta-nine.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/Screenshot_3.png"}
                alt="kanbanapp"
                width={900}
                height={900}
                quality={100}
              />
            </a>
          </div>
          <div className="flex justify-center items-center flex-col gap-3">
            <div>
              <p className="max-w-xl font-medium text-base">
                É um aplicativo de gerenciamento de tarefas inspirado na
                metodologia Kanban, Permite aos usuários criar, atualizar e excluir tarefas,
                bem como movê-las entre as diferentes etapas do processo.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-xl font-black">React</span>
              <span className="text-xl font-black">TailwindCss</span>
            </div>
            <div className="flex gap-10">
              <a
                href="https://github.com/eldinho2/Kanban-App"
                target="_blank"
                className="flex items-center gap-1 p-1 border-2 border-[#55c5e9] text-base font-semibold rounded-md hover:border-[#21212b] hover:text-[#21212b] text-[#424156] bg-[#55c5e9] "
              >
                Code
                <FaGithubSquare />
              </a>
              <a
                href="https://kanban-app-zeta-nine.vercel.app/"
                target="_blank"
                className="flex items-center gap-1 p-1 border-2 border-[#55c5e9] text-base font-semibold rounded-md hover:border-[#21212b] hover:text-[#21212b] text-[#424156] bg-[#55c5e9]"
              >
                Live Demo
                <BsBoxArrowUpRight />
              </a>
            </div>
          </div>
        </div>
        </FadeRight>
        <FadeLeft>
        <div className="flex gap-5 p-4 text-white shadow-lg bg-neutral-800 rounded-lg w-[700px] xsm:w-[330px] xsm:flex-col">
          <div className="overflow-hidden h-[300px]">
            <a
              href="https://travel-app-mu-black.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={
                  "/screencapture-travel-app-mu-black-vercel-app-2023-05-04-13_32_57.png"
                }
                alt="travelapp"
                width={400}
                height={400}
                quality={100}
                className="translate-y-[0%] ease-[cubic-bezier(0.33,0.42,0.15,1.14)] transition-transform duration-[15s] hover:translate-y-[-60%] hover:transition-transform hover:duration-[15s] hover:ease-[cubic-bezier(0.33,0.42,0.15,1.14)]"
              />
            </a>
          </div>
          <div className="flex justify-center items-center flex-col gap-3">
            <div>
              <p className="max-w-xl font-medium text-base">
                O Travel-App é um projeto de aplicativo desenvolvido para ajudar
                os usuários a planejarem suas viagens. O aplicativo fornece
                informações sobre destinos turísticos, dicas de viagem e
                planejamento de itinerários.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-xl font-black">React</span>
              <span className="text-xl font-black">TailwindCss</span>
            </div>
            <div className="flex gap-10">
              <a
                href="https://github.com/eldinho2/Travel-App"
                target="_blank"
                className="flex items-center gap-1 p-1 border-2 border-[#55c5e9] text-base font-semibold rounded-md hover:border-[#21212b] hover:text-[#21212b] text-[#424156] bg-[#55c5e9] "
              >
                Code
                <FaGithubSquare />
              </a>
              <a
                href="https://travel-app-mu-black.vercel.app/"
                target="_blank"
                className="flex items-center gap-1 p-1 border-2 border-[#55c5e9] text-base font-semibold rounded-md hover:border-[#21212b] hover:text-[#21212b] text-[#424156] bg-[#55c5e9]"
              >
                Live Demo
                <BsBoxArrowUpRight />
              </a>
            </div>
          </div>
        </div>
        </FadeLeft>
        <FadeRight>
        <div className="flex gap-5 flex-row-reverse p-4 text-white shadow-lg bg-neutral-800 rounded-lg w-[700px] xsm:w-[330px] xsm:flex-col">
          <div className="flex justify-center items-center">
            <a
              href="https://weather-app-iota-gold.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/Screenshot_2.png"}
                alt="weatherapp"
                width={400}
                height={400}
                quality={100}
              />
            </a>
          </div>
          <div className="flex justify-center items-center flex-col gap-3">
            <div>
              <p className="max-w-xl font-medium text-base">
                Este é um aplicativo de previsão do tempo moderno e fácil de
                usar. Ele permite que você consulte o clima em sua localização
                atual ou em qualquer outra cidade do mundo.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-xl font-black">React</span>
              <span className="text-xl font-black">HTML e CSS</span>
            </div>
            <div className="flex gap-10">
              <a
                href="https://github.com/eldinho2/Weather-App"
                target="_blank"
                className="flex items-center gap-1 p-1 border-2 border-[#55c5e9] text-base font-semibold rounded-md hover:border-[#21212b] hover:text-[#21212b] text-[#424156] bg-[#55c5e9] "
              >
                Code
                <FaGithubSquare />
              </a>
              <a
                href="https://weather-app-iota-gold.vercel.app/"
                target="_blank"
                className="flex items-center gap-1 p-1 border-2 border-[#55c5e9] text-base font-semibold rounded-md hover:border-[#21212b] hover:text-[#21212b] text-[#424156] bg-[#55c5e9]"
              >
                Live Demo
                <BsBoxArrowUpRight />
              </a>
            </div>
          </div>
        </div>
        </FadeRight>
      </div>
    </section>
  );
};

export default Portifolio;
