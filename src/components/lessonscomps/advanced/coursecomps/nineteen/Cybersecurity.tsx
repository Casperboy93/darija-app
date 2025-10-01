"use client";

import React from 'react';

export default function Cybersecurity() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
        Cybersecurity and Digital Privacy
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-red-50 border border-red-200 p-5 rounded-lg">
          <h3 className="font-bold text-lg text-red-800 mb-3">Security Threats</h3>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-red-700">Amn sībrānī</p>
              <p className="text-gray-600 text-sm">Cybersecurity</p>
            </div>
            <div>
              <p className="font-semibold text-red-700">Hujūm sībrānī</p>
              <p className="text-gray-600 text-sm">Cyber attack</p>
            </div>
            <div>
              <p className="font-semibold text-red-700">Fīrūs ḥāsūbī</p>
              <p className="text-gray-600 text-sm">Computer virus</p>
            </div>
            <div>
              <p className="font-semibold text-red-700">Takhrīb bayānāt</p>
              <p className="text-gray-600 text-sm">Data breach</p>
            </div>
          </div>
        </div>
        
        <div className="bg-red-50 border border-red-200 p-5 rounded-lg">
          <h3 className="font-bold text-lg text-red-800 mb-3">Protection Methods</h3>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-red-700">Ḥimāya bayānāt</p>
              <p className="text-gray-600 text-sm">Data protection</p>
            </div>
            <div>
              <p className="font-semibold text-red-700">Tashfīr</p>
              <p className="text-gray-600 text-sm">Encryption</p>
            </div>
            <div>
              <p className="font-semibold text-red-700">Jidār nārī</p>
              <p className="text-gray-600 text-sm">Firewall</p>
            </div>
            <div>
              <p className="font-semibold text-red-700">Khuṣūṣiyya raqamiyya</p>
              <p className="text-gray-600 text-sm">Digital privacy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}