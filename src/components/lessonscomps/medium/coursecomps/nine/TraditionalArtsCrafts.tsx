"use client";

import React from 'react';

export default function TraditionalArtsCrafts() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Traditional Arts and Crafts
      </h2>
      
      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
        <h3 className="font-bold text-lg text-blue-800 mb-4">Moroccan Craftsmanship</h3>
        <p className="text-gray-700 mb-4">Discover the traditional arts and crafts that have been passed down through generations in Morocco.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-md border-l-4 border-blue-400">
            <p className="font-semibold text-blue-700">Zellij</p>
            <p className="text-gray-600">Traditional mosaic tilework</p>
            <p className="text-sm text-gray-500 mt-1">Intricate geometric patterns using hand-cut tiles</p>
          </div>
          
          <div className="bg-white p-4 rounded-md border-l-4 border-blue-400">
            <p className="font-semibold text-blue-700">Taqshir</p>
            <p className="text-gray-600">Wood carving</p>
            <p className="text-sm text-gray-500 mt-1">Elaborate designs on cedar and other woods</p>
          </div>
          
          <div className="bg-white p-4 rounded-md border-l-4 border-blue-400">
            <p className="font-semibold text-blue-700">Sina3a</p>
            <p className="text-gray-600">Handicrafts</p>
            <p className="text-sm text-gray-500 mt-1">General term for traditional craftsmanship</p>
          </div>
          
          <div className="bg-white p-4 rounded-md border-l-4 border-blue-400">
            <p className="font-semibold text-blue-700">Khayata</p>
            <p className="text-gray-600">Embroidery</p>
            <p className="text-sm text-gray-500 mt-1">Decorative needlework on textiles</p>
          </div>
          
          <div className="bg-white p-4 rounded-md border-l-4 border-blue-400">
            <p className="font-semibold text-blue-700">Fakhkhar</p>
            <p className="text-gray-600">Pottery</p>
            <p className="text-sm text-gray-500 mt-1">Traditional ceramic work and clay vessels</p>
          </div>
          
          <div className="bg-white p-4 rounded-md border-l-4 border-blue-400">
            <p className="font-semibold text-blue-700">Nasj</p>
            <p className="text-gray-600">Weaving</p>
            <p className="text-sm text-gray-500 mt-1">Traditional textile production techniques</p>
          </div>
        </div>
      </div>
    </div>
  );
}