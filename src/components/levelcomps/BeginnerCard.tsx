import React from 'react';
import Link from 'next/link';

const BeginnerCard: React.FC = () => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md bg-white">
      <div className="p-6">
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-primary mb-2">Beginner Level</h3>
          <div className="flex space-x-4 text-sm text-gray-600 mb-4">
            <span>10 Lessons</span>
            <span>5 Hours</span>
          </div>
          <h4 className="font-medium text-gray-800 mb-2">What you'll learn:</h4>
          <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
            <li>Basic greetings and introductions</li>
            <li>Essential everyday phrases</li>
            <li>Numbers and basic counting</li>
            <li>Simple questions and answers</li>
          </ul>
          <p className="text-sm text-gray-600 mb-4">
            Perfect for complete beginners who want to learn the fundamentals of Moroccan Arabic.
          </p>
          <Link href="/lessons/beginner" className="inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 self-start">
            Start Learning
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BeginnerCard;