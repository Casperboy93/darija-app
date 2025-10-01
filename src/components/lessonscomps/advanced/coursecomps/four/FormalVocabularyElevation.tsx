"use client";

import React from 'react';

export default function FormalVocabularyElevation() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Formal Vocabulary Elevation
      </h2>
      
      <p className="text-gray-700 mb-6">Transform your everyday Darija vocabulary into sophisticated Fusha expressions:</p>
      
      <div className="space-y-4">
        <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Common Expressions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-purple-800">Thinking & Opinions</p>
              <div className="mt-2 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Darija: Ana kan-denn</span>
                  <span className="text-gray-800 font-medium">Fusha: Ana a3taqid</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Darija: F ra2yi</span>
                  <span className="text-gray-800 font-medium">Fusha: Fi nazari</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Darija: Hada mzyan</span>
                  <span className="text-gray-800 font-medium">Fusha: Hatha jayyid</span>
                </div>
              </div>
            </div>
            <div>
              <p className="font-medium text-purple-800">Politeness & Courtesy</p>
              <div className="mt-2 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Darija: Afak</span>
                  <span className="text-gray-800 font-medium">Fusha: Min fadlik</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Darija: Shukran bzzaf</span>
                  <span className="text-gray-800 font-medium">Fusha: Shukran jazilan</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Darija: Smeh liya</span>
                  <span className="text-gray-800 font-medium">Fusha: A3dhurni</span>
                </div>
              </div>
            </div>
            <div>
              <p className="font-medium text-purple-800">Time & Scheduling</p>
              <div className="mt-2 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Darija: Daba</span>
                  <span className="text-gray-800 font-medium">Fusha: Al-an</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Darija: Ghedda</span>
                  <span className="text-gray-800 font-medium">Fusha: Ghadan</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Darija: L-bareh</span>
                  <span className="text-gray-800 font-medium">Fusha: Al-barihah</span>
                </div>
              </div>
            </div>
            <div>
              <p className="font-medium text-purple-800">Professional Terms</p>
              <div className="mt-2 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Darija: Khedma</span>
                  <span className="text-gray-800 font-medium">Fusha: Amal</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Darija: Mushkil</span>
                  <span className="text-gray-800 font-medium">Fusha: Mushkilah</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Darija: Hal</span>
                  <span className="text-gray-800 font-medium">Fusha: Hal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}