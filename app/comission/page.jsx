"use client";

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

import Link from "next/link";

import ContactForm from "@/components/Form";

const LEGENDA = [
  ["Tem desing", "Do zero", "Reconstruir"],
  ["Landing", "Pessoal", "Empresa"],
  ["Com CMS", "Sem CMS", "Não sabe"],
  ["Menos 3 semanas", "Entre 3 e 6 semanas", "Mais de 6 semanas"],
  ["Menos de 1000", "Entre 1000 e 3000", "Mais de 3000"],
];

const Page = () => {
  useEffect(() => {
    emailjs.init("CFMMXCFGd0f_hv9k2");
  }, []);

  const [partida, setPartida] = useState(3);
  const [tipoPagina, setTipoPagina] = useState(3);
  const [comCMS, setComCMS] = useState(3);
  const [periodo, setPeriodo] = useState(3);
  const [orcamento, setOrcamento] = useState(3);
  const [loading, setLoading] = useState(false);

  async function submit(resp) {
    if (
      partida === 3 ||
      tipoPagina === 3 ||
      comCMS === 3 ||
      periodo === 3 ||
      orcamento === 3
    ) {
      alert("Algum campo está faltando");
      return;
    }

    const serviceId = "service_dp8kh53";
    const templateId = "template_yjte46j";

    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        nome: resp.firstName + " from " + resp.company,
        email: resp.email,
        fone: resp.phoneNumber,
        inicio: LEGENDA[0][partida],
        tipo: LEGENDA[1][tipoPagina],
        cms: LEGENDA[2][comCMS],
        cronograma: LEGENDA[3][periodo],
        orcamento: LEGENDA[4][orcamento],
        mensagem: resp.message,
      });
      setLoading(false);
      alert("Sua encomenda foi enviada com sucesso !");
    } catch (error) {
      console.log(error);
    }
  }
  // 0 - tem desing, 1 - do zero, 2 - refazer
  function pontoPartida(clicado) {
    setPartida(clicado);
  }
  // 0 - Landing, 1 - Pessoal, 2 - Empresa
  function tipoDePagina(clicado) {
    setTipoPagina(clicado);
  }

  // 0 - Sim, 1 - Não, 2 - Não sabe
  function querCMS(clicado) {
    setComCMS(clicado);
  }

  // 0 - Menos 3 semana, 1 - 3-6 semanas, 2 - Mais de 6 semanas
  function cronograma(clicado) {
    setPeriodo(clicado);
  }

  // 0 - Menos de 1000, 1 - Entre 1000 e 3000, 2 - Mais de 3000
  function tamanhoOcamento(clicado) {
    setOrcamento(clicado);
  }

  if (loading) {
    return (
      <div className="w-full h-screen ">
        <div className="flex w-full h-full justify-center items-center">
          <h1 className=" text-5xl font-bold animate-bounce">Enviando...</h1>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full h-fit">
      <div className="flex flex-col items-center justify-center mb-5">
        <div className="flex flex-col items-center justify-center mb-5">
          <h1 className="font-bold text-lg p-2">Ponto de partida</h1>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 justify-between items-center">
            <button
              className={`px-4 py-1 mx-5 border-2 border-blue-400 transition-all duration-300 hover:scale-125 ${
                partida === 0 && "bg-slate-400"
              }`}
              onClick={() => pontoPartida(0)}
            >
              Tenho o design
            </button>
            <button
              className={`px-4 py-1 mx-5 border-2 border-blue-400 transition-all duration-300 hover:scale-125 ${
                partida === 1 && "bg-slate-400"
              }`}
              onClick={() => pontoPartida(1)}
            >
              Partir do zero
            </button>
            <button
              className={`px-4 py-1 mx-5 border-2 border-blue-400 transition-all duration-300 hover:scale-125 ${
                partida === 2 && "bg-slate-400"
              }`}
              onClick={() => pontoPartida(2)}
            >
              Reformar
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mb-5">
          <h1 className="font-bold text-lg p-2">Tipo de página</h1>
          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between items-center">
            <button
              className={`px-4 py-1 mx-5 border-2 border-blue-400 transition-all duration-300 hover:scale-125 ${
                tipoPagina === 0 && "bg-slate-400"
              }`}
              onClick={() => tipoDePagina(0)}
            >
              Landing Page
            </button>
            <button
              className={`px-4 py-1 mx-5 border-2 border-blue-400 transition-all duration-300 hover:scale-125 ${
                tipoPagina === 1 && "bg-slate-400"
              }`}
              onClick={() => tipoDePagina(1)}
            >
              Pessoal/Porfólio
            </button>
            <button
              className={`px-4 py-1 mx-5 border-2 border-blue-400 transition-all duration-300 hover:scale-125 ${
                tipoPagina === 2 && "bg-slate-400"
              }`}
              onClick={() => tipoDePagina(2)}
            >
              Institucional
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mb-5">
          <h1 className="font-bold text-lg p-2">Precisa CMS ?</h1>
          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between items-center">
            <button
              className={`px-4 py-1 mx-5 border-2 border-blue-400 transition-all duration-300 hover:scale-125 ${
                comCMS === 0 && "bg-slate-400"
              }`}
              onClick={() => querCMS(0)}
            >
              Sim
            </button>
            <button
              className={`px-4 py-1 mx-5 border-2 border-blue-400 transition-all duration-300 hover:scale-125 ${
                comCMS === 1 && "bg-slate-400"
              }`}
              onClick={() => querCMS(1)}
            >
              Não
            </button>
            <button
              className={`px-4 py-1 mx-5 border-2 border-blue-400 transition-all duration-300 hover:scale-125 ${
                comCMS === 2 && "bg-slate-400"
              }`}
              onClick={() => querCMS(2)}
            >
              Não sei
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mb-5">
          <h1 className="font-bold text-lg p-2">Cronograma</h1>
          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between items-center">
            <button
              className={`px-4 py-1 mx-5 border-2 border-blue-400 transition-all duration-300 hover:scale-125 ${
                periodo === 0 && "bg-slate-400"
              }`}
              onClick={() => cronograma(0)}
            >
              Menos de três semanas
            </button>
            <button
              className={`px-4 py-1 mx-5 border-2 border-blue-400 transition-all duration-300 hover:scale-125 ${
                periodo === 1 && "bg-slate-400"
              }`}
              onClick={() => cronograma(1)}
            >
              Entre três e seis semanas
            </button>
            <button
              className={`px-4 py-1 mx-5 border-2 border-blue-400 transition-all duration-300 hover:scale-125 ${
                periodo === 2 && "bg-slate-400"
              }`}
              onClick={() => cronograma(2)}
            >
              Mais de seis semanas
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mb-5">
          <h1 className="font-bold text-lg p-2">Orçamento</h1>
          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between items-center">
            <button
              className={`px-4 py-1 mx-5 border-2 border-blue-400 transition-all duration-300 hover:scale-125 ${
                orcamento === 0 && "bg-slate-400"
              }`}
              onClick={() => tamanhoOcamento(0)}
            >
              Menos de R$1000
            </button>
            <button
              className={`px-4 py-1 mx-5 border-2 border-blue-400 transition-all duration-300 hover:scale-125 ${
                orcamento === 1 && "bg-slate-400"
              }`}
              onClick={() => tamanhoOcamento(1)}
            >
              Entre R$1000 e R$3000
            </button>
            <button
              className={`px-4 py-1 mx-5 border-2 border-blue-400 transition-all duration-300 hover:scale-125 ${
                orcamento === 2 && "bg-slate-400"
              }`}
              onClick={() => tamanhoOcamento(2)}
            >
              Mais de R$3000
            </button>
          </div>
        </div>
      </div>
      <ContactForm submit={submit} />
      <div className="mt-10 mx-auto bg-gray-600 px-5 py-2 rounded-xl text-white text-sm flex w-fit mb-5 border-2 border-blue-400">
        <p>Ficou com dúvidas? No menu</p>
        <Link className="mx-2 font-bold text-yellow-300" href="/PR">
          &apos;P&R&apos;
        </Link>
        <p>pode lhe ajudar.</p>
      </div>
    </section>
  );
};

export default Page;
