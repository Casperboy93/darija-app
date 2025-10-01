"use client";

import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

interface LiteraryExpressionProps {
  completedChallenges: number[];
  toggleChallenge: (index: number) => void;
}

export default function LiteraryExpression({ completedChallenges, toggleChallenge }: LiteraryExpressionProps) {
  return (
    <div className="space-y-6">
      <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
        <h3 className="text-xl font-bold text-purple-800 mb-4">Creative and Literary Mastery</h3>
        
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg border">
            <h4 className="font-semibold text-purple-700 mb-3">Challenge 4: Creative Writing</h4>
            <p className="text-gray-700 mb-3">Demonstrate literary skills in Darija:</p>
            <div className="space-y-3">
              {[
                "Write a short story with dialogue",
                "Compose poetry using traditional forms",
                "Create descriptive narratives",
                "Use metaphors and literary devices",
                "Express complex emotions through writing"
              ].map((task, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                  <button
                    onClick={() => toggleChallenge(index + 15)}
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                      completedChallenges.includes(index + 15) 
                        ? 'bg-purple-500 border-purple-500 text-white' 
                        : 'border-gray-300'
                    }`}
                  >
                    {completedChallenges.includes(index + 15) && <FaCheckCircle className="w-3 h-3" />}
                  </button>
                  <span className="text-gray-700">{task}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border">
            <h4 className="font-semibold text-purple-700 mb-3">Sample Literary Expressions</h4>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-300 pl-4">
                <p className="font-medium">الحب كالورد، زين ولكن عندو شوك</p>
                <p className="text-sm text-gray-600 italic">L-hub kal-ward, zin walakin 3andu shuk</p>
                <p className="text-sm text-gray-500">(Love is like a rose, beautiful but has thorns)</p>
              </div>
              <div className="border-l-4 border-purple-300 pl-4">
                <p className="font-medium">الصبر مفتاح الفرج، والعجلة من الشيطان</p>
                <p className="text-sm text-gray-600 italic">S-sabr miftah l-faraj, w l-3ajla mn sh-shitan</p>
                <p className="text-sm text-gray-500">(Patience is the key to relief, and haste is from the devil)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}