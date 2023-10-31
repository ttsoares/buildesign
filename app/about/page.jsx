import React from "react";

const Pahe = () => {
  return (
    <section className="w-full h-fit md:h-screen ">
      <h1 className="text-4xl mt-2 w-fit mx-auto mb-4">Nosso time:</h1>
      <div className="w-3/4 grid grid-cols-2 mx-auto">
        <div className="w-full border text-right pr-2">
          <div className="w-full">
            <h2 className="font-semibold">Thomas</h2>
            <p>Desenvolverdor React</p>
            <p>NextJS, front/backend.</p>
          </div>

          <div className="w-full mr-2">
            <h2 className="font-semibold">Cristine</h2>
            <p>Psicóloga UX</p>
            <p>Personas, Jornadas e Pesquisa Qualitativa</p>
          </div>
        </div>

        <div className="w-full border">
          <div className="w-full ml-2">
            <h2 className="font-semibold">Pedro</h2>
            <p>Segurança e LGPD</p>
            <p>Especialista em SEO</p>
          </div>
          <div className="w-full ml-2">
            <h2 className="font-semibold">Marina</h2>
            <p>Designer UI</p>
            <p>Tipologia e psicologia das cores.</p>
          </div>
        </div>
      </div>
      <h1 className="text-4xl mt-4 w-fit mx-auto mb-2">
        Nosso <span className="for-font-extrabold">foco</span>:
      </h1>
      <div className="w-3/4 grid grid-cols-3 mx-auto text-center">
        <div>
          <h2 className="text-2xl font-bold">Velocidade</h2>
          <p className="text-xl">(redes móveis)</p>
          <p className="font-normal text-left w-2/3 mt-4 mx-auto">
            Sabemos que a maioria dos acessos partem de dispositivos móveis. Por
            isso nossa enfatizamos performance para uma melhor experiência.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">SEO</h2>
          <p className="text-xl">(otimizando buscadores)</p>
          <p className="font-normal text-left w-2/3 mt-4 mx-auto">
            Uma boa SEO é essencial pois significa uma maior visibilidade para a
            sua marca através do crescimento orgânico dos acessos ao seu
            conteúdo - melhorando sua presença digital.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Estética</h2>
          <p className="text-xl">(coerência visual)</p>
          <p className="font-normal text-left w-2/3 mt-4 mx-auto">
            Nossa abordagem busca a imersão do visitante no contexto da sua
            marca, encorajando uma conexão mais profunda com seu público.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pahe;
