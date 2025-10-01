"use client";

import React from 'react';

export default function ConservationBiodiversity() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Conservation and Biodiversity
      </h2>
      
      <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-green-800 mb-4">Ecosystem Protection</h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-700 mb-2">Biodiversity Terms</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <p className="text-sm font-medium">Tanawwuʿ ḥayawī</p>
                <p className="text-xs text-gray-600">Biodiversity</p>
              </div>
              <div>
                <p className="text-sm font-medium">Niẓām bīʾī</p>
                <p className="text-xs text-gray-600">Ecosystem</p>
              </div>
              <div>
                <p className="text-sm font-medium">Anwāʿ muhdadda</p>
                <p className="text-xs text-gray-600">Endangered species</p>
              </div>
              <div>
                <p className="text-sm font-medium">Inqirāḍ</p>
                <p className="text-xs text-gray-600">Extinction</p>
              </div>
              <div>
                <p className="text-sm font-medium">Mawṭin ṭabīʿī</p>
                <p className="text-xs text-gray-600">Natural habitat</p>
              </div>
              <div>
                <p className="text-sm font-medium">Maḥmiyya ṭabīʿiyya</p>
                <p className="text-xs text-gray-600">Nature reserve</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-700 mb-2">Conservation Strategies</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <p className="text-sm font-medium">Ḥimāya bīʾiyya</p>
                <p className="text-xs text-gray-600">Environmental protection</p>
              </div>
              <div>
                <p className="text-sm font-medium">Iʿādat taʾhīl</p>
                <p className="text-xs text-gray-600">Restoration</p>
              </div>
              <div>
                <p className="text-sm font-medium">Idāra mustadāma</p>
                <p className="text-xs text-gray-600">Sustainable management</p>
              </div>
              <div>
                <p className="text-sm font-medium">Takthīr fī al-asir</p>
                <p className="text-xs text-gray-600">Captive breeding</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}