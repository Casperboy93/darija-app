"use client";

import React from 'react';

export default function PhilosophicalDialogue() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Philosophical Dialogue
      </h2>
      
      <div className="space-y-6">
        <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
          <h3 className="text-xl font-bold text-indigo-800 mb-4">Engaging in Deep Conversations</h3>
          
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-indigo-700 mb-3">Sample Philosophical Discussion</h4>
              <div className="space-y-4">
                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-medium text-blue-800">Person A:</p>
                  <p className="text-blue-700">أنا كانفكر بلي الحياة ماعندهاش معنى بلا هدف واضح.</p>
                  <p className="text-sm text-blue-600 italic">Ana kanfakkar blli l-hayat ma3andhash ma3na bla hadaf wadih.</p>
                  <p className="text-xs text-blue-500">(I think life has no meaning without a clear purpose.)</p>
                </div>
                
                <div className="bg-green-50 p-3 rounded">
                  <p className="font-medium text-green-800">Person B:</p>
                  <p className="text-green-700">ولكن، واش ماكانش المعنى كايتخلق من التجارب ديالنا؟</p>
                  <p className="text-sm text-green-600 italic">Walakin, wash makansh l-ma3na kayitkhallaq mn t-tajarib dyalna?</p>
                  <p className="text-xs text-green-500">(But, doesn't meaning get created from our experiences?)</p>
                </div>
                
                <div className="bg-purple-50 p-3 rounded">
                  <p className="font-medium text-purple-800">Person A:</p>
                  <p className="text-purple-700">هادي نقطة مهمة. يمكن المعنى مايكونش شي حاجة كاينة من قبل، ولكن شي حاجة كانبنيوها.</p>
                  <p className="text-sm text-purple-600 italic">Hadi nuqta muhimma. Yimkin l-ma3na maykunsh shi haja kayna mn qabl, walakin shi haja kanbniwha.</p>
                  <p className="text-xs text-purple-500">(That's an important point. Maybe meaning isn't something that exists beforehand, but something we build.)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}