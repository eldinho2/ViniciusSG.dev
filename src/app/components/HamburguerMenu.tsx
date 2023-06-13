"use client";

import React, { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export const HamburguerMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const HandleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

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
    <div className="hidden xsm:flex mx-5">
      <div
        onClick={HandleOpenMenu}
        className={`${openMenu ? "hidden" : "block"}`}
      >
        <HiOutlineMenu className="fill-black w-6 h-6 hover:cursor-pointer" />
      </div>
      <div
        onClick={HandleOpenMenu}
        className={`${openMenu ? "block" : "hidden"}`}
      >
        <HiOutlineX className="fill-black w-6 h-6 hover:cursor-pointer" />
      </div>
      {openMenu && (
        <div>
          <div
            onClick={HandleOpenMenu}
            className="absolute left-0 w-full h-screen"
          ></div>
          <div
            className={`absolute left-0 w-full mt-[52px] h-[300px] ${
              isScroll ? "bg-gradient-to-r from-neutral-800" : "bg-neutral-800"
            }`}
          >
            <nav className="flex text-center justify-center">
              <ul className="flex flex-col text-white gap-7 m-2 font-medium">
                <a onClick={HandleOpenMenu} href="#">
                  <li className="cursor-pointer hover:underline underline-offset-4 hover:text-white hover:decoration-[#55c5e9]">
                    Home
                  </li>
                </a>
                <a onClick={HandleOpenMenu} href="#about">
                  <li className="cursor-pointer hover:underline underline-offset-4 hover:text-white hover:decoration-[#55c5e9]">
                    Sobre
                  </li>
                </a>
                <a onClick={HandleOpenMenu} href="#projects">
                  <li className="cursor-pointer hover:underline underline-offset-4 hover:text-white hover:decoration-[#55c5e9]">
                    Projetos
                  </li>
                </a>
                <a onClick={HandleOpenMenu} href="#contato">
                  <li className="cursor-pointer hover:underline underline-offset-4 hover:text-white hover:decoration-[#55c5e9]">
                    Contato
                  </li>
                </a>
                <a
                  onClick={HandleOpenMenu}
                  className=" bg-[#55c5e9] rounded-md p-1 hover:text-[#55c5e9] hover:bg-[#204b5a] border border-[#55c5e9] hover:border-[#55c5e9]"
                  href="https://drive.google.com/file/d/1Fv7odJW_RcssQ32cfDcry7PXkhqep-Is/view?usp=sharing"
                  target="_blank"
                >
                  Download CV
                </a>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburguerMenu;
