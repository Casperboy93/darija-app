"use client";

import React from 'react';

export default function InternetOfThings() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-teal-500 rounded-full mr-3"></div>
        Internet of Things and Smart Systems
      </h2>
      
      <div className="bg-teal-50 border border-teal-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-teal-800 mb-4">Connected Devices</h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border border-teal-200">
            <h4 className="font-semibold text-teal-700 mb-2">IoT Components</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <p className="text-sm font-medium">Internet al-ashyaʾ</p>
                <p className="text-xs text-gray-600">Internet of Things</p>
              </div>
              <div>
                <p className="text-sm font-medium">Ajhiza mutassila</p>
                <p className="text-xs text-gray-600">Connected devices</p>
              </div>
              <div>
                <p className="text-sm font-medium">Hassasat dhakiyya</p>
                <p className="text-xs text-gray-600">Smart sensors</p>
              </div>
              <div>
                <p className="text-sm font-medium">Shabakat lasilkiyya</p>
                <p className="text-xs text-gray-600">Wireless network</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-teal-200">
            <h4 className="font-semibold text-teal-700 mb-2">Smart Applications</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <p className="text-sm font-medium">Bayt dhaki</p>
                <p className="text-xs text-gray-600">Smart home</p>
              </div>
              <div>
                <p className="text-sm font-medium">Madina dhakiyya</p>
                <p className="text-xs text-gray-600">Smart city</p>
              </div>
              <div>
                <p className="text-sm font-medium">Ziraʿa dhakiyya</p>
                <p className="text-xs text-gray-600">Smart agriculture</p>
              </div>
              <div>
                <p className="text-sm font-medium">Naql dhaki</p>
                <p className="text-xs text-gray-600">Smart transportation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}