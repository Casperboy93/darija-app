"use client";

import React from 'react';

export default function LearningMethodsStudyHabits() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Learning Methods and Study Habits
      </h2>
      
      <p className="text-gray-700 mb-6">Vocabulary for discussing different ways of learning and studying.</p>
      
      <div className="space-y-4">
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <h3 className="font-semibold text-orange-800 mb-2">Study Activities</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-2 bg-white rounded border border-orange-200">
              <p className="font-medium">Qirāʾa</p>
              <p className="text-sm text-gray-600">Reading</p>
            </div>
            <div className="text-center p-2 bg-white rounded border border-orange-200">
              <p className="font-medium">Kitāba</p>
              <p className="text-sm text-gray-600">Writing</p>
            </div>
            <div className="text-center p-2 bg-white rounded border border-orange-200">
              <p className="font-medium">Ḥifẓ</p>
              <p className="text-sm text-gray-600">Memorization</p>
            </div>
            <div className="text-center p-2 bg-white rounded border border-orange-200">
              <p className="font-medium">Murājaʿa</p>
              <p className="text-sm text-gray-600">Review</p>
            </div>
          </div>
        </div>
        
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <h3 className="font-semibold text-orange-800 mb-2">Learning Styles</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-2 bg-white rounded border border-orange-200">
              <p className="font-medium">Taʿallum jamāʿī</p>
              <p className="text-sm text-gray-600">Group learning</p>
            </div>
            <div className="text-center p-2 bg-white rounded border border-orange-200">
              <p className="font-medium">Taʿallum fardī</p>
              <p className="text-sm text-gray-600">Individual learning</p>
            </div>
            <div className="text-center p-2 bg-white rounded border border-orange-200">
              <p className="font-medium">Taʿallum ʿamalī</p>
              <p className="text-sm text-gray-600">Practical learning</p>
            </div>
            <div className="text-center p-2 bg-white rounded border border-orange-200">
              <p className="font-medium">Taʿallum naẓarī</p>
              <p className="text-sm text-gray-600">Theoretical learning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}