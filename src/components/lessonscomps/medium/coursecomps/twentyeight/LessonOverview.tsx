"use client";

import React from 'react';

export default function LessonOverview() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Lesson Overview</h3>
      <p className="text-gray-700">
        This lesson builds your confidence with travel and transportation in Darija. 
        You will learn modes of transport, buying tickets, asking for directions, navigation phrases, 
        and solving common commuting problems.
      </p>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
        <div className="bg-gray-50 border border-gray-200 p-3 rounded">
          <strong>Goals:</strong>
          <ul className="list-disc ml-5 mt-1">
            <li>Identify transport modes and routes</li>
            <li>Buy tickets and ask about schedules</li>
            <li>Request and understand directions</li>
            <li>Handle delays and commuting issues</li>
          </ul>
        </div>
        <div className="bg-gray-50 border border-gray-200 p-3 rounded">
          <strong>Tip:</strong>
          <p className="mt-1">Confirm times and platform numbers to avoid last-minute confusion.</p>
        </div>
      </div>
    </div>
  );
}