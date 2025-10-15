"use client";

import React from 'react';

export default function CulturalEtiquette() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-pink-500 rounded-full mr-3"></div>
        Cultural Etiquette
      </h2>
      
      <div className="bg-pink-50 border border-pink-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-pink-800 mb-4">Guidelines for Cultural Respect</h3>
        <p className="text-gray-700 mb-4">Important etiquette and cultural sensitivity guidelines for interacting in Moroccan society.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-md border-l-4 border-pink-400">
            <h3 className="font-bold text-pink-800 mb-2">Respectful Behavior</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">-</span>
                Remove shoes when entering homes
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">-</span>
                Use right hand for eating and greeting
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">-</span>
                Dress modestly, especially in religious sites
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">-</span>
                Accept hospitality graciously
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-md border-l-4 border-pink-400">
            <h3 className="font-bold text-pink-800 mb-2">Cultural Sensitivity</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">-</span>
                Learn basic Islamic customs
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">-</span>
                Respect prayer times and Ramadan
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">-</span>
                Ask permission before photographing people
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">-</span>
                Show interest in local traditions
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}