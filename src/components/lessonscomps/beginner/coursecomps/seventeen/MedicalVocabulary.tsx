"use client";

import React from 'react';

export default function MedicalVocabulary() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Medical Vocabulary
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
            <span className="font-medium text-gray-800">Tabib</span>
            <span className="text-gray-600">Doctor</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
            <span className="font-medium text-gray-800">Farmasiya</span>
            <span className="text-gray-600">Pharmacy</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
            <span className="font-medium text-gray-800">Dawa</span>
            <span className="text-gray-600">Medicine</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
            <span className="font-medium text-gray-800">Mustashfa</span>
            <span className="text-gray-600">Hospital</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
            <span className="font-medium text-gray-800">Huqna</span>
            <span className="text-gray-600">Injection</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
            <span className="font-medium text-gray-800">Tahlil</span>
            <span className="text-gray-600">Test/Analysis</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
            <span className="font-medium text-gray-800">Wasfa</span>
            <span className="text-gray-600">Prescription</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
            <span className="font-medium text-gray-800">Mu3ayana</span>
            <span className="text-gray-600">Examination</span>
          </div>
        </div>
      </div>
    </div>
  );
}