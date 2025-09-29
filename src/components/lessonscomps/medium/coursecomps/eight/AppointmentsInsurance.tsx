"use client";

import React from 'react';

export default function AppointmentsInsurance() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-indigo-500 rounded-full mr-3"></div>
        Appointments and Insurance
      </h2>
      
      <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-indigo-800 mb-4">Making Appointments</h3>
        <div className="space-y-3">
          <div className="bg-white p-3 rounded-md">
            <p className="font-semibold text-indigo-700">Bghīt nākhud maw3id ma3 ṭabīb</p>
            <p className="text-gray-600 text-sm">I want to make an appointment with a doctor</p>
          </div>
          <div className="bg-white p-3 rounded-md">
            <p className="font-semibold text-indigo-700">Āsh awwal maw3id fāḍī?</p>
            <p className="text-gray-600 text-sm">What's the first available appointment?</p>
          </div>
          <div className="bg-white p-3 rounded-md">
            <p className="font-semibold text-indigo-700">3andī ta'mīn ṣiḥḥī</p>
            <p className="text-gray-600 text-sm">I have health insurance</p>
          </div>
          <div className="bg-white p-3 rounded-md">
            <p className="font-semibold text-indigo-700">Bḥāl shḥāl l kashf?</p>
            <p className="text-gray-600 text-sm">How much is the consultation?</p>
          </div>
        </div>
      </div>
    </div>
  );
}