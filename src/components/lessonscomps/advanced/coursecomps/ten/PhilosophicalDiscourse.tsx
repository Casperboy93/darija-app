"use client";

import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

interface PhilosophicalDiscourseProps {
  completedChallenges: number[];
  toggleChallenge: (index: number) => void;
}

export default function PhilosophicalDiscourse({ completedChallenges, toggleChallenge }: PhilosophicalDiscourseProps) {
  return (
    <div className="space-y-6">
      <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
        <h3 className="text-xl font-bold text-indigo-800 mb-4">Advanced Philosophical Expression</h3>
        
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg border">
            <h4 className="font-semibold text-indigo-700 mb-3">Challenge 5: Philosophical Debate</h4>
            <p className="text-gray-700 mb-3">Engage in sophisticated philosophical discussions:</p>
            <div className="space-y-3">
              {[
                "Debate the nature of consciousness",
                "Discuss ethical dilemmas in modern society",
                "Explore concepts of justice and fairness",
                "Analyze the relationship between freedom and responsibility",
                "Examine the meaning of existence and purpose"
              ].map((task, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                  <button
                    onClick={() => toggleChallenge(index + 20)}
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                      completedChallenges.includes(index + 20) 
                        ? 'bg-indigo-500 border-indigo-500 text-white' 
                        : 'border-gray-300'
                    }`}
                  >
                    {completedChallenges.includes(index + 20) && <FaCheckCircle className="w-3 h-3" />}
                  </button>
                  <span className="text-gray-700">{task}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border">
            <h4 className="font-semibold text-indigo-700 mb-3">Advanced Philosophical Vocabulary</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="bg-indigo-50 p-3 rounded border">
                  <p><span className="font-medium">الوجودية</span> - l-wujudiya (existentialism)</p>
                </div>
                <div className="bg-indigo-50 p-3 rounded border">
                  <p><span className="font-medium">الجدلية</span> - l-jadaliya (dialectics)</p>
                </div>
                <div className="bg-indigo-50 p-3 rounded border">
                  <p><span className="font-medium">الميتافيزيقا</span> - l-mitafizika (metaphysics)</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-indigo-50 p-3 rounded border">
                  <p><span className="font-medium">الأخلاق</span> - l-akhlaq (ethics)</p>
                </div>
                <div className="bg-indigo-50 p-3 rounded border">
                  <p><span className="font-medium">المنطق</span> - l-mantiq (logic)</p>
                </div>
                <div className="bg-indigo-50 p-3 rounded border">
                  <p><span className="font-medium">الجمالية</span> - l-jamaliya (aesthetics)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}