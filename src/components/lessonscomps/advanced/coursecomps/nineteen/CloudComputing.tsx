"use client";

import React from 'react';

export default function CloudComputing() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-sky-500 rounded-full mr-3"></div>
        Cloud Computing and Distributed Systems
      </h2>
      
      <div className="bg-sky-50 border border-sky-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-sky-800 mb-4">Cloud Technologies</h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border border-sky-200">
            <h4 className="font-semibold text-sky-700 mb-2">Cloud Services</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <p className="text-sm font-medium">Hasub sahabi</p>
                <p className="text-xs text-gray-600">Cloud computing</p>
              </div>
              <div>
                <p className="text-sm font-medium">Takhzin sahabi</p>
                <p className="text-xs text-gray-600">Cloud storage</p>
              </div>
              <div>
                <p className="text-sm font-medium">Khidmat sahabiyya</p>
                <p className="text-xs text-gray-600">Cloud services</p>
              </div>
              <div>
                <p className="text-sm font-medium">Nizam muwazzaʿ</p>
                <p className="text-xs text-gray-600">Distributed system</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-sky-200">
            <h4 className="font-semibold text-sky-700 mb-2">Virtualization</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <p className="text-sm font-medium">Iftiradiyya</p>
                <p className="text-xs text-gray-600">Virtualization</p>
              </div>
              <div>
                <p className="text-sm font-medium">Hawiya</p>
                <p className="text-xs text-gray-600">Container</p>
              </div>
              <div>
                <p className="text-sm font-medium">Khadim iftiradi</p>
                <p className="text-xs text-gray-600">Virtual server</p>
              </div>
              <div>
                <p className="text-sm font-medium">Mawarid mushtaraka</p>
                <p className="text-xs text-gray-600">Shared resources</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}