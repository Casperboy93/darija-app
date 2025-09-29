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
            <p className="text-sm"><span className="font-semibold">Akīd:</span> Certainly</p>
            <p className="text-sm"><span className="font-semibold">Bla shak:</span> Without doubt</p>
            <p className="text-sm"><span className="font-semibold">Mā fīh shak:</span> There's no doubt</p>
            <p className="text-sm"><span className="font-semibold">Mutaʾakkid:</span> I'm sure</p>
          </div>
        </div>

        <div className="border border-indigo-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Expressing Uncertainty</p>
            <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">Advanced</span>
          </div>
          <div className="mt-3 space-y-2">
            <p className="text-sm"><span className="font-semibold">Yumkin:</span> Maybe/Possibly</p>
            <p className="text-sm"><span className="font-semibold">Mā n3rafsh:</span> I don't know</p>
            <p className="text-sm"><span className="font-semibold">Mushakkik:</span> I doubt it</p>
            <p className="text-sm"><span className="font-semibold">Ghīr Allah ya3lam:</span> Only God knows</p>
          </div>
        </div>

        <div className="border border-indigo-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Expressing Emotions</p>
            <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">Advanced</span>
          </div>
          <div className="mt-3 space-y-2">
            <p className="text-sm"><span className="font-semibold">Farḥān bezzāf:</span> Very happy</p>
            <p className="text-sm"><span className="font-semibold">Ḥazīn:</span> Sad</p>
            <p className="text-sm"><span className="font-semibold">Mugh3ab:</span> Angry</p>
            <p className="text-sm"><span className="font-semibold">Khāyif:</span> Afraid</p>
          </div>
        </div>

        <div className="border border-indigo-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Making Suggestions</p>
            <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">Advanced</span>
          </div>
          <div className="mt-3 space-y-2">
            <p className="text-sm"><span className="font-semibold">Āsh rāyak f...?:</span> What do you think about...?</p>
            <p className="text-sm"><span className="font-semibold">Yallāh ndīru...:</span> Let's do...</p>
            <p className="text-sm"><span className="font-semibold">Aḥsan ḥāja:</span> The best thing</p>
            <p className="text-sm"><span className="font-semibold">Lāzim ndīru:</span> We must do</p>
          </div>
        </div>
      </div>
    </div>
  );
}