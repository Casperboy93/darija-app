"use client";

import React from 'react';
import LessonCard from './LessonCard';
import { beginnerLessons, BeginnerLesson } from '../../../data/beginnerLessons';

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
          {beginnerLessons.map((lesson: BeginnerLesson) => (
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