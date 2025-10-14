"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/twenty/LessonOverview';
import GlobalLeadership from '../coursecomps/twenty/GlobalLeadership';
import CrossCulturalCommunication from '../coursecomps/twenty/CrossCulturalCommunication';
import InternationalBusiness from '../coursecomps/twenty/InternationalBusiness';
import DiplomaticRelations from '../coursecomps/twenty/DiplomaticRelations';
import MulticulturalTeams from '../coursecomps/twenty/MulticulturalTeams';
import GlobalCommunication from '../coursecomps/twenty/GlobalCommunication';
import InternationalSummitDialogue from '../coursecomps/twenty/InternationalSummitDialogue';
import CongratulationsSection from '../coursecomps/twenty/CongratulationsSection';

export default function AdvancedTwenty() {
  return (
    <LessonLayout 
      title="Global Leadership and Cross-Cultural Communication" 
      level="advanced" 
      lessonNumber={20}
      previousLesson="advanced-nineteen"
      nextLesson={undefined}
    >
      {/* Lesson Overview */}
      <LessonOverview />
      
      {/* Global Leadership */}
      <GlobalLeadership />

      {/* Cross-Cultural Communication */}
      <CrossCulturalCommunication />

      {/* International Business */}
      <InternationalBusiness />

      {/* Diplomatic Relations */}
      <DiplomaticRelations />

      {/* Multicultural Teams */}
      <MulticulturalTeams />

      {/* Global Communication */}
      <GlobalCommunication />

      {/* Practice Dialogue */}
      <InternationalSummitDialogue />

      {/* Congratulations Section - Always shown for final lesson */}
      <CongratulationsSection />
    </LessonLayout>
  );
}