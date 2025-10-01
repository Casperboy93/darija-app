"use client";

import React from 'react';

export default function SocialEtiquette() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Social Etiquette in Language
      </h2>
      
      <p className="text-gray-700 mb-6">Proper social etiquette in Darija reflects respect, hierarchy, and cultural values:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <h3 className="font-bold text-lg text-gray-900">Greetings & Respect</h3>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Essential</span>
          </div>
          <div className="mt-3 space-y-2">
            <p className="text-gray-600">• Always start with "As-salamu alaykum"</p>
            <p className="text-gray-600">• Use "Si" (Mr.) or "Lalla" (Mrs.) for elders</p>
            <p className="text-gray-600">• "Ntuma" (plural you) shows respect</p>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "As-salamu alaykum, Si Ahmed, kifash ntuma?"</p>
            <p className="text-sm italic text-gray-500">(Peace be upon you, Mr. Ahmed, how are you?)</p>
          </div>
        </div>
        
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <h3 className="font-bold text-lg text-gray-900">Age & Status</h3>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Important</span>
          </div>
          <div className="mt-3 space-y-2">
            <p className="text-gray-600">• Younger people speak first to elders</p>
            <p className="text-gray-600">• Use formal pronouns with authority figures</p>
            <p className="text-gray-600">• Show deference in tone and vocabulary</p>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Smehli, ustaz, wash ymken nswlek?"</p>
            <p className="text-sm italic text-gray-500">(Excuse me, teacher, may I ask you?)</p>
          </div>
        </div>
        
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <h3 className="font-bold text-lg text-gray-900">Gender Considerations</h3>
            <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Cultural</span>
          </div>
          <div className="mt-3 space-y-2">
            <p className="text-gray-600">• Mixed company requires more formal language</p>
            <p className="text-gray-600">• Same-gender groups allow casual speech</p>
            <p className="text-gray-600">• Respectful distance in conversations</p>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><span className="font-medium">Tip:</span> Observe local customs and follow the lead of others</p>
          </div>
        </div>
        
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <h3 className="font-bold text-lg text-gray-900">Family Hierarchy</h3>
            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Traditional</span>
          </div>
          <div className="mt-3 space-y-2">
            <p className="text-gray-600">• Parents and grandparents get highest respect</p>
            <p className="text-gray-600">• Older siblings addressed formally</p>
            <p className="text-gray-600">• Family titles used instead of names</p>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Yemma" (mother), "Baba" (father), "Khuya" (brother)</p>
          </div>
        </div>
      </div>
    </div>
  );
}