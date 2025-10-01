"use client";

import React from 'react';

export default function LessonOverview() {
  return (
    <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-3 text-green-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Lesson Overview
      </h2>
      <p className="text-gray-700">Master environmental science and sustainability vocabulary in Darija. Learn to discuss climate change, conservation, renewable energy, and environmental policies with scientific precision.</p>
      
      <div className="mt-4 bg-white p-4 rounded-md border border-green-100">
        <p className="font-medium text-green-800">Learning Goals:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
          <li>Master environmental science terminology</li>
          <li>Learn climate change and sustainability vocabulary</li>
          <li>Practice discussing environmental policies</li>
          <li>Understand conservation and renewable energy concepts</li>
        </ul>
      </div>
    </div>
  );
}