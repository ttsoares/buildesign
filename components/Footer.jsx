import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-r from-slate-600 to-slate-200 ">
      <div className="max-w-7xl h-14 flex flex-col md:flex-row items-center justify-between mx-auto">
        <Link
          href="/figma"
          className="text-sm ml-2 p-2  text-black hover:animate-bounce hover:cursor-pointer"
        >
          Do Figma para o frontEnd
        </Link>
        <p className="md:-ml-[6%]">CopyRight&copy; 2023</p>
        <Image
          className="hidden md:block mr-5"
          src="/images/logo.png"
          alt="Logo"
          width={80}
          height={40}
        />
      </div>
    </div>
  );
};

export default Footer;
