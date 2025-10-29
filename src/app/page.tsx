import HeroSection from "@/home/HeroSection";
import HeroSection02 from "@/home/HeroSection02";
import BackgroundTest from "@/home/BackgroundTest";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      <BackgroundTest />
      <div className="flex flex-col">
        <HeroSection />
        <HeroSection02 />
      </div>
    </div>
  );
}
