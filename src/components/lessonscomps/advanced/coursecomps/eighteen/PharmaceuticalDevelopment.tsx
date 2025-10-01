"use client";

import React from 'react';

export default function PharmaceuticalDevelopment() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Pharmaceutical Development and Drug Discovery
      </h2>
      
      <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-green-800 mb-4">Drug Development Process</h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-700 mb-2">Discovery and Development</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <p className="text-sm font-medium">Iktishāf dawāʾ</p>
                <p className="text-xs text-gray-600">Drug discovery</p>
              </div>
              <div>
                <p className="text-sm font-medium">Taṭwīr dawāʾ</p>
                <p className="text-xs text-gray-600">Drug development</p>
              </div>
              <div>
                <p className="text-sm font-medium">Tajārib mukhtabara</p>
                <p className="text-xs text-gray-600">Laboratory trials</p>
              </div>
              <div>
                <p className="text-sm font-medium">Tajārib ḥayawānāt</p>
                <p className="text-xs text-gray-600">Animal trials</p>
              </div>
              <div>
                <p className="text-sm font-medium">Marāḥil sarīriyya</p>
                <p className="text-xs text-gray-600">Clinical phases</p>
              </div>
              <div>
                <p className="text-sm font-medium">Muwāfaqa tanẓīmiyya</p>
                <p className="text-xs text-gray-600">Regulatory approval</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-700 mb-2">Pharmaceutical Manufacturing</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <p className="text-sm font-medium">Ṣināʿa dawāʾiyya</p>
                <p className="text-xs text-gray-600">Pharmaceutical manufacturing</p>
              </div>
              <div>
                <p className="text-sm font-medium">Raqāba jūda</p>
                <p className="text-xs text-gray-600">Quality control</p>
              </div>
              <div>
                <p className="text-sm font-medium">Mamārasāt ṣināʿiyya</p>
                <p className="text-xs text-gray-600">Manufacturing practices</p>
              </div>
              <div>
                <p className="text-sm font-medium">Takhzīn wa tawzīʿ</p>
                <p className="text-xs text-gray-600">Storage and distribution</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}