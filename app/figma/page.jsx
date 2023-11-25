import React from "react";

const STEPS = [
  {
    titulo: "1. Projeto Figma/Sketch:",
    texto:
      "Primeiro o designer cria o projeto visual da interface com o usuário (UI) com uma ferramenta como Figma ou Sketch. Este projeto inclui todo o necessário, desde layout de elementos (como botões e imagens) até palete de cores, fontes de caracteres, espaçamentos, etc... É a definiçã de tudo sobre a identidade visual.",
  },
  {
    titulo: "2. Inspeção e Medições:",
    texto:
      "Os desenvolvedores estudam o design para compreender sua estruturação. Observam como cada elemento é posicionado, seu tamanho e proporções, quais cores e fontes são usadas. Algo como fazer anotações que ajudem a esclarecer tudo sobre o projeto.",
  },
  {
    titulo: "3. Estrutura HTML:",
    texto:
      "Com baseando no projeto os desenvolvedores escrevem o código HTML que é o esqueleto da página. São definidos limites e hierarquidas para as diferentes sessões e elementos. Como cabeçalhos, menus, áreas com conteúdo e rodapés. Esses containers são como o chassi de um automóvel.",
  },
  {
    titulo: "4. Formatação com CSS:",
    texto:
      "Para reproduzir fielmente a aparência do design os programadores usam a linguagem CSS ('Cascading Style Sheets'). Com isso são definidas as posições dos elementos em relação ao espaço disponível e entre si. Cores, fontes de caracteres, animações, reações às ações do usuário, etc... Isso seria como pintar o carro, escolher acessórios e enfeites.",
  },
  {
    titulo: "5. Imagens e Media:",
    texto:
      "Se o projeto incluir elementos de midia (imagens, videos e sons) esse conteúdo é inserido na estrutura formada pelo HTML + CSS. ",
  },
  {
    titulo: "6. Responsividade:",
    texto:
      "Atualmente os projetos devem estar adequados à telas de diferentes tamanhos (como desktops, tables e celulares). Os desenvolvedores usam técnicas de responsvidade para garantir a interface pareça bem em diferentes dispositivos. Isso equivaleria a projetar o carro tanto para pistas de corrida quanto para situações 'fora-de-estrada'",
  },
  {
    titulo: "7. Interatividade com JS:",
    texto:
      "Quando o design inclui funcionalidades como botões, formulários ou animações usa-se Javascript para oferecer a interatividade. Na analogia do carro seria como instalar o motor e os acionadores mecãnicos que produzem os movimentos",
  },
  {
    titulo: "8. Testest e Correções: ",
    texto:
      "Então o conjunto é testato em diversos navegadores diferents para garantir que a aparẽncia e comportamentos sejam os mesmos e dentro do esperado. Seria como o controle de qualidade feito no carro após a linha de produção.",
  },
  {
    titulo: "9. Hospedagem na Nuvem:",
    texto:
      "E, finalmente, o código da página é hospeado em um servidor (ou nuvem) na Internet. Na metáfora do carro seria o seu dono fazendo uso do veículo como desejar.",
  },
];

const Page = () => {
  return (
    <div className="w-[80%] flex flex-col mx-auto">
      <h1 className="mb-3 font-bold text-xl">
        Traduzir um projeto no Figma para um código aceito pelo browser é como
        transformar os desenhos detalhados de um carro em um veículo real.
        Abaixo vemos uma versão simplificada de como isso funciona.
      </h1>
      {STEPS.map((item, index) => (
        <div className="p-2 flex flex-col md:flex-row w-full" key={index}>
          <p className="w-full md:w-1/5 font-bold">{item.titulo}</p>
          <p className="w-full md:w-4/5">{item.texto}</p>
        </div>
      ))}
      <p className="mt-3 font-semibold">
        Resumidamente, o Figma produz os desenhos técnicos que os
        desenvolvedores usam para construir entruturas em HTML, CSS e programas
        em javascript. Isso transforma um desenho na coisa real que ele
        representa, seja uma página ou um aplicativo.
      </p>
    </div>
  );
};

export default Page;
