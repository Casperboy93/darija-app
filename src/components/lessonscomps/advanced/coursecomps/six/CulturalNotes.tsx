"use client";

import React from 'react';

export default function CulturalNotes() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Professional Culture Notes
      </h2>
      
      <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-purple-800">Hierarchy & Respect</h3>
            <p className="text-gray-700">Moroccan business culture emphasizes respect for hierarchy. Always use formal titles and show deference to senior colleagues.</p>
          </div>
          <div>
            <h3 className="font-semibold text-purple-800">Relationship Building</h3>
            <p className="text-gray-700">Personal relationships are crucial in Moroccan business. Take time for small talk and relationship building before diving into business matters.</p>
          </div>
          <div>
            <h3 className="font-semibold text-purple-800">Time & Punctuality</h3>
            <p className="text-gray-700">While flexibility exists, showing respect for others' time by being punctual demonstrates professionalism and consideration.</p>
          </div>
        </div>
      </div>
    </div>
  );
}