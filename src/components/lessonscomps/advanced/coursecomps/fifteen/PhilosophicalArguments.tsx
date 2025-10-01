"use client";

import React from 'react';

export default function PhilosophicalArguments() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Philosophical Arguments and Reasoning
      </h2>
      
      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-blue-800 mb-4">Logical Reasoning</h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-700 mb-2">Argument Structure</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <p className="text-sm font-medium">Muqaddimāt</p>
                <p className="text-xs text-gray-600">Premises</p>
              </div>
              <div>
                <p className="text-sm font-medium">Natīja</p>
                <p className="text-xs text-gray-600">Conclusion</p>
              </div>
              <div>
                <p className="text-sm font-medium">Burhān</p>
                <p className="text-xs text-gray-600">Proof</p>
              </div>
              <div>
                <p className="text-sm font-medium">Dalīl</p>
                <p className="text-xs text-gray-600">Evidence</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-700 mb-2">Types of Arguments</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <p className="text-sm font-medium">Istidlāl istiqrāʾī</p>
                <p className="text-xs text-gray-600">Inductive reasoning</p>
              </div>
              <div>
                <p className="text-sm font-medium">Istidlāl istinbāṭī</p>
                <p className="text-xs text-gray-600">Deductive reasoning</p>
              </div>
              <div>
                <p className="text-sm font-medium">Qiyās</p>
                <p className="text-xs text-gray-600">Analogy</p>
              </div>
              <div>
                <p className="text-sm font-medium">Jadal</p>
                <p className="text-xs text-gray-600">Dialectic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}