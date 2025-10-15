"use client";

import React from 'react';

export default function DoctorVisitConversation() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Doctor Visit Conversation
      </h2>
      
      <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-6">
        <h3 className="font-bold text-lg text-green-800 mb-4">Sample Medical Consultation</h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-md border-l-4 border-green-400">
            <p className="font-semibold text-green-700">Doctor: Ash kaywalja3ak?</p>
            <p className="text-gray-600 italic">What's hurting you?</p>
          </div>
          <div className="bg-white p-4 rounded-md border-l-4 border-blue-400">
            <p className="font-semibold text-blue-700">Patient: 3andi suda3 qawiyya u humma</p>
            <p className="text-gray-600 italic">I have a strong headache and fever</p>
          </div>
          <div className="bg-white p-4 rounded-md border-l-4 border-green-400">
            <p className="font-semibold text-green-700">Doctor: Men imta u had l a3rad?</p>
            <p className="text-gray-600 italic">Since when do you have these symptoms?</p>
          </div>
          <div className="bg-white p-4 rounded-md border-l-4 border-blue-400">
            <p className="font-semibold text-blue-700">Patient: Men thalatha iyyam</p>
            <p className="text-gray-600 italic">Since three days</p>
          </div>
          <div className="bg-white p-4 rounded-md border-l-4 border-green-400">
            <p className="font-semibold text-green-700">Doctor: Ghadi n3tik dawa u raha</p>
            <p className="text-gray-600 italic">I'll give you medicine and rest</p>
          </div>
        </div>
      </div>
    </div>
  );
}