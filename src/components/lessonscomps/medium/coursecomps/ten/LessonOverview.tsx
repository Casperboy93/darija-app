"use client";

import React from 'react';

export default function LessonOverview() {
  return (
    <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-3 text-indigo-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        Lesson Overview
      </h2>
      <p className="text-gray-700">Master advanced conversation techniques in Darija. Learn to express complex ideas, engage in debates, tell stories, and handle sophisticated social interactions with confidence and fluency.</p>
      
      <div className="mt-4 bg-white p-4 rounded-md border border-indigo-100">
        <p className="font-medium text-indigo-800">Learning Goals:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
          <li>Master advanced conversational techniques</li>
          <li>Learn to express complex opinions and emotions</li>
          <li>Understand storytelling and narrative skills</li>
          <li>Practice debate and persuasion techniques</li>
        </ul>
      </div>
    </div>
  );
}