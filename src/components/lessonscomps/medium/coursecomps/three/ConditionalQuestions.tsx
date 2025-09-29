"use client";

import React from 'react';

export default function ConditionalQuestions() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Conditional Questions
      </h2>
      
      <div className="bg-white p-5 rounded-lg border border-blue-100 mb-4">
        <p className="mb-3">Conditional questions are used to ask about hypothetical situations or to make polite requests.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-blue-50 p-4 rounded-md">
            <p className="font-medium text-blue-800">Direct Questions:</p>
            <div className="mt-2 space-y-1">
              <p className="text-gray-700">Ash gha tdir ila kan 3ndek flus bzaf?</p>
              <p className="text-gray-600 italic">(What would you do if you had a lot of money?)</p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-md">
            <p className="font-medium text-blue-800">Polite Requests:</p>
            <div className="mt-2 space-y-1">
              <p className="text-gray-700">Ila ma kan 3ndek mushkil, waqila t3awnni?</p>
              <p className="text-gray-600 italic">(If you don't mind, could you help me?)</p>
            </div>
          </div>
        </div>
        
        <div className="mt-4 space-y-2">
          <div className="bg-gray-50 p-3 rounded-md">
            <p className="font-medium">Fin gha tmshi ila kan 3ndek 3utla?</p>
            <p className="text-gray-600 italic">Where would you go if you had a vacation?</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-md">
            <p className="font-medium">Ash gha tqul ila shfti hada?</p>
            <p className="text-gray-600 italic">What would you say if you saw this?</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-md">
            <p className="font-medium">Ila kunt f blasti, ash gha tdir?</p>
            <p className="text-gray-600 italic">If you were in my place, what would you do?</p>
          </div>
        </div>
      </div>
    </div>
  );
}