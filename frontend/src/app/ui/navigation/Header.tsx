"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import CloseIcon from "./icons/Close";
import MenuIcon from "./icons/Menu";
import Button from "../shared/Button";
import {
  SignedOut,
  UserButton,
  SignInButton,
  SignedIn,
} from "@clerk/nextjs";
import Link from "next/link";
const navigationItems = ["About", "Explore", "Team"];

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { resolvedTheme } = useTheme();

  return (
    <div
      className={`flex lg:justify-evenly relative justify-between items-center lg:mb-auto pt-2  ${
        isOpen ? "mb-48" : ""
      }`}
    >
      {resolvedTheme === "dark" ? (
        <Image
          src="/logo/white-logo.svg"
          alt="pet selector logo"
          className={"w-24 h-20"}
          width={50}
          height={50}
        />
      ) : (
        <Image
          src="/logo/black-logo.svg"
          alt="pet selector logo"
          className={"w-24 h-20"}
          width={50}
          height={50}
        />
      )}
      <ul
        className={`items-center absolute gap-2 lg:mt-0 mt-5 w-full lg:relative lg:justify-center lg:top-auto top-20 flex-col flex lg:w-auto ${
          isOpen ? "block" : "hidden"
        } lg:flex lg:flex-row `}
      >
        {navigationItems.map((item, index) => (
          <li
            className="w-full px-10 py-4  inset-0  z-10 cursor-pointer hover:bg-text-secondary lg:hover:bg-in"
            key={index}
          >
            <Link href={`#${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center gap-1 px-5 lg:px-0">
        <SignedOut>
          <Button className="text-white rounded-lg font-poppins font-semibold text-darkMaroon dark:bg-white">
            <SignInButton />
          </Button>
        </SignedOut>
        <SignedIn>
          <div role="user-button" className="flex items-center overflow">
            <UserButton  />
          </div>
        </SignedIn>
        <button className="lg:hidden block" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </div>
  );
}
