import React from "react";
import Shape from "./components/Shape";
import Vector from "./components/Vector";
import Image from "next/image";
import Button from "../shared/Button";


export default function Hero() {
  return (
    <section className="my-28 lg:mt-20 lg:mb-40 flex items-center px-16 justify-center">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-6 relative">
        <Vector className="z-10" />
        <Shape className="-top-10 right-32 " />
          <span className="font-bold font-poppins text-lightBeige">
            Pet Adoption
          </span>
          <h1 className="text-3xl md:text-3xl font-bold font-poppins text-primary leading-tight">
            Adopt, Grow, and Build a Community—One Paw at a Time
          </h1>
          <p className="text-primary text-lg font-poppins">
            Adopt, connect, and grow together at Petpals. We bring pet lovers
            together by creating a community where you can find your perfect
            companion and connect with others who share the same passion for
            pets. Let&apos;s build meaningful relationships while giving animals
            the homes they deserve.
          </p>
          <Button className="flex items-center space-x-2 text-pretty font-semibold text-white">
            <span> Get Started</span>
          </Button>
        </div>
        <div className="lg:block hidden">
          <Image
            key="pet"
            src="/hero-picture.svg"
            alt="hero"
            width={300}
            height={300}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
