"use client";

import React from 'react';

export default function PracticeDialogue() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Practice Dialogue
      </h2>
      
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-blue-800 mb-4">At the Doctor's Office</h3>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">D</div>
            <div>
              <p className="font-medium text-gray-800">Āsh kāyn līk? Kīf ṣaḥtak?</p>
              <p className="text-gray-600 text-sm">What's wrong with you? How is your health?</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">P</div>
            <div>
              <p className="font-medium text-gray-800">Rāsī kaywajaʿnī bazzāf, u ʿandī ḥumma.</p>
              <p className="text-gray-600 text-sm">My head hurts a lot, and I have a fever.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">D</div>
            <div>
              <p className="font-medium text-gray-800">Mn imta u nta ḥāss b hād l-ḥāla?</p>
              <p className="text-gray-600 text-sm">Since when have you been feeling this way?</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">P</div>
            <div>
              <p className="font-medium text-gray-800">Mn l-bāriḥ f l-līl. Mā qadartsh nnʿas.</p>
              <p className="text-gray-600 text-sm">Since last night. I couldn't sleep.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">D</div>
            <div>
              <p className="font-medium text-gray-800">Ghādī nʿṭīk dawā u waṣfa. Khud rāḥa.</p>
              <p className="text-gray-600 text-sm">I'll give you medicine and a prescription. Take rest.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}