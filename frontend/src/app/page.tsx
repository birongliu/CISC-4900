import Hero from "./ui/landing/Hero";
import About from "./ui/landing/About";
import PetMatcher from "./ui/landing/PetMatcher";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden w-full">
      <div className="px-10 md:px-12">
      <Hero />
      <About />
      <PetMatcher />
      </div>
    </main>
  );
}
