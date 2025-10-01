"use client";

import React from 'react';

export default function MedicalDialogue() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Medical Dialogue</h2>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">At the Doctor's Office</h3>
        <div className="space-y-4">
          <div className="flex">
            <div className="w-20 font-semibold text-blue-600">Doctor:</div>
            <div className="flex-1">
              <div className="text-gray-800">Ahlan, ash kayn?</div>
              <div className="text-sm text-gray-600">Hello, what's wrong?</div>
            </div>
          </div>
          
          <div className="flex">
            <div className="w-20 font-semibold text-green-600">Patient:</div>
            <div className="flex-1">
              <div className="text-gray-800">Kay waj3ni ras-i bzaf w 3andi hmma</div>
              <div className="text-sm text-gray-600">My head hurts a lot and I have a fever</div>
            </div>
          </div>
          
          <div className="flex">
            <div className="w-20 font-semibold text-blue-600">Doctor:</div>
            <div className="flex-1">
              <div className="text-gray-800">Mn imta w nta haka?</div>
              <div className="text-sm text-gray-600">Since when have you been like this?</div>
            </div>
          </div>
          
          <div className="flex">
            <div className="w-20 font-semibold text-green-600">Patient:</div>
            <div className="flex-1">
              <div className="text-gray-800">Mn tlat iyam</div>
              <div className="text-sm text-gray-600">For three days</div>
            </div>
          </div>
          
          <div className="flex">
            <div className="w-20 font-semibold text-blue-600">Doctor:</div>
            <div className="flex-1">
              <div className="text-gray-800">Wash katakhud shi dwa?</div>
              <div className="text-sm text-gray-600">Are you taking any medicine?</div>
            </div>
          </div>
          
          <div className="flex">
            <div className="w-20 font-semibold text-green-600">Patient:</div>
            <div className="flex-1">
              <div className="text-gray-800">La, ma katakhdtsh walu</div>
              <div className="text-sm text-gray-600">No, I haven't taken anything</div>
            </div>
          </div>
          
          <div className="flex">
            <div className="w-20 font-semibold text-blue-600">Doctor:</div>
            <div className="flex-1">
              <div className="text-gray-800">Mashi mushkil. Ghadi n3tik dwa l-hmma w msakkin</div>
              <div className="text-sm text-gray-600">No problem. I'll give you medicine for fever and painkillers</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Key Medical Phrases</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div><span className="font-medium">ash kayn?</span> - what's wrong?</div>
          <div><span className="font-medium">mn imta?</span> - since when?</div>
          <div><span className="font-medium">kifash kay waj3ak?</span> - how does it hurt?</div>
          <div><span className="font-medium">hna kay waj3ak?</span> - does it hurt here?</div>
          <div><span className="font-medium">khud had dwa</span> - take this medicine</div>
          <div><span className="font-medium">raja3 b3d usbu3</span> - come back after a week</div>
        </div>
      </div>
    </div>
  );
}