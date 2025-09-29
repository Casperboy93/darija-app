"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/fourteen/LessonOverview';
import DebateArgumentation from '../coursecomps/fourteen/DebateArgumentation';
import StorytellingNarratives from '../coursecomps/fourteen/StorytellingNarratives';
import PersuasionNegotiation from '../coursecomps/fourteen/PersuasionNegotiation';
import ComplexDiscussionTopics from '../coursecomps/fourteen/ComplexDiscussionTopics';
import AdvancedConversationTechniques from '../coursecomps/fourteen/AdvancedConversationTechniques';
import PracticeDialogue from '../coursecomps/fourteen/PracticeDialogue';
import CulturalNote from '../coursecomps/fourteen/CulturalNote';

export default function IntermediateFourteen() {
  return (
    <LessonLayout 
      title="Advanced Conversation Skills" 
      level="intermediate" 
      lessonNumber={14}
      previousLesson="intermediate-thirteen"
      nextLesson="intermediate-fifteen"
    >
      <LessonOverview />
      <DebateArgumentation />
      <StorytellingNarratives />
      <PersuasionNegotiation />
      <ComplexDiscussionTopics />
      <AdvancedConversationTechniques />
      <PracticeDialogue />
      <CulturalNote />

      {/* Congratulations */}
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-2">Congratulations! 🎉</h2>
        <p>You've completed Lesson 14: Advanced Conversation Skills</p>
      </div>
    </LessonLayout>
  );
}