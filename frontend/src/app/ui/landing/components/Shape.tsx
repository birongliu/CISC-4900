import { cn } from "@/app/utils/functions";
import React from "react";

export default function Shape({ className }: { className?: string }) {
  return (
    <div className={cn(`absolute -z-10`, className)}>
      <svg
        width="180"
        height="181"
        viewBox="0 0 180 181"
        fill="none"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M130.963 173.404C146.322 164.601 155.606 145.612 164.295 125.985C172.748 106.305 180.372 85.9314 178.907 64.2341C177.732 42.3518 167.288 18.8529 149.738 8.05478C131.899 -2.55816 106.901 -0.231445 83.1093 4.38184C59.5527 9.04883 37.2579 15.7635 22.7574 30.5434C8.20242 45.5621 1.26157 68.3533 0.230421 91.2391C-0.855333 114.364 3.73376 137.529 16.8484 152.591C30.0176 167.414 51.7669 173.895 73.1228 177.772C94.5334 181.411 115.785 182.5 130.963 173.404Z"
          fill="url(#paint0_linear_302_75)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_302_75"
            x1="24.2514"
            y1="-23"
            x2="165.648"
            y2="187.33"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#BED4D4" />
            <stop offset="1" stopColor="#D3E2DC" />
          </linearGradient>
        </defs>
      </svg>
      
    </div>
  );
}
