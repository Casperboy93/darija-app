import React from 'react';
import Link from 'next/link';
import { beginnerLessons } from '@/data/beginnerLessons';

const BeginnerCard: React.FC = () => {
  const lessonCount = beginnerLessons.length;
  const totalMinutes = beginnerLessons.reduce((sum, l) => sum + parseInt(l.timeNeeded, 10), 0);
  const timeLabel = `${Math.floor(totalMinutes / 60)}h ${totalMinutes % 60}m`;

  const previewTitles = beginnerLessons.slice(0, 3);

  return (
    <div className="bg-white rounded-xl border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 p-6 hover:border-green-300">
      {/* Level Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          Beginner Level
        </span>
        <div className="text-right">
          <div className="text-sm text-gray-500">Total Time</div>
          <div className="text-lg font-semibold text-green-600">{timeLabel}</div>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900 mb-3">Start Your Darija Journey</h3>
      
      {/* Stats */}
      <div className="flex items-center justify-between mb-4 p-3 bg-green-50 rounded-lg border border-green-100">
        <div className="text-center w-full">
          <div className="text-2xl font-bold text-green-600">{lessonCount}</div>
          <div className="text-sm text-green-700">Lessons</div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-4 leading-relaxed">
        Perfect for complete beginners! Start with essential greetings, basic vocabulary, and simple phrases used in everyday Moroccan conversations.
      </p>

      {/* Learning Objectives */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          What you’ll learn:
        </h4>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-700">Basic greetings and polite expressions</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-700">Numbers, days, and time expressions</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-700">Family members and personal introductions</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-700">Essential vocabulary for daily situations</span>
          </li>
        </ul>
      </div>

      {/* Content Preview */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg border">
        <h4 className="font-semibold text-gray-900 mb-2">Course Content Preview:</h4>
        <div className="space-y-1 text-sm text-gray-600">
          {previewTitles.map((l, i) => (
            <div key={l.slug}>• Lesson {i + 1}: {l.title}</div>
          ))}
          {lessonCount > 3 && (
            <div className="text-green-600 font-medium">+ {lessonCount - 3} more lessons</div>
          )}
        </div>
      </div>

      {/* Action Button */}
      <Link 
        href="/lessons?level=beginner" 
        className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
      >
        Start Learning →
      </Link>
    </div>
  );
};

export default BeginnerCard;