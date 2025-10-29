import HeroSection from "@/home/HeroSection";
import HeroSection02 from "@/home/HeroSection02";
import BackgroundTest from "@/home/BackgroundTest";
import HowToWorkSection from "@/home/HowToWorkSection";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen ">
      <BackgroundTest />
      <div className="flex flex-col space-y-8">
        <HeroSection />
        <HeroSection02 />
        <HowToWorkSection />
      </div>
    </div>
  );
}
