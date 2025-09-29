"use client";

import React from 'react';

export default function PracticeExercise() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
        Practice Exercise
      </h2>
      
      <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-yellow-800 mb-4">Business Presentation</h3>
        <p className="text-gray-700 mb-4">Prepare a short presentation about your work or a project using these phrases:</p>
        <div className="bg-white p-4 rounded-md border border-yellow-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-yellow-800 mb-2">Opening:</p>
              <p className="text-sm text-gray-700">"Ahlan wa sahlan, ghādi nḥkī 3la..."</p>
              <p className="text-xs text-gray-500">(Welcome, I'm going to talk about...)</p>
            </div>
            <div>
              <p className="font-medium text-yellow-800 mb-2">Main Points:</p>
              <p className="text-sm text-gray-700">"L nuqṭa l muhimma hiya..."</p>
              <p className="text-xs text-gray-500">(The important point is...)</p>
            </div>
            <div>
              <p className="font-medium text-yellow-800 mb-2">Conclusion:</p>
              <p className="text-sm text-gray-700">"F l khitām, natāʾij kānat..."</p>
              <p className="text-xs text-gray-500">(In conclusion, the results were...)</p>
            </div>
            <div>
              <p className="font-medium text-yellow-800 mb-2">Questions:</p>
              <p className="text-sm text-gray-700">"Wāsh 3andkum asʾila?"</p>
              <p className="text-xs text-gray-500">(Do you have questions?)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}