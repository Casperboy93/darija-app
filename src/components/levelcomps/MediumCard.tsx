import React from 'react';
import Link from 'next/link';

const MediumCard: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 p-6 hover:border-blue-300">
      {/* Level Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
          Intermediate Level
        </span>
        <div className="text-right">
          <div className="text-sm text-gray-500">Total Time</div>
          <div className="text-lg font-semibold text-blue-600">6-8 hours</div>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900 mb-3">Build Conversation Skills</h3>
      
      {/* Stats */}
      <div className="flex items-center justify-between mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">15</div>
          <div className="text-sm text-blue-700">Lessons</div>
        </div>
        <div className="w-px h-8 bg-blue-200"></div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">60</div>
          <div className="text-sm text-blue-700">Exercises</div>
        </div>
        <div className="w-px h-8 bg-blue-200"></div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">12</div>
          <div className="text-sm text-blue-700">Quizzes</div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-4 leading-relaxed">
        Expand your vocabulary and conversation skills with practical dialogues, shopping scenarios, and everyday interactions in Moroccan Arabic.
      </p>

      {/* Learning Objectives */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
          What you’ll learn:
        </h4>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">✓</span>
            <span className="text-gray-700">Conversational phrases and dialogues</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">✓</span>
            <span className="text-gray-700">Shopping and bargaining vocabulary</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">✓</span>
            <span className="text-gray-700">Directions and transportation</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">✓</span>
            <span className="text-gray-700">Ordering food and dining out</span>
          </li>
        </ul>
      </div>

      {/* Content Preview */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg border">
        <h4 className="font-semibold text-gray-900 mb-2">Course Content Preview:</h4>
        <div className="space-y-1 text-sm text-gray-600">
          <div>• Lesson 1: Daily Conversations</div>
          <div>• Lesson 2: Shopping & Markets</div>
          <div>• Lesson 3: Transportation & Directions</div>
          <div className="text-blue-600 font-medium">+ 12 more lessons</div>
        </div>
      </div>

      {/* Action Button */}
      <Link 
        href="/lessons/intermediate" 
        className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
      >
        Start Learning →
      </Link>
    </div>
  );
};

export default MediumCard;