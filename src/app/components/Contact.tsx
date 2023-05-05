import { FadeUp } from "./animations";


const Contact = () => {
  return (
    <section className="mt-28">
      <FadeUp>
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col justify-center items-center  gap-3">
          <h1 className="text-[#55c5e9] text-xl font-semibold">
            Entre em contato comigo
          </h1>
          <p className="max-w-xl text-center text-white text-base font-medium">
            Caso você tenha identificado potencial em mim ou deseje conversar
            comigo, por favor, sinta-se à vontade para me enviar uma mensagem.
            Estou disponível e aberto para conversar.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="bg-[#55c5e9] p-4 rounded-lg shadow-lg">
            <a href="mailto:vinisaio10@gmail.com">vinisaio10@gmail.com</a>
          </button>
          <button className="bg-[#55c5e9] p-4 rounded-lg shadow-lg">
            <a href="https://www.linkedin.com/in/vinicius-saiao-goncalves/" target="_blank">
              Linkedin
            </a>
          </button>
          <button className="bg-[#55c5e9] p-4 rounded-lg shadow-lg">
            <a href="tel:+5521992176099">(21) 99217-6099</a>
          </button>
        </div>
      </div>
      </FadeUp>
    </section>
  );
};

export default Contact;

