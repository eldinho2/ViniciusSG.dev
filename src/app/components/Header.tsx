'use client';

import { useEffect, useState } from "react";
import { FadeRight } from "./animations";
import  HamburguerMenu from "./HamburguerMenu";

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 20) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <header className={` ${isScroll ? 'bg-gradient-to-r from-neutral-800' : 'bg-neutral-800'} fixed w-full z-40 flex justify-between h-20 items-center text-lg text-zinc-200 xsm:justify-around`}>
      <div className="flex flex-1 m-14 font-semibold cursor-pointer hover:underline underline-offset-4 hover:text-white hover:decoration-[#55c5e9] xsm:underline decoration-[#55c5e9] xsm:ml-5 xsm:m-0">
        <FadeRight>
        <span className="text-[#55c5e9]">
          G
        </span>
        </FadeRight>
        <a href="#">
        <h1 className="w-36 xsm:w-0">
          Vinicius
        </h1>
        </a>
      </div>
      <nav className="xsm:hidden">
        <ul className="flex items-center gap-7 m-14 font-medium">
          <a href="#">
          <li className="cursor-pointer hover:underline underline-offset-4 hover:text-white hover:decoration-[#55c5e9]">
            Home
          </li>
          </a>
          <a href="#about">
          <li className="cursor-pointer hover:underline underline-offset-4 hover:text-white hover:decoration-[#55c5e9]">
            Sobre
          </li>
          </a>
          <a href="#projects">
          <li className="cursor-pointer hover:underline underline-offset-4 hover:text-white hover:decoration-[#55c5e9]">
            Projetos
          </li>
          </a>
          <a href="#contato">
          <li className="cursor-pointer hover:underline underline-offset-4 hover:text-white hover:decoration-[#55c5e9]">
            Contato
          </li>
          </a>
          <a
          className=" bg-[#55c5e9] rounded-md p-1 hover:text-[#55c5e9] hover:bg-[#204b5a] border border-[#55c5e9] hover:border-[#55c5e9]"
            href="https://drive.google.com/file/d/1zgNqMidDhYOXh6lLTvkqVv2Z2OJghAj-/view?usp=share_link"
            target="_blank"
          >
            Download CV
          </a>
        </ul>
      </nav>
      <HamburguerMenu />
    </header>
  );
};

export default Header;
