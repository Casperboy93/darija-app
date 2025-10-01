"use client";

import React, { useState } from 'react';

export default function PracticeExercise() {
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string}>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "What is 'cat' in Darija?",
      options: ["kelb", "mech", "qniya", "djaja"],
      correct: "mech"
    },
    {
      question: "What does 'sbaa' mean?",
      options: ["tiger", "bear", "lion", "wolf"],
      correct: "lion"
    },
    {
      question: "How do you say 'tree' in Darija?",
      options: ["warda", "shajra", "hashish", "wraq"],
      correct: "shajra"
    },
    {
      question: "What is 'jbel'?",
      options: ["river", "sea", "mountain", "desert"],
      correct: "mountain"
    }
  ];

  const handleAnswerSelect = (questionIndex: number, answer: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: answer
    }));
  };

  const checkAnswers = () => {
    setShowResults(true);
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Practice Exercise</h2>
      
      <div className="space-y-6">
        {questions.map((q, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">{q.question}</h3>
            <div className="grid grid-cols-2 gap-2">
              {q.options.map((option, optIndex) => (
                <button
                  key={optIndex}
                  onClick={() => handleAnswerSelect(index, option)}
                  className={`p-2 rounded border text-left ${
                    selectedAnswers[index] === option
                      ? showResults
                        ? option === q.correct
                          ? 'bg-green-100 border-green-500 text-green-700'
                          : 'bg-red-100 border-red-500 text-red-700'
                        : 'bg-blue-100 border-blue-500 text-blue-700'
                      : showResults && option === q.correct
                      ? 'bg-green-100 border-green-500 text-green-700'
                      : 'bg-gray-50 border-gray-300 hover:bg-gray-100'
                  }`}
                  disabled={showResults}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        {!showResults ? (
          <button
            onClick={checkAnswers}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            disabled={Object.keys(selectedAnswers).length !== questions.length}
          >
            Check Answers
          </button>
        ) : (
          <button
            onClick={resetQuiz}
            className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
          >
            Try Again
          </button>
        )}
      </div>

      {showResults && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-gray-700">
            Score: {Object.entries(selectedAnswers).filter(([index, answer]) => 
              answer === questions[parseInt(index)].correct
            ).length} / {questions.length}
          </h3>
        </div>
      )}
    </div>
  );
}