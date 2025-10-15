"use client";

import React from 'react';

export default function GreenTechnology() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-teal-500 rounded-full mr-3"></div>
        Green Technology and Innovation
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-teal-50 border border-teal-200 p-5 rounded-lg">
          <h3 className="font-bold text-lg text-teal-800 mb-3">Clean Technologies</h3>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-teal-700">Sayyarat kahrabaʾiyya</p>
              <p className="text-gray-600 text-sm">Electric vehicles</p>
            </div>
            <div>
              <p className="font-semibold text-teal-700">Shabakat dhakiyya</p>
              <p className="text-gray-600 text-sm">Smart grid</p>
            </div>
            <div>
              <p className="font-semibold text-teal-700">Mabani dhakiyya</p>
              <p className="text-gray-600 text-sm">Smart buildings</p>
            </div>
            <div>
              <p className="font-semibold text-teal-700">Takhnulujiya nazifa</p>
              <p className="text-gray-600 text-sm">Clean technology</p>
            </div>
          </div>
        </div>
        
        <div className="bg-teal-50 border border-teal-200 p-5 rounded-lg">
          <h3 className="font-bold text-lg text-teal-800 mb-3">Environmental Monitoring</h3>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-teal-700">Muraqaba biʾiyya</p>
              <p className="text-gray-600 text-sm">Environmental monitoring</p>
            </div>
            <div>
              <p className="font-semibold text-teal-700">Aqmar sinaʿiyya</p>
              <p className="text-gray-600 text-sm">Satellites</p>
            </div>
            <div>
              <p className="font-semibold text-teal-700">Hassasat biʾiyya</p>
              <p className="text-gray-600 text-sm">Environmental sensors</p>
            </div>
            <div>
              <p className="font-semibold text-teal-700">Bayanat munakhiyya</p>
              <p className="text-gray-600 text-sm">Climate data</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}