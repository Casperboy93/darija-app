"use client";

import React from 'react';

export default function TouristTransportation() {
  const transportation = [
    { arabic: "طاكسي", darija: "taxi", english: "taxi" },
    { arabic: "حافلة", darija: "kar", english: "bus" },
    { arabic: "قطار", darija: "machina", english: "train" },
    { arabic: "طائرة", darija: "tyyara", english: "airplane" },
    { arabic: "سيارة أجرة", darija: "tomobil", english: "rental car" },
    { arabic: "دراجة", darija: "piklita", english: "bicycle" },
    { arabic: "محطة", darija: "mahatta", english: "station" },
    { arabic: "مطار", darija: "matar", english: "airport" },
    { arabic: "تذكرة", darija: "ticket", english: "ticket" },
    { arabic: "سائق", darija: "chauffeur", english: "driver" }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Tourist Transportation - النقل السياحي</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {transportation.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="text-lg font-semibold text-green-600">{item.darija}</div>
            <div className="text-sm text-gray-500">{item.arabic}</div>
            <div className="text-sm text-gray-700">{item.english}</div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-green-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Transportation Phrases</h3>
        <div className="space-y-2">
          <div><span className="font-medium">bghit taxi</span> - I want a taxi</div>
          <div><span className="font-medium">fin mahatta?</span> - Where is the station?</div>
          <div><span className="font-medium">bshhal l-ticket?</span> - How much is the ticket?</div>
          <div><span className="font-medium">wqt kaykhraj l-kar?</span> - When does the bus leave?</div>
          <div><span className="font-medium">wasalni l-matar</span> - Take me to the airport</div>
        </div>
      </div>
    </div>
  );
}