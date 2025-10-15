"use client";

import React from 'react';

export default function HealthExpressions() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Health Expressions
      </h2>
      
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="font-semibold text-gray-800 mb-2">Asking About Health:</p>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
        <span className="text-gray-700">Kif sahatak?</span>
              <span className="text-gray-600 text-sm">How is your health?</span>
            </div>
            <div className="flex justify-between items-center">
        <span className="text-gray-700">Wash nta mrid?</span>
              <span className="text-gray-600 text-sm">Are you sick?</span>
            </div>
            <div className="flex justify-between items-center">
        <span className="text-gray-700">Ash kayn lik?</span>
              <span className="text-gray-600 text-sm">What's wrong with you?</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="font-semibold text-gray-800 mb-2">Describing Symptoms:</p>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
        <span className="text-gray-700">Rasi kaywaja3ni</span>
              <span className="text-gray-600 text-sm">My head hurts</span>
            </div>
            <div className="flex justify-between items-center">
        <span className="text-gray-700">3andi humma</span>
              <span className="text-gray-600 text-sm">I have a fever</span>
            </div>
            <div className="flex justify-between items-center">
        <span className="text-gray-700">Kayn3as</span>
              <span className="text-gray-600 text-sm">I'm sleepy/tired</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}