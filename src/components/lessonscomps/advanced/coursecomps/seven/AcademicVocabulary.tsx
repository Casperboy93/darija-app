"use client";

import React from 'react';

export default function AcademicVocabulary() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Academic Vocabulary
      </h2>
      
      <p className="text-gray-700 mb-6">Essential vocabulary for academic discussions and intellectual discourse:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <h3 className="font-bold text-lg text-gray-900">Research & Study</h3>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Essential</span>
          </div>
          <div className="mt-3 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Research</span>
              <span className="font-medium">بحث - Bahth</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Study</span>
              <span className="font-medium">دراسة - Dirasa</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Analysis</span>
              <span className="font-medium">تحليل - Tahlil</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Theory</span>
              <span className="font-medium">نظرية - Nazariyya</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Hypothesis</span>
              <span className="font-medium">فرضية - Faradiyya</span>
            </div>
          </div>
        </div>
        
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <h3 className="font-bold text-lg text-gray-900">Critical Thinking</h3>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Important</span>
          </div>
          <div className="mt-3 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Argument</span>
              <span className="font-medium">حجة - Hujja</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Evidence</span>
              <span className="font-medium">دليل - Dalil</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Conclusion</span>
              <span className="font-medium">خلاصة - Khulasa</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Perspective</span>
              <span className="font-medium">منظور - Manzur</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Concept</span>
              <span className="font-medium">مفهوم - Mafhum</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}