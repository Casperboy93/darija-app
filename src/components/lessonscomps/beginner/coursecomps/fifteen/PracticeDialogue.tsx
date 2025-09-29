"use client";

import React from 'react';

export default function PracticeDialogue() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-teal-500 rounded-full mr-3"></div>
        Practice Dialogue
      </h2>
      
      <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-teal-800">Checking on a Friend</h3>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
              <span className="text-blue-600 font-bold text-sm">A</span>
            </div>
            <div className="bg-white rounded-lg p-3 flex-1 border border-teal-100">
              <p className="font-medium text-gray-900">Salām! Kīf ḥāssis lyūm?</p>
              <p className="text-gray-600 text-sm mt-1">Hello! How are you feeling today?</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
              <span className="text-green-600 font-bold text-sm">B</span>
            </div>
            <div className="bg-white rounded-lg p-3 flex-1 border border-teal-100">
              <p className="font-medium text-gray-900">Salām! Ana ta'bān shwayya. Wash nta?</p>
              <p className="text-gray-600 text-sm mt-1">Hello! I'm a little tired. How about you?</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
              <span className="text-blue-600 font-bold text-sm">A</span>
            </div>
            <div className="bg-white rounded-lg p-3 flex-1 border border-teal-100">
              <p className="font-medium text-gray-900">Ana farḥān bzāf! Ash fīk? Līsh ta'bān?</p>
              <p className="text-gray-600 text-sm mt-1">I'm very happy! What's wrong? Why are you tired?</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
              <span className="text-green-600 font-bold text-sm">B</span>
            </div>
            <div className="bg-white rounded-lg p-3 flex-1 border border-teal-100">
              <p className="font-medium text-gray-900">Khdamt bzāf f al-khadma. Walākin ana mabsūṭ.</p>
              <p className="text-gray-600 text-sm mt-1">I worked a lot at work. But I'm content.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
              <span className="text-blue-600 font-bold text-sm">A</span>
            </div>
            <div className="bg-white rounded-lg p-3 flex-1 border border-teal-100">
              <p className="font-medium text-gray-900">Allāh y'ṭīk aṣ-ṣaḥḥa! Rāḥ shwayya.</p>
              <p className="text-gray-600 text-sm mt-1">May God give you health! Rest a little.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
              <span className="text-green-600 font-bold text-sm">B</span>
            </div>
            <div className="bg-white rounded-lg p-3 flex-1 border border-teal-100">
              <p className="font-medium text-gray-900">Shukran! Inshāllāh ghādi nkūn bkhīr ghudda.</p>
              <p className="text-gray-600 text-sm mt-1">Thank you! God willing, I'll be fine tomorrow.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}