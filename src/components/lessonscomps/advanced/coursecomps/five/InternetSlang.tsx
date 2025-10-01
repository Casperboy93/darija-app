"use client";

import React from 'react';

export default function InternetSlang() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Internet Slang & Expressions
      </h2>
      
      <p className="text-gray-700 mb-6">Modern expressions and slang used in digital communication:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Common Internet Expressions</h3>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-purple-800">LOL / Laughing</p>
              <p className="text-gray-600 text-sm">Darija: Hahaha / Dahk / MDR (Mort De Rire)</p>
              <p className="text-gray-500 text-xs italic">Used when something is funny</p>
            </div>
            <div>
              <p className="font-medium text-purple-800">OMG / Surprise</p>
              <p className="text-gray-600 text-sm">Darija: Ya Allah / Wallah / OMG</p>
              <p className="text-gray-500 text-xs italic">Expressing shock or surprise</p>
            </div>
            <div>
              <p className="font-medium text-purple-800">ASAP / Urgency</p>
              <p className="text-gray-600 text-sm">Darija: Dghya / B sur3a / Urgent</p>
              <p className="text-gray-500 text-xs italic">When something needs to be done quickly</p>
            </div>
          </div>
        </div>
        
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Moroccan Digital Slang</h3>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-purple-800">Cool / Awesome</p>
              <p className="text-gray-600 text-sm">Darija: Top / Zwina / Fire / Nadi</p>
              <p className="text-gray-500 text-xs italic">Something impressive or cool</p>
            </div>
            <div>
              <p className="font-medium text-purple-800">Boring / Lame</p>
              <p className="text-gray-600 text-sm">Darija: Mmel / Khayb / Dead</p>
              <p className="text-gray-500 text-xs italic">Something uninteresting</p>
            </div>
            <div>
              <p className="font-medium text-purple-800">Crazy / Unbelievable</p>
              <p className="text-gray-600 text-sm">Darija: Hbel / Mahbul / Crazy</p>
              <p className="text-gray-500 text-xs italic">Something shocking or amazing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}