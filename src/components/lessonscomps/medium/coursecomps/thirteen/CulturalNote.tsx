"use client";

import React from 'react';

export default function CulturalNote() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-amber-500 rounded-full mr-3"></div>
        Cultural Note
      </h2>
      
      <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-amber-800 mb-3">Moroccan Hospitality</h3>
            <div className="text-gray-700 space-y-3">
              <p>
                Moroccan hospitality is legendary and deeply rooted in Islamic traditions and Berber customs. 
                The concept of "diyafa" (hospitality) is considered sacred, and guests are treated with utmost respect and generosity.
              </p>
              <p>
                Understanding these cultural norms is essential for building meaningful relationships in Morocco. 
                Showing respect for traditions, being gracious in accepting hospitality, and demonstrating cultural sensitivity 
                will earn you deep respect and lasting friendships.
              </p>
              <p>
                Remember that in Moroccan culture, relationships often take precedence over punctuality or business efficiency. 
                Taking time for proper greetings, inquiring about family, and showing genuine interest in people's wellbeing 
                is not just polite-it's expected and appreciated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}