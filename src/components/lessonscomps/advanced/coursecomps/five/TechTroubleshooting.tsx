"use client";

import React from 'react';

export default function TechTroubleshooting() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Tech Troubleshooting Vocabulary
      </h2>
      
      <div className="bg-white border border-purple-200 rounded-lg p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-3">Common Problems</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Not working</span>
                <span className="text-gray-800 font-medium">Ma-khdamsh / Khrab</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Slow internet</span>
                <span className="text-gray-800 font-medium">L-net bati2 / Lent</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Frozen/Crashed</span>
                <span className="text-gray-800 font-medium">Wqef / Bloque</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">No signal</span>
                <span className="text-gray-800 font-medium">Ma-kayensh reseau</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Battery dead</span>
                <span className="text-gray-800 font-medium">L-batri khlasa</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-3">Solutions</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Restart</span>
                <span className="text-gray-800 font-medium">Redemarre / I3awad shel</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Update</span>
                <span className="text-gray-800 font-medium">Update / Mise a jour</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Reset</span>
                <span className="text-gray-800 font-medium">Reset / Remise a zero</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Check connection</span>
                <span className="text-gray-800 font-medium">Shuf l-connexion</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Call support</span>
                <span className="text-gray-800 font-medium">Itel l-support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}