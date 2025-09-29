"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/seventeen/LessonOverview';
import AcademicSubjects from '../coursecomps/seventeen/AcademicSubjects';
import EducationalInstitutions from '../coursecomps/seventeen/EducationalInstitutions';
import ClassroomStudyVocabulary from '../coursecomps/seventeen/ClassroomStudyVocabulary';
import LearningMethodsStudyHabits from '../coursecomps/seventeen/LearningMethodsStudyHabits';
import AcademicDegreesQualifications from '../coursecomps/seventeen/AcademicDegreesQualifications';
import EducationalTechnology from '../coursecomps/seventeen/EducationalTechnology';
import PracticeDialogue from '../coursecomps/seventeen/PracticeDialogue';
import CulturalNote from '../coursecomps/seventeen/CulturalNote';

export default function IntermediateSeventeen() {
  return (
    <LessonLayout 
      title="Education and Learning" 
      level="intermediate" 
      lessonNumber={17}
      previousLesson="intermediate-sixteen"
      nextLesson="intermediate-eighteen"
    >
      <LessonOverview />
      <AcademicSubjects />
      <EducationalInstitutions />
      <ClassroomStudyVocabulary />
      <LearningMethodsStudyHabits />
      <AcademicDegreesQualifications />
      <EducationalTechnology />
      <PracticeDialogue />
      <CulturalNote />

      {/* Congratulations */}
      <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-3 text-green-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Congratulations!
        </h2>
        <p className="text-gray-700">
          You've completed Intermediate Lesson 17! You now have a solid foundation in educational vocabulary 
          and can discuss academic subjects, learning methods, and the Moroccan education system. Keep practicing 
          these terms in conversations about education and learning.
        </p>
      </div>
    </LessonLayout>
  );
}