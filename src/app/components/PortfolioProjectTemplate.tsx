import Image from "next/image";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import {FadeUp, FadeLeft, FadeRight} from "./animations";

type PortfolioProjectTemplateProps = {
  imagem: string;
  description: string;
  webLink: string;
  githubLink: string;
  sm?: boolean;
}

const PortfolioProjectTemplate = ({ imagem, description, webLink, githubLink, sm }: PortfolioProjectTemplateProps) => {
  return (
    <div className="flex items-center gap-5 flex-row-reverse p-4 text-white shadow-lg bg-neutral-800 rounded-lg w-[700px] xsm:w-[330px] xsm:flex-col">
      <div className={`overflow-hidden h-[300px] ${sm && "flex items-center"} `}>
        <a
          href={webLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={imagem}
            alt="project image"
            width={400}
            height={400}
            quality={100}
            className="rounded-lg"
          />
        </a>
      </div>
      <div className="flex justify-center items-center flex-col gap-3">
        <div>
          <p className="max-w-xl font-medium text-xl">
            {description}
          </p>
        </div>
        <div className="flex gap-4">
          <span className="text-xl font-black">React</span>
          <span className="text-xl font-black">HTML e CSS</span>
        </div>
        <div className="flex gap-10">
          <a
            href={githubLink}
            target="_blank"
            className="flex items-center gap-1 p-1 border-2 border-[#55c5e9] text-base font-semibold rounded-md hover:border-[#21212b] hover:text-[#21212b] text-[#424156] bg-[#55c5e9] "
          >
            Code
            <FaGithubSquare />
          </a>
          <a
            href={webLink}
            target="_blank"
            className="flex items-center gap-1 p-1 border-2 border-[#55c5e9] text-base font-semibold rounded-md hover:border-[#21212b] hover:text-[#21212b] text-[#424156] bg-[#55c5e9]"
          >
            Live Demo
            <BsBoxArrowUpRight />
          </a>
        </div>
      </div>
    </div>
  )
}

export default PortfolioProjectTemplate;