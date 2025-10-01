"use client";

import React from 'react';

export default function DigitalCommunicationPatterns() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Digital Communication Patterns
      </h2>
      
      <div className="space-y-4">
        <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Text Messaging Style</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-purple-800">Abbreviations & Shortcuts</p>
              <div className="mt-2 space-y-1 text-sm">
                <p className="text-gray-700">• "Salam" → "Slm" (Hello)</p>
                <p className="text-gray-700">• "Labas" → "Lbs" (How are you?)</p>
                <p className="text-gray-700">• "Inshallah" → "Insh" (God willing)</p>
                <p className="text-gray-700">• "Bezaf" → "Bzf" (A lot)</p>
                <p className="text-gray-700">• "Wakha" → "Wkh" (Okay)</p>
              </div>
            </div>
            <div>
              <p className="font-medium text-purple-800">Emoji Usage</p>
              <div className="mt-2 space-y-1 text-sm">
                <p className="text-gray-700">😂 → Very funny / Dahk bzzaf</p>
                <p className="text-gray-700">🤲 → Dua / Prayer</p>
                <p className="text-gray-700">❤️ → Love / Hobb</p>
                <p className="text-gray-700">🔥 → Amazing / Nadi</p>
                <p className="text-gray-700">👍 → Good / Mzyan</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Online Shopping & E-commerce</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-purple-800">Shopping Terms</p>
              <div className="mt-2 space-y-1 text-sm">
                <p className="text-gray-700">• Online shopping: Shopping online</p>
                <p className="text-gray-700">• Cart: Panier / Salla</p>
                <p className="text-gray-700">• Checkout: Khlas / Daf3</p>
                <p className="text-gray-700">• Delivery: Livraison / Tawsil</p>
                <p className="text-gray-700">• Return: Raj3 / Return</p>
              </div>
            </div>
            <div>
              <p className="font-medium text-purple-800">Payment Methods</p>
              <div className="mt-2 space-y-1 text-sm">
                <p className="text-gray-700">• Credit card: Carte bancaire</p>
                <p className="text-gray-700">• Cash on delivery: Khlas 3nd l-istilam</p>
                <p className="text-gray-700">• Bank transfer: Virement</p>
                <p className="text-gray-700">• Mobile payment: Daf3 b l-portable</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}