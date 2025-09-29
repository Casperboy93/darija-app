"use client";

import React from 'react';

export default function RightsFreedoms() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
        Rights and Freedoms
      </h2>
      
      <p className="text-gray-700 mb-6">Essential vocabulary for discussing human rights and civil liberties.</p>
      
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg border border-yellow-200">
          <h3 className="font-semibold text-yellow-800 mb-2">Fundamental Rights</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-2 bg-yellow-50 rounded">
              <p className="font-medium">Ḥuqūq al-insān</p>
              <p className="text-sm text-gray-600">Human rights</p>
            </div>
            <div className="text-center p-2 bg-yellow-50 rounded">
              <p className="font-medium">Ḥurriyyat at-taʿbīr</p>
              <p className="text-sm text-gray-600">Freedom of expression</p>
            </div>
            <div className="text-center p-2 bg-yellow-50 rounded">
              <p className="font-medium">Ḥurriyyat aṣ-ṣaḥāfa</p>
              <p className="text-sm text-gray-600">Press freedom</p>
            </div>
            <div className="text-center p-2 bg-yellow-50 rounded">
              <p className="font-medium">Musāwāt</p>
              <p className="text-sm text-gray-600">Equality</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}