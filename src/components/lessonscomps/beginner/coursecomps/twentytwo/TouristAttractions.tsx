"use client";

import React from 'react';

export default function TouristAttractions() {
  const attractions = [
    { arabic: "مسجد", darija: "masjid", english: "mosque" },
    { arabic: "قصر", darija: "qasr", english: "palace" },
    { arabic: "متحف", darija: "mathaf", english: "museum" },
    { arabic: "سوق", darija: "souq", english: "market/souk" },
    { arabic: "مدينة قديمة", darija: "mdina qdima", english: "old city/medina" },
    { arabic: "حديقة", darija: "hadiqa", english: "garden/park" },
    { arabic: "شاطئ", darija: "shati", english: "beach" },
    { arabic: "جبل", darija: "jbel", english: "mountain" },
    { arabic: "قلعة", darija: "qal3a", english: "fortress" },
    { arabic: "مقبرة", darija: "maqbara", english: "cemetery/tomb" }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Tourist Attractions - المعالم السياحية</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {attractions.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="text-lg font-semibold text-purple-600">{item.darija}</div>
            <div className="text-sm text-gray-500">{item.arabic}</div>
            <div className="text-sm text-gray-700">{item.english}</div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-purple-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Famous Moroccan Sites</h3>
        <div className="space-y-2">
          <div><span className="font-medium">Jama3 l-Fna</span> - Djemaa el-Fna (Marrakech)</div>
          <div><span className="font-medium">Hassan Tani</span> - Hassan II Mosque (Casablanca)</div>
          <div><span className="font-medium">Mdina Fas</span> - Fes Medina</div>
          <div><span className="font-medium">Qasr l-Bahia</span> - Bahia Palace (Marrakech)</div>
          <div><span className="font-medium">Shfshawn</span> - Chefchaouen (Blue City)</div>
        </div>
      </div>
    </div>
  );
}