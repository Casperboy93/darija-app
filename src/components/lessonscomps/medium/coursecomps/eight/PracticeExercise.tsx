"use client";

import React from 'react';

export default function PracticeExercise() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
        Practice Exercise
      </h2>
      
      <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-yellow-800 mb-4">Medical Role Play</h3>
        <p className="text-gray-700 mb-4">Practice these medical scenarios:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-md border border-yellow-100">
            <p className="font-medium text-yellow-800 mb-2">Scenario 1: Pharmacy Visit</p>
            <p className="text-sm text-gray-700">You have a prescription and need to buy medicine. Ask about dosage and side effects.</p>
          </div>
          <div className="bg-white p-4 rounded-md border border-yellow-100">
            <p className="font-medium text-yellow-800 mb-2">Scenario 2: Doctor's Appointment</p>
            <p className="text-sm text-gray-700">You have stomach pain for several days. Describe your symptoms and answer the doctor's questions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}