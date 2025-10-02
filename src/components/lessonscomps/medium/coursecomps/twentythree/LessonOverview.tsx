"use client";

import React from 'react';

export default function LessonOverview() {
  return (
    <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-3 text-amber-800">Lesson Overview</h2>
      <p className="text-gray-700">Learn practical Darija for housing and renting: searching for places, talking to landlords, understanding leases, and setting up utilities — with Arabic script and ASCII transliterations.</p>
      <div className="mt-4 bg-white p-4 rounded-md border border-amber-100">
        <p className="font-medium text-amber-800">Learning Goals:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
          <li>Use renting vocabulary clearly</li>
          <li>Ask questions about apartments and leases</li>
          <li>Discuss utilities and maintenance</li>
          <li>Handle polite discussions with landlords</li>
        </ul>
      </div>
    </div>
  );
}