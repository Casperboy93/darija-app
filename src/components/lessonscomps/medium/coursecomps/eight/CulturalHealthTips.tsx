"use client";

import React from 'react';

export default function CulturalHealthTips() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-teal-500 rounded-full mr-3"></div>
        Cultural Health Tips
      </h2>
      
      <div className="bg-teal-50 border border-teal-200 p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-teal-800 mb-2">Healthcare System</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>- Public hospitals are free but crowded</li>
              <li>- Private clinics are faster but expensive</li>
              <li>- Pharmacies are widely available</li>
              <li>- Many doctors speak French and Arabic</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-teal-800 mb-2">Traditional Medicine</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>- Herbal remedies are common</li>
              <li>- "3attar" (herbalist) shops are popular</li>
              <li>- Traditional and modern medicine coexist</li>
              <li>- Always consult qualified doctors for serious issues</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}