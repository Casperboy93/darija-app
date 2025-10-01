"use client";

import React from 'react';

export default function PlantsNature() {
  const nature = [
    { arabic: "شجرة", darija: "shajra", english: "tree" },
    { arabic: "وردة", darija: "warda", english: "flower/rose" },
    { arabic: "عشب", darija: "hashish", english: "grass" },
    { arabic: "جبل", darija: "jbel", english: "mountain" },
    { arabic: "بحر", darija: "bahr", english: "sea" },
    { arabic: "نهر", darija: "wad", english: "river" },
    { arabic: "غابة", darija: "ghaba", english: "forest" },
    { arabic: "صحراء", darija: "sahra", english: "desert" },
    { arabic: "حديقة", darija: "jarda", english: "garden" },
    { arabic: "أوراق", darija: "wraq", english: "leaves" }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Plants and Nature - النباتات والطبيعة</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {nature.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="text-lg font-semibold text-emerald-600">{item.darija}</div>
            <div className="text-sm text-gray-500">{item.arabic}</div>
            <div className="text-sm text-gray-700">{item.english}</div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Nature Expressions</h3>
        <div className="space-y-2">
          <div><span className="font-medium">shajra kbira</span> - big tree</div>
          <div><span className="font-medium">warda hamra</span> - red flower</div>
          <div><span className="font-medium">jbel 3ali</span> - high mountain</div>
          <div><span className="font-medium">ghaba khdra</span> - green forest</div>
        </div>
      </div>
    </div>
  );
}