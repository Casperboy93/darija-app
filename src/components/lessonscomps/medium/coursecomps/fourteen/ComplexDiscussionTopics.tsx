"use client";

import React from 'react';

export default function ComplexDiscussionTopics() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Complex Discussion Topics
      </h2>
      
      <p className="text-gray-700 mb-6">Vocabulary and phrases for discussing complex and abstract topics.</p>
      
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg border border-orange-200">
          <h3 className="font-semibold text-orange-800 mb-2">Abstract Concepts</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-2 bg-orange-50 rounded">
              <p className="font-medium">Al-ḥurriyya</p>
              <p className="text-sm text-gray-600">Freedom</p>
            </div>
            <div className="text-center p-2 bg-orange-50 rounded">
              <p className="font-medium">Al-ʿadāla</p>
              <p className="text-sm text-gray-600">Justice</p>
            </div>
            <div className="text-center p-2 bg-orange-50 rounded">
              <p className="font-medium">Al-taqaddum</p>
              <p className="text-sm text-gray-600">Progress</p>
            </div>
            <div className="text-center p-2 bg-orange-50 rounded">
              <p className="font-medium">Al-tanmiya</p>
              <p className="text-sm text-gray-600">Development</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-orange-200">
          <h3 className="font-semibold text-orange-800 mb-2">Philosophical Terms</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-2 bg-orange-50 rounded">
              <p className="font-medium">Al-ḥaqīqa</p>
              <p className="text-sm text-gray-600">Truth</p>
            </div>
            <div className="text-center p-2 bg-orange-50 rounded">
              <p className="font-medium">Al-maʿnā</p>
              <p className="text-sm text-gray-600">Meaning</p>
            </div>
            <div className="text-center p-2 bg-orange-50 rounded">
              <p className="font-medium">Al-qiyam</p>
              <p className="text-sm text-gray-600">Values</p>
            </div>
            <div className="text-center p-2 bg-orange-50 rounded">
              <p className="font-medium">Al-mabādiʾ</p>
              <p className="text-sm text-gray-600">Principles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}