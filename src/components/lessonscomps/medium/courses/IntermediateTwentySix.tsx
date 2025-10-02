"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/twentysix/LessonOverview';
import CitizenServices from '../coursecomps/twentysix/CitizenServices';
import GovernmentOffices from '../coursecomps/twentysix/GovernmentOffices';
import ApplicationsForms from '../coursecomps/twentysix/ApplicationsForms';
import SchedulingAppointments from '../coursecomps/twentysix/SchedulingAppointments';
import PracticeDialogue from '../coursecomps/twentysix/PracticeDialogue';

export default function IntermediateTwentySix() {
  return (
    <LessonLayout 
      title="Public Services and Administration" 
      level="intermediate" 
      lessonNumber={26}
      previousLesson="intermediate-twenty-five"
      nextLesson={undefined}
    >
      <LessonOverview />
      <CitizenServices />
      <GovernmentOffices />
      <ApplicationsForms />
      <SchedulingAppointments />
      <PracticeDialogue />

      <div className="bg-gradient-to-r from-sky-50 to-cyan-50 border border-sky-200 p-8 rounded-lg text-center">
        <div className="text-5xl mb-3">🏛️</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Well done!</h2>
        <p className="text-gray-700">
          You can now navigate government offices, applications, appointments, and public service conversations in Darija.
        </p>
      </div>
    </LessonLayout>
  );
}