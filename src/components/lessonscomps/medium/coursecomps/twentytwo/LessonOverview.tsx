"use client";

import React from 'react';

export default function LessonOverview() {
  return (
    <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-3 text-indigo-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3v7h6v-7c0-1.657-1.343-3-3-3z" />
        </svg>
        Lesson Overview
      </h2>
      <p className="text-gray-700">Master finance and banking conversations in Darija. Learn essential terms, processes, and polite expressions for handling money matters in Morocco confidently.</p>
      <div className="mt-4 bg-white p-4 rounded-md border border-indigo-100">
        <p className="font-medium text-indigo-800">Learning Goals:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
          <li>Understand key banking and finance vocabulary</li>
          <li>Open accounts and discuss fees, transfers, and payments</li>
          <li>Manage budgeting and saving strategies</li>
          <li>Use polite, clear language with bank staff</li>
        </ul>
      </div>
    </div>
  );
}