"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/six/LessonOverview';
import AdvancedTransportation from '../coursecomps/six/AdvancedTransportation';
import TravelPlanning from '../coursecomps/six/TravelPlanning';
import BookingReservations from '../coursecomps/six/BookingReservations';
import PracticeExercise from '../coursecomps/six/PracticeExercise';

export default function IntermediateSix() {
  return (
    <LessonLayout 
      title="Travel and Directions" 
      level="intermediate" 
      lessonNumber={6}
      previousLesson="intermediate-five"
      nextLesson="intermediate-seven"
    >
      <LessonOverview />
      <AdvancedTransportation />
      <TravelPlanning />
      <BookingReservations />
      <PracticeExercise />
    </LessonLayout>
  );
}