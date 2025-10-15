"use client";

import React from 'react';

export default function MulticulturalTeams() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-teal-500 rounded-full mr-3"></div>
        Leading Multicultural Teams
      </h2>
      
      <div className="bg-teal-50 border border-teal-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-teal-800 mb-4">Team Dynamics</h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border border-teal-200">
            <h4 className="font-semibold text-teal-700 mb-2">Team Building</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <p className="text-sm font-medium">Bina fariq</p>
                <p className="text-xs text-gray-600">Team building</p>
              </div>
              <div>
                <p className="text-sm font-medium">Taʿawun fariq</p>
                <p className="text-xs text-gray-600">Team collaboration</p>
              </div>
              <div>
                <p className="text-sm font-medium">Tanwiʿ maharat</p>
                <p className="text-xs text-gray-600">Skill diversity</p>
              </div>
              <div>
                <p className="text-sm font-medium">Tawazun fariq</p>
                <p className="text-xs text-gray-600">Team balance</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-teal-200">
            <h4 className="font-semibold text-teal-700 mb-2">Performance Management</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <p className="text-sm font-medium">Taqyim adaʾ</p>
                <p className="text-xs text-gray-600">Performance evaluation</p>
              </div>
              <div>
                <p className="text-sm font-medium">Tatwir maharat</p>
                <p className="text-xs text-gray-600">Skill development</p>
              </div>
              <div>
                <p className="text-sm font-medium">Tahfiz fariq</p>
                <p className="text-xs text-gray-600">Team motivation</p>
              </div>
              <div>
                <p className="text-sm font-medium">Qiyas nataʾij</p>
                <p className="text-xs text-gray-600">Results measurement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}