"use client";

import React from 'react';

export default function InternationalBusiness() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        International Business and Trade
      </h2>
      
      <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-green-800 mb-4">Global Business Operations</h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-700 mb-2">International Trade</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <p className="text-sm font-medium">Tijāra ʿālamiyya</p>
                <p className="text-xs text-gray-600">Global trade</p>
              </div>
              <div>
                <p className="text-sm font-medium">Ṣādirāt wa wāridāt</p>
                <p className="text-xs text-gray-600">Exports and imports</p>
              </div>
              <div>
                <p className="text-sm font-medium">Ittifāqiyyāt tijāriyya</p>
                <p className="text-xs text-gray-600">Trade agreements</p>
              </div>
              <div>
                <p className="text-sm font-medium">Aswāq ʿālamiyya</p>
                <p className="text-xs text-gray-600">Global markets</p>
              </div>
              <div>
                <p className="text-sm font-medium">Sharākāt istirātījiyya</p>
                <p className="text-xs text-gray-600">Strategic partnerships</p>
              </div>
              <div>
                <p className="text-sm font-medium">Istithmār ajnabī</p>
                <p className="text-xs text-gray-600">Foreign investment</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-700 mb-2">Business Development</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <p className="text-sm font-medium">Tanmiya aʿmāl</p>
                <p className="text-xs text-gray-600">Business development</p>
              </div>
              <div>
                <p className="text-sm font-medium">Tawassuʿ ʿālamī</p>
                <p className="text-xs text-gray-600">Global expansion</p>
              </div>
              <div>
                <p className="text-sm font-medium">Ibtikār wa taṭwīr</p>
                <p className="text-xs text-gray-600">Innovation and development</p>
              </div>
              <div>
                <p className="text-sm font-medium">Tanāfusiyya</p>
                <p className="text-xs text-gray-600">Competitiveness</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}