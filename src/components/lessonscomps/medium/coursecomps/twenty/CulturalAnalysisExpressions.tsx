"use client";

import React from 'react';

export default function CulturalAnalysisExpressions() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-indigo-500 rounded-full mr-3"></div>
        Cultural Analysis Expressions
      </h2>
      
      <p className="text-gray-700 mb-6">Sophisticated phrases for analyzing and discussing cultural phenomena.</p>
      
      <div className="space-y-4">
        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
          <h3 className="font-semibold text-indigo-800 mb-3">Analysis Phrases</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white border border-indigo-200 rounded-lg">
              <span className="font-medium text-gray-800">Hadhihi zahira thaqafiyya muʿaqqada</span>
              <span className="text-gray-600">This is a complex cultural phenomenon</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-indigo-200 rounded-lg">
              <span className="font-medium text-gray-800">Yumkin tafsir hadha min khilal...</span>
              <span className="text-gray-600">This can be interpreted through...</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-indigo-200 rounded-lg">
              <span className="font-medium text-gray-800">Hadha yaʿkis qiyam al-mujtamaʿ</span>
              <span className="text-gray-600">This reflects society's values</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-indigo-200 rounded-lg">
              <span className="font-medium text-gray-800">Fi siyaq thaqafi awsaʿ</span>
              <span className="text-gray-600">In a broader cultural context</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}