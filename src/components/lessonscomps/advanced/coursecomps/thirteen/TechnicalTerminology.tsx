"use client";

import React from 'react';

export default function TechnicalTerminology() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Technical Terminology
      </h2>
      
      <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-orange-800 mb-4">Technology and Engineering</h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-orange-700 mb-2">Computing and IT</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <p className="text-sm font-medium">Ḥāsūb</p>
                <p className="text-xs text-gray-600">Computer</p>
              </div>
              <div>
                <p className="text-sm font-medium">Barnāmaj</p>
                <p className="text-xs text-gray-600">Software</p>
              </div>
              <div>
                <p className="text-sm font-medium">Shabakat</p>
                <p className="text-xs text-gray-600">Network</p>
              </div>
              <div>
                <p className="text-sm font-medium">Qāʿidat bayānāt</p>
                <p className="text-xs text-gray-600">Database</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-orange-700 mb-2">Engineering</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <p className="text-sm font-medium">Handasa</p>
                <p className="text-xs text-gray-600">Engineering</p>
              </div>
              <div>
                <p className="text-sm font-medium">Taṣmīm</p>
                <p className="text-xs text-gray-600">Design</p>
              </div>
              <div>
                <p className="text-sm font-medium">Inshāʾ</p>
                <p className="text-xs text-gray-600">Construction</p>
              </div>
              <div>
                <p className="text-sm font-medium">Takhnūlūjiyā</p>
                <p className="text-xs text-gray-600">Technology</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-orange-700 mb-2">Medical Sciences</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <p className="text-sm font-medium">Tashkhīṣ</p>
                <p className="text-xs text-gray-600">Diagnosis</p>
              </div>
              <div>
                <p className="text-sm font-medium">ʿIlāj</p>
                <p className="text-xs text-gray-600">Treatment</p>
              </div>
              <div>
                <p className="text-sm font-medium">Jarāḥa</p>
                <p className="text-xs text-gray-600">Surgery</p>
              </div>
              <div>
                <p className="text-sm font-medium">Dawāʾ</p>
                <p className="text-xs text-gray-600">Medicine</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}