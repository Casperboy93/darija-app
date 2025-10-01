"use client";

import React from 'react';

export default function BodyParts() {
  const bodyParts = [
    { arabic: "رأس", darija: "ras", english: "head" },
    { arabic: "عين", darija: "3in", english: "eye" },
    { arabic: "أذن", darija: "wdna", english: "ear" },
    { arabic: "أنف", darija: "nif", english: "nose" },
    { arabic: "فم", darija: "fam", english: "mouth" },
    { arabic: "أسنان", darija: "snan", english: "teeth" },
    { arabic: "رقبة", darija: "rqba", english: "neck" },
    { arabic: "كتف", darija: "ktaf", english: "shoulder" },
    { arabic: "ذراع", darija: "dra3", english: "arm" },
    { arabic: "يد", darija: "yd", english: "hand" },
    { arabic: "أصابع", darija: "sab3", english: "fingers" },
    { arabic: "صدر", darija: "sdr", english: "chest" },
    { arabic: "ظهر", darija: "dhar", english: "back" },
    { arabic: "بطن", darija: "karch", english: "stomach/belly" },
    { arabic: "ساق", darija: "rijl", english: "leg" },
    { arabic: "ركبة", darija: "rkba", english: "knee" },
    { arabic: "قدم", darija: "rijl", english: "foot" }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Body Parts - أجزاء الجسم</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {bodyParts.map((part, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="text-lg font-semibold text-red-600">{part.darija}</div>
            <div className="text-sm text-gray-500">{part.arabic}</div>
            <div className="text-sm text-gray-700">{part.english}</div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-red-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Useful Phrases</h3>
        <div className="space-y-2">
          <div><span className="font-medium">kay waj3ni ras-i</span> - my head hurts</div>
          <div><span className="font-medium">3andi waj3 f dhar-i</span> - I have back pain</div>
          <div><span className="font-medium">rijl-i mkassra</span> - my leg is broken</div>
          <div><span className="font-medium">ma qadrtsh n-harrak yd-i</span> - I can't move my hand</div>
        </div>
      </div>
    </div>
  );
}