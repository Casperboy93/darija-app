"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/twentythree/LessonOverview';
import BodyParts from '../coursecomps/twentythree/BodyParts';
import HealthProblems from '../coursecomps/twentythree/HealthProblems';
import MedicalProfessionals from '../coursecomps/twentythree/MedicalProfessionals';
import PharmacyMedication from '../coursecomps/twentythree/PharmacyMedication';
import EmergencyPhrases from '../coursecomps/twentythree/EmergencyPhrases';
import MedicalDialogue from '../coursecomps/twentythree/MedicalDialogue';

export default function BeginnerTwentyThree() {
  return (
    <LessonLayout 
      title="Health and Medical" 
      level="beginner" 
      lessonNumber={23}
      previousLesson="beginner-twenty-two"
      nextLesson="beginner-twenty-four"
    >
      <LessonOverview />
      <BodyParts />
      <HealthProblems />
      <MedicalProfessionals />
      <PharmacyMedication />
      <EmergencyPhrases />
      <MedicalDialogue />
    </LessonLayout>
  );
}