"use client";

import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

interface GlobalCommunicationProps {
  completedChallenges: number[];
  toggleChallenge: (index: number) => void;
}

export default function GlobalCommunication({ completedChallenges, toggleChallenge }: GlobalCommunicationProps) {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h3 className="text-xl font-bold text-blue-800 mb-4">International Darija Usage</h3>
        
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg border">
            <h4 className="font-semibold text-blue-700 mb-3">Challenge 3: Business Presentation</h4>
            <p className="text-gray-700 mb-3">Deliver a professional presentation in Darija:</p>
            <div className="space-y-3">
              {[
                "Present a business proposal clearly",
                "Handle questions and objections",
                "Use persuasive language effectively",
                "Incorporate data and statistics",
                "Close with a compelling call to action"
              ].map((task, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                  <button
                    onClick={() => toggleChallenge(index + 10)}
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                      completedChallenges.includes(index + 10) 
                        ? 'bg-blue-500 border-blue-500 text-white' 
                        : 'border-gray-300'
                    }`}
                  >
                    {completedChallenges.includes(index + 10) && <FaCheckCircle className="w-3 h-3" />}
                  </button>
                  <span className="text-gray-700">{task}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}