"use client";

import React from 'react';

export default function TechnologyVocabulary() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Technology Vocabulary
      </h2>
      
      <p className="text-gray-700 mb-6">Essential vocabulary for navigating the digital world in Darija:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <h3 className="font-bold text-lg text-gray-900">Computing & Internet</h3>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Essential</span>
          </div>
          <div className="mt-3 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Computer</span>
              <span className="text-gray-800 font-medium">L-ordinatir / L-PC</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Internet</span>
              <span className="text-gray-800 font-medium">L-internet / L-net</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Website</span>
              <span className="text-gray-800 font-medium">L-mawqi3 / Site web</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Download</span>
              <span className="text-gray-800 font-medium">Telecharji / Nzzel</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Upload</span>
              <span className="text-gray-800 font-medium">Uploadi / Tla3</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Password</span>
              <span className="text-gray-800 font-medium">L-mot de pass / L-code</span>
            </div>
          </div>
        </div>
        
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <h3 className="font-bold text-lg text-gray-900">Mobile Devices</h3>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Daily Use</span>
          </div>
          <div className="mt-3 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Smartphone</span>
              <span className="text-gray-800 font-medium">L-portable / L-tilifun</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">App</span>
              <span className="text-gray-800 font-medium">Tatbiq / Application</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Selfie</span>
              <span className="text-gray-800 font-medium">Selfie / Sura dyali</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Charger</span>
              <span className="text-gray-800 font-medium">L-chargeur</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Battery</span>
              <span className="text-gray-800 font-medium">L-batri</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Screen</span>
              <span className="text-gray-800 font-medium">L-ecran / Sh-shasha</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}