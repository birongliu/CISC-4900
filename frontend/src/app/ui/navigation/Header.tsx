"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import CloseIcon from "./icons/Close";
import MenuIcon from "./icons/Menu";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

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
        src="/black-logo.svg"
        alt="pet selector logo"
        className={"w-24 h-20"}
        width={50}
        height={50}
      />
      :
      <Image
        src="/white-logo.svg"
        alt="pet selector logo"
        className={"w-24 h-20"}
        width={50}
        height={50}
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
         <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
          </SignedIn>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </div>
  );
}
