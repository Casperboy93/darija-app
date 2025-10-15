"use client";

import React from 'react';

export default function HolidayGreetings() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Holiday Greetings
      </h2>
      
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="font-semibold text-gray-800 mb-2">Eid Greetings:</p>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">3id mubarak</span>
              <span className="text-gray-600 text-sm">Blessed Eid</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Kull 3am u ntuma b khayr</span>
              <span className="text-gray-600 text-sm">May you be well every year</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">3id sa3id</span>
              <span className="text-gray-600 text-sm">Happy Eid</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="font-semibold text-gray-800 mb-2">Ramadan Greetings:</p>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Ramadan mubarak</span>
              <span className="text-gray-600 text-sm">Blessed Ramadan</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Ramadan karim</span>
              <span className="text-gray-600 text-sm">Generous Ramadan</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Allah yataqabbal minna</span>
              <span className="text-gray-600 text-sm">May Allah accept from us</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}