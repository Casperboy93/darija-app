"use client";

import React from 'react';

export default function DiningConversations() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Dining Conversations
      </h2>
      
      <div className="bg-white border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-medium mb-4 text-green-800">Restaurant Scenarios:</h3>
        
        <div className="space-y-6">
          <div className="border-l-4 border-green-400 pl-4">
            <h4 className="font-medium text-gray-800 mb-2">Ordering at a Restaurant</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">Waiter:</span> "Ahlan wa sahlan! Ash bghiti?" (Welcome! What would you like?)</p>
              <p><span className="font-medium">You:</span> "Bghit tajine kefta, afak" (I want kefta tajine, please)</p>
              <p><span className="font-medium">Waiter:</span> "Wash bghiti atay?" (Would you like tea?)</p>
              <p><span className="font-medium">You:</span> "Ah, atay bi na3na3" (Yes, mint tea)</p>
            </div>
          </div>
          
          <div className="border-l-4 border-blue-400 pl-4">
            <h4 className="font-medium text-gray-800 mb-2">At the Market</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">Vendor:</span> "Ash bghiti, a lalla?" (What do you want, madam?)</p>
              <p><span className="font-medium">You:</span> "3tini kilo matisha" (Give me a kilo of tomatoes)</p>
              <p><span className="font-medium">Vendor:</span> "Hadi zina bzaf!" (These are very good!)</p>
              <p><span className="font-medium">You:</span> "Bsh7al?" (How much?)</p>
            </div>
          </div>
          
          <div className="border-l-4 border-yellow-400 pl-4">
            <h4 className="font-medium text-gray-800 mb-2">Complimenting Food</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">Host:</span> "Kifash l-makla?" (How is the food?)</p>
              <p><span className="font-medium">You:</span> "Bnina bzaf! Shukran" (Very delicious! Thank you)</p>
              <p><span className="font-medium">Host:</span> "Kul aktar!" (Eat more!)</p>
              <p><span className="font-medium">You:</span> "Shb3t, shukran" (I'm full, thank you)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}