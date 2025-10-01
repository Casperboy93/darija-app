"use client";

import React from 'react';
import LessonCard from './LessonCard';
import { intermediateLessons, IntermediateLesson } from '../../../data/intermediateLessons';

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
          {intermediateLessons.map((lesson: IntermediateLesson) => (
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