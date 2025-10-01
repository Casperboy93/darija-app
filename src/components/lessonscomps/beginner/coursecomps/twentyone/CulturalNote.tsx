"use client";

import React from 'react';

export default function CulturalNote() {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold text-amber-800 mb-4">🌍 Cultural Note</h2>
      <div className="space-y-4 text-gray-700">
        <p>
          <strong>Animals in Moroccan Culture:</strong> Animals play important roles in Moroccan society and culture. 
          Cats are especially beloved and are considered clean animals in Islamic tradition. You'll often see cats 
          roaming freely in Moroccan cities and being fed by locals.
        </p>
        
        <p>
          <strong>Nature and Environment:</strong> Morocco has diverse landscapes from the Atlas Mountains to the 
          Sahara Desert and Atlantic coastline. The country is home to unique wildlife including Barbary macaques, 
          desert foxes, and various bird species.
        </p>

        <div className="bg-white p-4 rounded-lg border border-amber-200">
          <h3 className="font-semibold text-amber-800 mb-2">Did You Know?</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>The Barbary lion, Morocco's national animal, is extinct in the wild</li>
            <li>Morocco has several national parks protecting its diverse ecosystems</li>
            <li>The argan tree is endemic to Morocco and produces valuable argan oil</li>
            <li>Stray cats in Morocco are generally well-cared for by the community</li>
          </ul>
        </div>

        <p className="text-sm italic">
          When visiting Morocco, you'll notice the strong connection between people and nature, 
          especially in rural areas where traditional farming and animal husbandry are still common.
        </p>
      </div>
    </div>
  );
}