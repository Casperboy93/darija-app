"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/eleven/LessonOverview';
import RelativeClauses from '../coursecomps/eleven/RelativeClauses';
import ModalVerbsAdvancedConstructions from '../coursecomps/eleven/ModalVerbsAdvancedConstructions';
import CausativeConstructions from '../coursecomps/eleven/CausativeConstructions';
import ComplexSentencePatterns from '../coursecomps/eleven/ComplexSentencePatterns';
import PracticeDialogue from '../coursecomps/eleven/PracticeDialogue';
import CulturalNote from '../coursecomps/eleven/CulturalNote';

export default function IntermediateEleven() {
  return (
    <LessonLayout 
      title="Advanced Grammar Structures" 
      level="intermediate" 
      lessonNumber={11}
      previousLesson="intermediate-ten"
      nextLesson="intermediate-twelve"
    >
      <LessonOverview />
      <RelativeClauses />
      <ModalVerbsAdvancedConstructions />
      <CausativeConstructions />
      <ComplexSentencePatterns />
      <PracticeDialogue />
      <CulturalNote />

      {/* Congratulations */}
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-2">Excellent Work! 🎉</h2>
        <p>You've mastered advanced grammar structures in Darija. You can now construct sophisticated sentences and express complex ideas with confidence!</p>
      </div>
    </LessonLayout>
  );
}