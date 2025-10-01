"use client";

import React from 'react';
import { FaCrown, FaTrophy, FaStar, FaAward, FaUsers } from 'react-icons/fa';

interface MasteryOverviewProps {
  masteryScore: number;
}

export default function MasteryOverview({ masteryScore }: MasteryOverviewProps) {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border border-yellow-200">
        <h3 className="text-xl font-bold text-yellow-800 mb-3">Darija Mastery Assessment</h3>
        <p className="text-yellow-700 leading-relaxed">
          Congratulations on reaching the final advanced lesson! This comprehensive assessment will test your mastery 
          of Moroccan Arabic across all levels - from basic conversations to complex philosophical discussions.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <FaTrophy className="w-8 h-8 text-yellow-600 mb-2" />
          <h4 className="font-semibold text-gray-800 mb-2">Final Assessment</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Comprehensive evaluation</li>
            <li>• All skill areas covered</li>
            <li>• Real-world scenarios</li>
          </ul>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <FaStar className="w-8 h-8 text-purple-600 mb-2" />
          <h4 className="font-semibold text-gray-800 mb-2">Mastery Levels</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Beginner (0-40%)</li>
            <li>• Intermediate (41-70%)</li>
            <li>• Advanced (71-100%)</li>
          </ul>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <FaAward className="w-8 h-8 text-blue-600 mb-2" />
          <h4 className="font-semibold text-gray-800 mb-2">Certification</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Digital certificate</li>
            <li>• Skill verification</li>
            <li>• Portfolio ready</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200">
        <h4 className="font-semibold text-blue-800 mb-3">Your Current Progress</h4>
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-blue-700">Mastery Score</span>
              <span className="text-sm font-medium text-blue-700">{masteryScore}%</span>
            </div>
            <div className="w-full bg-blue-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${masteryScore}%` }}
              ></div>
            </div>
          </div>
          <FaUsers className="w-8 h-8 text-blue-500" />
        </div>
      </div>
    </div>
  );
}