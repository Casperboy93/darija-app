"use client";

import React from 'react';

export default function CommonConditionalExpressions() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
        Common Conditional Expressions
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold text-lg text-blue-800">Ila kan 3ndek wqt</p>
            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Time</span>
          </div>
          <div className="text-sm text-gray-500 mb-2 italic">If you have time</div>
          <div className="border-t border-blue-100 pt-2 mt-2">
            <p className="text-gray-700"><span className="font-medium">Ila kan 3ndek wqt, ajini l-dar</span></p>
            <p className="text-gray-600 italic">(If you have time, come to my house)</p>
          </div>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold text-lg text-blue-800">Ila bghiti</p>
            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Desire</span>
          </div>
          <div className="text-sm text-gray-500 mb-2 italic">If you want</div>
          <div className="border-t border-blue-100 pt-2 mt-2">
            <p className="text-gray-700"><span className="font-medium">Ila bghiti, gha nmshiw l-cinema</span></p>
            <p className="text-gray-600 italic">(If you want, we will go to the cinema)</p>
          </div>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold text-lg text-blue-800">Ila ma jitish</p>
            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Negative</span>
          </div>
          <div className="text-sm text-gray-500 mb-2 italic">If you don't come</div>
          <div className="border-t border-blue-100 pt-2 mt-2">
            <p className="text-gray-700"><span className="font-medium">Ila ma jitish, gha nmshiw bla bik</span></p>
            <p className="text-gray-600 italic">(If you don't come, we will go without you)</p>
          </div>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold text-lg text-blue-800">Ila kan mumkin</p>
            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Possibility</span>
          </div>
          <div className="text-sm text-gray-500 mb-2 italic">If it's possible</div>
          <div className="border-t border-blue-100 pt-2 mt-2">
            <p className="text-gray-700"><span className="font-medium">Ila kan mumkin, gha n3awnk</span></p>
            <p className="text-gray-600 italic">(If it's possible, I will help you)</p>
          </div>
        </div>
      </div>
    </div>
  );
}