"use client";

import React from 'react';

export default function HealthConditions() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
        Health Conditions
      </h2>
      
      <p className="text-gray-700 mb-6">Common health problems and how to describe them.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Marīḍ</p>
            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Condition</span>
          </div>
          <p className="text-gray-600">Sick / Ill</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: ma-reed</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Example:</strong> "Ana marīḍ" (I am sick)</p>
          </div>
        </div>

        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Ṣudāʿ</p>
            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Condition</span>
          </div>
          <p className="text-gray-600">Headache</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: su-da</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Example:</strong> "ʿAndī ṣudāʿ" (I have a headache)</p>
          </div>
        </div>

        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Sukhāna</p>
            <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Condition</span>
          </div>
          <p className="text-gray-600">Fever</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: su-kha-na</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Example:</strong> "ʿAndī sukhāna" (I have a fever)</p>
          </div>
        </div>

        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Suʿāl</p>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Condition</span>
          </div>
          <p className="text-gray-600">Cough</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: su-al</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Example:</strong> "Kaysuʿlnī bzāf" (I'm coughing a lot)</p>
          </div>
        </div>
      </div>
    </div>
  );
}