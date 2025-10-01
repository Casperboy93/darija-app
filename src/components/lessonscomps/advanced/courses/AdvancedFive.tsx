"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/five/LessonOverview';
import TechnologyVocabulary from '../coursecomps/five/TechnologyVocabulary';
import SocialMediaExpressions from '../coursecomps/five/SocialMediaExpressions';
import InternetSlang from '../coursecomps/five/InternetSlang';
import DigitalCommunicationPatterns from '../coursecomps/five/DigitalCommunicationPatterns';
import TechTroubleshooting from '../coursecomps/five/TechTroubleshooting';
import PracticeConversation from '../coursecomps/five/PracticeConversation';
import ModernUsageTips from '../coursecomps/five/ModernUsageTips';

export default function AdvancedFive() {
  return (
    <LessonLayout 
      title="Media & Technology" 
      level="advanced" 
      lessonNumber={5}
    >
      <LessonOverview />
      <TechnologyVocabulary />
      <SocialMediaExpressions />
      <InternetSlang />
      <DigitalCommunicationPatterns />
      <TechTroubleshooting />
      <PracticeConversation />
      <ModernUsageTips />
      
      {/* Congratulations Section */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 mt-8">
        <div className="flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-800">Mabrook! Congratulations!</h2>
        </div>
        <p className="text-gray-700 mb-4">
          You've successfully mastered modern Darija vocabulary for media and technology! You can now confidently navigate digital communication, use social media expressions, and troubleshoot tech issues in Moroccan Arabic.
        </p>
        <div className="bg-white rounded-lg p-4 border border-green-100">
          <p className="text-sm text-gray-600 mb-2">🎯 <strong>What you've learned:</strong></p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Essential technology and digital vocabulary</li>
            <li>• Social media expressions and internet slang</li>
            <li>• Digital communication patterns and abbreviations</li>
            <li>• Tech troubleshooting vocabulary</li>
          </ul>
        </div>
      </div>
    </LessonLayout>
  );
}