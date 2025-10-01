"use client";

import React from 'react';
import { FaCheckCircle, FaCrown, FaStar, FaBullseye, FaBolt } from 'react-icons/fa';

interface FinalAssessmentProps {
  completedChallenges: number[];
  toggleChallenge: (index: number) => void;
}

export default function FinalAssessment({ completedChallenges, toggleChallenge }: FinalAssessmentProps) {
  return (
    <div className="space-y-6">
      <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h3 className="text-xl font-bold text-yellow-800 mb-4">Comprehensive Mastery Test</h3>
        
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg border">
            <h4 className="font-semibold text-yellow-700 mb-3">Final Challenge: Complete Scenario</h4>
            <p className="text-gray-700 mb-3">Demonstrate mastery across all areas in one comprehensive scenario:</p>
            <div className="space-y-3">
              {[
                "Lead a multicultural team meeting in Darija",
                "Present a complex project with philosophical implications",
                "Handle conflicts and negotiations diplomatically",
                "Inspire and motivate team members",
                "Reflect on the experience with deep insight"
              ].map((task, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                  <button
                    onClick={() => toggleChallenge(index + 25)}
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                      completedChallenges.includes(index + 25) 
                        ? 'bg-yellow-500 border-yellow-500 text-white' 
                        : 'border-gray-300'
                    }`}
                  >
                    {completedChallenges.includes(index + 25) && <FaCheckCircle className="w-3 h-3" />}
                  </button>
                  <span className="text-gray-700">{task}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
            <div className="flex items-center space-x-4 mb-4">
              <FaCrown className="w-8 h-8 text-yellow-600" />
              <h4 className="text-xl font-bold text-gray-800">Mastery Levels</h4>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg border">
                <FaStar className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <h5 className="font-semibold text-gray-800">Bronze</h5>
                <p className="text-sm text-gray-600">0-40% Complete</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border">
                <FaBullseye className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                <h5 className="font-semibold text-gray-800">Silver</h5>
                <p className="text-sm text-gray-600">41-70% Complete</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border">
                <FaBolt className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <h5 className="font-semibold text-gray-800">Gold</h5>
                <p className="text-sm text-gray-600">71-100% Complete</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}