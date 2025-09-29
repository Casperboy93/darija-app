"use client";

import React from 'react';

export default function PracticeDialogue() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
        Practice Dialogue
      </h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="font-semibold text-gray-900 mb-4">At the Doctor's Office</h3>
        
        <div className="space-y-4">
          <div className="flex">
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Patient</div>
            <div>
              <p className="font-medium">Salam ṭabīb, ana marīḍ</p>
              <p className="text-sm text-gray-600 italic">Hello doctor, I am sick</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Doctor</div>
            <div>
              <p className="font-medium">Ahlan, shnu kaywajaʿak?</p>
              <p className="text-sm text-gray-600 italic">Hello, what hurts you?</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Patient</div>
            <div>
              <p className="font-medium">Kaywajaʿnī rāsī w ʿandī sukhāna</p>
              <p className="text-sm text-gray-600 italic">My head hurts and I have a fever</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Doctor</div>
            <div>
              <p className="font-medium">Mn imta w nta hākka?</p>
              <p className="text-sm text-gray-600 italic">Since when have you been like this?</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Patient</div>
            <div>
              <p className="font-medium">Mn l-bāriḥ</p>
              <p className="text-sm text-gray-600 italic">Since yesterday</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Doctor</div>
            <div>
              <p className="font-medium">Ghādi nʿṭīk waṣfa l-dawā</p>
              <p className="text-sm text-gray-600 italic">I will give you a prescription for medicine</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}