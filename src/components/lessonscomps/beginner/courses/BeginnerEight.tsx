"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/eight/LessonOverview';
import MoroccanFoods from '../coursecomps/eight/MoroccanFoods';
import DrinksBeverages from '../coursecomps/eight/DrinksBeverages';
import RestaurantPhrases from '../coursecomps/eight/RestaurantPhrases';
import PracticeDialogue from '../coursecomps/eight/PracticeDialogue';
import FoodCulture from '../coursecomps/eight/FoodCulture';
import PracticeExercise from '../coursecomps/eight/PracticeExercise';

export default function BeginnerEight() {
  return (
    <LessonLayout 
      title="Food and Dining" 
      level="beginner" 
      lessonNumber={8}
      previousLesson="beginner-seven"
      nextLesson="beginner-nine"
    >
      <LessonOverview />
      <MoroccanFoods />
      <DrinksBeverages />
      <RestaurantPhrases />
      <PracticeDialogue />
      <FoodCulture />
      <PracticeExercise />
    </LessonLayout>
  );
}