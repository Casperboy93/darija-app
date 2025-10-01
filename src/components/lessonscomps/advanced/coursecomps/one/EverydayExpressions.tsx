"use client";

import React from 'react';

export default function EverydayExpressions() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Everyday Expressions
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
          <h3 className="font-bold text-blue-800 mb-2">Mashi mushkil</h3>
          <p className="text-gray-700 mb-2">No problem / It's okay</p>
          <p className="text-sm text-gray-600 italic">Used to reassure someone or dismiss concerns</p>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
          <h3 className="font-bold text-blue-800 mb-2">Wakha</h3>
          <p className="text-gray-700 mb-2">Okay / Alright / Fine</p>
          <p className="text-sm text-gray-600 italic">Casual agreement or acceptance</p>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
          <h3 className="font-bold text-blue-800 mb-2">Safi</h3>
          <p className="text-gray-700 mb-2">That's it / Enough / Done</p>
          <p className="text-sm text-gray-600 italic">Indicates completion or finality</p>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
          <h3 className="font-bold text-blue-800 mb-2">Yallah</h3>
          <p className="text-gray-700 mb-2">Let's go / Come on</p>
          <p className="text-sm text-gray-600 italic">Encouragement to move or act</p>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
          <h3 className="font-bold text-blue-800 mb-2">Bslama</h3>
          <p className="text-gray-700 mb-2">Goodbye / See you later</p>
          <p className="text-sm text-gray-600 italic">Literally "with peace" - common farewell</p>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
          <h3 className="font-bold text-blue-800 mb-2">Makayn bass</h3>
          <p className="text-gray-700 mb-2">It's nothing / Don't mention it</p>
          <p className="text-sm text-gray-600 italic">Response to thanks or apologies</p>
        </div>
      </div>
    </div>
  );
}