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
              <p><span className="font-semibold">Zulm:</span> Injustice</p>
              <p><span className="font-semibold">Fadila:</span> Virtue</p>
              <p><span className="font-semibold">Radhila:</span> Vice</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-700 mb-2">Ethical Principles</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Masʾuliyya:</span> Responsibility</p>
              <p><span className="font-semibold">Hurriyya:</span> Freedom</p>
              <p><span className="font-semibold">Karama:</span> Dignity</p>
              <p><span className="font-semibold">Musawat:</span> Equality</p>
              <p><span className="font-semibold">Rahma:</span> Compassion</p>
              <p><span className="font-semibold">Sidq:</span> Honesty</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-700 mb-2">Moral Reasoning</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Damir:</span> Conscience</p>
              <p><span className="font-semibold">Ikhtiyar:</span> Choice</p>
              <p><span className="font-semibold">Niyya:</span> Intention</p>
              <p><span className="font-semibold">ʿAwaqib:</span> Consequences</p>
              <p><span className="font-semibold">Wajib:</span> Duty</p>
              <p><span className="font-semibold">Haqq:</span> Right</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}