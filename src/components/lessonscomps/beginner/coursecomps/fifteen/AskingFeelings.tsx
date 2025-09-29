"use client";

import React from 'react';

export default function AskingFeelings() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Asking About Feelings
      </h2>
      
      <p className="text-gray-700 mb-6">Learn how to ask about someone's emotional state in Darija.</p>
      
      <div className="space-y-4">
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
          <div className="flex items-center mb-2">
            <span className="text-xl mr-3">❓</span>
            <p className="font-bold text-lg text-gray-900">Kīf ḥāssis?</p>
          </div>
          <p className="text-gray-600 ml-8">How do you feel?</p>
          <p className="text-sm text-gray-500 ml-8 mt-1">كيف حاسس؟</p>
        </div>
        
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
          <div className="flex items-center mb-2">
            <span className="text-xl mr-3">❓</span>
            <p className="font-bold text-lg text-gray-900">Ash fīk?</p>
          </div>
          <p className="text-gray-600 ml-8">What's wrong with you?</p>
          <p className="text-sm text-gray-500 ml-8 mt-1">أش فيك؟</p>
        </div>
        
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
          <div className="flex items-center mb-2">
            <span className="text-xl mr-3">❓</span>
            <p className="font-bold text-lg text-gray-900">Wash nta farḥān?</p>
          </div>
          <p className="text-gray-600 ml-8">Are you happy?</p>
          <p className="text-sm text-gray-500 ml-8 mt-1">واش نت فرحان؟</p>
        </div>
        
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
          <div className="flex items-center mb-2">
            <span className="text-xl mr-3">❓</span>
            <p className="font-bold text-lg text-gray-900">Kīf ṣaḥtak?</p>
          </div>
          <p className="text-gray-600 ml-8">How is your health?</p>
          <p className="text-sm text-gray-500 ml-8 mt-1">كيف صحتك؟</p>
        </div>
      </div>
    </div>
  );
}