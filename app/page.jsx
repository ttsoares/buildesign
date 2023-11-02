import React from "react";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-full h-[calc(100%-6%)] flex-col items-start justify-center">
      <div className="hidden md:block relative w-full h-full">
        <Image
          src="/images/hero-3-MD.webp"
          alt="BuilDesign logo"
          fill
          className="bg-black bg-blend-overlay"
        />
      </div>

      <div className="block md:hidden relative w-full h-full">
        <Image
          src="/images/hero-3-SM.webp"
          alt="Background image bridge"
          style={{ objectFit: "cover" }}
          fill
          fillstyle={{
            width: "100%",
            height: "auto",
          }}
          className="bg-black bg-blend-overlay"
        />
      </div>

      <div className="absolute top-8 md:top-14 left-0 w-full  md:h-[calc(100%-12%)] bg-gradient-to-b from-gray-300 to-black/0 mix-blend-multiply"></div>

      <div className="absolute bg-gray-300/70  md:bg-transparent top-[9%] text-gray-700 left-[6%] md:left-[18%]">
        <h1 className="text-2xl md:text-4xl lg:text-7xl font-extralight leading-snug uppercase">
          A estética
        </h1>
        <h1 className="text-2xl md:text-4xl lg:text-7xl font-extralight leading-snug uppercase">
          da sua marca
        </h1>
        <h1 className="text-2xl md:text-4xl lg:text-7xl italic font-extrabold leading-snug text-black uppercase">
          atraindo
        </h1>
        <h1 className="text-2xl md:text-4xl lg:text-7xl italic font-extrabold leading-snug text-black uppercase">
          clientes...
        </h1>
        <p className="text-xs bg-gray-300/70  md:bg-transparent text-black rounded-lg md:text-sm font-bold tracking-wider px-2 py-1  w-fit ">
          Identidade visual traduzida em sucesso!
        </p>
      </div>
    </main>
  );
}
