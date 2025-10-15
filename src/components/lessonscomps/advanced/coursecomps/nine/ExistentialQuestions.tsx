"use client";

import React from 'react';

export default function ExistentialQuestions() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Existential Questions
      </h2>
      
      <div className="space-y-6">
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
          <h3 className="text-xl font-bold text-purple-800 mb-4">Deep Questions in Darija</h3>
          
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-purple-700 mb-3">Purpose and Meaning</h4>
              <div className="space-y-3">
                <div className="border-l-4 border-purple-300 pl-4">
                  <p className="font-medium">أشنو هو المعنى ديال الحياة؟</p>
                  <p className="text-sm text-gray-600 italic">Ashnu huwa l-ma3na dyal l-hayat?</p>
                  <p className="text-sm text-gray-500">(What is the meaning of life?)</p>
                </div>
                <div className="border-l-4 border-purple-300 pl-4">
                  <p className="font-medium">علاش احنا هنا؟</p>
                  <p className="text-sm text-gray-600 italic">3lash hna hna?</p>
                  <p className="text-sm text-gray-500">(Why are we here?)</p>
                </div>
                <div className="border-l-4 border-purple-300 pl-4">
                  <p className="font-medium">أشنو هو الهدف ديالنا؟</p>
                  <p className="text-sm text-gray-600 italic">Ashnu huwa l-hadaf dyalna?</p>
                  <p className="text-sm text-gray-500">(What is our purpose?)</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-purple-700 mb-3">Ethics and Morality</h4>
              <div className="space-y-3">
                <div className="border-l-4 border-purple-300 pl-4">
                  <p className="font-medium">أشنو هو الصح والخطأ؟</p>
                  <p className="text-sm text-gray-600 italic">Ashnu huwa s-sah w l-khata'?</p>
                  <p className="text-sm text-gray-500">(What is right and wrong?)</p>
                </div>
                <div className="border-l-4 border-purple-300 pl-4">
                  <p className="font-medium">كيفاش نعرفو أشنو عدل؟</p>
                  <p className="text-sm text-gray-600 italic">Kifash n3arfu ashnu 3adl?</p>
                  <p className="text-sm text-gray-500">(How do we know what is just?)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}