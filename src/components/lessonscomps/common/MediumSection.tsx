"use client";

import React from 'react';
import LessonCard from './LessonCard';

const intermediateLessons = [
  {
    id: 1,
    title: "Travel & Directions",
    description: "Learn how to navigate Morocco, ask for directions, and discuss travel plans in Darija.",
    timeNeeded: "35 min",
    slug: "intermediate-one"
  },
  {
    id: 2,
    title: "Shopping & Bargaining",
    description: "Master the art of bargaining and learn essential shopping vocabulary in Moroccan markets.",
    timeNeeded: "30 min",
    slug: "intermediate-two"
  },
  {
    id: 3,
    title: "Health & Wellness",
    description: "Learn how to discuss health concerns, visit a pharmacy, and describe symptoms in Darija.",
    timeNeeded: "40 min",
    slug: "intermediate-three"
  },
  {
    id: 4,
    title: "Work & Professional Life",
    description: "Discover vocabulary and phrases for workplace communication and professional settings.",
    timeNeeded: "35 min",
    slug: "intermediate-four"
  },
  {
    id: 5,
    title: "Celebrations & Traditions",
    description: "Learn about Moroccan celebrations and how to participate in cultural traditions using Darija.",
    timeNeeded: "40 min",
    slug: "intermediate-five"
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