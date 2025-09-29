"use client";

import React from 'react';

export default function MoroccoEnvironmentalInitiatives() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
        Morocco's Environmental Initiatives
      </h2>
      
      <p className="text-gray-700 mb-6">Morocco's leadership in renewable energy and environmental conservation.</p>
      
      <div className="space-y-4">
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <h3 className="font-semibold text-yellow-800 mb-3">Major Projects</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white border border-yellow-200 rounded-lg">
              <span className="font-medium text-gray-800">Noor Ouarzazate</span>
              <span className="text-gray-600">World's largest solar complex</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-yellow-200 rounded-lg">
              <span className="font-medium text-gray-800">Green Morocco Plan</span>
              <span className="text-gray-600">Agricultural sustainability</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-yellow-200 rounded-lg">
              <span className="font-medium text-gray-800">National Water Strategy</span>
              <span className="text-gray-600">Water conservation</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-yellow-200 rounded-lg">
              <span className="font-medium text-gray-800">Plastic Ban</span>
              <span className="text-gray-600">Reducing plastic pollution</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}