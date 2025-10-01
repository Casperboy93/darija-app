"use client";

import React from 'react';

export default function LessonOverview() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Lesson Overview</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">What You'll Learn</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Essential travel vocabulary in Darija</li>
            <li>Hotel and accommodation phrases</li>
            <li>Tourist attractions and sightseeing terms</li>
            <li>Transportation for tourists</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Learning Objectives</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Book accommodations and communicate with hotel staff</li>
            <li>Ask for directions to tourist sites</li>
            <li>Use transportation vocabulary for travel</li>
            <li>Engage in basic tourist conversations</li>
          </ul>
        </div>
      </div>
    </div>
  );
}