import Hero from "./ui/landing/Hero";
import About from "./ui/landing/About";
import Explore from "./ui/landing/Explore";
import Team from "./ui/landing/Team";
import AnnouncementBanner from "./ui/shared/AnnouncementBanner";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden w-full">
      <Hero />
      <About />
      <Explore />
      <Team />
    </main>
  );
}
