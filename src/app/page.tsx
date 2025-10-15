import type { Metadata } from "next";
import Welcome from "@/components/homecomps/Welcome";
import WhyChooseApp from "@/components/homecomps/WhyChooseApp";
import HowToStart from "@/components/homecomps/HowToStart";
import FeaturedLevels from "@/components/homecomps/FeaturedLevels";


export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Welcome />
      <WhyChooseApp />
      <HowToStart />
      <FeaturedLevels />
    </div>
  );
}
