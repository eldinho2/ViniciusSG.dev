import Image from "next/image";

const Footer = () => {
    return (
      <footer className="flex items-center mt-24 bg-neutral-800 text-lg text-zinc-200">
      <div className="flex flex-1 mx-14 mt-4 font-semibold cursor-pointer hover:underline underline-offset-4 hover:text-white hover:decoration-[#55c5e9]">
        <span className="text-[#55c5e9]">
          G
        </span>
        <h1 className="w-36">
          Vinicius
        </h1>
      </div>
      <nav>
        <ul className="flex items-center gap-7 mx-14 mt-4 font-medium">
          <li className="cursor-pointer hover:underline underline-offset-4 hover:text-white hover:decoration-[#55c5e9]">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <Image src="/github-svgrepo-com.svg" alt="" width={40} height={40} />
            </a>
          </li>
          <li className="cursor-pointer hover:underline underline-offset-4 hover:text-white hover:decoration-[#55c5e9]">
          <a href="http://" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedin-svgrepo-com.svg" alt="" width={45} height={45} />
          </a>
          </li>
          <a
          className=" bg-[#55c5e9] rounded-md p-1 hover:text-[#55c5e9] hover:bg-[#204b5a] border border-[#55c5e9] hover:border-[#55c5e9]"
            href="https://drive.google.com/file/d/1zgNqMidDhYOXh6lLTvkqVv2Z2OJghAj-/view?usp=share_link"
            target="_blank"
          >
            Download CV
          </a>
        </ul>
      </nav>
    </footer>
    )   
}

export default Footer;