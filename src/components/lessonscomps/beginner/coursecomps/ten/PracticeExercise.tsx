"use client";

import React from 'react';

export default function PracticeExercise() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
        Practice Exercise
      </h2>
      
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <h3 className="font-semibold text-red-900 mb-4">Medical Emergency Scenarios</h3>
        <p className="text-red-800 mb-6">Practice these situations using the vocabulary you've learned:</p>
        
        <div className="space-y-4">
          <div className="bg-white border border-red-200 rounded-lg p-4">
            <h4 className="font-medium text-red-900 mb-2">Scenario 1: At the Pharmacy</h4>
            <p className="text-red-800 text-sm mb-2">
              You have a headache and need to buy medicine. Ask the pharmacist for help.
            </p>
            <div className="bg-red-100 p-3 rounded text-sm">
              <p><strong>Try saying:</strong> "Salam, ʿandī ṣudāʿ. Bghit dawā."</p>
              <p className="text-red-600 italic">(Hello, I have a headache. I need medicine.)</p>
            </div>
          </div>
          
          <div className="bg-white border border-red-200 rounded-lg p-4">
            <h4 className="font-medium text-red-900 mb-2">Scenario 2: Calling for Help</h4>
            <p className="text-red-800 text-sm mb-2">
              You feel very sick and need to find a doctor urgently.
            </p>
            <div className="bg-red-100 p-3 rounded text-sm">
              <p><strong>Try saying:</strong> "Bghit ṭabīb! Fin l-mustashfā?"</p>
              <p className="text-red-600 italic">(I need a doctor! Where is the hospital?)</p>
            </div>
          </div>
          
          <div className="bg-white border border-red-200 rounded-lg p-4">
            <h4 className="font-medium text-red-900 mb-2">Scenario 3: Describing Pain</h4>
            <p className="text-red-800 text-sm mb-2">
              You're at the doctor's office and need to explain where it hurts.
            </p>
            <div className="bg-red-100 p-3 rounded text-sm">
              <p><strong>Try saying:</strong> "Kaywajaʿnī baṭnī w ʿandī sukhāna."</p>
              <p className="text-red-600 italic">(My stomach hurts and I have a fever.)</p>
            </div>
          </div>
          
          <div className="bg-white border border-red-200 rounded-lg p-4">
            <h4 className="font-medium text-red-900 mb-2">Scenario 4: Getting a Prescription</h4>
            <p className="text-red-800 text-sm mb-2">
              The doctor gave you a prescription and you need to get it filled.
            </p>
            <div className="bg-red-100 p-3 rounded text-sm">
              <p><strong>Try saying:</strong> "ʿAndī waṣfa mn ṭ-ṭabīb. Bghit hād d-dawā."</p>
              <p className="text-red-600 italic">(I have a prescription from the doctor. I want this medicine.)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}