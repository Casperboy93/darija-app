"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/nine/LessonOverview';
import WeatherConditions from '../coursecomps/nine/WeatherConditions';
import TemperatureExpressions from '../coursecomps/nine/TemperatureExpressions';
import SeasonsInMorocco from '../coursecomps/nine/SeasonsInMorocco';
import WeatherQuestions from '../coursecomps/nine/WeatherQuestions';
import PracticeDialogue from '../coursecomps/nine/PracticeDialogue';
import ClimateTips from '../coursecomps/nine/ClimateTips';
import PracticeExercise from '../coursecomps/nine/PracticeExercise';

export default function BeginnerNine() {
  return (
    <LessonLayout 
      title="Weather and Seasons" 
      level="beginner" 
      lessonNumber={9}
      previousLesson="beginner-eight"
      nextLesson="beginner-ten"
    >
      <LessonOverview />
      <WeatherConditions />
      <TemperatureExpressions />
      <SeasonsInMorocco />
      <WeatherQuestions />
      <PracticeDialogue />
      <ClimateTips />
      <PracticeExercise />
    </LessonLayout>
  );
}