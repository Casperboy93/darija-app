"use client";

import React from 'react';

export default function WildAnimals() {
  const animals = [
    { arabic: "أسد", darija: "sbaa", english: "lion" },
    { arabic: "فيل", darija: "fil", english: "elephant" },
    { arabic: "قرد", darija: "qerd", english: "monkey" },
    { arabic: "ذئب", darija: "dib", english: "wolf" },
    { arabic: "ثعلب", darija: "ta3lab", english: "fox" },
    { arabic: "غزال", darija: "ghzal", english: "deer/gazelle" },
    { arabic: "نمر", darija: "nmer", english: "tiger" },
    { arabic: "دب", darija: "dobb", english: "bear" },
    { arabic: "طائر", darija: "tair", english: "bird" },
    { arabic: "سمكة", darija: "hoot", english: "fish" }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Wild Animals - الحيوانات البرية</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {animals.map((animal, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="text-lg font-semibold text-green-600">{animal.darija}</div>
            <div className="text-sm text-gray-500">{animal.arabic}</div>
            <div className="text-sm text-gray-700">{animal.english}</div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-green-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Animal Descriptions</h3>
        <div className="space-y-2">
          <div><span className="font-medium">sbaa kbir</span> - big lion</div>
          <div><span className="font-medium">qerd sghir</span> - small monkey</div>
          <div><span className="font-medium">tair zwin</span> - beautiful bird</div>
          <div><span className="font-medium">hoot f l-bahr</span> - fish in the sea</div>
        </div>
      </div>
    </div>
  );
}