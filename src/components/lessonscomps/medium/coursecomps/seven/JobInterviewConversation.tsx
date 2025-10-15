"use client";

import React from 'react';

export default function JobInterviewConversation() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Job Interview Conversation
      </h2>
      
      <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg mb-6">
        <h3 className="font-bold text-lg text-orange-800 mb-4">Sample Interview Dialogue</h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-md border-l-4 border-orange-400">
            <p className="font-semibold text-orange-700">Interviewer: Qul liya 3la nafsak</p>
            <p className="text-gray-600 italic">Tell me about yourself</p>
          </div>
          <div className="bg-white p-4 rounded-md border-l-4 border-blue-400">
            <p className="font-semibold text-blue-700">Candidate: Smiti Ahmed, 3andi diploma f l informatique</p>
            <p className="text-gray-600 italic">My name is Ahmed, I have a degree in computer science</p>
          </div>
          <div className="bg-white p-4 rounded-md border-l-4 border-orange-400">
            <p className="font-semibold text-orange-700">Interviewer: Ash hiya l khibra dyalak?</p>
            <p className="text-gray-600 italic">What is your experience?</p>
          </div>
          <div className="bg-white p-4 rounded-md border-l-4 border-blue-400">
            <p className="font-semibold text-blue-700">Candidate: Khdemt thalath snin f sharika teknolojiya</p>
            <p className="text-gray-600 italic">I worked three years at a technology company</p>
          </div>
          <div className="bg-white p-4 rounded-md border-l-4 border-orange-400">
            <p className="font-semibold text-orange-700">Interviewer: Lish bghiti tkhdem m3ana?</p>
            <p className="text-gray-600 italic">Why do you want to work with us?</p>
          </div>
          <div className="bg-white p-4 rounded-md border-l-4 border-blue-400">
            <p className="font-semibold text-blue-700">Candidate: Sharikatkum mashura u bghit nta3allem aktar</p>
            <p className="text-gray-600 italic">Your company is famous and I want to learn more</p>
          </div>
        </div>
      </div>
    </div>
  );
}