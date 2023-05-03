import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#212121] h-screen flex flex-col justify-center items-center">
      <div className="flex">
        <div>
        <h1 className="flex decoration-[#55c5e9] underline underline-offset-4 text-zinc-200 font-extrabold text-3xl">
            Vinicius Gonçalves
            <Image
              src={"/waving.1bae5fcfb51082b5c2b4.png"}
              alt="waving hand"
              width={40}
              height={40}
              className="ml-2"
            />,
          </h1>
          <h1 className="text-zinc-200 font-extrabold text-5xl">
            Front End Developer
          </h1>
          <p className="text-zinc-400 text-lg font-medium my-9">
            Desenvolvedor Full Stack, apaixonado por tecnologia e programação.
          </p>
          <span className="flex justify-start mb-6">
            <a
              href="https://www.linkedin.com/in/vinicius-saiao-goncalves/"
              target="_blanck"
              className="text-4xl text-[#514e4e] hover:text-[#55c5e9]"
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com/eldinho2"
             target="_blanck"
             className="text-4xl text-[#514e4e] hover:text-[#55c5e9]"
             >
              
              <FaGithubSquare />
            </a>
          </span>
          <div className="flex items-center">
          <h2 className="text-zinc-100 font-medium text-base">Tech Stack |</h2>
          <ul className="flex ml-3 gap-5">
            <li>
              <a href="https://react.dev/">
                <Image
                  src={"/reactLogo.svg"}
                  alt="react logo"
                  width={40}
                  height={40}
                />
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
                target="_blanck"
              >
                <Image
                  src={"/htmlLogo.svg"}
                  alt="html logo"
                  width={40}
                  height={40}
                />
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/pt-BR/docs/Web/css"
                target="_blanck"
              >
                <Image
                  src={"/cssLogo.svg"}
                  alt="css logo"
                  width={40}
                  height={40}
                />
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript"
                target="_blanck"
              >
                <Image
                  src={"/jsLogo.svg"}
                  alt="js logo"
                  width={40}
                  height={40}
                />
              </a>
            </li>
            <li>
              <a href="https://www.typescriptlang.org/" target="_blanck">
                <Image
                  src={"/typescriptLogo.svg"}
                  alt="ts logo"
                  width={40}
                  height={40}
                />
              </a>
            </li>
            <li>
              <a href="https://nodejs.org/en" target="_blanck">
                <Image
                  src={"/nodejsLogo.svg"}
                  alt="nodejs logo"
                  width={40}
                  height={40}
                />
              </a>
            </li>
            <li className="flex items-center">
              <a href="https://tailwindcss.com/" target="_blanck">
                <Image
                  src={"/tailwindLogo.svg"}
                  alt="tailwind logo"
                  width={40}
                  height={40}
                />
              </a>
            </li>
          </ul>
        </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={"/illustration.svg"}
            alt="illustration"
            width={500}
            height={500}
            priority={true}
          />
          </div>
      </div>
    </main>
  );
}
