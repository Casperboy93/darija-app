"use client";

import React from 'react';

export default function SustainableDevelopment() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Sustainable Development
      </h2>
      
      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-blue-800 mb-4">Sustainability Principles</h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-700 mb-2">Three Pillars of Sustainability</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="text-center">
                <div className="bg-green-100 p-3 rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                  <span className="text-green-600 font-bold">🌱</span>
                </div>
                <p className="text-sm font-medium">Bīʾī</p>
                <p className="text-xs text-gray-600">Environmental</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">💰</span>
                </div>
                <p className="text-sm font-medium">Iqtiṣādī</p>
                <p className="text-xs text-gray-600">Economic</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 p-3 rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                  <span className="text-purple-600 font-bold">👥</span>
                </div>
                <p className="text-sm font-medium">Ijtimāʿī</p>
                <p className="text-xs text-gray-600">Social</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-700 mb-2">Sustainable Practices</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <p className="text-sm font-medium">Zirāʿa ʿuḍwiyya</p>
                <p className="text-xs text-gray-600">Organic farming</p>
              </div>
              <div>
                <p className="text-sm font-medium">Binā akhḍar</p>
                <p className="text-xs text-gray-600">Green building</p>
              </div>
              <div>
                <p className="text-sm font-medium">Naql mustadām</p>
                <p className="text-xs text-gray-600">Sustainable transport</p>
              </div>
              <div>
                <p className="text-sm font-medium">Iqtiṣād akhḍar</p>
                <p className="text-xs text-gray-600">Green economy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}