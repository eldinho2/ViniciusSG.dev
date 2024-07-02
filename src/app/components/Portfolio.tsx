import Image from "next/image";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { FadeUp, FadeLeft, FadeRight } from "./animations";
import PortfolioProjectTemplate from "./PortfolioProjectTemplate";
import {
  GymWebsiteDescription,
  Ecommerce,
  TravelApp,
  planets3D,
  kanBan,
  WeatherAppDescription,
} from "../utils/ProjectDescriptions";

const Portifolio = () => {
  return (
    <section className="mt-28 overflow-hidden">
      <FadeUp>
        <h1
          id="projects"
          className="text-center text-white text-2xl font-semibold underline underline-offset-4 decoration-[#55c5e9] mb-10"
        >
          Meu portfólio
        </h1>
      </FadeUp>
      <div className="flex h-full gap-11 flex-wrap justify-center items-center">
        <PortfolioProjectTemplate
          imagem={GymWebsiteDescription.imagem}
          description={GymWebsiteDescription.description}
          webLink={GymWebsiteDescription.webLink}
          githubLink={GymWebsiteDescription.githubLink}
        />

        <PortfolioProjectTemplate
          imagem={Ecommerce.imagem}
          description={Ecommerce.description}
          webLink={Ecommerce.webLink}
          githubLink={Ecommerce.githubLink}
        />

        <PortfolioProjectTemplate
          imagem={TravelApp.imagem}
          description={TravelApp.description}
          webLink={TravelApp.webLink}
          githubLink={TravelApp.githubLink}
        />

        <PortfolioProjectTemplate
          imagem={planets3D.imagem}
          description={planets3D.description}
          webLink={planets3D.webLink}
          githubLink={planets3D.githubLink}
          sm={true}
        />

        <PortfolioProjectTemplate
          imagem={kanBan.imagem}
          description={kanBan.description}
          webLink={kanBan.webLink}
          githubLink={kanBan.githubLink}
          sm={true}
        />

        <PortfolioProjectTemplate
          imagem={WeatherAppDescription.imagem}
          description={WeatherAppDescription.description}
          webLink={WeatherAppDescription.webLink}
          githubLink={WeatherAppDescription.githubLink}
          sm={true}
        />
      </div>
    </section>
  );
};

export default Portifolio;
