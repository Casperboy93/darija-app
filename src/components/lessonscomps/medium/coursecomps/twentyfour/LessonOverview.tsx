"use client";

import React from 'react';

export default function LessonOverview() {
  return (
    <div className="bg-teal-50 border border-teal-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-3 text-teal-800">Lesson Overview</h2>
      <p className="text-gray-700">Learn to navigate healthcare situations in Darija — describing symptoms, booking appointments, speaking at the pharmacy, and understanding insurance or billing details.</p>
      <div className="mt-4 bg-white p-4 rounded-md border border-teal-100">
        <p className="font-medium text-teal-800">Learning Goals:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
          <li>Describe common symptoms and health concerns</li>
          <li>Make and confirm medical appointments</li>
          <li>Request and understand pharmacy instructions</li>
          <li>Discuss insurance, payment, and billing</li>
        </ul>
      </div>
    </div>
  );
}