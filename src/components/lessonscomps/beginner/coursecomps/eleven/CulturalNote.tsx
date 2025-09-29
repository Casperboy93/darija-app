"use client";

import React from 'react';

export default function CulturalNote() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Cultural Note
      </h2>
      
      <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <p className="text-gray-700">
          <strong>Traditional Clothing:</strong> The jellaba is a traditional Moroccan garment worn by both men and women. 
          It's especially common during religious holidays and formal occasions. When shopping for clothes in Morocco, 
          bargaining is expected in traditional markets (souks), but not in modern stores.
        </p>
      </div>
    </div>
  );
}