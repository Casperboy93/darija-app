"use client";

import React from 'react';

export default function DigitalCommunication() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Digital Communication
      </h2>
      
      <p className="text-gray-700 mb-6">Modern communication methods and digital interaction.</p>
      
      <div className="space-y-4">
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <h3 className="font-semibold text-orange-800 mb-3">Communication Methods</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white border border-orange-200 rounded-lg">
              <div>
                <span className="font-medium text-gray-800">Al-barīd al-iliktronī</span>
                <p className="text-sm text-gray-600">Email</p>
              </div>
              <span className="text-gray-600">البريد الإلكتروني</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-orange-200 rounded-lg">
              <div>
                <span className="font-medium text-gray-800">Mukālama fīdiyū</span>
                <p className="text-sm text-gray-600">Video call</p>
              </div>
              <span className="text-gray-600">مكالمة فيديو</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-orange-200 rounded-lg">
              <div>
                <span className="font-medium text-gray-800">Risāla naṣṣiyya</span>
                <p className="text-sm text-gray-600">Text message</p>
              </div>
              <span className="text-gray-600">رسالة نصية</span>
            </div>
          </div>
        </div>
        
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <h3 className="font-semibold text-orange-800 mb-3">Communication Actions</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white border border-orange-200 rounded-lg">
              <span className="font-medium text-gray-800">Irsāl</span>
              <span className="text-gray-600">Send (إرسال)</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-orange-200 rounded-lg">
              <span className="font-medium text-gray-800">Istiqbāl</span>
              <span className="text-gray-600">Receive (استقبال)</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-orange-200 rounded-lg">
              <span className="font-medium text-gray-800">Radd</span>
              <span className="text-gray-600">Reply (رد)</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-orange-200 rounded-lg">
              <span className="font-medium text-gray-800">Taḥwīl</span>
              <span className="text-gray-600">Forward (تحويل)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}