import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center mt-24 h-16 bg-neutral-800 text-lg text-zinc-200 xsm:justify-center xsm:mt-14">
      <div className="flex items-center mx-8 font-semibold cursor-pointer hover:underline underline-offset-4 hover:text-white hover:decoration-[#55c5e9] xsm:hidden">
        <span className="text-[#55c5e9]">G</span>
        <a href="http://github.com/eldinho2" target="_blank">
          <h1 className="w-36">Vinicius</h1>
        </a>
      </div>
      <div className="flex">
        <p className="flex gap-2">
          Feito com{" "}
          <Image
            alt="react-icon"
            src={"/react-svgrepo-com.svg"}
            width={30}
            height={30}
            className="animate-spin-slow"
          />{" "}
          e <span className="text-[#55c5e9]">❤</span> por{" "}
          <a
            href="http://github.com/eldinho2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vinicius
          </a>
        </p>
      </div>
      <nav className="mx-8 xsm:hidden">
        <ul className="flex items-center gap-2 font-medium">
          <li className="cursor-pointer hover:underline underline-offset-4 hover:text-white hover:decoration-[#55c5e9]">
            <a
              href="http://github.com/eldinho2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/github-svgrepo-com.svg"
                alt=""
                width={40}
                height={40}
              />
            </a>
          </li>
          <li className="cursor-pointer hover:underline underline-offset-4 hover:text-white hover:decoration-[#55c5e9]">
            <a
              href="https://www.linkedin.com/in/vinicius-saiao-goncalves/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin-svgrepo-com.svg"
                alt=""
                width={45}
                height={45}
              />
            </a>
          </li>
          <a
            className=" bg-[#55c5e9] rounded-md p-1 hover:text-[#55c5e9] hover:bg-[#204b5a] border border-[#55c5e9] hover:border-[#55c5e9]"
            href="https://drive.google.com/file/d/1Fv7odJW_RcssQ32cfDcry7PXkhqep-Is/view?usp=sharing"
            target="_blank"
          >
            Download CV
          </a>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;