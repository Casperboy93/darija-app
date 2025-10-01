"use client";

import React from 'react';

export default function LessonOverview() {
  return (
    <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-3 text-red-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
        Lesson Overview
      </h2>
      <p className="text-gray-700">Master media and journalism vocabulary in Darija. Learn to discuss news, reporting, broadcasting, and media ethics with professional precision.</p>
      
      <div className="mt-4 bg-white p-4 rounded-md border border-red-100">
        <p className="font-medium text-red-800">Learning Goals:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
          <li>Master journalism and media terminology</li>
          <li>Learn news reporting language</li>
          <li>Practice interview techniques</li>
          <li>Understand media ethics vocabulary</li>
        </ul>
      </div>
    </div>
  );
}