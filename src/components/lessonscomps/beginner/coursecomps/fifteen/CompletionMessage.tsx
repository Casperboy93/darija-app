"use client";

import React from 'react';

export default function CompletionMessage() {
  return (
    <div className="mb-10">
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg p-8 text-center">
        <div className="text-4xl mb-4">🎉</div>
        <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
        <p className="text-lg mb-4">
          You've completed all the beginner lessons in Darija!
        </p>
        <p className="text-base opacity-90">
          You now have a solid foundation in Moroccan Arabic. Keep practicing and exploring more advanced topics!
        </p>
        <div className="mt-6 text-sm opacity-80">
          <p>Mabrūk! Nta wlla nti qādir/qādra t-hdar Darija!</p>
          <p>(Congratulations! You can now speak Darija!)</p>
        </div>
      </div>
    </div>
  );
}