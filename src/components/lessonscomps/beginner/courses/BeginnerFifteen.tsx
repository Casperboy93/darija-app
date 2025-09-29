"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/fifteen/LessonOverview';
import BasicEmotions from '../coursecomps/fifteen/BasicEmotions';
import PhysicalStates from '../coursecomps/fifteen/PhysicalStates';
import AskingFeelings from '../coursecomps/fifteen/AskingFeelings';
import ExpressingFeelings from '../coursecomps/fifteen/ExpressingFeelings';
import EmotionalResponses from '../coursecomps/fifteen/EmotionalResponses';
import IntensityEmotions from '../coursecomps/fifteen/IntensityEmotions';
import PracticeDialogue from '../coursecomps/fifteen/PracticeDialogue';
import CompletionMessage from '../coursecomps/fifteen/CompletionMessage';
import CulturalNote from '../coursecomps/fifteen/CulturalNote';

export default function BeginnerFifteen() {
  return (
    <LessonLayout 
      title="Emotions and Feelings" 
      level="beginner" 
      lessonNumber={15}
      previousLesson="beginner-fourteen"
      nextLesson="beginner-sixteen"
    >
      <LessonOverview />
      <BasicEmotions />
      <PhysicalStates />
      <AskingFeelings />
      <ExpressingFeelings />
      <EmotionalResponses />
      <IntensityEmotions />
      <PracticeDialogue />
      <CompletionMessage />
      <CulturalNote />
    </LessonLayout>
  );
}