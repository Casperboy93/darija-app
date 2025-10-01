"use client";

import React from 'react';

export default function PharmacyMedication() {
  const medications = [
    { arabic: "دواء", darija: "dwa", english: "medicine/medication" },
    { arabic: "حبوب", darija: "hbub", english: "pills/tablets" },
    { arabic: "شراب", darija: "sharab", english: "syrup" },
    { arabic: "مرهم", darija: "marham", english: "ointment/cream" },
    { arabic: "قطرة", darija: "qatra", english: "drops" },
    { arabic: "حقنة", darija: "haqna", english: "injection" },
    { arabic: "مضاد حيوي", darija: "mudad hayawi", english: "antibiotic" },
    { arabic: "مسكن", darija: "msakkin", english: "painkiller" },
    { arabic: "فيتامين", darija: "vitamin", english: "vitamin" },
    { arabic: "وصفة طبية", darija: "wasfa tibiya", english: "prescription" },
    { arabic: "جرعة", darija: "jar3a", english: "dose" },
    { arabic: "تعليمات", darija: "ta3limat", english: "instructions" }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Pharmacy & Medication - الصيدلية والأدوية</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {medications.map((med, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="text-lg font-semibold text-green-600">{med.darija}</div>
            <div className="text-sm text-gray-500">{med.arabic}</div>
            <div className="text-sm text-gray-700">{med.english}</div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-green-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Pharmacy Phrases</h3>
        <div className="space-y-2">
          <div><span className="font-medium">3andi wasfa mn tbib</span> - I have a prescription from the doctor</div>
          <div><span className="font-medium">bghit dwa l-sda3</span> - I want medicine for headache</div>
          <div><span className="font-medium">kifash nakhud had dwa?</span> - How do I take this medicine?</div>
          <div><span className="font-medium">kam marra f nhar?</span> - How many times per day?</div>
          <div><span className="font-medium">qbal wlla b3d l-makla?</span> - Before or after eating?</div>
        </div>
      </div>
    </div>
  );
}