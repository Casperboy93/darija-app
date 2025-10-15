"use client";

import React from 'react';

export default function NegotiationPhrases() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
        Negotiation Phrases
      </h2>
      
      <p className="text-gray-700 mb-6">Key expressions for business negotiations and agreements.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Ash ra'yak?</p>
            <span className="text-2xl">🤔</span>
          </div>
          <p className="text-gray-600">What do you think?</p>
          <p className="text-sm text-gray-500 mt-1">اش رايك؟</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Yimkin nwafqu</p>
            <span className="text-2xl">🤝</span>
          </div>
          <p className="text-gray-600">We can agree</p>
          <p className="text-sm text-gray-500 mt-1">يمكن نوافقو</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Hadhi safqa jayida</p>
            <span className="text-2xl">✅</span>
          </div>
          <p className="text-gray-600">This is a good deal</p>
          <p className="text-sm text-gray-500 mt-1">هاذي صفقة جيدة</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Khassna nfakkru</p>
            <span className="text-2xl">💭</span>
          </div>
          <p className="text-gray-600">We need to think about it</p>
          <p className="text-sm text-gray-500 mt-1">خاصنا نفكرو</p>
        </div>
      </div>
    </div>
  );
}