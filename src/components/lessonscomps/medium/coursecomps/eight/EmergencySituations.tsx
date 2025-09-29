"use client";

import React from 'react';

export default function EmergencySituations() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-red-600 rounded-full mr-3"></div>
        Emergency Situations
      </h2>
      
      <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-red-800 mb-4">Emergency Phrases</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-md border border-red-100">
            <p className="font-medium text-red-800 mb-2">Calling for Help:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• "3āwnnī 3afākum!" (Help me please!)</li>
              <li>• "Ṭlbu l is3āf!" (Call for help!)</li>
              <li>• "Fīn l mustashfā?" (Where is the hospital?)</li>
              <li>• "Bghīt ṭabīb!" (I need a doctor!)</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-md border border-red-100">
            <p className="font-medium text-red-800 mb-2">Describing Urgency:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• "Ḥāla ṭāriʾa!" (Emergency!)</li>
              <li>• "Kaywalja3nī bezzāf!" (It hurts a lot!)</li>
              <li>• "Ma qadartsh nmshī!" (I can't walk!)</li>
              <li>• "Ghādi nghma 3layya!" (I'm going to faint!)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}