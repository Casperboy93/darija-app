"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/twentyone/LessonOverview';
import DomesticAnimals from '../coursecomps/twentyone/DomesticAnimals';
import WildAnimals from '../coursecomps/twentyone/WildAnimals';
import PlantsNature from '../coursecomps/twentyone/PlantsNature';
import PracticeExercise from '../coursecomps/twentyone/PracticeExercise';
import CulturalNote from '../coursecomps/twentyone/CulturalNote';

export default function BeginnerTwentyOne() {
  return (
    <LessonLayout 
      title="Animals and Nature" 
      level="beginner" 
      lessonNumber={21}
      previousLesson="beginner-twenty"
      nextLesson="beginner-twenty-two"
    >
      <LessonOverview />
      <DomesticAnimals />
      <WildAnimals />
      <PlantsNature />
      <PracticeExercise />
      <CulturalNote />
    </LessonLayout>
  );
}