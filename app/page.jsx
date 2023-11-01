import React from "react";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-full h-[calc(100%-6%)] flex-col items-start justify-center">
      <div className=" relative w-full h-full">
        <Image
          src="/images/hero-3.png"
          alt="BuilDesign logo"
          fill
          className="bg-black bg-blend-overlay"
        />
      </div>

      <div className="absolute top-14 left-0 w-full hidden md:block h-[calc(100%-12%)] bg-gradient-to-b from-gray-200 to-black mix-blend-multiply"></div>

      <div className="absolute top-[15%] text-white left-[5%]">
        <h1 className="text-2xl md:text-4xl lg:text-6xl italic font-extrabold">
          A estética da sua marca atraindo clientes...
        </h1>
        <p className="text-xs md:text-xl">
          Identidade visual traduzida em sucesso!
        </p>
      </div>
    </main>
  );
}
