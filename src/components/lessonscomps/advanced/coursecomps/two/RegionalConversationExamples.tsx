"use client";

import React from 'react';

export default function RegionalConversationExamples() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Regional Conversation Examples
      </h2>
      
      <p className="text-gray-700 mb-6">See how the same conversation varies across different regions:</p>
      
      <div className="space-y-6">
        <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Northern Style (Tetouan/Tangier)</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="space-y-2">
              <p><span className="font-medium text-blue-600">A:</span> Kifash nta? Fayn kenti?</p>
              <p className="text-sm text-gray-600 ml-4">How are you? Where were you?</p>
              <p><span className="font-medium text-green-600">B:</span> Ana bikhir, kenti f l'bit. W nta?</p>
              <p className="text-sm text-gray-600 ml-4">I'm fine, I was at home. And you?</p>
              <p><span className="font-medium text-blue-600">A:</span> Wakha, ana kaman bikhir.</p>
              <p className="text-sm text-gray-600 ml-4">Okay, I'm also fine.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Central Style (Casablanca/Rabat)</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="space-y-2">
              <p><span className="font-medium text-blue-600">A:</span> Kifash nta? Feen kenti?</p>
              <p className="text-sm text-gray-600 ml-4">How are you? Where were you?</p>
              <p><span className="font-medium text-green-600">B:</span> Ana labas, kenti f dar. W nta?</p>
              <p className="text-sm text-gray-600 ml-4">I'm fine, I was at home. And you?</p>
              <p><span className="font-medium text-blue-600">A:</span> Wakha, ana kaman labas.</p>
              <p className="text-sm text-gray-600 ml-4">Okay, I'm also fine.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Eastern Style (Oujda/Fez)</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="space-y-2">
              <p><span className="font-medium text-blue-600">A:</span> Kifash nta? Wayn kenti?</p>
              <p className="text-sm text-gray-600 ml-4">How are you? Where were you?</p>
              <p><span className="font-medium text-green-600">B:</span> Ana tawa bikhir, kenti f dar. W nta?</p>
              <p className="text-sm text-gray-600 ml-4">I'm fine now, I was at home. And you?</p>
              <p><span className="font-medium text-blue-600">A:</span> Zwin, ana kaman labas.</p>
              <p className="text-sm text-gray-600 ml-4">Good, I'm also fine.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}