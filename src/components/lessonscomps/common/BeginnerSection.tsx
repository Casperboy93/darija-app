"use client";

import React from 'react';
import LessonCard from './LessonCard';

const beginnerLessons = [
  {
    id: 1,
    title: "Greetings and Introductions",
    description: "Learn essential greetings, how to introduce yourself, and basic polite expressions in Darija.",
    timeNeeded: "15 min",
    slug: "beginner-one"
  },
  {
    id: 2,
    title: "Numbers and Counting",
    description: "Master numbers from 1-100, learn to tell time, and practice counting in everyday situations.",
    timeNeeded: "20 min",
    slug: "beginner-two"
  },
  {
    id: 3,
    title: "Basic Phrases",
    description: "Essential everyday phrases for shopping, asking for help, expressing gratitude, and common interactions.",
    timeNeeded: "18 min",
    slug: "beginner-three"
  },
  {
    id: 4,
    title: "Family and Relations",
    description: "Learn vocabulary for family members, relationships, and how to talk about your loved ones.",
    timeNeeded: "22 min",
    slug: "beginner-four"
  },
  {
    id: 5,
    title: "Food and Dining",
    description: "Discover Moroccan cuisine vocabulary, restaurant phrases, and dining etiquette.",
    timeNeeded: "25 min",
    slug: "beginner-five"
  },
  {
    id: 6,
    title: "Shopping and Markets",
    description: "Navigate Moroccan markets and shops with essential vocabulary for buying and bargaining.",
    timeNeeded: "20 min",
    slug: "beginner-six"
  },
  {
    id: 7,
    title: "Transportation and Directions",
    description: "Learn how to ask for directions, use public transport, and navigate Moroccan cities.",
    timeNeeded: "23 min",
    slug: "beginner-seven"
  },
  {
    id: 8,
    title: "Food and Dining",
    description: "Discover Moroccan cuisine and learn essential vocabulary for ordering food, dining out, and discussing meals.",
    timeNeeded: "25 min",
    slug: "beginner-eight"
  },
  {
    id: 9,
    title: "Weather and Seasons",
    description: "Learn to describe weather conditions, seasons, and climate in Morocco for daily conversations.",
    timeNeeded: "20 min",
    slug: "beginner-nine"
  },
  {
    id: 10,
    title: "Health and Body Parts",
    description: "Essential vocabulary for health, body parts, medical situations, and wellness conversations.",
    timeNeeded: "22 min",
    slug: "beginner-ten"
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