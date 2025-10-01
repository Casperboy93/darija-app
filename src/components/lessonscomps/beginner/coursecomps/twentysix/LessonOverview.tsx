import React from 'react';

const LessonOverview = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-3 text-blue-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="17 8h1a4 4 0 110 8h-1m-10-8H6a4 4 0 000 8h1m4-4h4m-6 0a2 2 0 104 0 2 2 0 00-4 0z" />
        </svg>
        Advanced Conversations and Social Interactions
      </h2>
      <p className="text-gray-700">Master complex social situations and engage in meaningful conversations with confidence in Moroccan Darija.</p>
      
      <div className="mt-4 bg-white p-4 rounded-md border border-blue-100">
        <p className="font-medium text-blue-800">In this lesson, you'll learn:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
          <li>Advanced conversation starters and topics</li>
          <li>Expressing opinions and emotions</li>
          <li>Social etiquette and cultural nuances</li>
          <li>Handling disagreements politely</li>
          <li>Making friends and networking</li>
          <li>Discussing current events and personal interests</li>
        </ul>
      </div>
    </div>
  );
};

export default LessonOverview;