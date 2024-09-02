"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const navigationItems = ["About", "Feature", "Pricing"];

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { resolvedTheme } = useTheme()
  console.log(resolvedTheme)
  return (
    <div
      className={`flex justify-between md:justify-evenly items-center md:mb-auto ${
        isOpen ? "mb-32" : ""
      }`}
    >
      {resolvedTheme === "light" ? 
      <Image
        src="/white-logo.svg"
        alt="pet selector logo"
        className={"w-24 h-24"}
        width={133}
        height={96}
      />
      :
      <Image
        src="/white-logo.svg"
        alt="pet selector logo"
        className={"w-24 h-24"}
        width={133}
        height={96}
      />}
      <ul
        className={`items-center absolute gap-2 w-full md:relative md:justify-center md:top-auto top-20 flex-col flex md:w-auto ${
          isOpen ? "block" : "hidden"
        } md:flex md:flex-row `}
      >
        {navigationItems.map((item, index) => (
          <li
            className="w-full px-10 py-5 cursor-pointer hover:bg-slate-300 md:hover:bg-in"
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="flex gap-1 px-5 md:px-0">

        <button className="mr-5 bg-slate-300 p-3 md:block rounded">
          WaitList
        </button>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <Image alt="menu" src={"/icons/close.svg"} height={43} width={50} /> : <Image alt="menu" src={"/icons/Menu.svg"} height={43} width={51} />}
        </button>
      </div>
    </div>
  );
}
