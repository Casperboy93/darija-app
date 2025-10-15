"use client";

import React from 'react';

export default function PhoneCommunication() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-teal-500 rounded-full mr-3"></div>
        Phone Communication
      </h2>
      
      <p className="text-gray-700 mb-6">Professional phone conversation skills.</p>
      
      <div className="space-y-4">
        <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
          <h3 className="font-semibold text-teal-800 mb-3">Answering the Phone</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white border border-teal-200 rounded-lg">
              <span className="font-medium text-gray-800">Allo, sharikat...</span>
              <span className="text-gray-600">Hello, ... company</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-teal-200 rounded-lg">
              <span className="font-medium text-gray-800">Kayf yimkinni musa'adtak?</span>
              <span className="text-gray-600">How can I help you?</span>
            </div>
          </div>
        </div>
        
        <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
          <h3 className="font-semibold text-teal-800 mb-3">Making Appointments</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white border border-teal-200 rounded-lg">
              <span className="font-medium text-gray-800">Urid hajz maw'id</span>
              <span className="text-gray-600">I would like to book an appointment</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-teal-200 rounded-lg">
              <span className="font-medium text-gray-800">Hal yimkin yawm al-khamis?</span>
              <span className="text-gray-600">Is Thursday possible?</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}