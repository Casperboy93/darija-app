"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/fifteen/LessonOverview';
import TechnologyDigitalDevices from '../coursecomps/fifteen/TechnologyDigitalDevices';
import SocialMediaOnlineCommunication from '../coursecomps/fifteen/SocialMediaOnlineCommunication';
import NewsMediaVocabulary from '../coursecomps/fifteen/NewsMediaVocabulary';
import DigitalCommunication from '../coursecomps/fifteen/DigitalCommunication';
import TechnologyProblemsSolutions from '../coursecomps/fifteen/TechnologyProblemsSolutions';
import PracticeDialogue from '../coursecomps/fifteen/PracticeDialogue';
import CulturalNote from '../coursecomps/fifteen/CulturalNote';

export default function IntermediateFifteen() {
  return (
    <LessonLayout 
      title="Media and Technology" 
      level="intermediate" 
      lessonNumber={15}
      previousLesson="intermediate-fourteen"
      nextLesson="intermediate-sixteen"
    >
      <LessonOverview />
      <TechnologyDigitalDevices />
      <SocialMediaOnlineCommunication />
      <NewsMediaVocabulary />
      <DigitalCommunication />
      <TechnologyProblemsSolutions />
      <PracticeDialogue />
      <CulturalNote />

      {/* Congratulations */}
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-2">Excellent Work! 🎉</h2>
        <p>You've mastered media and technology vocabulary in Darija. You can now navigate the digital world and discuss modern communication with confidence!</p>
      </div>
    </LessonLayout>
  );
}