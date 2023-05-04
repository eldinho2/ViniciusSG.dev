import Image from "next/image";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

const Portifolio = () => {
  return (
    <section className="bg-[#212121]">
      <h1 className="text-center text-white">Meu portfólio</h1>
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="flex gap-5 p-4 text-white bg-neutral-800 rounded-lg w-[700px]">
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
                sunt, aliquam laudantium error assumenda, eius repellat ab
                repudiandae minima ad voluptatibus, recusandae placeat! Odio
                debitis dolorum a nulla voluptate sed?
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-xl font-black">React</span>
              <span className="text-xl font-black">TailwindCss</span>
            </div>
            <div className="flex gap-10">
              <a href="" className="flex items-center gap-1 p-1 border-2 border-[#55c5e9] text-base font-semibold rounded-md hover:border-[#21212b] hover:text-[#21212b] text-[#424156] bg-[#55c5e9] ">
                Code
                <FaGithubSquare />
              </a>
              <a href="" className="flex items-center gap-1 p-1 border-2 border-[#55c5e9] text-base font-semibold rounded-md hover:border-[#21212b] hover:text-[#21212b] text-[#424156] bg-[#55c5e9]">
                Live Demo
                <BsBoxArrowUpRight />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse gap-5 p-4 text-white bg-neutral-800 rounded-lg w-[700px]">
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
                sunt, aliquam laudantium error assumenda, eius repellat ab
                repudiandae minima ad voluptatibus, recusandae placeat! Odio
                debitis dolorum a nulla voluptate sed?
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-xl font-black">React</span>
              <span className="text-xl font-black">TailwindCss</span>
            </div>
            <div className="flex gap-10">
              <a href="" className="flex items-center gap-1 p-1 border-2 border-[#55c5e9] text-base font-semibold rounded-md hover:border-[#21212b] hover:text-[#21212b] text-[#424156] bg-[#55c5e9] ">
                Code
                <FaGithubSquare />
              </a>
              <a href="" className="flex items-center gap-1 p-1 border-2 border-[#55c5e9] text-base font-semibold rounded-md hover:border-[#21212b] hover:text-[#21212b] text-[#424156] bg-[#55c5e9]">
                Live Demo
                <BsBoxArrowUpRight />
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-5 p-4 text-white bg-neutral-800 rounded-lg w-[700px]">
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
                sunt, aliquam laudantium error assumenda, eius repellat ab
                repudiandae minima ad voluptatibus, recusandae placeat! Odio
                debitis dolorum a nulla voluptate sed?
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-xl font-black">React</span>
              <span className="text-xl font-black">TailwindCss</span>
            </div>
            <div className="flex gap-10">
              <a href="" className="flex items-center gap-1 p-1 border-2 border-[#55c5e9] text-base font-semibold rounded-md hover:border-[#21212b] hover:text-[#21212b] text-[#424156] bg-[#55c5e9] ">
                Code
                <FaGithubSquare />
              </a>
              <a href="" className="flex items-center gap-1 p-1 border-2 border-[#55c5e9] text-base font-semibold rounded-md hover:border-[#21212b] hover:text-[#21212b] text-[#424156] bg-[#55c5e9]">
                Live Demo
                <BsBoxArrowUpRight />
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-5 flex-row-reverse p-4 text-white bg-neutral-800 rounded-lg w-[700px]">
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
                sunt, aliquam laudantium error assumenda, eius repellat ab
                repudiandae minima ad voluptatibus, recusandae placeat! Odio
                debitis dolorum a nulla voluptate sed?
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-xl font-black">React</span>
              <span className="text-xl font-black">TailwindCss</span>
            </div>
            <div className="flex gap-10">
              <a href="" className="flex items-center gap-1 p-1 border-2 border-[#55c5e9] text-base font-semibold rounded-md hover:border-[#21212b] hover:text-[#21212b] text-[#424156] bg-[#55c5e9] ">
                Code
                <FaGithubSquare />
              </a>
              <a href="" className="flex items-center gap-1 p-1 border-2 border-[#55c5e9] text-base font-semibold rounded-md hover:border-[#21212b] hover:text-[#21212b] text-[#424156] bg-[#55c5e9]">
                Live Demo
                <BsBoxArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portifolio;
