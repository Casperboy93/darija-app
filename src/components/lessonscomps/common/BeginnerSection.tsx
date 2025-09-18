"use client";

import React from 'react';
import LessonCard from './LessonCard';

const beginnerLessons = [
  {
    id: 1,
    title: "Basic Greetings & Introductions",
    description: "Learn essential Darija greetings and how to introduce yourself in everyday situations.",
    timeNeeded: "20 min",
    slug: "beginner-one"
  },
  {
    id: 2,
    title: "Numbers & Counting",
    description: "Master numbers in Darija and learn how to count, tell time, and discuss prices.",
    timeNeeded: "25 min",
    slug: "beginner-two"
  },
  {
    id: 3,
    title: "Family & Relationships",
    description: "Learn vocabulary for family members and how to discuss relationships in Darija.",
    timeNeeded: "30 min",
    slug: "beginner-three"
  },
  {
    id: 4,
    title: "Food & Dining",
    description: "Discover Moroccan food vocabulary and phrases for ordering in restaurants.",
    timeNeeded: "25 min",
    slug: "beginner-four"
  },
  {
    id: 5,
    title: "Daily Routines",
    description: "Learn how to describe your daily activities and routines in Darija.",
    timeNeeded: "30 min",
    slug: "beginner-five"
  }
];

export default function BeginnerSection() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-6">
          <div className="h-10 w-1.5 bg-green-500 rounded-full mr-3"></div>
          <h2 className="text-2xl font-bold text-gray-800">Beginner Lessons</h2>
        </div>
        
        <p className="text-gray-600 mb-6 max-w-3xl">
          Start your Darija journey with these fundamental lessons. Perfect for absolute beginners 
          looking to learn basic communication skills in Moroccan Arabic.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beginnerLessons.map((lesson) => (
            <LessonCard
              key={lesson.id}
              id={lesson.id}
              title={lesson.title}
              description={lesson.description}
              timeNeeded={lesson.timeNeeded}
              slug={lesson.slug}
              level="beginner"
            />
          ))}
        </div>
      </div>
    </section>
  );
}