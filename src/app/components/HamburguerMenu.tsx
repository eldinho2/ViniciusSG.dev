"use client";

import React, { useState } from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export const HamburguerMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const HandleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="hidden xsm:flex">
      <div onClick={HandleOpenMenu} className="">
        <HiOutlineMenu className="fill-black w-6 h-6 hover:cursor-pointer" />
      </div>
      {openMenu && (
        <div className="absolute mt-[52px] left-0 w-full h-[300px] bg-white">
          <nav className="flex text-center justify-center">
            <ul className="flex flex-col text-black gap-7 m-2 font-medium">
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
        </div>
      )}
    </div>
  );
};

export default HamburguerMenu;
