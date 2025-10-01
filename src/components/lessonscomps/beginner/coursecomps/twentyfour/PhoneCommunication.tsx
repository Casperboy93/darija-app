"use client";

import React from 'react';

export default function PhoneCommunication() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Phone & Communication - الهاتف والتواصل</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Phone Actions</h3>
          <div className="space-y-3">
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="text-md font-semibold text-orange-600">n-téléphoni</div>
              <div className="text-sm text-gray-500">أتصل</div>
              <div className="text-sm text-gray-700">to call</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="text-md font-semibold text-orange-600">n-jaweb</div>
              <div className="text-sm text-gray-500">أجيب</div>
              <div className="text-sm text-gray-700">to answer</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="text-md font-semibold text-orange-600">n-saker</div>
              <div className="text-sm text-gray-500">أقفل</div>
              <div className="text-sm text-gray-700">to hang up</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="text-md font-semibold text-orange-600">n-sifet SMS</div>
              <div className="text-sm text-gray-500">أرسل رسالة</div>
              <div className="text-sm text-gray-700">to send SMS</div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Phone Features</h3>
          <div className="space-y-3">
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="text-md font-semibold text-red-600">numéro</div>
              <div className="text-sm text-gray-500">رقم</div>
              <div className="text-sm text-gray-700">number</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="text-md font-semibold text-red-600">contact</div>
              <div className="text-sm text-gray-500">جهة اتصال</div>
              <div className="text-sm text-gray-700">contact</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="text-md font-semibold text-red-600">batterie</div>
              <div className="text-sm text-gray-500">بطارية</div>
              <div className="text-sm text-gray-700">battery</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="text-md font-semibold text-red-600">réseau</div>
              <div className="text-sm text-gray-500">شبكة</div>
              <div className="text-sm text-gray-700">network</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-orange-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Phone Conversation Phrases</h3>
        <div className="space-y-3">
          <div className="bg-white p-3 rounded border">
            <div className="font-medium text-orange-700">Starting a call:</div>
            <div className="text-sm mt-1">
              <div><span className="font-medium">allo?</span> - hello? (answering phone)</div>
              <div><span className="font-medium">ahlan, ana...</span> - hello, this is...</div>
            </div>
          </div>
          <div className="bg-white p-3 rounded border">
            <div className="font-medium text-orange-700">During the call:</div>
            <div className="text-sm mt-1">
              <div><span className="font-medium">ma sma3tsh mezyan</span> - I didn't hear well</div>
              <div><span className="font-medium">3awad 3afak</span> - repeat please</div>
            </div>
          </div>
          <div className="bg-white p-3 rounded border">
            <div className="font-medium text-orange-700">Ending a call:</div>
            <div className="text-sm mt-1">
              <div><span className="font-medium">beslama</span> - goodbye</div>
              <div><span className="font-medium">n-téléphoni lik ghedda</span> - I'll call you tomorrow</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}