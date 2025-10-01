"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/eight/LessonOverview';
import NarrativeVocabulary from '../coursecomps/eight/NarrativeVocabulary';
import TraditionalOpenings from '../coursecomps/eight/TraditionalOpenings';
import DescriptiveLanguage from '../coursecomps/eight/DescriptiveLanguage';
import StoryExamples from '../coursecomps/eight/StoryExamples';
import NarrativeTechniques from '../coursecomps/eight/NarrativeTechniques';
import InteractiveStorytelling from '../coursecomps/eight/InteractiveStorytelling';
import PracticeExercises from '../coursecomps/eight/PracticeExercises';
import StorytellingTips from '../coursecomps/eight/StorytellingTips';

export default function AdvancedEight() {
  return (
    <LessonLayout 
      title="Storytelling & Narrative Mastery" 
      level="advanced" 
      lessonNumber={8}
      previousLesson="advanced-seven"
      nextLesson="advanced-nine"
    >
      <LessonOverview />
      <NarrativeVocabulary />
      <TraditionalOpenings />
      <DescriptiveLanguage />
      <StoryExamples />
      <NarrativeTechniques />
      <InteractiveStorytelling />
      <PracticeExercises />
      <StorytellingTips />
      
      {/* Congratulations Section */}
      <div className="mt-12 bg-gradient-to-r from-purple-500 to-indigo-600 text-black p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">🎉 Storytelling Master!</h2>
          <p className="text-xl mb-4">You've completed Advanced Lesson 8: Storytelling & Narrative Mastery!</p>
          <p className="text-lg opacity-90">
            You now have the skills to captivate audiences with authentic Darija storytelling, from traditional folktales to modern narratives.
          </p>
          <div className="mt-6 inline-flex items-center px-6 py-3 bg-white bg-opacity-20 rounded-full">
            <span className="text-lg font-semibold">Ready for Advanced Lesson 9? 📚</span>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}