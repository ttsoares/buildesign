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

      {/* <div className="absolute top-14 left-0 w-full hidden md:block h-[calc(100%-12%)] bg-gradient-to-b from-gray-200 to-black mix-blend-multiply"></div> */}

      <div className="absolute top-[12%] text-gray-700 left-[18%]">
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
        <p className="text-xs md:text-sm font-bold tracking-wider px-2 py-1 bg-[#dcdcdc] border border-white rounded-full w-fit ">
          Identidade visual traduzida em sucesso!
        </p>
      </div>
    </main>
  );
}
