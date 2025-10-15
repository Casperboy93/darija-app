"use client";

import React from 'react';

export default function MedicalSpecialties() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Medical Specialties and Procedures
      </h2>
      
      <p className="text-gray-700 mb-6">Essential vocabulary for medical specialties and advanced procedures.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Surgical Specialties</p>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Surgery</span>
          </div>
          <div className="mt-3 space-y-2">
            <p className="text-sm"><span className="font-semibold">Jiraha qalb:</span> Cardiac surgery</p>
            <p className="text-sm"><span className="font-semibold">Jiraha ʿasabiyya:</span> Neurosurgery</p>
            <p className="text-sm"><span className="font-semibold">Jiraha tajmiliyya:</span> Plastic surgery</p>
            <p className="text-sm"><span className="font-semibold">Jiraha ʿizam:</span> Orthopedic surgery</p>
            <p className="text-sm"><span className="font-semibold">Jiraha sadr:</span> Thoracic surgery</p>
          </div>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Internal Medicine</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Medicine</span>
          </div>
          <div className="mt-3 space-y-2">
            <p className="text-sm"><span className="font-semibold">Tibb batini:</span> Internal medicine</p>
            <p className="text-sm"><span className="font-semibold">Amrad qalb:</span> Cardiology</p>
            <p className="text-sm"><span className="font-semibold">Amrad ʿasabiyya:</span> Neurology</p>
            <p className="text-sm"><span className="font-semibold">Amrad ghudad:</span> Endocrinology</p>
            <p className="text-sm"><span className="font-semibold">Amrad dam:</span> Hematology</p>
          </div>
        </div>
      </div>
    </div>
  );
}