"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/nineteen/LessonOverview';
import WeatherConditions from '../coursecomps/nineteen/WeatherConditions';
import Seasons from '../coursecomps/nineteen/Seasons';
import WeatherExpressions from '../coursecomps/nineteen/WeatherExpressions';
import TemperatureVocabulary from '../coursecomps/nineteen/TemperatureVocabulary';
import PracticeDialogue from '../coursecomps/nineteen/PracticeDialogue';
import WeatherActivities from '../coursecomps/nineteen/WeatherActivities';
import CulturalNote from '../coursecomps/nineteen/CulturalNote';

export default function BeginnerNineteen() {
  return (
    <LessonLayout 
      title="Weather and Seasons" 
      level="beginner" 
      lessonNumber={19}
      previousLesson="beginner-eighteen"
      nextLesson="beginner-twenty"
    >
      <LessonOverview />
      <WeatherConditions />
      <Seasons />
      <WeatherExpressions />
      <TemperatureVocabulary />
      <PracticeDialogue />
      <WeatherActivities />
      <CulturalNote />
    </LessonLayout>
  );
}