"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/two/LessonOverview';
import MajorRegionalDialects from '../coursecomps/two/MajorRegionalDialects';
import PronunciationDifferences from '../coursecomps/two/PronunciationDifferences';
import VocabularyVariations from '../coursecomps/two/VocabularyVariations';
import CulturalInfluences from '../coursecomps/two/CulturalInfluences';
import RegionalConversationExamples from '../coursecomps/two/RegionalConversationExamples';
import AdaptationTips from '../coursecomps/two/AdaptationTips';

export default function AdvancedTwo() {
  return (
    <LessonLayout
      title="Regional Variations of Darija"
      level="advanced"
      lessonNumber={2}
      previousLesson="/lessons/advanced/1"
      nextLesson="/lessons/advanced/3"
    >
      <LessonOverview />
      <MajorRegionalDialects />
      <PronunciationDifferences />
      <VocabularyVariations />
      <CulturalInfluences />
      <RegionalConversationExamples />
      <AdaptationTips />
      
      {/* Congratulations Section */}
      <div className="mt-12 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg border border-purple-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">🎉 Excellent Work!</h2>
        <p className="text-gray-700 mb-4">
          You've completed an advanced lesson on regional variations of Darija! Understanding these differences 
          will help you communicate more effectively across Morocco and appreciate the rich linguistic diversity 
          of the country.
        </p>
        <div className="bg-white p-4 rounded-lg border border-purple-200">
          <p className="text-sm text-gray-600">
            <strong>Next:</strong> Continue to Advanced Lesson 3 to explore more complex aspects of Moroccan Arabic, 
            or review this lesson to reinforce your understanding of regional variations.
          </p>
        </div>
      </div>
    </LessonLayout>
  );
}