"use client";

import React from 'react';

export default function TravelPlanning() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Travel Planning
      </h2>
      
      <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mb-6">
        <h3 className="font-bold text-lg text-purple-800 mb-4">Sample Conversation: Planning a Trip</h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-md border-l-4 border-purple-400">
            <p className="font-semibold text-purple-700">A: Fīn ghādi tmshī f l3uṭla?</p>
            <p className="text-gray-600 italic">Where are you going for vacation?</p>
          </div>
          <div className="bg-white p-4 rounded-md border-l-4 border-blue-400">
            <p className="font-semibold text-blue-700">B: Ghādi nmshī l Marrakech, u mnīn l Essaouira</p>
            <p className="text-gray-600 italic">I'm going to Marrakech, and then to Essaouira</p>
          </div>
          <div className="bg-white p-4 rounded-md border-l-4 border-purple-400">
            <p className="font-semibold text-purple-700">A: Kīfāsh ghādi tmshī? B ṭayyāra wlla b tren?</p>
            <p className="text-gray-600 italic">How are you going? By plane or by train?</p>
          </div>
          <div className="bg-white p-4 rounded-md border-l-4 border-blue-400">
            <p className="font-semibold text-blue-700">B: Ghādi nākhud tren l Marrakech, u men tmma kār krā</p>
            <p className="text-gray-600 italic">I'll take the train to Marrakech, and from there a rental car</p>
          </div>
        </div>
      </div>
    </div>
  );
}