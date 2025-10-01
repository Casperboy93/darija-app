"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/one/LessonOverview';
import EverydayExpressions from '../coursecomps/one/EverydayExpressions';
import CulturalExpressions from '../coursecomps/one/CulturalExpressions';
import ColorfulExpressions from '../coursecomps/one/ColorfulExpressions';
import PracticeConversation from '../coursecomps/one/PracticeConversation';
import UsageTips from '../coursecomps/one/UsageTips';

export default function AdvancedOne() {
  return (
    <LessonLayout
      title="Common Idiomatic Expressions"
      level="advanced"
      lessonNumber={1}
      nextLesson="advanced-two"
    >
      <LessonOverview />
      <EverydayExpressions />
      <CulturalExpressions />
      <ColorfulExpressions />
      <PracticeConversation />
      <UsageTips />
      
      {/* Congratulations Section */}
      <div className="mt-8 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-lg p-6">
        <div className="text-center">
          <div className="text-4xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-purple-800 mb-2">Excellent Work!</h2>
          <p className="text-gray-700 mb-4">
            You've mastered essential idiomatic expressions in Moroccan Darija. These phrases will help you sound more natural and connect better with native speakers.
          </p>
          <div className="bg-white rounded-lg p-4 border border-purple-100">
            <p className="text-sm text-gray-600">
              <strong>Next:</strong> Continue to Advanced Lesson 2 to learn more complex conversational patterns and cultural nuances.
            </p>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}