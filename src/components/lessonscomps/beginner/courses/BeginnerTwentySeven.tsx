"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/twentyseven/LessonOverview';
import WorkplaceVocabulary from '../coursecomps/twentyseven/WorkplaceVocabulary';
import BusinessMeetings from '../coursecomps/twentyseven/BusinessMeetings';
import ProfessionalEmails from '../coursecomps/twentyseven/ProfessionalEmails';
import JobInterviews from '../coursecomps/twentyseven/JobInterviews';
import NetworkingPhrases from '../coursecomps/twentyseven/NetworkingPhrases';

export default function BeginnerTwentySeven() {
  return (
    <LessonLayout 
      title="Business and Work Vocabulary" 
      level="beginner" 
      lessonNumber={27}
      previousLesson="beginner-twenty-six"
      nextLesson="beginner-twenty-eight"
    >
      <LessonOverview />
      <WorkplaceVocabulary />
      <BusinessMeetings />
      <ProfessionalEmails />
      <JobInterviews />
      <NetworkingPhrases />
    </LessonLayout>
  );
}