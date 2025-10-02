"use client";

import React from 'react';

export default function LessonOverview() {
  return (
    <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-3 text-indigo-800">Lesson Overview</h2>
      <p className="text-gray-700">Communicate effectively at work: learn everyday office vocabulary, how to talk during meetings, delegate tasks, and write emails or reports in Darija.</p>
      <div className="mt-4 bg-white p-4 rounded-md border border-indigo-100">
        <p className="font-medium text-indigo-800">Learning Goals:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
          <li>Use core workplace vocabulary</li>
          <li>Handle office communication and small talk</li>
          <li>Participate in meetings and task delegation</li>
          <li>Write and discuss emails and reports</li>
        </ul>
      </div>
    </div>
  );
}