"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const MENU = [
  {
    text: "Início",
    link: "/",
  },
  {
    text: "Projetos",
    link: "/projects",
  },
  {
    text: "Encomenda",
    link: "/comission",
  },
  {
    text: "Sobre",
    link: "/about",
  },
  {
    text: "P&R",
    link: "/PR",
  },
  {
    text: "Contato",
    link: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [showMenu, setShowMenu] = useState(false);

  function gotoLink(href) {
    setShowMenu(false);
    router.push(href);
  }

  return (
    <nav className="relative w-full bg-gradient-to-r from-slate-600 to-slate-200">
      {/* SM */}
      <div className="w-full h-12 p-2 md:hidden">
        <div className="flex justify-between">
          <div
            className="hover:cursor-pointer"
            onClick={() => setShowMenu(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <Image
            className=""
            src="/images/logo.png"
            width={60}
            height={20}
            alt="Logo"
          />
        </div>

        {showMenu && (
          <div className="absolute mt-2 ml-2 bg-slate-400 inset-0 z-40 w-[97%] h-fit rounded-lg">
            <div className="flex flex-col justify-around">
              {MENU.map((item, index) => (
                <div
                  onClick={() => gotoLink(item.link)}
                  key={index}
                  className={`mx-2 mt-2 hover:animate-pulse hover:cursor-pointer hover:border-2`}
                >
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* MD LG */}
      <div className="hidden md:flex max-w-7xl mx-auto h-14 justify-end z-20 ">
        <div className="flex justify-between items-center w-full  rounded-xl my-2 mr-5">
          <Image
            className="ml-5 invert"
            src="/images/logo.png"
            width={100}
            height={60}
            alt="Logo"
          />
          <div className="flex justify-around">
            {MENU.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className={`mx-2 hover:animate-pulse hover:font-bold ${
                  pathname === item.link && "animate-bounce"
                }`}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
