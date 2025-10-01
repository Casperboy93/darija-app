"use client";

import React from 'react';

const LessonOverview: React.FC = () => {
  return (
    <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Lesson 30: Final Mastery and Certification Preparation
      </h2>
      
      <div className="bg-white p-4 rounded-md border border-blue-100 mb-6">
        <h3 className="text-lg font-semibold mb-3 text-blue-700 flex items-center">
          🎯 Learning Objectives
        </h3>
        <ul className="list-disc ml-5 space-y-2 text-gray-700">
          <li>Review and consolidate all Darija knowledge from previous lessons</li>
          <li>Practice advanced conversation skills and complex scenarios</li>
          <li>Prepare for Darija proficiency assessment and certification</li>
          <li>Develop strategies for continued learning and improvement</li>
          <li>Master formal and informal communication in various contexts</li>
          <li>Build confidence for real-world Darija interactions</li>
        </ul>
      </div>

      <div className="bg-white p-4 rounded-md border border-blue-100 mb-6">
        <h3 className="text-lg font-semibold mb-3 text-blue-700">📚 Key Topics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-3 rounded-md">
            <h4 className="font-medium text-blue-800">📖 Comprehensive Review</h4>
            <p className="text-sm text-gray-600 mt-1">Complete review of grammar, vocabulary, and cultural concepts</p>
          </div>
          <div className="bg-blue-50 p-3 rounded-md">
            <h4 className="font-medium text-blue-800">💪 Advanced Exercises</h4>
            <p className="text-sm text-gray-600 mt-1">Complex scenarios and challenging practice activities</p>
          </div>
          <div className="bg-blue-50 p-3 rounded-md">
            <h4 className="font-medium text-blue-800">🏆 Certification Prep</h4>
            <p className="text-sm text-gray-600 mt-1">Test-taking strategies and assessment preparation</p>
          </div>
          <div className="bg-blue-50 p-3 rounded-md">
            <h4 className="font-medium text-blue-800">📝 Final Assessment</h4>
            <p className="text-sm text-gray-600 mt-1">Comprehensive evaluation of Darija proficiency</p>
          </div>
          <div className="bg-blue-50 p-3 rounded-md">
            <h4 className="font-medium text-blue-800">🚀 Continued Learning</h4>
            <p className="text-sm text-gray-600 mt-1">Resources and strategies for ongoing improvement</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-md border border-blue-100 mb-6">
        <h3 className="text-lg font-semibold mb-3 text-blue-700">🎓 Mastery Level</h3>
        <div className="space-y-3">
          <p className="text-gray-700">
            <strong>Congratulations!</strong> You've reached the final lesson of the beginner course. 
            By completing this lesson, you will have achieved:
          </p>
          <ul className="list-disc ml-5 space-y-2 text-gray-700">
            <li><strong>Conversational Fluency:</strong> Ability to engage in extended conversations</li>
            <li><strong>Cultural Competence:</strong> Understanding of Moroccan customs and etiquette</li>
            <li><strong>Practical Skills:</strong> Real-world communication abilities</li>
            <li><strong>Foundation for Advanced Study:</strong> Readiness for intermediate-level Darija</li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-4 rounded-md border border-blue-100 mb-6">
        <h3 className="text-lg font-semibold mb-3 text-blue-700">🌟 Course Completion Benefits</h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <span className="text-2xl">🗣️</span>
            <div>
              <h4 className="font-medium text-gray-800">Confident Communication</h4>
              <p className="text-sm text-gray-600">Speak Darija naturally in everyday situations</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-2xl">🤝</span>
            <div>
              <h4 className="font-medium text-gray-800">Cultural Connection</h4>
              <p className="text-sm text-gray-600">Build meaningful relationships with Moroccan speakers</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-2xl">🎯</span>
            <div>
              <h4 className="font-medium text-gray-800">Professional Advantage</h4>
              <p className="text-sm text-gray-600">Use Darija skills in business and career contexts</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-2xl">🌍</span>
            <div>
              <h4 className="font-medium text-gray-800">Travel Readiness</h4>
              <p className="text-sm text-gray-600">Navigate Morocco with confidence and ease</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-md border border-blue-100">
        <h3 className="text-lg font-semibold mb-3 text-blue-700">📋 Lesson Structure</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <h4 className="font-medium">Comprehensive Review</h4>
              <p className="text-sm text-gray-600">Systematic review of all course materials</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <h4 className="font-medium">Advanced Practice</h4>
              <p className="text-sm text-gray-600">Complex scenarios and challenging exercises</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <h4 className="font-medium">Assessment Preparation</h4>
              <p className="text-sm text-gray-600">Test strategies and practice assessments</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <h4 className="font-medium">Final Evaluation</h4>
              <p className="text-sm text-gray-600">Comprehensive proficiency assessment</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">5</span>
            <div>
              <h4 className="font-medium">Future Learning Path</h4>
              <p className="text-sm text-gray-600">Resources for continued improvement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonOverview;