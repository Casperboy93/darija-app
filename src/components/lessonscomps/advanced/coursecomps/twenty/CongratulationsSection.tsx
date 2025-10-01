"use client";

import React from 'react';

export default function CongratulationsSection() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-4 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
        Congratulations! Advanced Darija Master!
      </h2>
      <p className="text-xl mb-6">You have completed all 20 advanced Darija lessons! You now possess the highest level of Darija proficiency, capable of engaging in complex discussions across professional, academic, and cultural contexts.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white bg-opacity-20 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">🎯 What You've Achieved</h3>
          <ul className="space-y-2">
            <li>✅ Mastered advanced professional vocabulary</li>
            <li>✅ Developed cross-cultural communication skills</li>
            <li>✅ Learned specialized terminology across multiple fields</li>
            <li>✅ Gained confidence in formal and diplomatic contexts</li>
          </ul>
        </div>
        
        <div className="bg-white bg-opacity-20 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">🌟 Your Next Steps</h3>
          <ul className="space-y-2">
            <li>🗣️ Practice with native speakers</li>
            <li>📚 Read advanced Darija literature</li>
            <li>🎬 Watch Moroccan films and documentaries</li>
            <li>🌍 Engage with Moroccan communities globally</li>
          </ul>
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-lg font-semibold mb-2">🏆 You are now a certified Advanced Darija Speaker! 🏆</p>
        <p className="text-base opacity-90">Continue your journey by immersing yourself in Moroccan culture and connecting with the global Darija-speaking community.</p>
      </div>
    </div>
  );
}