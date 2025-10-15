"use client";

import React from 'react';

export default function HospitalityCustoms() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Hospitality Customs
      </h2>
      
      <p className="text-gray-700 mb-6">Understanding Moroccan hospitality traditions and guest etiquette.</p>
      
      <div className="space-y-4">
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="font-semibold text-green-800 mb-3">As a Guest</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">Tlub al-idhun</span>
              <span className="text-gray-600">Ask for permission (before entering)</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">Ikhla' al-hidha'</span>
              <span className="text-gray-600">Remove shoes (when entering homes)</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">Iqbal al-diyafa</span>
              <span className="text-gray-600">Accept hospitality (tea, food)</span>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="font-semibold text-green-800 mb-3">As a Host</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">Qaddam al-atay</span>
              <span className="text-gray-600">Offer tea (essential hospitality)</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">Israr 'ala al-akl</span>
              <span className="text-gray-600">Insist on food (show generosity)</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">Rafiq al-dayf</span>
              <span className="text-gray-600">Accompany the guest (when leaving)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}