"use client";

import React from 'react';

export default function ExistentialQuestions() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Existential and Metaphysical Questions
      </h2>
      
      <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-purple-800 mb-4">Fundamental Questions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-700 mb-2">Existence and Being</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Ma hiya haqiqat al-wujud?</span></p>
              <p className="text-gray-600">What is the nature of existence?</p>
              <p><span className="font-semibold">Ma maʿna al-hayat?</span></p>
              <p className="text-gray-600">What is the meaning of life?</p>
              <p><span className="font-semibold">Hal hunaka hadaf min al-wujud?</span></p>
              <p className="text-gray-600">Is there a purpose to existence?</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-700 mb-2">Knowledge and Reality</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Kayf naʿrif al-haqiqa?</span></p>
              <p className="text-gray-600">How do we know truth?</p>
              <p><span className="font-semibold">Ma hiya hudud al-maʿrifa?</span></p>
              <p className="text-gray-600">What are the limits of knowledge?</p>
              <p><span className="font-semibold">Hal al-waqiʿ mawjud haqqan?</span></p>
              <p className="text-gray-600">Does reality truly exist?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}