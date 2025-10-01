"use client";

import React, { useState } from 'react';
import LessonLayout from '../../common/LessonLayout';
import MasteryOverview from '../coursecomps/ten/MasteryOverview';
import ConversationalMastery from '../coursecomps/ten/ConversationalMastery';
import GlobalCommunication from '../coursecomps/ten/GlobalCommunication';
import LiteraryExpression from '../coursecomps/ten/LiteraryExpression';
import PhilosophicalDiscourse from '../coursecomps/ten/PhilosophicalDiscourse';
import FinalAssessment from '../coursecomps/ten/FinalAssessment';
import Certification from '../coursecomps/ten/Certification';

export default function AdvancedTen() {
  const [completedChallenges, setCompletedChallenges] = useState<number[]>([]);
  const [masteryScore, setMasteryScore] = useState(0);

  const toggleChallenge = (index: number) => {
    setCompletedChallenges(prev => {
      const newCompleted = prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index];
      
      // Update mastery score based on completed challenges (30 total challenges)
      setMasteryScore(Math.round((newCompleted.length / 30) * 100));
      return newCompleted;
    });
  };

  return (
    <LessonLayout 
      title="Mastery & Fluency Assessment" 
      level="advanced" 
      lessonNumber={10}
      previousLesson="advanced-nine"
      nextLesson="advanced-eleven"
    >
      <MasteryOverview masteryScore={masteryScore} />
      <ConversationalMastery 
        completedChallenges={completedChallenges} 
        toggleChallenge={toggleChallenge} 
      />
      <GlobalCommunication 
        completedChallenges={completedChallenges} 
        toggleChallenge={toggleChallenge} 
      />
      <LiteraryExpression 
        completedChallenges={completedChallenges} 
        toggleChallenge={toggleChallenge} 
      />
      <PhilosophicalDiscourse 
        completedChallenges={completedChallenges} 
        toggleChallenge={toggleChallenge} 
      />
      <FinalAssessment 
        completedChallenges={completedChallenges} 
        toggleChallenge={toggleChallenge} 
      />
      <Certification masteryScore={masteryScore} />
      
      {/* Congratulations Section */}
      <div className="mt-12 bg-gradient-to-r from-yellow-500 to-orange-600 text-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">🏆 Mastery Achievement!</h2>
          <p className="text-xl mb-4">You've completed Advanced Lesson 10: Mastery & Fluency Assessment!</p>
          <p className="text-lg opacity-90">
            You have demonstrated comprehensive mastery of Darija across all skill levels and contexts.
          </p>
          <div className="mt-6 inline-flex items-center px-6 py-3 bg-white bg-opacity-20 rounded-full">
            <span className="text-lg font-semibold">Ready for the final lesson? 🎯</span>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}