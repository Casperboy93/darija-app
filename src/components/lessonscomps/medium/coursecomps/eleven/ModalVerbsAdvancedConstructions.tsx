"use client";

import React from 'react';

export default function ModalVerbsAdvancedConstructions() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Modal Verbs and Advanced Constructions
      </h2>
      
      <p className="text-gray-700 mb-6">Master sophisticated verb constructions for expressing ability, necessity, and possibility.</p>
      
      <div className="space-y-4">
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="font-semibold text-green-800 mb-3">Ability and Capability</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">Qādir ndir</span>
              <span className="text-gray-600">I can do / I am able to do</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">Ma qādirsh</span>
              <span className="text-gray-600">I cannot / I am not able to</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">Kān qādir</span>
              <span className="text-gray-600">He was able to / He could</span>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="font-semibold text-green-800 mb-3">Necessity and Obligation</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">Khāṣṣnī ndir</span>
              <span className="text-gray-600">I must do / I have to do</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">Lāzim ndir</span>
              <span className="text-gray-600">I need to do / It's necessary</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">Ma khāṣṣnīsh</span>
              <span className="text-gray-600">I don't have to / I don't need to</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}