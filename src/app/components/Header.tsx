import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  return (
    <header className="flex h-20 items-center bg-neutral-800 text-lg text-zinc-200">
      <div className="flex-1 m-14">
        <h1 className="w-36 font-semibold cursor-pointer hover:underline underline-offset-4 hover:text-white hover:decoration-[#55c5e9]">
          Vinicius Saião
        </h1>
      </div>
      <nav>
        <ul className="flex items-center gap-7 m-14 font-medium">
            <li>
                <DarkModeToggle />
            </li>
          <li className="cursor-pointer hover:underline underline-offset-4 hover:text-white hover:decoration-[#55c5e9]">
            Home
          </li>
          <li className="cursor-pointer hover:underline underline-offset-4 hover:text-white hover:decoration-[#55c5e9]">
            Sobre
          </li>
          <li className="cursor-pointer hover:underline underline-offset-4 hover:text-white hover:decoration-[#55c5e9]">
            Projetos
          </li>
          <li className="cursor-pointer hover:underline underline-offset-4 hover:text-white hover:decoration-[#55c5e9]">
            Contato
          </li>
          <a
          className=" bg-[#55c5e9] rounded-md p-3"
            href="https://drive.google.com/file/d/1zgNqMidDhYOXh6lLTvkqVv2Z2OJghAj-/view?usp=share_link"
            target="_blank"
          >
            Download CV
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
