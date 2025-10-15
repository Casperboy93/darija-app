"use client";

import React from 'react';

export default function TraditionalMusicDance() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Traditional Music and Dance
      </h2>
      
      <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-6">
        <h3 className="font-bold text-lg text-green-800 mb-4">Musical Heritage</h3>
        <p className="text-gray-700 mb-4">Explore the rich musical traditions that form the heart of Moroccan culture.</p>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-md border-l-4 border-green-400">
            <p className="font-semibold text-green-700">Gnawa</p>
            <p className="text-gray-600">Spiritual music tradition with African roots</p>
            <p className="text-sm text-gray-500 mt-1">Instruments: Qraqib (metal castanets), Sintir (bass lute)</p>
          </div>
          
          <div className="bg-white p-4 rounded-md border-l-4 border-blue-400">
            <p className="font-semibold text-blue-700">Andalusi</p>
            <p className="text-gray-600">Classical Andalusian music</p>
            <p className="text-sm text-gray-500 mt-1">Instruments: 3ud (lute), Qanun (zither), Riqq (tambourine)</p>
          </div>
          
          <div className="bg-white p-4 rounded-md border-l-4 border-purple-400">
            <p className="font-semibold text-purple-700">Sha3bī</p>
            <p className="text-gray-600">Popular folk music</p>
            <p className="text-sm text-gray-500 mt-1">Instruments: Banjo, Darbouka, Bendir</p>
          </div>
          
          <div className="bg-white p-4 rounded-md border-l-4 border-orange-400">
            <p className="font-semibold text-orange-700">Ahwash</p>
            <p className="text-gray-600">Berber traditional dance and music</p>
            <p className="text-sm text-gray-500 mt-1">Performed in groups with drums and chanting</p>
          </div>
        </div>
      </div>
    </div>
  );
}