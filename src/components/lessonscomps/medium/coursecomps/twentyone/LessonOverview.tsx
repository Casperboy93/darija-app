"use client";

import React from 'react';

export default function LessonOverview() {
  return (
    <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-3 text-blue-800">Lesson Overview</h2>
      <p className="text-gray-700">Build confidence in everyday conversations using natural Darija expressions. Practice small talk, polite openers, clarifications, and requests — with Arabic script and ASCII transliterations.</p>
      <div className="mt-4 bg-white p-4 rounded-md border border-blue-100">
        <p className="font-medium text-blue-800">Learning Goals:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
          <li>Use common everyday phrases naturally</li>
          <li>Handle small talk and polite conversation openers</li>
          <li>Ask for clarification and confirm understanding</li>
          <li>Make polite requests and responses</li>
        </ul>
      </div>
    </div>
  );
}