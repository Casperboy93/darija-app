"use client";

import React from 'react';

export default function LessonOverview() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Lesson Overview</h2>
      <p className="text-gray-600 mb-4">
        In this lesson, you'll learn essential vocabulary and phrases related to technology and communication. 
        This knowledge will help you navigate the digital world and communicate effectively using modern technology in Darija.
      </p>
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">What you'll learn:</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li>Technology devices and gadgets</li>
          <li>Internet and social media vocabulary</li>
          <li>Phone and communication terms</li>
          <li>Computer and software terminology</li>
          <li>Digital services and applications</li>
          <li>How to ask for technical help</li>
        </ul>
      </div>
    </div>
  );
}