"use client";

import React from 'react';

export default function PhilosophicalTips() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
        Advanced Tips
      </h2>
      
      <div className="space-y-6">
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
          <h3 className="text-xl font-bold text-purple-800 mb-4">Mastering Philosophical Discourse</h3>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-700 mb-2">🎯 Key Strategies</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Start with "من جهة..." (on one hand)</li>
                <li>• Use "ولكن" (but) to present counterarguments</li>
                <li>• End with "بالتالي" (therefore) for conclusions</li>
                <li>• Practice active listening in philosophical discussions</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-700 mb-2">💡 Cultural Context</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Respect different philosophical traditions</li>
                <li>• Incorporate Islamic philosophical concepts when appropriate</li>
                <li>• Be mindful of cultural sensitivities in abstract discussions</li>
                <li>• Use metaphors and analogies familiar to Moroccan culture</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-700 mb-2">🚀 Advanced Techniques</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Master the art of Socratic questioning in Darija</li>
                <li>• Learn to express paradoxes and contradictions</li>
                <li>• Practice philosophical storytelling</li>
                <li>• Develop your own philosophical voice in Darija</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}