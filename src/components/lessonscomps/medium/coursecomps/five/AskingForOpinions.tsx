"use client";

import React from 'react';

export default function AskingForOpinions() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Asking for Opinions
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold text-lg text-blue-800">Shnu ra'yak?</p>
            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">General</span>
          </div>
          <div className="text-sm text-gray-500 mb-2 italic">What's your opinion?</div>
          <div className="border-t border-blue-100 pt-2 mt-2">
            <p className="text-gray-600 italic text-sm">Shnu ra'yak f had l-makan?</p>
            <p className="text-gray-500 text-xs">(What's your opinion about this place?)</p>
          </div>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold text-lg text-blue-800">Kayf katshuf l-amr?</p>
            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Formal</span>
          </div>
          <div className="text-sm text-gray-500 mb-2 italic">How do you see the matter?</div>
          <div className="border-t border-blue-100 pt-2 mt-2">
            <p className="text-gray-600 italic text-sm">Kayf katshuf l-amr dyalna?</p>
            <p className="text-gray-500 text-xs">(How do you see our situation?)</p>
          </div>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold text-lg text-blue-800">Wesh mttafaq m3aya?</p>
            <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">Agreement</span>
          </div>
          <div className="text-sm text-gray-500 mb-2 italic">Do you agree with me?</div>
          <div className="border-t border-blue-100 pt-2 mt-2">
            <p className="text-gray-600 italic text-sm">Wesh mttafaq m3aya f had l-fikra?</p>
            <p className="text-gray-500 text-xs">(Do you agree with me on this idea?)</p>
          </div>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold text-lg text-blue-800">Shnu kandir?</p>
            <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full">Advice</span>
          </div>
          <div className="text-sm text-gray-500 mb-2 italic">What should I do?</div>
          <div className="border-t border-blue-100 pt-2 mt-2">
            <p className="text-gray-600 italic text-sm">Shnu kandir f had l-hal?</p>
            <p className="text-gray-500 text-xs">(What should I do in this situation?)</p>
          </div>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold text-lg text-blue-800">Ash bghiti tgul?</p>
            <span className="bg-pink-100 text-pink-700 text-xs px-2 py-1 rounded-full">Clarification</span>
          </div>
          <div className="text-sm text-gray-500 mb-2 italic">What do you want to say?</div>
          <div className="border-t border-blue-100 pt-2 mt-2">
            <p className="text-gray-600 italic text-sm">Ash bghiti tgul b had l-kalam?</p>
            <p className="text-gray-500 text-xs">(What do you want to say with these words?)</p>
          </div>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold text-lg text-blue-800">Wesh nti m3aya?</p>
            <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">Support</span>
          </div>
          <div className="text-sm text-gray-500 mb-2 italic">Are you with me?</div>
          <div className="border-t border-blue-100 pt-2 mt-2">
            <p className="text-gray-600 italic text-sm">Wesh nti m3aya f had l-qadiya?</p>
            <p className="text-gray-500 text-xs">(Are you with me on this issue?)</p>
          </div>
        </div>
      </div>
    </div>
  );
}