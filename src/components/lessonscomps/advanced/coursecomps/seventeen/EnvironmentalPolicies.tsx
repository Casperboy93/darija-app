"use client";

import React from 'react';

export default function EnvironmentalPolicies() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Environmental Policies and Agreements
      </h2>
      
      <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-orange-800 mb-4">International Environmental Law</h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-orange-700 mb-2">Global Agreements</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <p className="text-sm font-medium">Ittifāqiyyat Bārīs</p>
                <p className="text-xs text-gray-600">Paris Agreement</p>
              </div>
              <div>
                <p className="text-sm font-medium">Brūtūkūl Kyōtō</p>
                <p className="text-xs text-gray-600">Kyoto Protocol</p>
              </div>
              <div>
                <p className="text-sm font-medium">Ittifāqiyyat Munākh</p>
                <p className="text-xs text-gray-600">Climate Convention</p>
              </div>
              <div>
                <p className="text-sm font-medium">Ahdāf Tanmiya</p>
                <p className="text-xs text-gray-600">SDGs</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-orange-700 mb-2">Policy Tools</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <p className="text-sm font-medium">Ḍarāʾib karbūn</p>
                <p className="text-xs text-gray-600">Carbon tax</p>
              </div>
              <div>
                <p className="text-sm font-medium">Tijārat anbiʿāthāt</p>
                <p className="text-xs text-gray-600">Emissions trading</p>
              </div>
              <div>
                <p className="text-sm font-medium">Daʿm ṭāqa naẓīfa</p>
                <p className="text-xs text-gray-600">Clean energy subsidies</p>
              </div>
              <div>
                <p className="text-sm font-medium">Lawāʾiḥ bīʾiyya</p>
                <p className="text-xs text-gray-600">Environmental regulations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}