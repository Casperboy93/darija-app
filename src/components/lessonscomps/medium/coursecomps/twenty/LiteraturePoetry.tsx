"use client";

import React from 'react';

export default function LiteraturePoetry() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
        Literature and Poetry
      </h2>
      
      <p className="text-gray-700 mb-6">Advanced vocabulary for discussing literary forms and poetic traditions.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Shiʿr</p>
            <span className="text-2xl">📜</span>
          </div>
          <p className="text-gray-600">Poetry</p>
          <p className="text-sm text-gray-500 mt-1">شعر</p>
          <p className="text-xs text-red-600 mt-2">Artistic expression</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Qafiya</p>
            <span className="text-2xl">🎵</span>
          </div>
          <p className="text-gray-600">Rhyme</p>
          <p className="text-sm text-gray-500 mt-1">قافية</p>
          <p className="text-xs text-red-600 mt-2">Poetic structure</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Bahr</p>
            <span className="text-2xl">🌊</span>
          </div>
          <p className="text-gray-600">Poetic meter</p>
          <p className="text-sm text-gray-500 mt-1">بحر</p>
          <p className="text-xs text-red-600 mt-2">Rhythmic pattern</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Ghazal</p>
            <span className="text-2xl">💕</span>
          </div>
          <p className="text-gray-600">Love poem</p>
          <p className="text-sm text-gray-500 mt-1">غزل</p>
          <p className="text-xs text-red-600 mt-2">Lyrical form</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Maqama</p>
            <span className="text-2xl">🎭</span>
          </div>
          <p className="text-gray-600">Literary assembly</p>
          <p className="text-sm text-gray-500 mt-1">مقامة</p>
          <p className="text-xs text-red-600 mt-2">Prose narrative</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Adab</p>
            <span className="text-2xl">📚</span>
          </div>
          <p className="text-gray-600">Literature/Refinement</p>
          <p className="text-sm text-gray-500 mt-1">أدب</p>
          <p className="text-xs text-red-600 mt-2">Cultural cultivation</p>
        </div>
      </div>
    </div>
  );
}