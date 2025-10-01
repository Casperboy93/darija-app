"use client";

import React from 'react';

export default function HealthProblems() {
  const healthProblems = [
    { arabic: "وجع", darija: "waj3", english: "pain/ache" },
    { arabic: "حمى", darija: "hmma", english: "fever" },
    { arabic: "سعال", darija: "s3la", english: "cough" },
    { arabic: "زكام", darija: "bard", english: "cold" },
    { arabic: "صداع", darija: "sda3", english: "headache" },
    { arabic: "غثيان", darija: "ghathayan", english: "nausea" },
    { arabic: "إسهال", darija: "ishal", english: "diarrhea" },
    { arabic: "إمساك", darija: "imsak", english: "constipation" },
    { arabic: "حساسية", darija: "hassasiya", english: "allergy" },
    { arabic: "جرح", darija: "jarh", english: "wound/cut" },
    { arabic: "كسر", darija: "kasr", english: "fracture/break" },
    { arabic: "التهاب", darija: "iltihab", english: "infection/inflammation" }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Health Problems - المشاكل الصحية</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {healthProblems.map((problem, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="text-lg font-semibold text-orange-600">{problem.darija}</div>
            <div className="text-sm text-gray-500">{problem.arabic}</div>
            <div className="text-sm text-gray-700">{problem.english}</div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-orange-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Describing Symptoms</h3>
        <div className="space-y-2">
          <div><span className="font-medium">3andi hmma</span> - I have a fever</div>
          <div><span className="font-medium">kay waj3ni karch-i</span> - my stomach hurts</div>
          <div><span className="font-medium">3andi s3la kbira</span> - I have a bad cough</div>
          <div><span className="font-medium">ma bghitsh nakol</span> - I don't want to eat</div>
          <div><span className="font-medium">3andi hassasiya mn...</span> - I'm allergic to...</div>
          <div><span className="font-medium">ma nqadsh n-n3as</span> - I can't sleep</div>
        </div>
      </div>
    </div>
  );
}