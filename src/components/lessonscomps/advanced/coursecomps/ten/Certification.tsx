"use client";

import React from 'react';
import { FaTrophy, FaStar, FaAward } from 'react-icons/fa';

interface CertificationProps {
  masteryScore: number;
}

export default function Certification({ masteryScore }: CertificationProps) {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
        <h3 className="text-xl font-bold text-purple-800 mb-4">Your Darija Mastery Certificate</h3>
        
        <div className="bg-white p-6 rounded-lg border-2 border-purple-300 shadow-lg">
          <div className="text-center space-y-4">
            <div className="flex justify-center space-x-2">
              <FaTrophy className="w-8 h-8 text-yellow-500" />
              <FaStar className="w-8 h-8 text-purple-500" />
              <FaAward className="w-8 h-8 text-blue-500" />
            </div>
            
            <h4 className="text-2xl font-bold text-gray-800">Certificate of Mastery</h4>
            <p className="text-lg text-gray-700">Moroccan Arabic (Darija)</p>
            
            <div className="border-t border-b border-gray-200 py-4 my-4">
              <p className="text-gray-600">This certifies that you have successfully completed</p>
              <p className="text-gray-600">the comprehensive Darija language program</p>
              <p className="text-gray-600">and demonstrated mastery across all skill levels</p>
            </div>
            
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>Mastery Score: {masteryScore}%</span>
              <span>Date: {new Date().toLocaleDateString()}</span>
            </div>
            
            <div className="mt-6">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-colors">
                Download Certificate
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-white p-4 rounded-lg border">
          <h4 className="font-semibold text-purple-700 mb-3">What's Next?</h4>
          <ul className="space-y-2 text-gray-700">
            <li>• Continue practicing with native speakers</li>
            <li>• Explore Moroccan literature and media</li>
            <li>• Join Darija-speaking communities</li>
            <li>• Consider teaching others what you've learned</li>
            <li>• Keep expanding your vocabulary and cultural knowledge</li>
          </ul>
        </div>
      </div>
    </div>
  );
}