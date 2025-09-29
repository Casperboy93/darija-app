"use client";

import React from 'react';

export default function MoroccanFestivals() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Moroccan Festivals
      </h2>
      
      <p className="text-gray-700 mb-6">Learn about the major festivals and celebrations in Moroccan culture.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">3īd l Fiṭr</p>
            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Festival</span>
          </div>
          <p className="text-gray-600">Eid al-Fitr (End of Ramadan)</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: eed al-fitr</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600">Example: "3īd l Fiṭr 3īd kbīr f l Maghrib" (Eid al-Fitr is a big celebration in Morocco)</p>
          </div>
        </div>

        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">3īd l Aḍḥā</p>
            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Festival</span>
          </div>
          <p className="text-gray-600">Eid al-Adha (Festival of Sacrifice)</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: eed al-ad-ha</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600">Example: "F 3īd l Aḍḥā kandhbaḥu l kharūf" (On Eid al-Adha we sacrifice the sheep)</p>
          </div>
        </div>

        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Mawlid</p>
            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Festival</span>
          </div>
          <p className="text-gray-600">Prophet's Birthday</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: maw-lid</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600">Example: "F Mawlid kanqraw l Qur'ān" (On Mawlid we recite the Quran)</p>
          </div>
        </div>

        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Āshūrā</p>
            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Festival</span>
          </div>
          <p className="text-gray-600">Day of Ashura</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: a-shu-ra</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600">Example: "F Āshūrā l aṭfāl kayāklu l ḥalwā" (On Ashura children eat sweets)</p>
          </div>
        </div>
      </div>
    </div>
  );
}