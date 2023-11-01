import React from "react";

function tick() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

const Pahe = () => {
  return (
    <section className="w-full flex flex-col h-fit">
      <h1 className="text-4xl mt-2 w-fit mx-auto mb-1">Nosso time:</h1>
      <div className="w-3/4 grid grid-cols-1  md:grid-cols-2 mx-auto">
        <div className="w-full bg-gradient-to-l from-slate-200 via-slate-400  to-slate-300 text-right pr-2">
          <div className="w-full">
            <h2 className="font-semibold text-lg">Thomas</h2>
            <p>Desenvolverdor React</p>
            <p>NextJS, front/backend.</p>
          </div>

          <div className="w-full mr-2">
            <h2 className="font-semibold text-lg">Cristine</h2>
            <p>Psicóloga UX</p>
            <p>Personas, Jornadas e Pesquisa Qualitativa</p>
          </div>
        </div>

        <div className="w-full bg-gradient-to-r from-slate-200 via-slate-400 to-slate-300">
          <div className="w-full ml-2">
            <h2 className="font-semibold text-lg">Pedro</h2>
            <p>Segurança e LGPD</p>
            <p>Especialista em SEO</p>
          </div>
          <div className="w-full ml-2">
            <h2 className="font-semibold text-lg">Marina</h2>
            <p>Designer UI</p>
            <p>Tipologia e psicologia das cores.</p>
          </div>
        </div>
      </div>
      <h1 className="text-4xl mt-2 w-fit mx-auto mb-1">
        Nosso <span className="for-font-extrabold">foco</span>:
      </h1>
      <div className="w-[85%] grid grid-cols-1 md:grid-cols-3 mx-auto text-center">
        <div className="">
          <h2 className="text-2xl font-bold">Velocidade</h2>
          <p className="text-md">(redes móveis)</p>
          <p className="font-normal text-left w-2/3 mx-auto">
            Sabemos que a maioria dos acessos partem de dispositivos móveis. Por
            isso nossa enfatizamos performance para uma melhor experiência.
          </p>
          <div className="mt-3 w-2/3 mx-auto text-xs">
            <div className="flex items-center justify-start">
              {tick()}
              <p>Maior velocidade no download</p>
            </div>
            <div className="flex items-center justify-start">
              {tick()}
              <p>Agilizando a resposta do backend</p>
            </div>
            <div className="flex items-center justify-start">
              {tick()}
              <p>Aumentando as conversões</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold">SEO</h2>
          <p className="text-md">(otimizando buscadores)</p>
          <p className="font-normal text-left w-2/3 mx-auto">
            Uma boa SEO é essencial pois significa uma maior visibilidade para a
            sua marca através do crescimento orgânico dos acessos ao seu
            conteúdo - melhorando sua presença digital.
          </p>
          <div className="mt-3 w-2/3 mx-auto text-xs">
            <div className="flex items-center justify-start">
              {tick()}
              <p>Aumentando o tráfego orgânico</p>
            </div>
            <div className="flex items-center justify-start">
              {tick()}
              <p>Melhorando a experiência</p>
            </div>
            <div className="flex items-center justify-start">
              {tick()}
              <p>Crescendo a credibilidade</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Estética</h2>
          <p className="text-md">(coerência visual)</p>
          <p className="font-normal text-left w-2/3 mx-auto">
            Nossa abordagem busca a imersão do visitante no contexto da sua
            marca, encorajando uma conexão mais profunda com seu público.
          </p>
          <div className="mt-3 w-2/3 mx-auto text-xs">
            <div className="flex items-center justify-start">
              {tick()}
              <p>Maior fidelidade dos clientes</p>
            </div>
            <div className="flex items-center justify-start">
              {tick()}
              <p>Aumentando as conexões</p>
            </div>
            <div className="flex items-center justify-start">
              {tick()}
              <p>Incorajando a imersão na marca</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pahe;
