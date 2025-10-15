"use client";

import React from 'react';

export default function MedicalProfessionals() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Medical Professionals
      </h2>
      
      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
        <h3 className="font-bold text-lg text-blue-800 mb-4">Healthcare Providers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-blue-700">Tabib 3amm</p>
            <p className="text-gray-600">General doctor</p>
          </div>
          <div>
            <p className="font-semibold text-blue-700">Tabib asnan</p>
            <p className="text-gray-600">Dentist</p>
          </div>
          <div>
            <p className="font-semibold text-blue-700">Tabib 3uyun</p>
            <p className="text-gray-600">Eye doctor</p>
          </div>
          <div>
            <p className="font-semibold text-blue-700">Tabib qalb</p>
            <p className="text-gray-600">Cardiologist</p>
          </div>
          <div>
            <p className="font-semibold text-blue-700">Mumarrida</p>
            <p className="text-gray-600">Nurse</p>
          </div>
          <div>
            <p className="font-semibold text-blue-700">Saydali</p>
            <p className="text-gray-600">Pharmacist</p>
          </div>
        </div>
      </div>
    </div>
  );
}