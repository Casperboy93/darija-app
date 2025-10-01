"use client";

import React from 'react';
import LessonCard from './LessonCard';
import { advancedLessons, AdvancedLesson } from '../../../data/advancedLessons';

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
          {advancedLessons.map((lesson: AdvancedLesson) => (
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