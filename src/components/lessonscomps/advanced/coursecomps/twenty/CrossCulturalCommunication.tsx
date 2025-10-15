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
              <p><span className="font-semibold">Waʿy thaqafi:</span> Cultural awareness</p>
              <p><span className="font-semibold">Hassasiyya thaqafiyya:</span> Cultural sensitivity</p>
              <p><span className="font-semibold">Tanawwuʿ thaqafi:</span> Cultural diversity</p>
              <p><span className="font-semibold">Tafahum mutabadal:</span> Mutual understanding</p>
              <p><span className="font-semibold">Ihtiram thaqafat:</span> Cultural respect</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-700 mb-2">Communication Styles</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Tawasul ghayr lafzi:</span> Non-verbal communication</p>
              <p><span className="font-semibold">Siyaq thaqafi:</span> Cultural context</p>
              <p><span className="font-semibold">Asalib tawasul:</span> Communication styles</p>
              <p><span className="font-semibold">Lugha jasad:</span> Body language</p>
              <p><span className="font-semibold">Tawasul faʿil:</span> Effective communication</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-700 mb-2">Conflict Resolution</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Hall nizaʿat:</span> Conflict resolution</p>
              <p><span className="font-semibold">Wasata thaqafiyya:</span> Cultural mediation</p>
              <p><span className="font-semibold">Tafawud:</span> Negotiation</p>
              <p><span className="font-semibold">Bina jusur:</span> Bridge building</p>
              <p><span className="font-semibold">Hulul wasat:</span> Compromise solutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}