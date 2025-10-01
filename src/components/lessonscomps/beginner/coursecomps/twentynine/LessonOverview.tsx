"use client";

import React from 'react';

export default function LessonOverview() {
  return (
    <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border border-green-200 mb-6">
      <h2 className="text-2xl font-bold text-green-800 mb-4">Moroccan History and Geography</h2>
      <p className="text-green-700 mb-4">
        Welcome to Lesson 29! Discover the rich history and diverse geography of Morocco while learning essential 
        vocabulary in Darija. From ancient civilizations to modern landmarks, explore Morocco's fascinating heritage.
      </p>
      
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <h3 className="font-semibold text-green-800 mb-2">Learning Objectives:</h3>
          <ul className="text-green-700 space-y-1 text-sm">
            <li>• Learn historical periods and events</li>
            <li>• Master geographical vocabulary</li>
            <li>• Explore cultural landmarks and monuments</li>
            <li>• Understand traditional crafts and arts</li>
            <li>• Discuss modern Morocco's development</li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold text-green-800 mb-2">Key Topics:</h3>
          <ul className="text-green-700 space-y-1 text-sm">
            <li>• Ancient civilizations and dynasties</li>
            <li>• Mountains, deserts, and coastlines</li>
            <li>• UNESCO World Heritage sites</li>
            <li>• Traditional handicrafts</li>
            <li>• Contemporary Morocco</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded border border-green-200">
        <h3 className="font-semibold text-green-800 mb-2">Cultural Context:</h3>
        <p className="text-green-700 text-sm">
          Morocco's strategic location at the crossroads of Africa, Europe, and the Middle East has shaped its 
          unique history and culture. Understanding this heritage helps you appreciate the depth of Moroccan 
          identity and connect more meaningfully with its people.
        </p>
      </div>
      
      <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded">
        <h3 className="font-semibold text-amber-800 mb-2">🏛️ Did You Know?</h3>
        <p className="text-amber-700 text-sm">
          Morocco is home to nine UNESCO World Heritage Sites, including the medinas of Fez, Marrakech, 
          and Meknes, as well as the archaeological site of Volubilis and the stunning Aït Benhaddou kasbah.
        </p>
      </div>
    </div>
  );
}