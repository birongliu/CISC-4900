import Image from "next/image";
import React from "react";
import Button from "./components/button";

const cards = [
  {
    title: "Adopt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem enim leo.",
    image: "/chat.svg",
  },
  {
    title: "Community",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem enim leo.",
    image: "/chat.svg",
  },
  {
    title: "AI",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem enim leo.",
    image: "/chat.svg",
  },
];

export default function About() {
  return (
    <div id="about" className="flex-col py-20 rounded my-20 w-full justify-center z-10 bg-light-overlay flex items-center">
      <h1 className="font-bold font-poppins text-3xl">What is Petpals?</h1>
      <p className="pt-3 font-poppins px-10 md:px-24">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
        velit, vulputate eu pharetra nec, mattis ac neque. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu
        pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit
        elit tincidunt id. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Nam quis felis convallis, rhoncus leo id, scelerisque purus. Ut
        auctor gravida nulla.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 p-10 pt-10 gap-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex rounded-xl flex-col p-8 bg-gradient-to-b from-secondary to-purple-1000 gap-3 justify-center w-72"
          >
            <Image alt={card.title} src={card.image} width={100} height={100} />
            <h1 className="font-bold font-poppins text-2xl text-secondary">
              {card.title}
            </h1>
            <p className="text-button-primary">{card.description}</p>
            <a
              href="/"
              className="text-secondary font-poppins bg-inherit w-32 hover:underline rounded-xl py-2 px-0"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
