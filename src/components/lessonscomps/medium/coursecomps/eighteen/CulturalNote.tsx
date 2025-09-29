"use client";

import React from 'react';

export default function CulturalNote() {
  return (
    <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-3 text-amber-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
        Cultural Note
      </h2>
      <p className="text-gray-700">
        Morocco has emerged as a global leader in renewable energy and environmental sustainability. The country 
        hosts the annual COP climate conferences and has committed to ambitious renewable energy targets. Traditional 
        Moroccan culture has always emphasized harmony with nature - from the sustainable use of argan oil to 
        traditional water management systems like khettaras. The concept of "baraka" (blessing) is often associated 
        with natural resources, reflecting a deep spiritual connection to the environment that continues to influence 
        modern conservation efforts.
      </p>
    </div>
  );
}