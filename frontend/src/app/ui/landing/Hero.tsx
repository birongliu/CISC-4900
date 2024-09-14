import React from "react";
import Shape from "./components/Shape";
import Vector from "./components/Vector";
import Image from "next/image";
import Button from "./components/button";

export default function Hero() {
  return (
    <div className="h-full py-16 md:px-20 relative grid lg:grid-cols-2">
      <section className=" w-full py-32 relative">
        <Vector className="z-10 top-2" />
        <Shape className="top-10 right-32" />
        <span className="font-bold font-poppins text-text-secondary">
          Pet Adoption
        </span>
        <h1 className="text-black-100 font-bold text-4xl leading-snug">
          Adopt, Grow, and Build a Community—One Paw at a Time
        </h1>
        <p className="pt-3">
          Adopt, connect, and grow together at Petpals. We bring pet lovers
          together by creating a community where you can find your perfect
          companion and connect with others who share the same passion for pets.
          Let&pos;s build meaningful relationships while giving animals the homes
          they deserve.
        </p>
        <Button className="mt-5 bg-black  text-white rounded-xl py-2 px-5">
          Get Started
        </Button>
      </section>
      <section className="md:block hidden mt-10">
        <Image
          src="/hero-picture.svg"
          alt="hero"
          width={937}
          height={699}
          className="w-full h-full"
        />
      </section>
    </div>
  );
}
