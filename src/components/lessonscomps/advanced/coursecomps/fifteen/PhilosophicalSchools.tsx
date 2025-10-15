"use client";

import React from 'react';

export default function PhilosophicalSchools() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-indigo-500 rounded-full mr-3"></div>
        Philosophical Schools and Traditions
      </h2>
      
      <p className="text-gray-700 mb-6">Essential vocabulary for different philosophical traditions and schools of thought.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-indigo-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Islamic Philosophy</p>
            <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">Traditional</span>
          </div>
          <div className="mt-3 space-y-2">
            <p className="text-sm"><span className="font-semibold">Falsafa islamiyya:</span> Islamic philosophy</p>
            <p className="text-sm"><span className="font-semibold">Kalam:</span> Theology</p>
            <p className="text-sm"><span className="font-semibold">Tasawwuf:</span> Sufism</p>
            <p className="text-sm"><span className="font-semibold">Akhlaq:</span> Ethics/Morality</p>
            <p className="text-sm"><span className="font-semibold">Hikma:</span> Wisdom</p>
          </div>
        </div>
        
        <div className="border border-indigo-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Western Philosophy</p>
            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Modern</span>
          </div>
          <div className="mt-3 space-y-2">
            <p className="text-sm"><span className="font-semibold">Falsafa gharbiyya:</span> Western philosophy</p>
            <p className="text-sm"><span className="font-semibold">Mantiq:</span> Logic</p>
            <p className="text-sm"><span className="font-semibold">Wujudiyya:</span> Existentialism</p>
            <p className="text-sm"><span className="font-semibold">Nazariyyat maʿrifa:</span> Epistemology</p>
            <p className="text-sm"><span className="font-semibold">Mitafiziqa:</span> Metaphysics</p>
          </div>
        </div>
      </div>
    </div>
  );
}