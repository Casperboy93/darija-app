"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/sixteen/LessonOverview';
import TravelPlanningBooking from '../coursecomps/sixteen/TravelPlanningBooking';
import MoroccanTouristDestinations from '../coursecomps/sixteen/MoroccanTouristDestinations';
import HotelAccommodation from '../coursecomps/sixteen/HotelAccommodation';
import CulturalTourismHeritage from '../coursecomps/sixteen/CulturalTourismHeritage';
import TransportationTourists from '../coursecomps/sixteen/TransportationTourists';
import TouristServicesInformation from '../coursecomps/sixteen/TouristServicesInformation';
import PracticeDialogue from '../coursecomps/sixteen/PracticeDialogue';
import CulturalNote from '../coursecomps/sixteen/CulturalNote';

export default function IntermediateSixteen() {
  return (
    <LessonLayout 
      title="Travel and Tourism" 
      level="intermediate" 
      lessonNumber={16}
      previousLesson="intermediate-fifteen"
      nextLesson="intermediate-seventeen"
    >
      <LessonOverview />

      <TravelPlanningBooking />

      <MoroccanTouristDestinations />

      <HotelAccommodation />

      <CulturalTourismHeritage />

      <TransportationTourists />

      <TouristServicesInformation />

      <PracticeDialogue />

      <CulturalNote />
    </LessonLayout>
  );
}