"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/fourteen/LessonOverview';
import CommonHobbies from '../coursecomps/fourteen/CommonHobbies';
import SportsActivities from '../coursecomps/fourteen/SportsActivities';
import LikesDislikes from '../coursecomps/fourteen/LikesDislikes';
import AskingHobbies from '../coursecomps/fourteen/AskingHobbies';
import Entertainment from '../coursecomps/fourteen/Entertainment';
import PracticeDialogue from '../coursecomps/fourteen/PracticeDialogue';
import CulturalNote from '../coursecomps/fourteen/CulturalNote';

export default function BeginnerFourteen() {
  return (
    <LessonLayout 
      title="Hobbies and Activities" 
      level="beginner" 
      lessonNumber={14}
      previousLesson="beginner-thirteen"
      nextLesson="beginner-fifteen"
    >
      <LessonOverview />
      <CommonHobbies />
      <SportsActivities />
      <LikesDislikes />
      <AskingHobbies />
      <Entertainment />
      <PracticeDialogue />
      <CulturalNote />

    </LessonLayout>
  );
}