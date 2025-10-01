"use client";

import React from 'react';

export default function LessonOverview() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Lesson Overview</h2>
      <p className="text-gray-600 mb-4">
        In this lesson, you'll learn essential vocabulary and phrases related to health and medical situations. 
        This knowledge will help you communicate effectively in healthcare settings and describe health conditions in Darija.
      </p>
      <div className="bg-red-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">What you'll learn:</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li>Body parts vocabulary</li>
          <li>Common health problems and symptoms</li>
          <li>Medical professionals and facilities</li>
          <li>Pharmacy and medication terms</li>
          <li>Emergency and urgent care phrases</li>
          <li>How to describe pain and discomfort</li>
        </ul>
      </div>
    </div>
  );
}