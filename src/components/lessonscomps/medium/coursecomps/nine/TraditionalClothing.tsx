"use client";

import React from 'react';

export default function TraditionalClothing() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-indigo-500 rounded-full mr-3"></div>
        Traditional Clothing
      </h2>
      
      <p className="text-gray-700 mb-6">Learn about the traditional garments worn in Moroccan culture.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-indigo-50 border border-indigo-200 p-5 rounded-lg">
          <h3 className="font-bold text-lg text-indigo-800 mb-3">Men's Traditional Wear</h3>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded-md border-l-4 border-indigo-400">
              <p className="text-sm"><span className="font-semibold">Jallāba:</span> Traditional robe</p>
              <p className="text-xs text-gray-500">Long, loose-fitting hooded robe</p>
            </div>
            <div className="bg-white p-3 rounded-md border-l-4 border-indigo-400">
              <p className="text-sm"><span className="font-semibold">Tarbūsh:</span> Traditional hat (fez)</p>
              <p className="text-xs text-gray-500">Red felt hat with tassel</p>
            </div>
            <div className="bg-white p-3 rounded-md border-l-4 border-indigo-400">
              <p className="text-sm"><span className="font-semibold">Sarwāl:</span> Traditional pants</p>
              <p className="text-xs text-gray-500">Loose-fitting trousers</p>
            </div>
            <div className="bg-white p-3 rounded-md border-l-4 border-indigo-400">
              <p className="text-sm"><span className="font-semibold">Belgha:</span> Traditional slippers</p>
              <p className="text-xs text-gray-500">Pointed leather shoes</p>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 border border-indigo-200 p-5 rounded-lg">
          <h3 className="font-bold text-lg text-indigo-800 mb-3">Women's Traditional Wear</h3>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded-md border-l-4 border-pink-400">
              <p className="text-sm"><span className="font-semibold">Qafṭān:</span> Traditional dress</p>
              <p className="text-xs text-gray-500">Long, flowing dress with wide sleeves</p>
            </div>
            <div className="bg-white p-3 rounded-md border-l-4 border-pink-400">
              <p className="text-sm"><span className="font-semibold">Takshīṭa:</span> Formal traditional dress</p>
              <p className="text-xs text-gray-500">Elaborate dress for special occasions</p>
            </div>
            <div className="bg-white p-3 rounded-md border-l-4 border-pink-400">
              <p className="text-sm"><span className="font-semibold">Ḥāʾik:</span> Traditional white wrap</p>
              <p className="text-xs text-gray-500">White cloth worn as outer garment</p>
            </div>
            <div className="bg-white p-3 rounded-md border-l-4 border-pink-400">
              <p className="text-sm"><span className="font-semibold">Mdamma:</span> Traditional slippers</p>
              <p className="text-xs text-gray-500">Decorative women's shoes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}