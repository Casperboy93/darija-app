"use client";

import React from 'react';

export default function MeetingLanguage() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Meeting Language
      </h2>
      
      <p className="text-gray-700 mb-6">Professional expressions for meetings and presentations.</p>
      
      <div className="space-y-4">
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="font-semibold text-green-800 mb-3">Starting a Meeting</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">Yallāh nabdāw</span>
              <span className="text-gray-600">Let's start</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">Al-yawm ghādi nnaqqshu</span>
              <span className="text-gray-600">Today we're going to discuss</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">Awwal ḥāja</span>
              <span className="text-gray-600">First thing</span>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="font-semibold text-green-800 mb-3">Expressing Opinions</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">Fī raʾyī</span>
              <span className="text-gray-600">In my opinion</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">Ana muttafiq maʿāk</span>
              <span className="text-gray-600">I agree with you</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">Lākin ʿandī fikra ukhrā</span>
              <span className="text-gray-600">But I have another idea</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}