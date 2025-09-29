import React from 'react';

export default function LessonOverview() {
  return (
    <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-3 text-green-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Lesson Overview
      </h2>
      <p className="text-gray-700">Learn essential vocabulary and phrases for shopping in Moroccan markets and stores. Master the art of bargaining and navigate shopping situations with confidence.</p>
      
      <div className="mt-4 bg-white p-4 rounded-md border border-green-100">
        <p className="font-medium text-green-800">Learning Goals:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
          <li>Master shopping vocabulary and market terms</li>
          <li>Learn numbers and prices in Darija</li>
          <li>Understand bargaining phrases and cultural context</li>
          <li>Practice shopping conversations and negotiations</li>
        </ul>
      </div>
    </div>
  );
}