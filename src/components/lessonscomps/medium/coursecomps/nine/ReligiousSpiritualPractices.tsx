"use client";

import React from 'react';

export default function ReligiousSpiritualPractices() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
        Religious and Spiritual Practices
      </h2>
      
      <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-yellow-800 mb-4">Spiritual Vocabulary</h3>
        <p className="text-gray-700 mb-4">Essential terms related to religious and spiritual practices in Moroccan culture.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-md border-l-4 border-yellow-400">
            <h4 className="font-semibold text-yellow-700 mb-2">Prayer & Worship</h4>
            <div className="space-y-1 text-sm">
              <p><span className="font-semibold">Ṣalāt:</span> Prayer</p>
              <p><span className="font-semibold">Masjid:</span> Mosque</p>
              <p><span className="font-semibold">Wuḍūʾ:</span> Ablution</p>
              <p><span className="font-semibold">Qibla:</span> Direction of prayer</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-md border-l-4 border-yellow-400">
            <h4 className="font-semibold text-yellow-700 mb-2">Holy Months</h4>
            <div className="space-y-1 text-sm">
              <p><span className="font-semibold">Ramaḍān:</span> Holy month of fasting</p>
              <p><span className="font-semibold">Ṣiyām:</span> Fasting</p>
              <p><span className="font-semibold">Ifṭār:</span> Breaking fast</p>
              <p><span className="font-semibold">Suḥūr:</span> Pre-dawn meal</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-md border-l-4 border-yellow-400">
            <h4 className="font-semibold text-yellow-700 mb-2">Pilgrimage</h4>
            <div className="space-y-1 text-sm">
              <p><span className="font-semibold">Ḥajj:</span> Pilgrimage to Mecca</p>
              <p><span className="font-semibold">3umra:</span> Lesser pilgrimage</p>
              <p><span className="font-semibold">Ḥājj:</span> One who completed Hajj</p>
              <p><span className="font-semibold">Ziyāra:</span> Religious visit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}