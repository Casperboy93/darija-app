"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/twentyfour/LessonOverview';
import TechnologyDevices from '../coursecomps/twentyfour/TechnologyDevices';
import InternetSocialMedia from '../coursecomps/twentyfour/InternetSocialMedia';
import PhoneCommunication from '../coursecomps/twentyfour/PhoneCommunication';
import ComputerSoftware from '../coursecomps/twentyfour/ComputerSoftware';
import DigitalServices from '../coursecomps/twentyfour/DigitalServices';
import TechDialogue from '../coursecomps/twentyfour/TechDialogue';

export default function BeginnerTwentyFour() {
  return (
    <LessonLayout 
      title="Technology and Communication" 
      level="beginner" 
      lessonNumber={24}
      previousLesson="beginner-twenty-three"
      nextLesson="beginner-twenty-five"
    >
      <LessonOverview />
      <TechnologyDevices />
      <InternetSocialMedia />
      <PhoneCommunication />
      <ComputerSoftware />
      <DigitalServices />
      <TechDialogue />
    </LessonLayout>
  );
}