import Image from "next/image";
import React from "react";

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
    <section
      id="About"
      className="flex-col py-28 my-28 rounded justify-center z-10 w-full bg-light-overlay flex items-center"
    >
      <div className="max-w-7xl w-full flex flex-col items-center">
      <h1 className="font-bold font-poppins text-3xl text-primary">
        What is Petpals?
      </h1>
      <p className="pt-5 font-poppins text-center lg:px-32 px-16 text-pretty text-primary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
        velit, vulputate eu pharetra nec, mattis ac neque. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu
        pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit
        elit tincidunt id. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Nam quis felis convallis, rhoncus leo id, scelerisque purus. Ut
        auctor gravida nulla.
      </p>
      <div className="pt-16 grid items-center lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex rounded-xl flex-col p-8 bg-gradient-to-b from-lightBeige to-primary gap-3 justify-center w-72"
          >
            <Image alt={card.title} src={card.image} width={100} height={100} />
            <h1 className="font-bold font-poppins text-2xl text-lightBeige">
              {card.title}
            </h1>
            <p className="text-softCream font-poppins">{card.description}</p>
            <a
              href="/"
              className="text-lightBeige font-poppins bg-inherit w-32 hover:underline rounded-xl py-2 px-0"
            >
              Read more
            </a>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
