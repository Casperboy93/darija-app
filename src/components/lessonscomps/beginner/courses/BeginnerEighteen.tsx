"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/eighteen/LessonOverview';
import ModesOfTransportation from '../coursecomps/eighteen/ModesOfTransportation';
import TransportationExpressions from '../coursecomps/eighteen/TransportationExpressions';
import PlacesDestinations from '../coursecomps/eighteen/PlacesDestinations';
import DirectionsVocabulary from '../coursecomps/eighteen/DirectionsVocabulary';
import PracticeDialogue from '../coursecomps/eighteen/PracticeDialogue';
import CommonTransportationPhrases from '../coursecomps/eighteen/CommonTransportationPhrases';
import CulturalNote from '../coursecomps/eighteen/CulturalNote';

export default function BeginnerEighteen() {
  return (
    <LessonLayout 
      title="Transportation" 
      level="beginner" 
      lessonNumber={18}
      previousLesson="beginner-seventeen"
      nextLesson="beginner-nineteen"
    >
      <LessonOverview />
      <ModesOfTransportation />
      <TransportationExpressions />
      <PlacesDestinations />
      <DirectionsVocabulary />
      <PracticeDialogue />
      <CommonTransportationPhrases />
      <CulturalNote />
    </LessonLayout>
  );
}