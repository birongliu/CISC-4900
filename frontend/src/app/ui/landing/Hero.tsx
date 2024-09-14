import React from "react";
import Shape from "./components/Shape";
import Vector from "./components/Vector";
import Image from "next/image";
import Button from "../shared/Button";

export default function Hero() {
  return (
    <div className="h-full my-16 relative grid lg:px-20 px-10 lg:grid-cols-2">
      <div className=" w-full py-32 relative">
        <Vector className="z-10 top-2" />
        <Shape className="top-10 right-32" />
        <span className="font-bold font-poppins text-lightBeige">
          Pet Adoption
        </span>
        <h1 className="text-primary font-bold text-2xl font-poppins leading-snug">
          Adopt, Grow, and Build a Community—One Paw at a Time
        </h1>
        <p className="pt-3 text-primary font-poppins">
          Adopt, connect, and grow together at Petpals. We bring pet lovers
          together by creating a community where you can find your perfect
          companion and connect with others who share the same passion for pets.
          Let&apos;s build meaningful relationships while giving animals the
          homes they deserve.
        </p>
        <Button className="mt-5 bg-primary  text-white rounded-xl py-2 px-5">
          Get Started
        </Button>
        <Shape className="-bottom-10 right-36" />
      </div>
      <div className="lg:block hidden">
        <Image
          src="/hero-picture.svg"
          alt="hero"
          width={937}
          height={699}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
