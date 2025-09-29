"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/seven/LessonOverview';
import ProfessionalVocabulary from '../coursecomps/seven/ProfessionalVocabulary';
import JobTitles from '../coursecomps/seven/JobTitles';
import BusinessMeetingPhrases from '../coursecomps/seven/BusinessMeetingPhrases';
import JobInterviewConversation from '../coursecomps/seven/JobInterviewConversation';
import WorkplaceCommunication from '../coursecomps/seven/WorkplaceCommunication';
import BusinessEtiquette from '../coursecomps/seven/BusinessEtiquette';
import PracticeExercise from '../coursecomps/seven/PracticeExercise';

export default function IntermediateSeven() {
  return (
    <LessonLayout
      title="Business and Work"
      level="intermediate"
      lessonNumber={7}
      nextLesson="/lessons/intermediate/8"
      previousLesson="/lessons/intermediate/6"
    >
      <LessonOverview />
      <ProfessionalVocabulary />
      <JobTitles />
      <BusinessMeetingPhrases />
      <JobInterviewConversation />
      <WorkplaceCommunication />
      <BusinessEtiquette />
      <PracticeExercise />

      {/* Congratulations */}
      <div className="bg-gradient-to-r from-blue-400 to-purple-500 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Professional Achievement!
        </h2>
        <p className="text-lg">You've mastered business and workplace vocabulary in Darija! You can now confidently participate in professional conversations, job interviews, and business meetings. Your career prospects in Morocco just got much brighter!</p>
      </div>
    </LessonLayout>
  );
}