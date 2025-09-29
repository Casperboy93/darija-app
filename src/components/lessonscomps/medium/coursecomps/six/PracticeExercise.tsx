"use client";

import React from 'react';

export default function PracticeExercise() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
        Practice Exercise
      </h2>
      
      <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-red-800 mb-4">Role Play: Travel Agent</h3>
        <p className="text-gray-700 mb-4">Practice this scenario with a partner or by yourself:</p>
        <div className="bg-white p-4 rounded-md border border-red-100">
          <p className="font-medium text-red-800 mb-2">Scenario:</p>
          <p className="text-gray-700 mb-4">You're at a travel agency in Morocco planning a trip from Rabat to Chefchaouen. You need to:</p>
          <ul className="list-disc ml-5 space-y-1 text-gray-700">
            <li>Ask about transportation options</li>
            <li>Inquire about travel time and costs</li>
            <li>Book accommodation in Chefchaouen</li>
            <li>Get directions from the bus station to your hotel</li>
          </ul>
        </div>
      </div>
    </div>
  );
}