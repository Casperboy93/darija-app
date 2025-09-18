import React from 'react';
import Link from 'next/link';

const AdvancedCard: React.FC = () => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md bg-white">
      <div className="p-6">
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-accent mb-2">Advanced Level</h3>
          <div className="flex space-x-4 text-sm text-gray-600 mb-4">
            <span>12 Lessons</span>
            <span>10 Hours</span>
          </div>
          <h4 className="font-medium text-gray-800 mb-2">What you'll learn:</h4>
          <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
            <li>Complex conversations and idioms</li>
            <li>Cultural expressions and proverbs</li>
            <li>Regional dialect variations</li>
            <li>Professional and business vocabulary</li>
          </ul>
          <p className="text-sm text-gray-600 mb-4">
            For experienced learners who want to achieve fluency and understand cultural nuances.
          </p>
          <Link href="/lessons/advanced" className="inline-block bg-accent text-gray-800 px-4 py-2 rounded-md hover:bg-opacity-90 self-start">
            Start Learning
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdvancedCard;