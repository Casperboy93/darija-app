"use client";

import React from 'react';

export default function ReligiousExpressions() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Religious Expressions
      </h2>
      
      <p className="text-gray-700 mb-6">Religious phrases are deeply integrated into daily Darija and reflect cultural values:</p>
      
      <div className="space-y-4">
        <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Common Religious Phrases</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-purple-800">Inshallah (إن شاء الله)</p>
              <p className="text-gray-600">God willing - for future plans</p>
              <p className="text-sm italic text-gray-500">"Ghadi nji ghedda, inshallah."</p>
              <p className="text-sm text-gray-400">(I'll come tomorrow, God willing.)</p>
            </div>
            <div>
              <p className="font-medium text-purple-800">Alhamdulillah (الحمد لله)</p>
              <p className="text-gray-600">Praise be to God - expressing gratitude</p>
              <p className="text-sm italic text-gray-500">"Kifash nta? - Alhamdulillah, bikhir."</p>
              <p className="text-sm text-gray-400">(How are you? - Thank God, I'm well.)</p>
            </div>
            <div>
              <p className="font-medium text-purple-800">Mashallah (ما شاء الله)</p>
              <p className="text-gray-600">What God willed - expressing admiration</p>
              <p className="text-sm italic text-gray-500">"Mashallah, wldk zwin bzzaf!"</p>
              <p className="text-sm text-gray-400">(Mashallah, your son is very handsome!)</p>
            </div>
            <div>
              <p className="font-medium text-purple-800">Bismillah (بسم الله)</p>
              <p className="text-gray-600">In God's name - starting actions</p>
              <p className="text-sm italic text-gray-500">"Bismillah, yallah naklu."</p>
              <p className="text-sm text-gray-400">(In God's name, let's eat.)</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Protective & Blessing Phrases</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-purple-800">Llah y3tik sshha (الله يعطيك الصحة)</p>
              <p className="text-gray-600">May God give you health - blessing/thanks</p>
              <p className="text-sm italic text-gray-500">Said after someone helps you</p>
            </div>
            <div>
              <p className="font-medium text-purple-800">Llah yster (الله يستر)</p>
              <p className="text-gray-600">May God protect - expressing concern</p>
              <p className="text-sm italic text-gray-500">Used when worried about something</p>
            </div>
            <div>
              <p className="font-medium text-purple-800">Tbarkellah (تبارك الله)</p>
              <p className="text-gray-600">Blessed be God - congratulations</p>
              <p className="text-sm italic text-gray-500">Celebrating achievements</p>
            </div>
            <div>
              <p className="font-medium text-purple-800">La hawla wla quwwa illa billah</p>
              <p className="text-gray-600">No power except with God - in difficulty</p>
              <p className="text-sm italic text-gray-500">When facing challenges</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}