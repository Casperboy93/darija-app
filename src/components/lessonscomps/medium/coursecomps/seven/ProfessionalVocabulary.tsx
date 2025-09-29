"use client";

import React from 'react';

export default function ProfessionalVocabulary() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Professional Vocabulary
      </h2>
      
      <p className="text-gray-700 mb-6">Essential terms for discussing work, careers, and business in Morocco.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Khidma</p>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Work</span>
          </div>
          <p className="text-gray-600">Job/Work</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: khid-ma</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600">Example: "Lqīt khidma jdīda f Casablanca" (I found a new job in Casablanca)</p>
          </div>
        </div>

        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Mudīr</p>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Position</span>
          </div>
          <p className="text-gray-600">Manager/Director</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: mu-dir</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600">Example: "Mudīr ghadi yji f l ijtimā3" (The manager will come to the meeting)</p>
          </div>
        </div>

        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Sharika</p>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Business</span>
          </div>
          <p className="text-gray-600">Company</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: sha-ri-ka</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600">Example: "Sharika kbīra u mashūra" (A big and famous company)</p>
          </div>
        </div>

        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Maktab</p>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Place</span>
          </div>
          <p className="text-gray-600">Office</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: mak-tab</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600">Example: "Maktabī f ṭābiq thālith" (My office is on the third floor)</p>
          </div>
        </div>
      </div>
    </div>
  );
}