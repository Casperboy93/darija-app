"use client";

import React from 'react';

export default function DiplomaticRelations() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Diplomatic Relations and Protocol
      </h2>
      
      <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-orange-800 mb-4">International Diplomacy</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-orange-700 mb-2">Diplomatic Protocol</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Brutukul diblumasi:</span> Diplomatic protocol</p>
              <p><span className="font-semibold">Marasim rasmiyya:</span> Official ceremonies</p>
              <p><span className="font-semibold">Adab diblumasiyya:</span> Diplomatic etiquette</p>
              <p><span className="font-semibold">Laqaʾat rasmiyya:</span> Official meetings</p>
              <p><span className="font-semibold">Tashrifat:</span> Protocol procedures</p>
              <p><span className="font-semibold">Haflat istiqbal:</span> Reception ceremonies</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-orange-700 mb-2">International Relations</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">ʿAlaqat duwaliyya:</span> International relations</p>
              <p><span className="font-semibold">Taʿawun thunaʾi:</span> Bilateral cooperation</p>
              <p><span className="font-semibold">Taʿawun mutaʿaddid atraf:</span> Multilateral cooperation</p>
              <p><span className="font-semibold">Muʾtamarat duwaliyya:</span> International conferences</p>
              <p><span className="font-semibold">Munazzamat duwaliyya:</span> International organizations</p>
              <p><span className="font-semibold">Siyasa kharijiyya:</span> Foreign policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}