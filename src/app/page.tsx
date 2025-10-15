import type { Metadata } from "next";
import Welcome from "@/components/homecomps/Welcome";
import WhyChooseApp from "@/components/homecomps/WhyChooseApp";
import HowToStart from "@/components/homecomps/HowToStart";
import FeaturedLevels from "@/components/homecomps/FeaturedLevels";

export const metadata: Metadata = {
  title: "Welcome to Darija App – Learn Moroccan Arabic",
  description:
    "Welcome to Darija App, your friendly guide to Moroccan Arabic (Darija). Learn through interactive lessons, real-life dialogues, cultural notes, and a built-in translator. Start speaking confidently from beginner to advanced.",
  keywords: [
    "Darija",
    "Moroccan Arabic",
    "Learn Moroccan Arabic",
    "Learn Darija",
    "Morocco language",
    "Moroccan dialect",
    "Arabic dialect",
    "phrases",
    "pronunciation",
    "culture",
    "translator",
    "lessons",
    "course",
    "beginner",
    "intermediate",
    "advanced",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Welcome to Darija App – Learn Moroccan Arabic",
    description:
      "Interactive lessons, real-life dialogues, and cultural insights to master Moroccan Arabic (Darija).",
    url: "/",
    siteName: "Darija App",
    type: "website",
    images: [
      {
        url: "/favicon.ico",
        alt: "Darija App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome to Darija App – Learn Moroccan Arabic",
    description:
      "Interactive lessons, real-life dialogues, and cultural insights to master Moroccan Arabic (Darija).",
    images: ["/favicon.ico"],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "education",
};

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
