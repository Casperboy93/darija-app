import React from 'react';
import Link from 'next/link';

const MediumCard: React.FC = () => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md bg-white">
      <div className="p-6">
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-secondary mb-2">Intermediate Level</h3>
          <div className="flex space-x-4 text-sm text-gray-600 mb-4">
            <span>15 Lessons</span>
            <span>8 Hours</span>
          </div>
          <h4 className="font-medium text-gray-800 mb-2">What you'll learn:</h4>
          <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
            <li>Conversational phrases and dialogues</li>
            <li>Shopping and bargaining vocabulary</li>
            <li>Directions and transportation</li>
            <li>Ordering food and dining out</li>
          </ul>
          <p className="text-sm text-gray-600 mb-4">
            For learners who know the basics and want to expand their vocabulary and conversation skills.
          </p>
          <Link href="/lessons/intermediate" className="inline-block bg-secondary text-white px-4 py-2 rounded-md hover:bg-opacity-90 self-start">
            Start Learning
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MediumCard;