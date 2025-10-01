"use client";

import React from 'react';

export default function LessonOverview() {
  return (
    <div className="mb-10">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Advanced Lesson 19: Artificial Intelligence and Technology</h1>
        <p className="text-xl mb-6">
          Explore the cutting-edge world of artificial intelligence, emerging technologies, and their impact on society.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h3 className="font-bold text-lg mb-2">Learning Goals</h3>
            <ul className="space-y-1 text-sm">
              <li>• Master AI and technology terminology</li>
              <li>• Discuss technological innovations</li>
              <li>• Understand cybersecurity concepts</li>
              <li>• Explore emerging technologies</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h3 className="font-bold text-lg mb-2">Key Topics</h3>
            <ul className="space-y-1 text-sm">
              <li>• Artificial Intelligence & Machine Learning</li>
              <li>• Robotics and Automation</li>
              <li>• Data Science and Big Data</li>
              <li>• Cybersecurity and Privacy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}