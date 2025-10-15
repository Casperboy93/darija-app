"use client";

import React from 'react';

export default function PharmacyVocabulary() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
        Pharmacy Vocabulary
      </h2>
      
      <p className="text-gray-700 mb-6">Important words for visiting a pharmacy and getting medication.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
        <p className="font-bold text-lg text-gray-900">Saydaliya</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Place</span>
          </div>
          <p className="text-gray-600">Pharmacy</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: say-da-lee-ya</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
        <p className="text-sm text-gray-600"><strong>Example:</strong> "Fin saydaliya?" (Where is the pharmacy?)</p>
          </div>
        </div>

        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
        <p className="font-bold text-lg text-gray-900">Dawa</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Medicine</span>
          </div>
          <p className="text-gray-600">Medicine / Medication</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: da-wa</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
        <p className="text-sm text-gray-600"><strong>Example:</strong> "Hada d-dawa l-suda3" (This is headache medicine)</p>
          </div>
        </div>

        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
        <p className="font-bold text-lg text-gray-900">Wasfa</p>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Document</span>
          </div>
          <p className="text-gray-600">Prescription</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: was-fa</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
        <p className="text-sm text-gray-600"><strong>Example:</strong> "3andi wasfa mn t-tabib" (I have a prescription from the doctor)</p>
          </div>
        </div>

        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
        <p className="font-bold text-lg text-gray-900">Habba</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Medicine</span>
          </div>
          <p className="text-gray-600">Pill / Tablet</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: hab-ba</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
        <p className="text-sm text-gray-600"><strong>Example:</strong> "Khud habba kull yum" (Take one pill every day)</p>
          </div>
        </div>
      </div>
    </div>
  );
}