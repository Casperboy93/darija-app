"use client";

import React from 'react';

export default function CulturalTips() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Cultural Tips for Tourists</h2>
      
      <div className="space-y-4">
        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
          <h3 className="font-semibold text-gray-700 mb-2">🕌 Respect Religious Sites</h3>
          <p className="text-gray-600">
            When visiting mosques, dress modestly and remove shoes. Non-Muslims may not be allowed 
            in all areas. Always ask permission before taking photos.
          </p>
        </div>
        
        <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
          <h3 className="font-semibold text-gray-700 mb-2">🤝 Bargaining Culture</h3>
          <p className="text-gray-600">
            In souks and markets, bargaining is expected and part of the culture. Start at about 
            30-40% of the asking price. Be respectful and enjoy the process!
          </p>
        </div>
        
        <div className="p-4 bg-green-50 border-l-4 border-green-400 rounded">
          <h3 className="font-semibold text-gray-700 mb-2">🍵 Tea Culture</h3>
          <p className="text-gray-600">
            Moroccan mint tea (atay) is central to hospitality. If offered tea, it's polite to 
            accept. The tea ceremony is an important social ritual.
          </p>
        </div>
        
        <div className="p-4 bg-purple-50 border-l-4 border-purple-400 rounded">
          <h3 className="font-semibold text-gray-700 mb-2">👋 Greetings</h3>
          <p className="text-gray-600">
            "As-salamu alaykum" is a common greeting. A simple "Salam" or "Bonjour" works too. 
            Handshakes are common between same genders.
          </p>
        </div>
        
        <div className="p-4 bg-red-50 border-l-4 border-red-400 rounded">
          <h3 className="font-semibold text-gray-700 mb-2">💰 Tipping (Baqshish)</h3>
          <p className="text-gray-600">
            Tipping is customary in Morocco. 10-15% at restaurants, small amounts for guides, 
            hotel staff, and taxi drivers for good service.
          </p>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Useful Tourist Phrases</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div><span className="font-medium">shukran bzaf</span> - thank you very much</div>
          <div><span className="font-medium">la shukran</span> - no thank you</div>
          <div><span className="font-medium">bghit ghir ntfarraj</span> - I just want to look</div>
          <div><span className="font-medium">ma fhimtsh</span> - I don't understand</div>
        </div>
      </div>
    </div>
  );
}