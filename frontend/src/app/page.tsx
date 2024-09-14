import Hero from "./ui/landing/Hero";
import About from "./ui/landing/About";
import PetMatcher from "./ui/landing/PetMatcher";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden w-full">
      <Hero />
      <About />
      <PetMatcher />
    </main>
  );
}
