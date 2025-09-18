import Welcome from "@/components/homecomps/Welcome";
import FeaturedLessons from "@/components/homecomps/FeaturedLessons";
import WhyChooseApp from "@/components/homecomps/WhyChooseApp";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Welcome />
      <WhyChooseApp />
      <FeaturedLessons />
    </div>
  );
}
