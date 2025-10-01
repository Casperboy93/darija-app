"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/twentynine/LessonOverview';
import HistoricalPeriods from '../coursecomps/twentynine/HistoricalPeriods';
import GeographicalFeatures from '../coursecomps/twentynine/GeographicalFeatures';
import CulturalLandmarks from '../coursecomps/twentynine/CulturalLandmarks';
import TraditionalCrafts from '../coursecomps/twentynine/TraditionalCrafts';
import ModernMorocco from '../coursecomps/twentynine/ModernMorocco';

export default function BeginnerTwentyNine() {
  return (
    <LessonLayout
      title="Moroccan History and Geography"
      level="beginner"
      lessonNumber={29}
      previousLesson="beginner-twenty-eight"
      nextLesson="beginner-thirty"
    >
      <LessonOverview />
      <HistoricalPeriods />
      <GeographicalFeatures />
      <CulturalLandmarks />
      <TraditionalCrafts />
      <ModernMorocco />
    </LessonLayout>
  );
}