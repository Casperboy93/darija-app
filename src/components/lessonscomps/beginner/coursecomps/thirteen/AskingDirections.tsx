"use client";

import React from 'react';

export default function AskingDirections() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Asking for Directions
      </h2>
      
      <div className="space-y-4">
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <p className="font-semibold text-orange-800">Fīn kāyn...?</p>
          <p className="text-gray-700">Where is...?</p>
          <p className="text-sm text-gray-500 mt-1">فين كاين...؟</p>
        </div>
        
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <p className="font-semibold text-orange-800">Kīfāsh nimshī l...?</p>
          <p className="text-gray-700">How do I go to...?</p>
          <p className="text-sm text-gray-500 mt-1">كيفاش نمشي ل...؟</p>
        </div>
        
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <p className="font-semibold text-orange-800">Wash qarīb mn hna?</p>
          <p className="text-gray-700">Is it close from here?</p>
          <p className="text-sm text-gray-500 mt-1">واش قريب من هنا؟</p>
        </div>
        
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <p className="font-semibold text-orange-800">Shḥāl min waqt?</p>
          <p className="text-gray-700">How much time?</p>
          <p className="text-sm text-gray-500 mt-1">شحال من وقت؟</p>
        </div>
      </div>
    </div>
  );
}