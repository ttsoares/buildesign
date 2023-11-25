import React from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="w-full h-fit mb-20">
      <h1 className="w-fit mx-auto text-2xl md:text-5xl">
        Projetos Figma traduzidos para React:
      </h1>
      <p className="text-sm w-fit mx-auto mb-12">
        (Clique na imagem para ver a página)
      </p>
      <div className="columns-1 md:columns-2 items-center w-full gap-5">
        <div className="flex flex-col justify-center items-center mb-10">
          <h2 className="w-fit mx-auto text-xl  pl-6 mb-5">
            Índice de Massa Corporal
          </h2>
          <Link href="https://bm-index.vercel.app/" target="_blank">
            <div className=" rounded-xl relative ml-10 w-80 h-80 transition-all duration-500 hover:scale-110">
              <Image
                src="/images/BMI-fig.webp"
                alt="BMI in Figma"
                fill
                className="rounded-xl"
              />
            </div>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center mb-10">
          <h2 className="w-fit mx-auto text-xl pl-6 mb-5">
            Criação de senhas fortes
          </h2>
          <Link href="https://pass-generator-pied.vercel.app/" target="_blank">
            <div className="relative ml-10 w-80 h-80 transition-all duration-500 hover:scale-110">
              <Image
                src="/images/password-fig.webp"
                alt="Password generator in Figma"
                fill
                className="rounded-xl"
              />
            </div>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center mb-10">
          <h2 className="w-fit mx-auto text-xl pl-6 mb-5">Sobre os planetas</h2>
          <Link href="https://planets-zeta.vercel.app/" target="_blank">
            <div className="relative ml-10 w-80 h-80 transition-all duration-500 hover:scale-110">
              <Image
                src="/images/planets-fig.webp"
                alt="Planets facts in Figma"
                fill
                className="rounded-xl"
              />
            </div>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center mb-10">
          <h2 className="w-fit mx-auto text-xl pl-6 mb-5">Galleria</h2>
          <Link href="https://galleria-five.vercel.app/" target="_blank">
            <div className="relative ml-10 w-80 h-80 transition-all duration-500 hover:scale-110">
              <Image
                src="/images/galleria.webp"
                alt="Art Gallery"
                fill
                className="rounded-xl"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
