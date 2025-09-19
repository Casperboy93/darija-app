"use client";

import React from 'react';
import LessonCard from './LessonCard';

const intermediateLessons = [
  {
    id: 1,
    title: "Past Tense",
    description: "Learn how to form and use the past tense in Darija to talk about completed actions and events.",
    timeNeeded: "35 min",
    slug: "intermediate-one"
  },
  {
    id: 2,
    title: "Future Tense",
    description: "Master the future tense in Darija to express plans, intentions, and predictions about upcoming events.",
    timeNeeded: "30 min",
    slug: "intermediate-two"
  },
  {
    id: 3,
    title: "Conditional Forms",
    description: "Master conditional forms to express hypothetical situations, possibilities, and cause-and-effect relationships.",
    timeNeeded: "40 min",
    slug: "intermediate-three"
  },
  {
    id: 4,
    title: "Comparative Forms",
    description: "Learn to compare people, objects, and qualities using proper comparative and superlative structures.",
    timeNeeded: "35 min",
    slug: "intermediate-four"
  },
  {
    id: 5,
    title: "Expressing Opinions",
    description: "Master the art of expressing opinions, preferences, and thoughts while engaging in meaningful conversations.",
    timeNeeded: "40 min",
    slug: "intermediate-five"
  },
  {
    id: 6,
    title: "Travel and Directions",
    description: "Learn advanced travel vocabulary, navigation skills, and how to discuss complex travel plans in Morocco.",
    timeNeeded: "35 min",
    slug: "intermediate-six"
  },
  {
    id: 7,
    title: "Shopping and Bargaining",
    description: "Master advanced shopping vocabulary, negotiation techniques, and cultural aspects of Moroccan markets.",
    timeNeeded: "40 min",
    slug: "intermediate-seven"
  },
  {
    id: 8,
    title: "Health and Wellness",
    description: "Learn comprehensive health vocabulary, medical conversations, and wellness discussions in Darija.",
    timeNeeded: "35 min",
    slug: "intermediate-eight"
  },
  {
    id: 9,
    title: "Work and Professional Life",
    description: "Discover advanced workplace vocabulary and professional communication skills in Moroccan business settings.",
    timeNeeded: "40 min",
    slug: "intermediate-nine"
  },
  {
    id: 10,
    title: "Celebrations and Traditions",
    description: "Learn about Moroccan celebrations, cultural traditions, and how to participate using advanced Darija.",
    timeNeeded: "45 min",
    slug: "intermediate-ten"
  }
];

export default function MediumSection() {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-6">
          <div className="h-10 w-1.5 bg-blue-500 rounded-full mr-3"></div>
          <h2 className="text-2xl font-bold text-gray-800">Intermediate Lessons</h2>
        </div>
        
        <p className="text-gray-600 mb-6 max-w-3xl">
          Take your Darija skills to the next level with these intermediate lessons. 
          Perfect for learners who already know the basics and want to expand their conversational abilities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {intermediateLessons.map((lesson) => (
            <LessonCard
              key={lesson.id}
              id={lesson.id}
              title={lesson.title}
              description={lesson.description}
              timeNeeded={lesson.timeNeeded}
              slug={lesson.slug}
              level="intermediate"
            />
          ))}
        </div>
      </div>
    </section>
  );
}