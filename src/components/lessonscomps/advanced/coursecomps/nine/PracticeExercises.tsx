"use client";

import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export default function PracticeExercises() {
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);

  const toggleExercise = (index: number) => {
    setCompletedExercises(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Practice Exercises
      </h2>
      
      <div className="space-y-6">
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h3 className="text-xl font-bold text-green-800 mb-4">Philosophical Discussion Practice</h3>
          
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-green-700 mb-3">Exercise 1: Express Your Philosophy</h4>
              <p className="text-gray-700 mb-3">Translate these philosophical statements into Darija:</p>
              <div className="space-y-3">
                {[
                  "Life is what we make of it",
                  "Knowledge is power",
                  "We are responsible for our choices"
                ].map((statement, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                    <button
                      onClick={() => toggleExercise(index)}
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                        completedExercises.includes(index) 
                          ? 'bg-green-500 border-green-500 text-white' 
                          : 'border-gray-300'
                      }`}
                    >
                      {completedExercises.includes(index) && <FaCheckCircle className="w-3 h-3" />}
                    </button>
                    <span className="text-gray-700">{statement}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-green-700 mb-3">Exercise 2: Philosophical Questions</h4>
              <p className="text-gray-700 mb-3">Practice asking deep questions in Darija:</p>
              <div className="space-y-3">
                {[
                  "What defines a good life?",
                  "Is happiness the ultimate goal?",
                  "How do we find meaning in suffering?"
                ].map((question, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                    <button
                      onClick={() => toggleExercise(index + 3)}
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                        completedExercises.includes(index + 3) 
                          ? 'bg-green-500 border-green-500 text-white' 
                          : 'border-gray-300'
                      }`}
                    >
                      {completedExercises.includes(index + 3) && <FaCheckCircle className="w-3 h-3" />}
                    </button>
                    <span className="text-gray-700">{question}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-green-700 mb-3">Exercise 3: Abstract Reasoning</h4>
              <p className="text-gray-700 mb-3">Practice expressing complex ideas:</p>
              <div className="space-y-3">
                {[
                  "Explain the concept of justice",
                  "Discuss the nature of consciousness",
                  "Analyze the relationship between freedom and responsibility"
                ].map((topic, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                    <button
                      onClick={() => toggleExercise(index + 6)}
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                        completedExercises.includes(index + 6) 
                          ? 'bg-green-500 border-green-500 text-white' 
                          : 'border-gray-300'
                      }`}
                    >
                      {completedExercises.includes(index + 6) && <FaCheckCircle className="w-3 h-3" />}
                    </button>
                    <span className="text-gray-700">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}