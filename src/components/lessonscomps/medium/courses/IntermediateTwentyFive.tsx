"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/twentyfive/LessonOverview';
import WorkplaceVocabulary from '../coursecomps/twentyfive/WorkplaceVocabulary';
import OfficeCommunication from '../coursecomps/twentyfive/OfficeCommunication';
import MeetingsTasks from '../coursecomps/twentyfive/MeetingsTasks';
import EmailsReports from '../coursecomps/twentyfive/EmailsReports';
import PracticeDialogue from '../coursecomps/twentyfive/PracticeDialogue';

export default function IntermediateTwentyFive() {
  return (
    <LessonLayout 
      title="Workplace and Office Communication" 
      level="intermediate" 
      lessonNumber={25}
      previousLesson="intermediate-twenty-four"
      nextLesson="intermediate-twenty-six"
    >
      <LessonOverview />
      <WorkplaceVocabulary />
      <OfficeCommunication />
      <MeetingsTasks />
      <EmailsReports />
      <PracticeDialogue />

      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 p-8 rounded-lg text-center">
        <div className="text-5xl mb-3">💼</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Nice work!</h2>
        <p className="text-gray-700">
          You can now handle office chats, meetings, and email/report language in Darija.
        </p>
      </div>
    </LessonLayout>
  );
}