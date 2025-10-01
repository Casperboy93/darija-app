"use client";

import React, { useState } from 'react';

export default function SelfAssessment() {
  const [checkedItems, setCheckedItems] = useState<{[key: string]: boolean}>({});

  const handleCheck = (item: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const assessmentItems = [
    { id: 'greetings', text: 'I can greet people and introduce myself in Darija', category: 'Basic Communication' },
    { id: 'numbers', text: 'I can count from 1-100 and tell time', category: 'Numbers & Time' },
    { id: 'family', text: 'I can talk about my family members', category: 'Personal Information' },
    { id: 'directions', text: 'I can ask for and give basic directions', category: 'Navigation' },
    { id: 'shopping', text: 'I can shop for basic items and negotiate prices', category: 'Shopping' },
    { id: 'food', text: 'I can order food and drinks in a restaurant', category: 'Dining' },
    { id: 'transport', text: 'I can use public transportation and taxis', category: 'Transportation' },
    { id: 'weather', text: 'I can talk about the weather', category: 'Small Talk' },
    { id: 'health', text: 'I can describe basic health problems', category: 'Health' },
    { id: 'technology', text: 'I can discuss basic technology needs', category: 'Technology' },
    { id: 'culture', text: 'I understand basic Moroccan cultural customs', category: 'Culture' },
    { id: 'emergency', text: 'I can handle basic emergency situations', category: 'Emergency' }
  ];

  const categories = [...new Set(assessmentItems.map(item => item.category))];
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalItems = assessmentItems.length;
  const percentage = Math.round((checkedCount / totalItems) * 100);

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreMessage = (percentage: number) => {
    if (percentage >= 80) return 'Excellent! You\'re ready for intermediate level.';
    if (percentage >= 60) return 'Good progress! Review areas you\'re unsure about.';
    return 'Keep practicing! Focus on the basics first.';
  };

  return (
    <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-4 text-purple-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
        Self-Assessment Checklist - قائمة التقييم الذاتي
      </h2>
      
      <div className="mb-6 p-4 bg-white rounded-md border border-purple-100">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-purple-700">Your Progress</h3>
          <span className={`text-2xl font-bold ${getScoreColor(percentage)}`}>
            {percentage}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
          <div 
            className={`h-3 rounded-full transition-all duration-300 ${
              percentage >= 80 ? 'bg-green-500' : 
              percentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'
            }`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600">
          {checkedCount} of {totalItems} skills completed
        </p>
        <p className={`text-sm font-medium mt-2 ${getScoreColor(percentage)}`}>
          {getScoreMessage(percentage)}
        </p>
      </div>

      <div className="space-y-6">
        {categories.map(category => (
          <div key={category} className="bg-white p-4 rounded-md border border-purple-100">
            <h3 className="font-semibold text-purple-700 mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              {category}
            </h3>
            <div className="space-y-2">
              {assessmentItems
                .filter(item => item.category === category)
                .map(item => (
                  <label key={item.id} className="flex items-center space-x-3 cursor-pointer hover:bg-purple-50 p-2 rounded">
                    <input
                      type="checkbox"
                      checked={checkedItems[item.id] || false}
                      onChange={() => handleCheck(item.id)}
                      className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <span className={`text-sm ${checkedItems[item.id] ? 'text-green-700 line-through' : 'text-gray-700'}`}>
                      {item.text}
                    </span>
                    {checkedItems[item.id] && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </label>
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-md border border-purple-200">
        <h3 className="font-semibold text-purple-800 mb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          Assessment Tips
        </h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• Be honest about your abilities - this helps identify areas for improvement</li>
          <li>• If you're unsure about a skill, practice it more before checking it off</li>
          <li>• Aim for at least 80% completion before moving to intermediate level</li>
          <li>• Review unchecked items and practice those specific skills</li>
          <li>• Consider finding a conversation partner to practice speaking</li>
        </ul>
      </div>
    </div>
  );
}