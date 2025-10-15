"use client";

import React from 'react';

export default function BusinessEtiquette() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-indigo-500 rounded-full mr-3"></div>
        Business Etiquette
      </h2>
      
      <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-indigo-800 mb-2">Professional Greetings</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>- Use "Salamu 3alaykum" in formal settings</li>
              <li>- Shake hands with same-gender colleagues</li>
              <li>- Address seniors with respect titles</li>
              <li>- Wait to be invited to sit</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-indigo-800 mb-2">Meeting Behavior</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>- Arrive on time or slightly early</li>
              <li>- Bring business cards if available</li>
              <li>- Listen actively and take notes</li>
              <li>- Ask questions respectfully</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}