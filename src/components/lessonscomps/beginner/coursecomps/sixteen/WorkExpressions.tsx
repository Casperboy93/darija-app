"use client";

import React from 'react';

export default function WorkExpressions() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Work-Related Expressions
      </h2>
      
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="font-semibold text-gray-800 mb-2">Asking About Work:</p>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
        <span className="text-gray-700">Ash khadam?</span>
              <span className="text-gray-600 text-sm">What do you do for work?</span>
            </div>
            <div className="flex justify-between items-center">
        <span className="text-gray-700">Fin khaddam?</span>
              <span className="text-gray-600 text-sm">Where do you work?</span>
            </div>
            <div className="flex justify-between items-center">
        <span className="text-gray-700">Mnin jay mn l-khadma?</span>
              <span className="text-gray-600 text-sm">Are you coming from work?</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="font-semibold text-gray-800 mb-2">Talking About Your Job:</p>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
        <span className="text-gray-700">Ana khadam f...</span>
              <span className="text-gray-600 text-sm">I work in/at...</span>
            </div>
            <div className="flex justify-between items-center">
        <span className="text-gray-700">Khadma dyali zina</span>
              <span className="text-gray-600 text-sm">My job is good</span>
            </div>
            <div className="flex justify-between items-center">
        <span className="text-gray-700">Khadma sa3iba</span>
              <span className="text-gray-600 text-sm">The work is difficult</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}