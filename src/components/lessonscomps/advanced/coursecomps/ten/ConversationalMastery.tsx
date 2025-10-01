"use client";

import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

interface ConversationalMasteryProps {
  completedChallenges: number[];
  toggleChallenge: (index: number) => void;
}

export default function ConversationalMastery({ completedChallenges, toggleChallenge }: ConversationalMasteryProps) {
  return (
    <div className="space-y-6">
      <div className="bg-green-50 p-6 rounded-lg border border-green-200">
        <h3 className="text-xl font-bold text-green-800 mb-4">Real-World Conversation Challenges</h3>
        
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg border">
            <h4 className="font-semibold text-green-700 mb-3">Challenge 1: Job Interview</h4>
            <p className="text-gray-700 mb-3">Conduct a complete job interview in Darija, including:</p>
            <div className="space-y-3">
              {[
                "Introduce yourself professionally",
                "Discuss your qualifications and experience",
                "Ask thoughtful questions about the position",
                "Negotiate salary and benefits",
                "Express enthusiasm for the role"
              ].map((task, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                  <button
                    onClick={() => toggleChallenge(index)}
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                      completedChallenges.includes(index) 
                        ? 'bg-green-500 border-green-500 text-white' 
                        : 'border-gray-300'
                    }`}
                  >
                    {completedChallenges.includes(index) && <FaCheckCircle className="w-3 h-3" />}
                  </button>
                  <span className="text-gray-700">{task}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border">
            <h4 className="font-semibold text-green-700 mb-3">Challenge 2: Cultural Exchange</h4>
            <p className="text-gray-700 mb-3">Host a cultural exchange conversation:</p>
            <div className="space-y-3">
              {[
                "Explain Moroccan traditions to a foreigner",
                "Discuss cultural differences respectfully",
                "Share personal cultural experiences",
                "Answer complex cultural questions",
                "Bridge cultural misunderstandings"
              ].map((task, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                  <button
                    onClick={() => toggleChallenge(index + 5)}
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                      completedChallenges.includes(index + 5) 
                        ? 'bg-green-500 border-green-500 text-white' 
                        : 'border-gray-300'
                    }`}
                  >
                    {completedChallenges.includes(index + 5) && <FaCheckCircle className="w-3 h-3" />}
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