"use client";

import React from 'react';

export default function DebatePersuasion() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
        Debate and Persuasion
      </h2>
      
      <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
        <h3 className="font-bold text-lg text-red-800 mb-4">Argumentative Language</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-md border border-red-100">
            <h4 className="font-semibold text-red-700 mb-2">Agreeing</h4>
            <div className="space-y-1 text-sm">
              <p><span className="font-semibold">3andak l haqq:</span> You're right</p>
              <p><span className="font-semibold">Muttafiq m3ak:</span> I agree with you</p>
              <p><span className="font-semibold">Sahih:</span> That's correct</p>
              <p><span className="font-semibold">Bi d dabt:</span> Exactly</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-md border border-red-100">
            <h4 className="font-semibold text-red-700 mb-2">Disagreeing</h4>
            <div className="space-y-1 text-sm">
              <p><span className="font-semibold">Ma muttafiqsh:</span> I don't agree</p>
              <p><span className="font-semibold">Ghalat:</span> Wrong</p>
              <p><span className="font-semibold">Mush sahih:</span> Not correct</p>
              <p><span className="font-semibold">La, hada mush sah:</span> No, this isn't right</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-md border border-red-100">
            <h4 className="font-semibold text-red-700 mb-2">Presenting Evidence</h4>
            <div className="space-y-1 text-sm">
              <p><span className="font-semibold">L dalil huwa:</span> The evidence is</p>
              <p><span className="font-semibold">Matalan:</span> For example</p>
              <p><span className="font-semibold">Hada yubayyin:</span> This shows</p>
              <p><span className="font-semibold">Wadih anna:</span> It's clear that</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-md border border-red-100">
            <h4 className="font-semibold text-red-700 mb-2">Concluding</h4>
            <div className="space-y-1 text-sm">
              <p><span className="font-semibold">Idhan:</span> Therefore</p>
              <p><span className="font-semibold">Bi t tali:</span> Consequently</p>
              <p><span className="font-semibold">L khulasa:</span> In conclusion</p>
              <p><span className="font-semibold">Hada ya3ni:</span> This means</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}