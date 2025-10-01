"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/three/LessonOverview';
import SocialEtiquette from '../coursecomps/three/SocialEtiquette';
import ReligiousExpressions from '../coursecomps/three/ReligiousExpressions';
import HospitalityLanguage from '../coursecomps/three/HospitalityLanguage';
import FormalVsInformal from '../coursecomps/three/FormalVsInformal';
import CulturalSensitivityTips from '../coursecomps/three/CulturalSensitivityTips';

export default function AdvancedThree() {
  return (
    <LessonLayout
      title="Cultural Nuances and Social Context"
      level="advanced"
      lessonNumber={3}
    >
      <LessonOverview />
      <SocialEtiquette />
      <ReligiousExpressions />
      <HospitalityLanguage />
      <FormalVsInformal />
      <CulturalSensitivityTips />
      
      {/* Congratulations Section */}
      <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <div className="bg-green-100 rounded-full p-2 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Excellent Work!</h2>
        </div>
        <p className="text-gray-700 mb-4">
          You've successfully completed Advanced Lesson 3! You now understand the cultural nuances and social contexts that make Darija communication truly authentic and respectful.
        </p>
        <div className="bg-white rounded-lg p-4">
          <h3 className="font-bold text-gray-800 mb-2">Key Achievements:</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>✓ Mastered social etiquette and hierarchy in language</li>
            <li>✓ Learned appropriate religious and cultural expressions</li>
            <li>✓ Understanding of formal vs informal contexts</li>
            <li>✓ Developed cultural sensitivity and respect</li>
            <li>✓ Acquired hospitality language and customs</li>
          </ul>
        </div>
      </div>
    </LessonLayout>
  );
}