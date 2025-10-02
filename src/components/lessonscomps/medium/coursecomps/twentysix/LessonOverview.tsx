"use client";

import React from 'react';

export default function LessonOverview() {
  return (
    <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-3 text-blue-800">Lesson Overview</h2>
      <p className="text-gray-700">Navigate public services in Darija: learn the language for citizen services, government offices, forms and applications, and how to book or manage appointments.</p>
      <div className="mt-4 bg-white p-4 rounded-md border border-blue-100">
        <p className="font-medium text-blue-800">Learning Goals:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
          <li>Request common public services</li>
          <li>Communicate in government offices</li>
          <li>Handle forms and applications</li>
          <li>Schedule and confirm appointments</li>
        </ul>
      </div>
    </div>
  );
}