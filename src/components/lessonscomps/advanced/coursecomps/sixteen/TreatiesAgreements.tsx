"use client";

import React from 'react';

export default function TreatiesAgreements() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Treaties and International Agreements
      </h2>
      
      <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-green-800 mb-4">Types of International Agreements</h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-700 mb-2">Agreement Types</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <p className="text-sm font-medium">Muʿahada</p>
                <p className="text-xs text-gray-600">Treaty</p>
              </div>
              <div>
                <p className="text-sm font-medium">Ittifaqiyya</p>
                <p className="text-xs text-gray-600">Agreement</p>
              </div>
              <div>
                <p className="text-sm font-medium">Mithaq</p>
                <p className="text-xs text-gray-600">Charter</p>
              </div>
              <div>
                <p className="text-sm font-medium">Brutukul</p>
                <p className="text-xs text-gray-600">Protocol</p>
              </div>
              <div>
                <p className="text-sm font-medium">Tafahum</p>
                <p className="text-xs text-gray-600">Understanding</p>
              </div>
              <div>
                <p className="text-sm font-medium">Hilf</p>
                <p className="text-xs text-gray-600">Alliance</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-700 mb-2">Treaty Process</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <p className="text-sm font-medium">Tafawud</p>
                <p className="text-xs text-gray-600">Negotiation</p>
              </div>
              <div>
                <p className="text-sm font-medium">Tawqiʿ</p>
                <p className="text-xs text-gray-600">Signing</p>
              </div>
              <div>
                <p className="text-sm font-medium">Tasdiq</p>
                <p className="text-xs text-gray-600">Ratification</p>
              </div>
              <div>
                <p className="text-sm font-medium">Tanfidh</p>
                <p className="text-xs text-gray-600">Implementation</p>
              </div>
              <div>
                <p className="text-sm font-medium">Insihab</p>
                <p className="text-xs text-gray-600">Withdrawal</p>
              </div>
              <div>
                <p className="text-sm font-medium">Ilghaʾ</p>
                <p className="text-xs text-gray-600">Abrogation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}