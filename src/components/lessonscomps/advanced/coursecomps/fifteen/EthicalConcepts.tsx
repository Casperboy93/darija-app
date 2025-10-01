"use client";

import React from 'react';

export default function EthicalConcepts() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Ethical Concepts and Principles
      </h2>
      
      <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-green-800 mb-4">Moral Philosophy</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-700 mb-2">Moral Values</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Khayr:</span> Good</p>
              <p><span className="font-semibold">Sharr:</span> Evil</p>
              <p><span className="font-semibold">ʿAdl:</span> Justice</p>
              <p><span className="font-semibold">Ẓulm:</span> Injustice</p>
              <p><span className="font-semibold">Faḍīla:</span> Virtue</p>
              <p><span className="font-semibold">Radhīla:</span> Vice</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-700 mb-2">Ethical Principles</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Masʾūliyya:</span> Responsibility</p>
              <p><span className="font-semibold">Ḥurriyya:</span> Freedom</p>
              <p><span className="font-semibold">Karāma:</span> Dignity</p>
              <p><span className="font-semibold">Musāwāt:</span> Equality</p>
              <p><span className="font-semibold">Raḥma:</span> Compassion</p>
              <p><span className="font-semibold">Ṣidq:</span> Honesty</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-700 mb-2">Moral Reasoning</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Ḍamīr:</span> Conscience</p>
              <p><span className="font-semibold">Ikhtiyār:</span> Choice</p>
              <p><span className="font-semibold">Niyya:</span> Intention</p>
              <p><span className="font-semibold">ʿAwāqib:</span> Consequences</p>
              <p><span className="font-semibold">Wājib:</span> Duty</p>
              <p><span className="font-semibold">Ḥaqq:</span> Right</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}