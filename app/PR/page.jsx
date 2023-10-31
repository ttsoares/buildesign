"use client";

import Image from "next/image";
import React from "react";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        {header}
        <Image
          className={`ml-auto transition-transform duration-200 ease-out ${
            isEnter && "rotate-180"
          }`}
          src="/images/chevron.svg"
          alt="Chevron"
          width={20}
          height={20}
        />
      </>
    )}
    className="border-b"
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-full p-4 text-left hover:bg-slate-100 ${
          isEnter && "bg-slate-200"
        }`,
    }}
    contentProps={{
      className: "transition-height duration-200 ease-out",
    }}
    panelProps={{ className: "p-4" }}
  />
);

const DATA = [
  {
    pergunta: "O que é um CMS ?",
    resposta:
      "É a sigla en Inglês para 'Content Management System' cuja tradução é 'Sistema para Gestão de Conteúdo'. Com essa ferramenta é possível modificar informações apresentadas em uma página sem que seja necessário programação. Imagens e textos podem ser editados pelo adminstrator simplismente enviando arquivos para o servidor onde a página é hospedada.",
  },
  {
    pergunta: "Quais informações preicisamos para começar ?",
    resposta:
      "Precisaremos de informações sobre os objetivos de sua marca, sua estética, palete de cores e outros espéctos que definem sua identidade visual. Mais detalhes sobre isso serão enviados após o seu contato.",
  },
  {
    pergunta: "O que são Figma e Sketch ?",
    resposta:
      "São softwares usados no ramo do design. O Figma roda no Windows e no Linux. O Sketch roda no IOS da Apple. São instrumentos para auxiliar no processo criativo e que facilitam a tarefa dos programadores em transformar o projeto em código que renderize a UI.",
  },
  {
    pergunta: "O que uma 'Landing Page' ?",
    resposta:
      "É uma única página que apresenta um produto ou serviço e mostra suas vantages e qualidades. O objetivo é atingir o que se define como 'conversão'. O termo conversão se refere a convencer a pessoa a aceitar a proposta mostrada na página que pode ser uma compra, assinar um serviço, etc... ",
  },
  {
    pergunta: "Onde fica nossa sede ?",
    resposta:
      "Sapiranga, Rio Grande do Sul, Brasil. Distante 85 Km de Porto Alegre, a capital do estado.",
  },
  {
    pergunta: "Quantos formam nossa equipe ?",
    resposta:
      "Somos quatro pessoas de diversas áreas. A página 'Sobre' mostra mais detalhes sobre cada um.",
  },
  {
    pergunta: "O que significa UI ?",
    resposta:
      "É a singla em Inglês para 'User Interface' cuja tradução é 'Interface do Usuário'. É o que o usuário encherga na tela do dispositivo. É o conjunto dos elementos visuais com os quais a pessoa interage.",
  },
  {
    pergunta: "E sobre UX ?",
    resposta:
      "Em Inglês 'User eXperience' ou 'Experiência do Usuário'. São as emoções, conclusões e resultados obtidos pelo usuário ao percorrer a Jornada de interações com as interfaces do sistema.",
  },
  {
    pergunta: "O que se entende por Jornada do Usuário ?",
    resposta:
      "A Jornada do usuário (ou Jornada do cliente) é a sequência de passos, em um determinado senário, que o usuário segue para atingir o objetivo que busca.",
  },
];

const Page = () => {
  return (
    <div className="my-4 border-t w-[70%] mx-auto h-fit md:h-screen">
      <h1 className="w-fit mx-auto text-2xl font-bold my-5 border-2 rounded-lg px-8 py-4 ">
        Perguntas frequentes e respostas
      </h1>
      <Accordion transition transitionTimeout={200}>
        {DATA.map((item, index) => (
          <AccordionItem key={index} header={item.pergunta}>
            {item.resposta}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Page;
