"use client";

import React from 'react';

export default function ProfessionalTips() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
        Professional Communication Tips
      </h2>
      
      <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <div>
              <h3 className="font-semibold text-yellow-800">Balance Formality</h3>
              <p className="text-gray-700">Know when to use formal Arabic and when Darija is appropriate in professional settings.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <div>
              <h3 className="font-semibold text-yellow-800">Show Respect</h3>
              <p className="text-gray-700">Always use respectful language and acknowledge hierarchy in your communication.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <div>
              <h3 className="font-semibold text-yellow-800">Build Relationships</h3>
              <p className="text-gray-700">Invest time in personal connections - they're essential for business success in Morocco.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <div>
              <h3 className="font-semibold text-yellow-800">Practice Active Listening</h3>
              <p className="text-gray-700">Show engagement through appropriate responses and follow-up questions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}