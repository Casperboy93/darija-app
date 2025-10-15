"use client";

import React from 'react';

export default function PollutionWaste() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Pollution and Waste Management
      </h2>
      
      <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-purple-800 mb-4">Types of Pollution</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-700 mb-2">Air and Water Pollution</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Talawwuth hawaʾ:</span> Air pollution</p>
              <p><span className="font-semibold">Talawwuth maʾ:</span> Water pollution</p>
              <p><span className="font-semibold">Anbiʿathat:</span> Emissions</p>
              <p><span className="font-semibold">Miyyah sarf:</span> Wastewater</p>
              <p><span className="font-semibold">Mawadd samma:</span> Toxic substances</p>
              <p><span className="font-semibold">Tanzif hawaʾ:</span> Air purification</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-700 mb-2">Waste Management</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Idarat nufayat:</span> Waste management</p>
              <p><span className="font-semibold">Iʿadat tadwir:</span> Recycling</p>
              <p><span className="font-semibold">Taqlil nufayat:</span> Waste reduction</p>
              <p><span className="font-semibold">Nufayat sulba:</span> Solid waste</p>
              <p><span className="font-semibold">Nufayat khatira:</span> Hazardous waste</p>
              <p><span className="font-semibold">Samad ʿudwi:</span> Composting</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}