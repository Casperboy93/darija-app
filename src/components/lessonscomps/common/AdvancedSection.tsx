"use client";

import React from 'react';
import LessonCard from './LessonCard';

const advancedLessons = [
  {
    id: 1,
    title: "Idiomatic Expressions",
    description: "Master advanced Darija idioms and expressions that will make you sound like a native speaker.",
    timeNeeded: "45 min",
    slug: "advanced-one"
  },
  {
    id: 2,
    title: "Dialectal Variations",
    description: "Explore regional differences in Darija across Morocco and understand various accents and vocabulary.",
    timeNeeded: "40 min",
    slug: "advanced-two"
  },
  {
    id: 3,
    title: "Cultural Context",
    description: "Deepen your understanding of Moroccan culture through advanced Darija conversations and contexts.",
    timeNeeded: "50 min",
    slug: "advanced-three"
  },
  {
    id: 4,
    title: "Literary Arabic Influence",
    description: "Understand the relationship between Modern Standard Arabic and Darija in formal contexts.",
    timeNeeded: "45 min",
    slug: "advanced-four"
  },
  {
    id: 5,
    title: "Media & Technology",
    description: "Learn advanced vocabulary for discussing current events, technology, and media in Darija.",
    timeNeeded: "40 min",
    slug: "advanced-five"
  }
];

export default function AdvancedSection() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-6">
          <div className="h-10 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          <h2 className="text-2xl font-bold text-gray-800">Advanced Lessons</h2>
        </div>
        
        <p className="text-gray-600 mb-6 max-w-3xl">
          Perfect your Darija with these advanced lessons designed for experienced learners. 
          Dive deep into nuanced expressions, cultural contexts, and sophisticated conversation skills.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advancedLessons.map((lesson) => (
            <LessonCard
              key={lesson.id}
              id={lesson.id}
              title={lesson.title}
              description={lesson.description}
              timeNeeded={lesson.timeNeeded}
              slug={lesson.slug}
              level="advanced"
            />
          ))}
        </div>
      </div>
    </section>
  );
}