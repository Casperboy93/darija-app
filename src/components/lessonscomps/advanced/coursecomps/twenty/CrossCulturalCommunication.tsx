"use client";

import React from 'react';

export default function CrossCulturalCommunication() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Cross-Cultural Communication
      </h2>
      
      <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-purple-800 mb-4">Cultural Competency</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-700 mb-2">Cultural Awareness</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Waʿy thaqāfī:</span> Cultural awareness</p>
              <p><span className="font-semibold">Ḥassāsiyya thaqāfiyya:</span> Cultural sensitivity</p>
              <p><span className="font-semibold">Tanawwuʿ thaqāfī:</span> Cultural diversity</p>
              <p><span className="font-semibold">Tafāhum mutabādal:</span> Mutual understanding</p>
              <p><span className="font-semibold">Iḥtirām thaqāfāt:</span> Cultural respect</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-700 mb-2">Communication Styles</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Tawāṣul ghayr lafẓī:</span> Non-verbal communication</p>
              <p><span className="font-semibold">Siyāq thaqāfī:</span> Cultural context</p>
              <p><span className="font-semibold">Asālīb tawāṣul:</span> Communication styles</p>
              <p><span className="font-semibold">Lugha jasad:</span> Body language</p>
              <p><span className="font-semibold">Tawāṣul fāʿil:</span> Effective communication</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-700 mb-2">Conflict Resolution</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Ḥall nizāʿāt:</span> Conflict resolution</p>
              <p><span className="font-semibold">Wasāṭa thaqāfiyya:</span> Cultural mediation</p>
              <p><span className="font-semibold">Tafāwuḍ:</span> Negotiation</p>
              <p><span className="font-semibold">Binā jusūr:</span> Bridge building</p>
              <p><span className="font-semibold">Ḥulūl waṣaṭ:</span> Compromise solutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}