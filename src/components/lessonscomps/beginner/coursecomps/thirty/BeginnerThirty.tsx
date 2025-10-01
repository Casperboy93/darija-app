import React from 'react';
import LessonLayout from '../../../common/LessonLayout';
import LessonOverview from './LessonOverview';
import ComprehensiveReview from './ComprehensiveReview';
import AdvancedExercises from './AdvancedExercises';
import FinalAssessment from './FinalAssessment';

const BeginnerThirty: React.FC = () => {
  return (
    <LessonLayout
      title="Final Mastery and Certification Preparation"
      level="beginner"
      lessonNumber={30}
      previousLesson="/lessons/beginner/29"
      nextLesson="/lessons/intermediate/1"
    >
      <LessonOverview />
      <ComprehensiveReview />
      <AdvancedExercises />
      <FinalAssessment />
    </LessonLayout>
  );
};

export default BeginnerThirty;