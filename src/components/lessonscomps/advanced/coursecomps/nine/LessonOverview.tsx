"use client";

import React from 'react';
import { FaBullseye, FaUsers, FaLightbulb } from 'react-icons/fa';

export default function LessonOverview() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Lesson Overview
      </h2>
      
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200">
          <h3 className="text-xl font-bold text-purple-800 mb-3">Philosophy and Abstract Thinking</h3>
          <p className="text-purple-700 leading-relaxed">
            Master the art of philosophical discourse and abstract thinking in Darija. Learn to express complex ideas, 
            engage in deep conversations about life, existence, and meaning while using sophisticated Moroccan Arabic.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <FaBullseye className="w-8 h-8 text-purple-600 mb-2" />
            <h4 className="font-semibold text-gray-800 mb-2">Learning Goals</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Express abstract concepts</li>
              <li>• Engage in philosophical debates</li>
              <li>• Discuss existential questions</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <FaUsers className="w-8 h-8 text-indigo-600 mb-2" />
            <h4 className="font-semibold text-gray-800 mb-2">Key Skills</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Abstract reasoning</li>
              <li>• Philosophical vocabulary</li>
              <li>• Deep conversations</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <FaLightbulb className="w-8 h-8 text-yellow-600 mb-2" />
            <h4 className="font-semibold text-gray-800 mb-2">Applications</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Academic discussions</li>
              <li>• Intellectual debates</li>
              <li>• Personal reflection</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}