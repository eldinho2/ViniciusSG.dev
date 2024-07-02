const Contact = () => {
  return (
    <section id='contato' className="mt-14">
      <div id='contato' className="flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col justify-center items-center  gap-3">
          <h1 className="text-[#55c5e9] text-xl font-semibold">
            Entre em contato comigo
          </h1>
          <p className="max-w-xl text-center text-white text-xl font-medium xsm:text-sm xsm:max-w-xs">
            Caso você tenha identificado potencial em mim ou deseje conversar
            comigo, por favor, sinta-se à vontade para me enviar uma mensagem.
            Estou disponível e aberto para conversar.
          </p>
        </div>
        <div className="flex gap-3 xsm:flex-col text-xl">
          <button className="bg-[#55c5e9] p-4 rounded-lg shadow-lg">
            <a href="mailto:vinisaio10@gmail.com">vinisaio10@gmail.com</a>
          </button>
          <button className="bg-[#55c5e9] p-4 rounded-lg shadow-lg">
            <a href="https://www.linkedin.com/in/vinicius-saiao-goncalves/" target="_blank">
              Linkedin
            </a>
          </button>
          <button className="bg-[#55c5e9] p-4 rounded-lg shadow-lg">
            <a href="https://wa.me/21992176099?text=Olá">(21) 99217-6099</a>
          </button>
          <button className="bg-[#55c5e9] p-4 rounded-lg shadow-lg">
            <a href="https://drive.google.com/file/d/1Fv7odJW_RcssQ32cfDcry7PXkhqep-Is/view?usp=sharing" target="_blanck">Download CV</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

