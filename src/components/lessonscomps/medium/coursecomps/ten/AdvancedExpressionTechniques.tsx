"use client";

import React from 'react';

export default function AdvancedExpressionTechniques() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-indigo-500 rounded-full mr-3"></div>
        Advanced Expression Techniques
      </h2>
      
      <p className="text-gray-700 mb-6">Learn sophisticated ways to express your thoughts and feelings in Darija.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-indigo-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Expressing Certainty</p>
            <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">Advanced</span>
          </div>
          <div className="mt-3 space-y-2">
            <p className="text-sm"><span className="font-semibold">Akid:</span> Certainly</p>
            <p className="text-sm"><span className="font-semibold">Bla shak:</span> Without doubt</p>
            <p className="text-sm"><span className="font-semibold">Ma fih shak:</span> There's no doubt</p>
            <p className="text-sm"><span className="font-semibold">Muta'akkid:</span> I'm sure</p>
          </div>
        </div>

        <div className="border border-indigo-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Expressing Uncertainty</p>
            <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">Advanced</span>
          </div>
          <div className="mt-3 space-y-2">
            <p className="text-sm"><span className="font-semibold">Yumkin:</span> Maybe/Possibly</p>
            <p className="text-sm"><span className="font-semibold">Ma n3rafsh:</span> I don't know</p>
            <p className="text-sm"><span className="font-semibold">Mushakkik:</span> I doubt it</p>
            <p className="text-sm"><span className="font-semibold">Ghir Allah ya3lam:</span> Only God knows</p>
          </div>
        </div>

        <div className="border border-indigo-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Expressing Emotions</p>
            <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">Advanced</span>
          </div>
          <div className="mt-3 space-y-2">
            <p className="text-sm"><span className="font-semibold">Farhan bezzaf:</span> Very happy</p>
            <p className="text-sm"><span className="font-semibold">Hazin:</span> Sad</p>
            <p className="text-sm"><span className="font-semibold">Mugh3ab:</span> Angry</p>
            <p className="text-sm"><span className="font-semibold">Khayif:</span> Afraid</p>
          </div>
        </div>

        <div className="border border-indigo-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Making Suggestions</p>
            <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">Advanced</span>
          </div>
          <div className="mt-3 space-y-2">
            <p className="text-sm"><span className="font-semibold">Ash rayak f...?:</span> What do you think about...?</p>
            <p className="text-sm"><span className="font-semibold">Yallah ndiru...:</span> Let's do...</p>
            <p className="text-sm"><span className="font-semibold">Ahsan haja:</span> The best thing</p>
            <p className="text-sm"><span className="font-semibold">Lazim ndiru:</span> We must do</p>
          </div>
        </div>
      </div>
    </div>
  );
}