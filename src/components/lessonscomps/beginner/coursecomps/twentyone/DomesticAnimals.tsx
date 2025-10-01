"use client";

import React from 'react';

export default function DomesticAnimals() {
  const animals = [
    { arabic: "قط", darija: "mech", english: "cat" },
    { arabic: "كلب", darija: "kelb", english: "dog" },
    { arabic: "حصان", darija: "3oud", english: "horse" },
    { arabic: "بقرة", darija: "bagra", english: "cow" },
    { arabic: "خروف", darija: "kharoof", english: "sheep" },
    { arabic: "معزة", darija: "ma3za", english: "goat" },
    { arabic: "دجاجة", darija: "djaja", english: "chicken" },
    { arabic: "ديك", darija: "dik", english: "rooster" },
    { arabic: "حمار", darija: "hmar", english: "donkey" },
    { arabic: "أرنب", darija: "qniya", english: "rabbit" }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Domestic Animals - الحيوانات الأليفة</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {animals.map((animal, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="text-lg font-semibold text-blue-600">{animal.darija}</div>
            <div className="text-sm text-gray-500">{animal.arabic}</div>
            <div className="text-sm text-gray-700">{animal.english}</div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Useful Phrases</h3>
        <div className="space-y-2">
          <div><span className="font-medium">3andi kelb</span> - I have a dog</div>
          <div><span className="font-medium">had l-mech zwin</span> - This cat is beautiful</div>
          <div><span className="font-medium">fin kayn l-bagra?</span> - Where is the cow?</div>
        </div>
      </div>
    </div>
  );
}