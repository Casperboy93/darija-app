"use client";

import React from 'react';

export default function ArchitectureUrbanPlanning() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Architecture and Urban Planning
      </h2>
      
      <p className="text-gray-700 mb-6">Specialized vocabulary for discussing architectural elements and urban design.</p>
      
      <div className="space-y-6">
        <div className="bg-white p-4 rounded-lg border border-orange-200">
          <h3 className="font-semibold text-orange-800 mb-2">Architectural Elements</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-2 bg-orange-50 rounded">
              <p className="font-medium">Miʿmār</p>
              <p className="text-sm text-gray-600">Architect</p>
            </div>
            <div className="text-center p-2 bg-orange-50 rounded">
              <p className="font-medium">Riyāḍ</p>
              <p className="text-sm text-gray-600">Traditional house</p>
            </div>
            <div className="text-center p-2 bg-orange-50 rounded">
              <p className="font-medium">Ṣaḥn</p>
              <p className="text-sm text-gray-600">Courtyard</p>
            </div>
            <div className="text-center p-2 bg-orange-50 rounded">
              <p className="font-medium">Muqarnas</p>
              <p className="text-sm text-gray-600">Honeycomb vaulting</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-orange-200">
          <h3 className="font-semibold text-orange-800 mb-2">Urban Spaces</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-2 bg-orange-50 rounded">
              <p className="font-medium">Madīna qadīma</p>
              <p className="text-sm text-gray-600">Old city/Medina</p>
            </div>
            <div className="text-center p-2 bg-orange-50 rounded">
              <p className="font-medium">Sūq</p>
              <p className="text-sm text-gray-600">Traditional market</p>
            </div>
            <div className="text-center p-2 bg-orange-50 rounded">
              <p className="font-medium">Funduq</p>
              <p className="text-sm text-gray-600">Caravanserai</p>
            </div>
            <div className="text-center p-2 bg-orange-50 rounded">
              <p className="font-medium">Ḥammām</p>
              <p className="text-sm text-gray-600">Public bath</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}