"use client"
import Image from "next/image";
import ThemeSwitcher from "./ui/navigation/ThemeSwitcher";

export default function Home() {
  return (
    <main>
      <ThemeSwitcher/>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
      Under Construction
      </div>
    </main>
  );
}
