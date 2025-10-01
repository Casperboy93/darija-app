"use client";

import React from 'react';

export default function CulturalSensitivityTips() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Cultural Sensitivity Tips
      </h2>
      
      <div className="space-y-4">
        <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Religious Expressions</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-900">Use religious phrases respectfully</p>
                <p className="text-gray-600 text-sm">Even if you're not Muslim, using "Inshallah" or "Alhamdulillah" appropriately shows cultural respect</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-yellow-100 rounded-full p-1 mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-900">Avoid overusing religious expressions</p>
                <p className="text-gray-600 text-sm">Don't force religious phrases if they don't feel natural - authenticity is more important</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Mirroring Formality</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-900">Match the speaker's level of formality</p>
                <p className="text-gray-600 text-sm">If someone uses formal language with you, respond formally. If they're casual, you can be casual too</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-purple-100 rounded-full p-1 mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-900">Consider age and social status</p>
                <p className="text-gray-600 text-sm">Always err on the side of being more formal with elders or people in positions of authority</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Showing Respect</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-purple-800 mb-2">Language Choices:</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Use "Si" (Mr.) and "Lalla" (Mrs./Ms.) with names</li>
                <li>• Say "B'idnak/B'idnik" (excuse me) before interrupting</li>
                <li>• Use "Min fadlik/Min fadlik" (please) frequently</li>
                <li>• Express gratitude with "Baraka llahu fik"</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-purple-800 mb-2">Cultural Awareness:</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Understand the importance of family honor</li>
                <li>• Respect religious practices and timing</li>
                <li>• Be patient with indirect communication styles</li>
                <li>• Show interest in Moroccan culture and traditions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}