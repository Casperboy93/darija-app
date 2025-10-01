"use client";

import React from 'react';
import LessonLayout from '../../../common/LessonLayout';
import LessonOverview from './LessonOverview';
import HistoricalPeriods from './HistoricalPeriods';
import GeographicalFeatures from './GeographicalFeatures';
import CulturalLandmarks from './CulturalLandmarks';
import TraditionalCrafts from './TraditionalCrafts';
import ModernMorocco from './ModernMorocco';

export default function BeginnerTwentyNine() {
  return (
    <LessonLayout
      title="Moroccan History and Geography"
      level="beginner"
      lessonNumber={29}
      previousLesson="/lessons/beginner/28"
      nextLesson="/lessons/beginner/30"
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