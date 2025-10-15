"use client";

import React from 'react';

export default function TypesOfConditionals() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Types of Conditionals
      </h2>
      
      <div className="space-y-6">
        <div className="bg-white p-5 rounded-lg border border-blue-100">
          <h3 className="font-bold text-lg text-blue-800 mb-3 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Real Conditions (Likely to happen)
          </h3>
          
          <div className="bg-blue-50 p-4 rounded-md mb-4 border-l-4 border-blue-400">
            <p className="font-medium text-blue-800">Structure:</p>
            <p><span className="font-mono">ila + present tense -&gt; future tense</span></p>
            <p className="mt-1 text-gray-600">Used for situations that are possible or likely to occur</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-3 rounded-md">
              <p className="font-medium">Ila jiti ghedda, gha nmshiw l-suq</p>
              <p className="text-gray-600 italic">If you come tomorrow, we will go to the market</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-md">
              <p className="font-medium">Ila kan l-jaw zwin, gha nkhrju</p>
              <p className="text-gray-600 italic">If the weather is nice, we will go out</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-5 rounded-lg border border-blue-100">
          <h3 className="font-bold text-lg text-blue-800 mb-3 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Unreal Conditions (Hypothetical)
          </h3>
          
          <div className="bg-blue-50 p-4 rounded-md mb-4 border-l-4 border-blue-400">
            <p className="font-medium text-blue-800">Structure:</p>
            <p><span className="font-mono">kun + past tense -&gt; kun + past tense</span></p>
            <p className="mt-1 text-gray-600">Used for imaginary or impossible situations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-3 rounded-md">
              <p className="font-medium">Kun jiti l-bareh, kun mshina l-suq</p>
              <p className="text-gray-600 italic">If you had come yesterday, we would have gone to the market</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-md">
              <p className="font-medium">Kun kan 3ndi flus, kun shrit sayara</p>
              <p className="text-gray-600 italic">If I had money, I would have bought a car</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-5 rounded-lg border border-blue-100">
          <h3 className="font-bold text-lg text-blue-800 mb-3 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Present Unreal Conditions
          </h3>
          
          <div className="bg-blue-50 p-4 rounded-md mb-4 border-l-4 border-blue-400">
            <p className="font-medium text-blue-800">Structure:</p>
            <p><span className="font-mono">ila kunt + present -&gt; kun + past</span></p>
            <p className="mt-1 text-gray-600">Used for present situations that are contrary to reality</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-3 rounded-md">
              <p className="font-medium">Ila kunt ghani, kun shrit dar kbira</p>
              <p className="text-gray-600 italic">If I were rich, I would buy a big house</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-md">
              <p className="font-medium">Ila kunt f blasti, kun ma drt hada</p>
              <p className="text-gray-600 italic">If I were in your place, I wouldn't do this</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}