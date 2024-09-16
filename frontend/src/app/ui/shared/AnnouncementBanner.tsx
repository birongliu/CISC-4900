"use client"
import React, { useState } from "react";
import CloseIcon from "../navigation/icons/Close";
import Button from "./Button";

export default function AnnouncementBanner() {
  const [open, setOpen] = useState(true);

  function handleClick() {
    setOpen((prev) => !prev);
  }

  return (
    <div
      className={`bg-lightBeige w-full py-3 flex md:text-center items-center px-5  sticky top-0 ${
        open ? "block" : "hidden"
      }`}
    >
      <p className="font-poppins text-primary text-center font-semibold flex-1 ">
        Public Announcement: We are currently in beta. Please report any bugs
      </p>
      <Button onClick={handleClick} className="bg-transparent">
        <CloseIcon className="w-6 h-6" />
      </Button>
    </div>
  );
}
