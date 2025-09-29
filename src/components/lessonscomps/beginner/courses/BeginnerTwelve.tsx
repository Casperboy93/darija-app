"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/twelve/LessonOverview';
import WeatherConditions from '../coursecomps/twelve/WeatherConditions';
import Seasons from '../coursecomps/twelve/Seasons';
import WeatherExpressions from '../coursecomps/twelve/WeatherExpressions';
import TemperatureExpressions from '../coursecomps/twelve/TemperatureExpressions';
import PracticeDialogue from '../coursecomps/twelve/PracticeDialogue';
import CulturalNote from '../coursecomps/twelve/CulturalNote';

export default function BeginnerTwelve() {
  return (
    <LessonLayout 
      title="Weather and Seasons" 
      level="beginner" 
      lessonNumber={12}
      previousLesson="beginner-eleven"
      nextLesson="beginner-thirteen"
    >
      <LessonOverview />
      <WeatherConditions />
      <Seasons />
      <WeatherExpressions />
      <TemperatureExpressions />
      <PracticeDialogue />
      <CulturalNote />
    </LessonLayout>
  );
}