"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/nineteen/LessonOverview';
import GovernmentPoliticalSystem from '../coursecomps/nineteen/GovernmentPoliticalSystem';
import PoliticalPartiesElections from '../coursecomps/nineteen/PoliticalPartiesElections';
import CurrentEventsNews from '../coursecomps/nineteen/CurrentEventsNews';
import InternationalRelations from '../coursecomps/nineteen/InternationalRelations';
import SocialEconomicIssues from '../coursecomps/nineteen/SocialEconomicIssues';
import RightsFreedoms from '../coursecomps/nineteen/RightsFreedoms';
import PoliticalOpinionExpressions from '../coursecomps/nineteen/PoliticalOpinionExpressions';
import PracticeDialogue from '../coursecomps/nineteen/PracticeDialogue';
import CulturalNote from '../coursecomps/nineteen/CulturalNote';

export default function IntermediateNineteen() {
  return (
    <LessonLayout 
      title="Politics and Current Events" 
      level="intermediate" 
      lessonNumber={19}
      previousLesson="intermediate-eighteen"
      nextLesson="intermediate-twenty"
    >
      <LessonOverview />

      <GovernmentPoliticalSystem />

      <PoliticalPartiesElections />

      <CurrentEventsNews />

      <InternationalRelations />

      <SocialEconomicIssues />

      <RightsFreedoms />

      <PoliticalOpinionExpressions />

      <PracticeDialogue />

      <CulturalNote />
    </LessonLayout>
  );
}