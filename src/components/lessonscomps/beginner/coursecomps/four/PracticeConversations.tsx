"use client";

import React from 'react';

export default function PracticeConversations() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Practice Conversations
      </h2>
      
      <div className="bg-white border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-medium mb-4 text-green-800">Family Discussions:</h3>
        
        <div className="space-y-6">
          <div className="border-l-4 border-green-400 pl-4">
            <h4 className="font-medium text-gray-800 mb-2">Meeting Someone New</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">Person A:</span> "Wash 3andek khawt?" (Do you have siblings?)</p>
              <p><span className="font-medium">Person B:</span> "Ah, 3andi khay w khti" (Yes, I have a brother and sister)</p>
              <p><span className="font-medium">Person A:</span> "Nta l kbir?" (Are you the oldest?)</p>
              <p><span className="font-medium">Person B:</span> "Lla, ana l wast" (No, I'm the middle one)</p>
            </div>
          </div>
          
          <div className="border-l-4 border-blue-400 pl-4">
            <h4 className="font-medium text-gray-800 mb-2">Asking About Family</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">You:</span> "Kifash bba w mma?" (How are your father and mother?)</p>
              <p><span className="font-medium">Friend:</span> "Bikhir, shukran. W nta, kifash l3a'ila?" (They're well, thank you. And you, how's the family?)</p>
              <p><span className="font-medium">You:</span> "Kulshi bikhir, l7amdulillah" (Everyone's well, thank God)</p>
            </div>
          </div>
          
          <div className="border-l-4 border-yellow-400 pl-4">
            <h4 className="font-medium text-gray-800 mb-2">Introducing Family</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">You:</span> "Hada rajli, Ahmed" (This is my husband, Ahmed)</p>
              <p><span className="font-medium">Friend:</span> "Ahlan wa sahlan! Wash 3andkum wlad?" (Welcome! Do you have children?)</p>
              <p><span className="font-medium">You:</span> "Ah, 3andna weld w bent" (Yes, we have a son and daughter)</p>
              <p><span className="font-medium">Friend:</span> "Mabrook!" (Congratulations!)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}