"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';
import LessonOverview from './coursecomps/twentytwo/LessonOverview';
import HotelAccommodation from './coursecomps/twentytwo/HotelAccommodation';
import TouristAttractions from './coursecomps/twentytwo/TouristAttractions';
import TouristTransportation from './coursecomps/twentytwo/TouristTransportation';
import PracticeDialogue from './coursecomps/twentytwo/PracticeDialogue';
import CulturalTips from './coursecomps/twentytwo/CulturalTips';

export default function BeginnerTwentyTwo() {
  return (
    <LessonLayout 
      title="Travel and Tourism" 
      level="beginner" 
      lessonNumber={22}
      previousLesson="beginner-twenty-one"
      nextLesson="beginner-twenty-three"
    >
      <LessonOverview />
      <HotelAccommodation />
      <TouristAttractions />
      <TouristTransportation />
      <PracticeDialogue />
      <CulturalTips />
    </LessonLayout>
  );
}