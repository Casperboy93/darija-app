import React from 'react';

const LessonOverview = () => {
  return (
    <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-4 text-blue-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
        </svg>
        Lesson Overview: Business and Work Vocabulary
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-md border border-blue-100">
          <h3 className="font-semibold text-blue-700 mb-3">What You'll Learn</h3>
          <ul className="text-blue-600 space-y-2 text-sm">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Professional workplace vocabulary and terminology
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Business meeting phrases and expressions
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Professional email writing in Darija
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Job interview preparation and responses
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Networking and professional relationship building
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Business etiquette and formal communication
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-md border border-blue-100">
          <h3 className="font-semibold text-blue-700 mb-3">Key Topics Covered</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
              <span className="text-blue-600">Office Environment & Equipment</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
              <span className="text-blue-600">Job Positions & Responsibilities</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
              <span className="text-blue-600">Meeting Participation & Leadership</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
              <span className="text-blue-600">Professional Correspondence</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
              <span className="text-blue-600">Career Development & Goals</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
              <span className="text-blue-600">Business Culture in Morocco</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-md border border-blue-200">
          <h3 className="font-semibold text-blue-800 mb-2">Learning Objectives</h3>
          <p className="text-blue-700 text-sm">
            By the end of this lesson, you'll be able to confidently navigate professional environments, 
            participate in business meetings, conduct job interviews, and communicate effectively in 
            workplace settings using appropriate Moroccan Darija vocabulary and expressions.
          </p>
        </div>

        <div className="p-4 bg-gradient-to-r from-green-100 to-teal-100 rounded-md border border-green-200">
          <h3 className="font-semibold text-green-800 mb-2">Cultural Context</h3>
          <p className="text-green-700 text-sm">
            Understanding Moroccan business culture is crucial for professional success. This lesson 
            incorporates cultural nuances, hierarchy respect, and appropriate formality levels 
            expected in Moroccan workplace environments.
          </p>
        </div>

        <div className="p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-md border border-purple-200">
          <h3 className="font-semibold text-purple-800 mb-2">Practical Applications</h3>
          <p className="text-purple-700 text-sm">
            These skills are essential for anyone working in Morocco or with Moroccan businesses. 
            You'll practice real-world scenarios including job applications, team collaborations, 
            client interactions, and professional networking events.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LessonOverview;