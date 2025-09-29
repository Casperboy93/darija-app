"use client";

import React from 'react';

export default function EmotionalResponses() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Emotional Responses
      </h2>
      
      <p className="text-gray-700 mb-6">Common responses and expressions when dealing with emotions.</p>
      
      <div className="space-y-4">
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
          <div className="flex items-center mb-2">
            <span className="text-xl mr-3">🤲</span>
            <p className="font-bold text-lg text-gray-900">Allāh y'ṭīk aṣ-ṣaḥḥa</p>
          </div>
          <p className="text-gray-600 ml-8">May God give you health (said to comfort someone)</p>
          <p className="text-sm text-gray-500 ml-8 mt-1">الله يعطيك الصحة</p>
        </div>
        
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
          <div className="flex items-center mb-2">
            <span className="text-xl mr-3">🎉</span>
            <p className="font-bold text-lg text-gray-900">Mabrūk!</p>
          </div>
          <p className="text-gray-600 ml-8">Congratulations!</p>
          <p className="text-sm text-gray-500 ml-8 mt-1">مبروك!</p>
        </div>
        
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
          <div className="flex items-center mb-2">
            <span className="text-xl mr-3">😔</span>
            <p className="font-bold text-lg text-gray-900">Allāh y'awn</p>
          </div>
          <p className="text-gray-600 ml-8">May God help (expression of sympathy)</p>
          <p className="text-sm text-gray-500 ml-8 mt-1">الله يعون</p>
        </div>
        
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
          <div className="flex items-center mb-2">
            <span className="text-xl mr-3">🙏</span>
            <p className="font-bold text-lg text-gray-900">Inshāllāh ghādi tkūn bkhīr</p>
          </div>
          <p className="text-gray-600 ml-8">God willing, you'll be fine</p>
          <p className="text-sm text-gray-500 ml-8 mt-1">إن شاء الله غادي تكون بخير</p>
        </div>
        
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
          <div className="flex items-center mb-2">
            <span className="text-xl mr-3">😌</span>
            <p className="font-bold text-lg text-gray-900">Lā bās</p>
          </div>
          <p className="text-gray-600 ml-8">It's okay/No problem</p>
          <p className="text-sm text-gray-500 ml-8 mt-1">لا باس</p>
        </div>
      </div>
    </div>
  );
}