"use client";

import React from 'react';

export default function CongratulationsSection() {
  return (
    <div className="mb-10">
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg p-8 text-center">
        <div className="mb-4">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold mb-2">Mabrūk! Congratulations!</h2>
          <p className="text-xl opacity-90">You've completed all 10 beginner lessons!</p>
        </div>
        
        <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">What You've Learned:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div>
              <h4 className="font-medium mb-2">✓ Basic Communication</h4>
              <ul className="text-sm opacity-90 space-y-1">
                <li>• Greetings and introductions</li>
                <li>• Numbers and time</li>
                <li>• Family and relationships</li>
                <li>• Daily activities</li>
                <li>• Directions and locations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">✓ Practical Skills</h4>
              <ul className="text-sm opacity-90 space-y-1">
                <li>• Shopping and bargaining</li>
                <li>• Food and dining</li>
                <li>• Weather conversations</li>
                <li>• Health and medical needs</li>
                <li>• Cultural understanding</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <p className="text-lg">
            You now have the foundation to communicate in Moroccan Darija!
          </p>
          <p className="opacity-90">
            Continue practicing with native speakers and explore intermediate lessons to further improve your skills.
          </p>
          <div className="text-2xl mt-4">
            Bslāma w b-tawfīq! (Goodbye and good luck!)
          </div>
        </div>
      </div>
    </div>
  );
}