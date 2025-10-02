"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';

// Section components
import LessonOverview from '../coursecomps/twentytwo/LessonOverview';
import BankingVocabulary from '../coursecomps/twentytwo/BankingVocabulary';
import OpeningBankAccount from '../coursecomps/twentytwo/OpeningBankAccount';
import PaymentsTransfers from '../coursecomps/twentytwo/PaymentsTransfers';
import BudgetingPersonalFinance from '../coursecomps/twentytwo/BudgetingPersonalFinance';
import PracticeDialogue from '../coursecomps/twentytwo/PracticeDialogue';

export default function IntermediateTwentyTwo() {
  return (
    <LessonLayout 
      title="Finance and Banking" 
      level="intermediate" 
      lessonNumber={22}
      previousLesson="intermediate-twenty-one"
      nextLesson="intermediate-twenty-three"
    >
      <LessonOverview />
      <BankingVocabulary />
      <OpeningBankAccount />
      <PaymentsTransfers />
      <BudgetingPersonalFinance />

      {/* Practice */}
      <PracticeDialogue />

      {/* Congrats banner */}
      <div className="bg-gradient-to-r from-emerald-50 to-sky-50 border border-emerald-200 p-8 rounded-lg text-center">
        <div className="text-5xl mb-3">🏦</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Great progress!</h2>
        <p className="text-gray-700">
          You can now discuss banking services, payments, and budgeting in Darija.
        </p>
      </div>
    </LessonLayout>
  );
}