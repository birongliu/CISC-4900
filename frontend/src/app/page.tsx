import Hero from "./ui/landing/Hero";
import About from "./ui/landing/About";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden sm:px-10 px-5">
      <Hero />
      <About />
    </main>
  );
}
