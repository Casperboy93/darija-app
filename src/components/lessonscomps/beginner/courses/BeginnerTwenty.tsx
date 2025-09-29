"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/twenty/LessonOverview';
import ReligiousHolidays from '../coursecomps/twenty/ReligiousHolidays';
import NationalHolidays from '../coursecomps/twenty/NationalHolidays';
import HolidayGreetings from '../coursecomps/twenty/HolidayGreetings';
import CelebrationActivities from '../coursecomps/twenty/CelebrationActivities';
import TraditionalFoods from '../coursecomps/twenty/TraditionalFoods';
import PracticeDialogue from '../coursecomps/twenty/PracticeDialogue';
import CelebrationExpressions from '../coursecomps/twenty/CelebrationExpressions';
import CulturalNote from '../coursecomps/twenty/CulturalNote';
import CongratulationsMessage from '../coursecomps/twenty/CongratulationsMessage';

export default function BeginnerTwenty() {
  return (
    <LessonLayout 
      title="Celebrations and Holidays" 
      level="beginner" 
      lessonNumber={20}
      previousLesson="beginner-nineteen"
      nextLesson={undefined}
    >
      <LessonOverview />
      <ReligiousHolidays />
      <NationalHolidays />
      <HolidayGreetings />
      <CelebrationActivities />
      <TraditionalFoods />
      <PracticeDialogue />
      <CelebrationExpressions />
      <CulturalNote />
      <CongratulationsMessage />
    </LessonLayout>
  );
}