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
  },
  {
    id: 6,
    title: "Professional Communication",
    description: "Master business Darija for professional settings, meetings, and formal communications.",
    timeNeeded: "50 min",
    slug: "advanced-six"
  },
  {
    id: 7,
    title: "Academic & Intellectual Discourse",
    description: "Engage in sophisticated academic discussions and express complex intellectual concepts.",
    timeNeeded: "55 min",
    slug: "advanced-seven"
  },
  {
    id: 8,
    title: "Storytelling & Narrative Mastery",
    description: "Perfect the art of storytelling with rich vocabulary and traditional narrative techniques.",
    timeNeeded: "45 min",
    slug: "advanced-eight"
  },
  {
    id: 9,
    title: "Philosophy & Abstract Thinking",
    description: "Explore philosophical concepts and engage in deep, abstract conversations in Darija.",
    timeNeeded: "60 min",
    slug: "advanced-nine"
  },
  {
    id: 10,
    title: "Mastery & Fluency Assessment",
    description: "Comprehensive assessment to evaluate your complete mastery of Moroccan Darija.",
    timeNeeded: "75 min",
    slug: "advanced-ten"
  },
  {
    id: 11,
    title: "Literary and Poetic Expression",
    description: "Master the art of literary expression and classical poetry in Darija with sophisticated vocabulary.",
    timeNeeded: "50 min",
    slug: "advanced-eleven"
  },
  {
    id: 12,
    title: "Diplomatic and Formal Communication",
    description: "Learn formal diplomatic language, official correspondence, and high-level negotiation skills.",
    timeNeeded: "55 min",
    slug: "advanced-twelve"
  },
  {
    id: 13,
    title: "Scientific and Technical Discourse",
    description: "Engage in scientific discussions and master technical terminology across various fields.",
    timeNeeded: "60 min",
    slug: "advanced-thirteen"
  },
  {
    id: 14,
    title: "Media and Journalism",
    description: "Master media language, news reporting, and journalistic writing in professional contexts.",
    timeNeeded: "45 min",
    slug: "advanced-fourteen"
  },
  {
    id: 15,
    title: "Philosophy and Ethics",
    description: "Explore deep philosophical concepts and ethical discussions with advanced vocabulary.",
    timeNeeded: "65 min",
    slug: "advanced-fifteen"
  },
  {
    id: 16,
    title: "International Relations and Diplomacy",
    description: "Navigate complex international relations and diplomatic protocols with confidence.",
    timeNeeded: "55 min",
    slug: "advanced-sixteen"
  },
  {
    id: 17,
    title: "Environmental Science and Sustainability",
    description: "Discuss environmental issues, climate change, and sustainability with expert-level vocabulary.",
    timeNeeded: "50 min",
    slug: "advanced-seventeen"
  },
  {
    id: 18,
    title: "Healthcare and Medical Research",
    description: "Master medical terminology and engage in healthcare discussions at a professional level.",
    timeNeeded: "60 min",
    slug: "advanced-eighteen"
  },
  {
    id: 19,
    title: "Artificial Intelligence and Technology",
    description: "Navigate cutting-edge technology discussions including AI, robotics, and emerging innovations.",
    timeNeeded: "55 min",
    slug: "advanced-nineteen"
  },
  {
    id: 20,
    title: "Global Leadership and Cross-Cultural Communication",
    description: "Master global leadership skills and cross-cultural communication for international contexts.",
    timeNeeded: "70 min",
    slug: "advanced-twenty"
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