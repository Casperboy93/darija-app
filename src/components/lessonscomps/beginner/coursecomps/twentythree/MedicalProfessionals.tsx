"use client";

import React from 'react';

export default function MedicalProfessionals() {
  const professionals = [
    { arabic: "طبيب", darija: "tbib", english: "doctor" },
    { arabic: "ممرضة", darija: "infirmière", english: "nurse" },
    { arabic: "صيدلي", darija: "pharmacien", english: "pharmacist" },
    { arabic: "طبيب أسنان", darija: "tbib snan", english: "dentist" },
    { arabic: "طبيب عيون", darija: "tbib 3yun", english: "eye doctor" },
    { arabic: "جراح", darija: "jarrah", english: "surgeon" },
    { arabic: "مستشفى", darija: "sbitar", english: "hospital" },
    { arabic: "عيادة", darija: "3yada", english: "clinic" },
    { arabic: "صيدلية", darija: "pharmacie", english: "pharmacy" },
    { arabic: "إسعاف", darija: "is3af", english: "ambulance" },
    { arabic: "طوارئ", darija: "tawari2", english: "emergency" },
    { arabic: "موعد", darija: "rendez-vous", english: "appointment" }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Medical Professionals & Facilities - المهنيون الطبيون</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {professionals.map((prof, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="text-lg font-semibold text-blue-600">{prof.darija}</div>
            <div className="text-sm text-gray-500">{prof.arabic}</div>
            <div className="text-sm text-gray-700">{prof.english}</div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Medical Facility Phrases</h3>
        <div className="space-y-2">
          <div><span className="font-medium">bghit n-shuf tbib</span> - I want to see a doctor</div>
          <div><span className="font-medium">fin sbitar?</span> - Where is the hospital?</div>
          <div><span className="font-medium">3andi rendez-vous</span> - I have an appointment</div>
          <div><span className="font-medium">hadi urgence</span> - This is an emergency</div>
          <div><span className="font-medium">bghit n-akhud dwa</span> - I want to get medicine</div>
        </div>
      </div>
    </div>
  );
}