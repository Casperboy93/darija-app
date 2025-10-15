"use client";

import React from 'react';

export default function PracticeDialogue() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Practice Dialogue
      </h2>
      
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-blue-800 mb-4">Meeting Someone New - Talking About Work</h3>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">A</div>
            <div>
        <p className="font-medium text-gray-800">Ash khadam a si?</p>
              <p className="text-gray-600 text-sm">What do you do for work, sir?</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">B</div>
            <div>
        <p className="font-medium text-gray-800">Ana mu3allim f madrasa. U nta?</p>
              <p className="text-gray-600 text-sm">I'm a teacher at a school. And you?</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">A</div>
            <div>
        <p className="font-medium text-gray-800">Ana khadam f maktab, muhandis.</p>
              <p className="text-gray-600 text-sm">I work in an office, I'm an engineer.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">B</div>
            <div>
        <p className="font-medium text-gray-800">Khadma zina! Fin l-maktab dyalak?</p>
              <p className="text-gray-600 text-sm">Nice job! Where is your office?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}