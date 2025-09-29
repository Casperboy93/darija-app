"use client";

import React from 'react';

export default function InternationalRelations() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        International Relations
      </h2>
      
      <p className="text-gray-700 mb-6">Vocabulary for discussing diplomacy and international affairs.</p>
      
      <div className="space-y-6">
        <div className="bg-white p-4 rounded-lg border border-orange-200">
          <h3 className="font-semibold text-orange-800 mb-2">Diplomatic Terms</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-2 bg-orange-50 rounded">
              <p className="font-medium">Diblūmāsiyya</p>
              <p className="text-sm text-gray-600">Diplomacy</p>
            </div>
            <div className="text-center p-2 bg-orange-50 rounded">
              <p className="font-medium">Safīr</p>
              <p className="text-sm text-gray-600">Ambassador</p>
            </div>
            <div className="text-center p-2 bg-orange-50 rounded">
              <p className="font-medium">Muʿāhada</p>
              <p className="text-sm text-gray-600">Treaty</p>
            </div>
            <div className="text-center p-2 bg-orange-50 rounded">
              <p className="font-medium">Ittifāqiyya</p>
              <p className="text-sm text-gray-600">Agreement</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-orange-200">
          <h3 className="font-semibold text-orange-800 mb-2">International Organizations</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-2 bg-orange-50 rounded">
              <p className="font-medium">Al-Umam al-Muttaḥida</p>
              <p className="text-sm text-gray-600">United Nations</p>
            </div>
            <div className="text-center p-2 bg-orange-50 rounded">
              <p className="font-medium">Jāmiʿat ad-Duwal al-ʿArabiyya</p>
              <p className="text-sm text-gray-600">Arab League</p>
            </div>
            <div className="text-center p-2 bg-orange-50 rounded">
              <p className="font-medium">Al-Ittiḥād al-Afrīqī</p>
              <p className="text-sm text-gray-600">African Union</p>
            </div>
            <div className="text-center p-2 bg-orange-50 rounded">
              <p className="font-medium">Al-Ittiḥād al-Maghāribī</p>
              <p className="text-sm text-gray-600">Arab Maghreb Union</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}