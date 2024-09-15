import Image from "next/image";
import React from "react";

interface Member {
  name: string;
  role: string;
  photo: string;
  linkedinUrl?: string;
  githubUrl?: string;
  personalWebsiteUrl?: string;
  instagramUrl?: string;
}

const members: Member[] = [
  {
    name: "Bradley Hung",
    role: "Project Manager",
    photo: "/bradley.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/bradley-lee-7b6a1b1b4/",
  },
  {
    name: "Bi Rong Liu",
    role: "Frontend Developer",
    photo: "/chat.svg",
    linkedinUrl: "https://www.linkedin.com/in/bradley-lee-7b6a1b1b4/",
  },
  {
    name: "Shuyi Zhou",
    role: "Backend Developer",
    photo: "/chat.svg",
    linkedinUrl: "https://www.linkedin.com/in/bradley-lee-7b6a1b1b4/",
  },
  {
    name: "Jessica Jiang",
    role: "UI/UX Designer",
    photo: "/chat.svg",
    linkedinUrl: "https://www.linkedin.com/in/bradley-lee-7b6a1b1b4/",
  },
];

export default function Team() {
  return (
    <section
      id="Team"
      className="flex-col py-24 my-28 md:px-20 px-10 rounded justify-center w-full flex items-center"
    >
      <div className="max-w-7xl w-full flex flex-col text-center gap-3">
        <span className="font-bold font-poppins text-primary text-4xl">
          Meet the Team
        </span>
        <p className="text-gray-500 font-poppins text-lg leading-6">
          We’re a dynamic group of individuals who are passionate about what we
          do.
        </p>
      </div>
      <ul className="pt-16 grid lg:grid-cols-2 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-20 ">
        {members.map((member, index) => {
          return <div className="flex text-center flex-col gap-4 w-full " key={index}>
            <Image src={member.photo} alt={member.name} width={200} height={200} className="w-52 h-52 rounded-full" />
            <div className="flex gap-1 flex-col">
                <span className="font-poppins text-xl font-semibold text-primary">{member.name}</span>
                <span className="font-poppins text-base text-gray-500">{member.role}</span>
            </div>
          </div>;
        })}
      </ul>
    </section>
  );
}
