"use client";

import React from 'react';

export default function AdvancedTransportation() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Advanced Transportation
      </h2>
      
      <p className="text-gray-700 mb-6">Comprehensive vocabulary for various modes of transport and travel situations.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Qitār</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Transport</span>
          </div>
          <p className="text-gray-600">Train</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: qi-tar</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600">Example: "Qitār ghadi yousel f sā3a thmanya" (The train will arrive at 8 o'clock)</p>
          </div>
        </div>

        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Ṭayyāra</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Transport</span>
          </div>
          <p className="text-gray-600">Airplane</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: tay-ya-ra</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600">Example: "Ṭayyāra ghadi tṭīr men Casablanca" (The plane will fly from Casablanca)</p>
          </div>
        </div>

        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Kār krā</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Transport</span>
          </div>
          <p className="text-gray-600">Rental car</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: kar kra</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600">Example: "Bghīt nkrī kār li usbū3" (I want to rent a car for a week)</p>
          </div>
        </div>

        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Bābūr</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Transport</span>
          </div>
          <p className="text-gray-600">Ship/Boat</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: ba-bur</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600">Example: "Bābūr ghadi yousel l Tanger" (The ship will arrive in Tangier)</p>
          </div>
        </div>
      </div>
    </div>
  );
}