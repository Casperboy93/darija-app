"use client";

import React from 'react';

export default function PracticeConversation() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Practice Conversation</h2>
      <p className="text-gray-600 mb-4">Making Weekend Plans</p>
      
      <div className="bg-gray-50 p-4 rounded-md mb-4">
        <div className="space-y-4">
          <div className="flex">
            <div className="w-20 font-medium text-blue-600">Youssef:</div>
            <div className="flex-1">
              <div className="font-medium">Ash gha tdir f weekend?</div>
              <div className="text-sm text-gray-600 italic">What will you do on the weekend?</div>
            </div>
          </div>
          
          <div className="flex">
            <div className="w-20 font-medium text-green-600">Aicha:</div>
            <div className="flex-1">
              <div className="font-medium">Gha nmshi l-souk ghedda, w ba3dha gha nzur sdiqi.</div>
              <div className="text-sm text-gray-600 italic">I will go to the market tomorrow, and then I will visit my friend.</div>
            </div>
          </div>
          
          <div className="flex">
            <div className="w-20 font-medium text-blue-600">Youssef:</div>
            <div className="flex-1">
              <div className="font-medium">Zwina! Ana gha nqra l-kitab dyali, w gha nshuf film f l-3shiya.</div>
              <div className="text-sm text-gray-600 italic">Nice! I will read my book, and I will watch a movie in the evening.</div>
            </div>
          </div>
          
          <div className="flex">
            <div className="w-20 font-medium text-green-600">Aicha:</div>
            <div className="flex-1">
              <div className="font-medium">Wach gha tmshi m3ana l-beach nhar l-had?</div>
              <div className="text-sm text-gray-600 italic">Will you come with us to the beach on Sunday?</div>
            </div>
          </div>
          
          <div className="flex">
            <div className="w-20 font-medium text-blue-600">Youssef:</div>
            <div className="flex-1">
              <div className="font-medium">Ah, gha nji! Gha tkun nhar zwina.</div>
              <div className="text-sm text-gray-600 italic">Yes, I will come! It will be a nice day.</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
        <p className="font-medium text-yellow-800">💡 Practice Tip:</p>
        <p className="text-gray-700 mt-1">
          Notice how future tense is used for both definite plans (gha nmshi l-souk) and predictions (gha tkun nhar zwina).
        </p>
      </div>
    </div>
  );
}