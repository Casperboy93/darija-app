"use client";

import React from 'react';

export default function DataScience() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Data Science and Big Data
      </h2>
      
      <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-purple-800 mb-4">Data Analytics</h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-700 mb-2">Data Processing</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <p className="text-sm font-medium">ʿIlm bayanat</p>
                <p className="text-xs text-gray-600">Data science</p>
              </div>
              <div>
                <p className="text-sm font-medium">Bayanat dakhma</p>
                <p className="text-xs text-gray-600">Big data</p>
              </div>
              <div>
                <p className="text-sm font-medium">Tahlil bayanat</p>
                <p className="text-xs text-gray-600">Data analysis</p>
              </div>
              <div>
                <p className="text-sm font-medium">Tanzif bayanat</p>
                <p className="text-xs text-gray-600">Data cleaning</p>
              </div>
              <div>
                <p className="text-sm font-medium">Takhzin bayanat</p>
                <p className="text-xs text-gray-600">Data storage</p>
              </div>
              <div>
                <p className="text-sm font-medium">Qawaʿid bayanat</p>
                <p className="text-xs text-gray-600">Databases</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-700 mb-2">Analytics Tools</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <p className="text-sm font-medium">Taswir bayanat</p>
                <p className="text-xs text-gray-600">Data visualization</p>
              </div>
              <div>
                <p className="text-sm font-medium">Ihsaʾiyyat</p>
                <p className="text-xs text-gray-600">Statistics</p>
              </div>
              <div>
                <p className="text-sm font-medium">Namadhij riyadiyya</p>
                <p className="text-xs text-gray-600">Mathematical models</p>
              </div>
              <div>
                <p className="text-sm font-medium">Khuwarizmiyyat tahlil</p>
                <p className="text-xs text-gray-600">Analytics algorithms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}