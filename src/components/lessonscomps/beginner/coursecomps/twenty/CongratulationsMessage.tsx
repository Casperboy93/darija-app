"use client";

import React from 'react';

export default function CongratulationsMessage() {
  return (
    <div className="mb-10">
      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg border border-green-200">
        <div className="text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-green-800 mb-4">Mabrūk! Congratulations!</h2>
          <div className="space-y-4 text-gray-700">
            <p className="text-lg">
              You have successfully completed all 20 beginner lessons in Moroccan Darija!
            </p>
            <p>
              From basic greetings to complex conversations about celebrations, you've learned:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-left">
              <ul className="space-y-2">
                <li>• Essential vocabulary and phrases</li>
                <li>• Family and relationship terms</li>
                <li>• Numbers, time, and dates</li>
                <li>• Food and dining expressions</li>
                <li>• Shopping and market language</li>
                <li>• Transportation vocabulary</li>
                <li>• Body parts and health terms</li>
                <li>• Clothing and colors</li>
                <li>• Directions and locations</li>
                <li>• Weather and seasons</li>
              </ul>
              <ul className="space-y-2">
                <li>• Cultural insights and traditions</li>
                <li>• Practical dialogue skills</li>
                <li>• Celebration and holiday terms</li>
                <li>• Everyday conversation patterns</li>
                <li>• Moroccan cultural context</li>
                <li>• Polite expressions and etiquette</li>
                <li>• Regional variations</li>
                <li>• Common idioms and sayings</li>
                <li>• Social interaction skills</li>
                <li>• Religious and cultural awareness</li>
              </ul>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg border border-blue-200">
              <p className="font-semibold text-blue-800 mb-2">What's Next?</p>
              <p className="text-gray-700">
                Continue practicing with native speakers, explore intermediate lessons, 
                and immerse yourself in Moroccan culture. Your journey in learning Darija 
                has just begun!
              </p>
            </div>
            <p className="text-lg font-semibold text-green-700 mt-6">
              Bṣaḥa u rāḥa! Keep learning and exploring! 🇲🇦
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}