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
                <p className="text-sm font-medium">Tanawwuʿ hayawi</p>
                <p className="text-xs text-gray-600">Biodiversity</p>
              </div>
              <div>
                <p className="text-sm font-medium">Nizam biʾi</p>
                <p className="text-xs text-gray-600">Ecosystem</p>
              </div>
              <div>
                <p className="text-sm font-medium">Anwaʿ muhdadda</p>
                <p className="text-xs text-gray-600">Endangered species</p>
              </div>
              <div>
                <p className="text-sm font-medium">Inqirad</p>
                <p className="text-xs text-gray-600">Extinction</p>
              </div>
              <div>
                <p className="text-sm font-medium">Mawtin tabiʿi</p>
                <p className="text-xs text-gray-600">Natural habitat</p>
              </div>
              <div>
                <p className="text-sm font-medium">Mahmiyya tabiʿiyya</p>
                <p className="text-xs text-gray-600">Nature reserve</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-700 mb-2">Conservation Strategies</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <p className="text-sm font-medium">Himaya biʾiyya</p>
                <p className="text-xs text-gray-600">Environmental protection</p>
              </div>
              <div>
                <p className="text-sm font-medium">Iʿadat taʾhil</p>
                <p className="text-xs text-gray-600">Restoration</p>
              </div>
              <div>
                <p className="text-sm font-medium">Idara mustadama</p>
                <p className="text-xs text-gray-600">Sustainable management</p>
              </div>
              <div>
                <p className="text-sm font-medium">Takthir fi al-asir</p>
                <p className="text-xs text-gray-600">Captive breeding</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}