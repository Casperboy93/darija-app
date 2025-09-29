"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/thirteen/LessonOverview';
import Transportation from '../coursecomps/thirteen/Transportation';
import DirectionWords from '../coursecomps/thirteen/DirectionWords';
import AskingDirections from '../coursecomps/thirteen/AskingDirections';
import GivingDirections from '../coursecomps/thirteen/GivingDirections';
import TransportationPhrases from '../coursecomps/thirteen/TransportationPhrases';
import PracticeDialogue from '../coursecomps/thirteen/PracticeDialogue';
import CulturalNote from '../coursecomps/thirteen/CulturalNote';

export default function BeginnerThirteen() {
  return (
    <LessonLayout 
      title="Transportation and Directions" 
      level="beginner" 
      lessonNumber={13}
      previousLesson="beginner-twelve"
      nextLesson="beginner-fourteen"
    >
      <LessonOverview />
      <Transportation />
      <DirectionWords />
      <AskingDirections />
      <GivingDirections />
      <TransportationPhrases />
      <PracticeDialogue />
      <CulturalNote />
    </LessonLayout>
  );
}