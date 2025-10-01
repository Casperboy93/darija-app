"use client";

import React from 'react';

export default function HotelAccommodation() {
  const vocabulary = [
    { arabic: "فندق", darija: "hotel", english: "hotel" },
    { arabic: "غرفة", darija: "ghorfa", english: "room" },
    { arabic: "حجز", darija: "hajz", english: "reservation" },
    { arabic: "مفتاح", darija: "miftah", english: "key" },
    { arabic: "استقبال", darija: "istiqbal", english: "reception" },
    { arabic: "حمام", darija: "hammam", english: "bathroom" },
    { arabic: "سرير", darija: "srir", english: "bed" },
    { arabic: "مصعد", darija: "misa3d", english: "elevator" },
    { arabic: "إفطار", darija: "ftar", english: "breakfast" },
    { arabic: "فاتورة", darija: "fatura", english: "bill" }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Hotel and Accommodation - الفندق والإقامة</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {vocabulary.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="text-lg font-semibold text-blue-600">{item.darija}</div>
            <div className="text-sm text-gray-500">{item.arabic}</div>
            <div className="text-sm text-gray-700">{item.english}</div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Useful Hotel Phrases</h3>
        <div className="space-y-2">
          <div><span className="font-medium">bghit hajz ghorfa</span> - I want to book a room</div>
          <div><span className="font-medium">fin kayn l-istiqbal?</span> - Where is the reception?</div>
          <div><span className="font-medium">3afak a-miftah</span> - The key, please</div>
          <div><span className="font-medium">wash kayn ftar?</span> - Is there breakfast?</div>
          <div><span className="font-medium">bghit n-khallas</span> - I want to pay</div>
        </div>
      </div>
    </div>
  );
}