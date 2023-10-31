import React from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="w-full h-fit md:h-screen mb-20">
      <h1 className="w-fit mx-auto text-2xl md:text-5xl">
        Projetos Figma traduzidos para React:
      </h1>
      <p className="text-sm w-fit mx-auto mb-12">
        (Clique na imagem para ver a página)
      </p>
      <div className="flex flex-col md:flex-row justify-around items-center w-full space-y-10 md:space-y-0">
        <div className="flex flex-col justify-center items-center">
          <h2 className="w-fit mx-auto text-xl  ml-7 mb-10">
            Cálculo do Índice de Massa Corporal
          </h2>
          <Link href="https://bm-index.vercel.app/" target="_blank">
            <div className=" rounded-xl relative ml-10 w-80 h-80 transition-all duration-500 hover:scale-125">
              <Image
                src="/images/BMI-fig.png"
                alt="BMI in Figma"
                fill
                className="rounded-xl"
              />
            </div>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="w-fit mx-auto text-xl pl-6 mb-10">
            Criação de senhas fortes
          </h2>
          <Link href="https://pass-generator-pied.vercel.app/" target="_blank">
            <div className="relative ml-10 w-80 h-80 transition-all duration-500 hover:scale-125">
              <Image
                src="/images/password-fig.png"
                alt="Password generator in Figma"
                fill
                className="rounded-xl"
              />
            </div>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="w-fit mx-auto text-xl pl-6 mb-10">
            Sobre os planetas
          </h2>
          <Link href="https://planets-zeta.vercel.app/" target="_blank">
            <div className="relative ml-10 w-80 h-80 transition-all duration-500 hover:scale-125">
              <Image
                src="/images/planets-fig.png"
                alt="Planets facts in Figma"
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
