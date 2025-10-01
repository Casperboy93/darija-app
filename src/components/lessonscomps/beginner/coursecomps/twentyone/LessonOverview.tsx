"use client";

import React from 'react';

export default function LessonOverview() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Lesson Overview</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">What You'll Learn</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Names of common domestic and wild animals in Darija</li>
            <li>Basic vocabulary for plants and nature</li>
            <li>How to describe animals and their characteristics</li>
            <li>Environmental vocabulary in Moroccan Arabic</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Learning Objectives</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Identify and name 20+ animals in Darija</li>
            <li>Use descriptive words for animals and nature</li>
            <li>Engage in conversations about pets and wildlife</li>
            <li>Understand basic environmental concepts in Arabic</li>
          </ul>
        </div>
      </div>
    </div>
  );
}