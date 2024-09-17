import Image from "next/image";
import React from "react";

const cards = [
  {
    title: "Adopt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem enim leo.",
    image: "/about/chat.svg",
  },
  {
    title: "Community",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem enim leo.",
    image: "/about/chat.svg",
  },
  {
    title: "AI",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem enim leo.",
    image: "/about/chat.svg",
  },
];

export default function About() {
  return (
    <section
      id="About"
     className="flex items-center px-12 md:px-24 py-28 my-48 justify-center dark:bg-transparent  dark:bg-slate-800 bg-lightBeige">
      <div className="max-w-7xl w-full flex flex-col items-center ">
      <h1 className="text-4xl md:text-5xl font-bold font-poppins dark:text-white  text-primary leading-tight">
      What is Petpals?
      </h1>
      <p className="text-darkMaroon text-lg font-poppins dark:text-white  pt-10 text-center">
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
            className="flex rounded-xl flex-col p-8 bg-gradient-to-b from-lightBeige to-darkMaroon gap-3 justify-center w-72"
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
