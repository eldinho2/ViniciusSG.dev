import Image from "next/image";

const Portifolio = () => {
  return (
    <section className="bg-[#212121]">
      <h1 className="text-white">Meu portfólioaa</h1>
      <div>
        <div className="flex justify-center gap-5 text-white">
          <div className="overflow-hidden h-[300px]">
            <Image
              src={"/gymwebsite.png"}
              alt="gymwebsite"
              width={400}
              height={400}
              quality={100}
              className="translate-y-[0%] ease-[cubic-bezier(0.33,0.42,0.15,1.14)] transition-transform duration-[15s] hover:translate-y-[-73%] hover:transition-transform hover:duration-[15s] hover:ease-[cubic-bezier(0.33,0.42,0.15,1.14)]"            />
          </div>
          <p className="max-w-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            sunt, aliquam laudantium error assumenda, eius repellat ab
            repudiandae minima ad voluptatibus, recusandae placeat! Odio debitis
            dolorum a nulla voluptate sed?
          </p>
        </div>
        <div className="flex justify-center gap-5 text-white">
          <p className="max-w-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            sunt, aliquam laudantium error assumenda, eius repellat ab
            repudiandae minima ad voluptatibus, recusandae placeat! Odio debitis
            dolorum a nulla voluptate sed?
          </p>
          <div className="overflow-hidden h-[300px]">
            <Image
              src={"/gymwebsite.png"}
              alt="gymwebsite"
              width={400}
              height={400}
              quality={100}
              className="translate-y-[0%] ease-[cubic-bezier(0.33,0.42,0.15,1.14)] transition-transform duration-[15s] hover:translate-y-[-73%] hover:transition-transform hover:duration-[15s] hover:ease-[cubic-bezier(0.33,0.42,0.15,1.14)]"            />
          </div>
        </div>
        <div className="flex justify-center gap-5 text-white">
          <div className="overflow-hidden h-[300px]">
            <Image
              src={"/gymwebsite.png"}
              alt="gymwebsite"
              width={400}
              height={400}
              quality={100}
              className="translate-y-[0%] ease-[cubic-bezier(0.33,0.42,0.15,1.14)] transition-transform duration-[15s] hover:translate-y-[-73%] hover:transition-transform hover:duration-[15s] hover:ease-[cubic-bezier(0.33,0.42,0.15,1.14)]"            />
          </div>
          <p className="max-w-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            sunt, aliquam laudantium error assumenda, eius repellat ab
            repudiandae minima ad voluptatibus, recusandae placeat! Odio debitis
            dolorum a nulla voluptate s
          </p>
        </div>
        <div className="flex justify-center gap-5 text-white">
          <p className="max-w-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            sunt, aliquam laudantium error assumenda, eius repellat ab
            repudiandae minima ad voluptatibus, recusandae placeat! Odio debitis
            dolorum a nulla voluptate sed?
          </p>
          <div className="overflow-hidden h-[300px]">
            <Image
              src={"/gymwebsite.png"}
              alt="gymwebsite"
              width={400}
              height={400}
              quality={100}
              className="translate-y-[0%] ease-[cubic-bezier(0.33,0.42,0.15,1.14)] transition-transform duration-[15s] hover:translate-y-[-73%] hover:transition-transform hover:duration-[15s] hover:ease-[cubic-bezier(0.33,0.42,0.15,1.14)]"            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portifolio;
