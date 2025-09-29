"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/eight/LessonOverview';
import BodyPartsHealth from '../coursecomps/eight/BodyPartsHealth';
import CommonSymptoms from '../coursecomps/eight/CommonSymptoms';
import MedicalProfessionals from '../coursecomps/eight/MedicalProfessionals';
import DoctorVisitConversation from '../coursecomps/eight/DoctorVisitConversation';
import PharmacyVocabulary from '../coursecomps/eight/PharmacyVocabulary';
import EmergencySituations from '../coursecomps/eight/EmergencySituations';
import AppointmentsInsurance from '../coursecomps/eight/AppointmentsInsurance';
import PracticeExercise from '../coursecomps/eight/PracticeExercise';
import CulturalHealthTips from '../coursecomps/eight/CulturalHealthTips';

export default function IntermediateEight() {
  return (
    <LessonLayout 
      title="Health and Medical" 
      level="intermediate" 
      lessonNumber={8}
      previousLesson="intermediate-seven"
      nextLesson="intermediate-nine"
    >
      <LessonOverview />
      <BodyPartsHealth />
      <CommonSymptoms />
      <MedicalProfessionals />
      <DoctorVisitConversation />
      <PharmacyVocabulary />
      <EmergencySituations />
      <AppointmentsInsurance />
      <PracticeExercise />
      <CulturalHealthTips />

      {/* Congratulations */}
      <div className="bg-gradient-to-r from-red-400 to-pink-500 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Health Mastery Achieved!
        </h2>
        <p className="text-lg">You've mastered essential health and medical vocabulary in Darija! You can now confidently communicate about health issues, visit doctors, and handle medical situations in Morocco. Your wellbeing is in good hands!</p>
      </div>
    </LessonLayout>
  );
}