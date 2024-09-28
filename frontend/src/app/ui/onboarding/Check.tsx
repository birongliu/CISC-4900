import { cn } from "@/app/utils/functions";
import React from "react";

export default function Check({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-green-500", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 14L9 17L18 6" />
    </svg>
  );
}
