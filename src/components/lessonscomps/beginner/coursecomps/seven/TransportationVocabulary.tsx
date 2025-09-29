"use client";

import React from 'react';

export default function TransportationVocabulary() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Transportation Vocabulary
      </h2>
      
      <p className="text-gray-700 mb-6">Essential words for different modes of transport in Morocco.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Taksī</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Vehicle</span>
          </div>
          <p className="text-gray-600">Taxi</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: tak-see</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Example:</strong> "Bghit taksī" (I want a taxi)</p>
          </div>
        </div>

        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Ṭūbīs</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Vehicle</span>
          </div>
          <p className="text-gray-600">Bus</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: too-bees</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Example:</strong> "Fin ṭūbīs?" (Where is the bus?)</p>
          </div>
        </div>

        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Qiṭār</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Vehicle</span>
          </div>
          <p className="text-gray-600">Train</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: qi-tar</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Example:</strong> "Qiṭār l-Rabat" (Train to Rabat)</p>
          </div>
        </div>

        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Maḥaṭṭa</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Place</span>
          </div>
          <p className="text-gray-600">Station</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: ma-hat-ta</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Example:</strong> "Maḥaṭṭat l-qiṭār" (Train station)</p>
          </div>
        </div>
      </div>
    </div>
  );
}