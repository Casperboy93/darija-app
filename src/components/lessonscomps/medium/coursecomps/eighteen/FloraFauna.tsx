"use client";

import React from 'react';

export default function FloraFauna() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Flora and Fauna
      </h2>
      
      <p className="text-gray-700 mb-6">Morocco's native plants and wildlife.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Native Plants */}
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="font-semibold text-green-800 mb-3">Native Plants</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Argan</p>
                <p className="text-sm text-gray-600">أركان</p>
              </div>
              <span className="text-2xl">🌳</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Arz</p>
                <p className="text-sm text-gray-600">Cedar - أرز</p>
              </div>
              <span className="text-2xl">🌲</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Zaytūn</p>
                <p className="text-sm text-gray-600">Olive - زيتون</p>
              </div>
              <span className="text-2xl">🫒</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Nakhl</p>
                <p className="text-sm text-gray-600">Date palm - نخل</p>
              </div>
              <span className="text-2xl">🌴</span>
            </div>
          </div>
        </div>

        {/* Wildlife */}
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="font-semibold text-green-800 mb-3">Wildlife</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Nimr</p>
                <p className="text-sm text-gray-600">Leopard - نمر</p>
              </div>
              <span className="text-2xl">🐆</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Qird</p>
                <p className="text-sm text-gray-600">Monkey - قرد</p>
              </div>
              <span className="text-2xl">🐒</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Ghazāl</p>
                <p className="text-sm text-gray-600">Gazelle - غزال</p>
              </div>
              <span className="text-2xl">🦌</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Nasr</p>
                <p className="text-sm text-gray-600">Eagle - نسر</p>
              </div>
              <span className="text-2xl">🦅</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}