import React from "react";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-full h-[calc(100%-6%)] flex-col items-start justify-center">
      <div className=" relative w-full h-full">
        <Image
          src="/images/hero.jpg"
          alt="Bridge"
          fill
          className="bg-black bg-blend-overlay"
        />
      </div>

      <div className="absolute top-20 left-0 w-full hidden md:block h-[calc(100%-12%)] bg-gradient-to-b from-white to-black mix-blend-multiply"></div>

      <div className="absolute top-1/3 left-[5%]">
        <h1 className="text-2xl md:text-6xl italic font-extrabold">
          A estética da sua marca atraindo clientes...
        </h1>
        <p className="text-xs md:text-xl">
          Identidade visual traduzida em sucesso!
        </p>
      </div>
    </main>
  );
}
