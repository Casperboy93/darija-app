"use client";

import React from 'react';

export default function CulturalNote() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-pink-500 rounded-full mr-3"></div>
        Cultural Note
      </h2>
      
      <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <p className="text-gray-700">
          <strong>Leisure in Morocco:</strong> Football is extremely popular in Morocco, and you'll find people playing 
          in streets and parks everywhere. Traditional music like Chaabi and Gnawa are important cultural elements. 
          Many Moroccans enjoy spending time in cafés, playing cards or chess, and socializing with friends and family. 
          Discussing hobbies is a great way to connect with locals and show interest in Moroccan culture.
        </p>
      </div>
    </div>
  );
}