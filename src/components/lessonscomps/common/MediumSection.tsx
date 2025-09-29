"use client";

import React from 'react';
import LessonCard from './LessonCard';

const intermediateLessons = [
  {
    id: 1,
    title: "Past Tense",
    description: "Learn how to talk about past events and experiences in Darija",
    timeNeeded: "25 min",
    slug: "intermediate-one"
  },
  {
    id: 2,
    title: "Future Tense",
    description: "Express future plans and intentions using Darija future tense",
    timeNeeded: "25 min",
    slug: "intermediate-two"
  },
  {
    id: 3,
    title: "Complex Sentences",
    description: "Build sophisticated sentences with multiple clauses",
    timeNeeded: "30 min",
    slug: "intermediate-three"
  },
  {
    id: 4,
    title: "Emotions and Feelings",
    description: "Express complex emotions and psychological states",
    timeNeeded: "25 min",
    slug: "intermediate-four"
  },
  {
    id: 5,
    title: "Giving Advice",
    description: "Learn to give and receive advice in various situations",
    timeNeeded: "25 min",
    slug: "intermediate-five"
  },
  {
    id: 6,
    title: "Describing People",
    description: "Detailed descriptions of personality and physical appearance",
    timeNeeded: "30 min",
    slug: "intermediate-six"
  },
  {
    id: 7,
    title: "Making Complaints",
    description: "Express dissatisfaction and make formal complaints",
    timeNeeded: "25 min",
    slug: "intermediate-seven"
  },
  {
    id: 8,
    title: "Storytelling",
    description: "Learn narrative techniques and storytelling in Darija",
    timeNeeded: "35 min",
    slug: "intermediate-eight"
  },
  {
    id: 9,
    title: "Conditional Sentences",
    description: "Master if-then statements and hypothetical situations",
    timeNeeded: "30 min",
    slug: "intermediate-nine"
  },
  {
    id: 10,
    title: "Cultural Discussions",
    description: "Engage in conversations about Moroccan culture and traditions",
    timeNeeded: "35 min",
    slug: "intermediate-ten"
  },
  {
    id: 11,
    title: "Advanced Grammar Structures",
    description: "Master complex grammatical patterns and advanced sentence structures",
    timeNeeded: "40 min",
    slug: "intermediate-eleven"
  },
  {
    id: 12,
    title: "Business and Professional Communication",
    description: "Learn formal language for workplace and business interactions",
    timeNeeded: "35 min",
    slug: "intermediate-twelve"
  },
  {
    id: 13,
    title: "Cultural Customs and Etiquette",
    description: "Understand social norms, customs, and proper etiquette in Morocco",
    timeNeeded: "30 min",
    slug: "intermediate-thirteen"
  },
  {
    id: 14,
    title: "Advanced Conversation Skills",
    description: "Develop sophisticated discussion and debate techniques",
    timeNeeded: "40 min",
    slug: "intermediate-fourteen"
  },
  {
    id: 15,
    title: "Media and Technology",
    description: "Navigate modern technology and media discussions in Darija",
    timeNeeded: "35 min",
    slug: "intermediate-fifteen"
  },
  {
    id: 16,
    title: "Travel and Tourism",
    description: "Master travel vocabulary and tourist interactions in Morocco",
    timeNeeded: "35 min",
    slug: "intermediate-sixteen"
  },
  {
    id: 17,
    title: "Education and Learning",
    description: "Discuss academic topics, learning methods, and educational systems",
    timeNeeded: "35 min",
    slug: "intermediate-seventeen"
  },
  {
    id: 18,
    title: "Environment and Nature",
    description: "Learn vocabulary for environmental topics and nature conservation",
    timeNeeded: "35 min",
    slug: "intermediate-eighteen"
  },
  {
    id: 19,
    title: "Politics and Current Events",
    description: "Engage in political discussions and current affairs conversations",
    timeNeeded: "40 min",
    slug: "intermediate-nineteen"
  },
  {
    id: 20,
    title: "Advanced Cultural Topics",
    description: "Explore sophisticated cultural concepts and philosophical discussions",
    timeNeeded: "45 min",
    slug: "intermediate-twenty"
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