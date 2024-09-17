"use client";
import React, { useState } from "react";
import CloseIcon from "../navigation/icons/Close";
import Button from "./Button";

export default function AnnouncementBanner({ text }: { text: string }) {
  const [open, setOpen] = useState(true);

  function handleClick() {
    setOpen((prev) => !prev);
  }

  return (
    <div
      className={`bg-cyan-900 dark:bg-neutra w-full z-30 py-3 flex shadow-md md:text-center items-center px-5  sticky top-0 ${
        open ? "block" : "hidden"
      }`}
    >
      <div className="flex items-center flex-col flex-1">
        <p className="font-poppins text-primary text-black dark:text-white text-center font-semibold">
          Public Announcement: {text}
        </p>
      </div>
      <Button onClick={handleClick} className="bg-transparent">
        <CloseIcon className="w-6 h-6 " />
      </Button>
    </div>
  );
}
