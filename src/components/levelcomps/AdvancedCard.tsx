import React from 'react';
import Link from 'next/link';
import { advancedLessons } from '@/data/advancedLessons';

const AdvancedCard: React.FC = () => {
  const lessonCount = advancedLessons.length;
  const totalMinutes = advancedLessons.reduce((sum, l) => sum + parseInt(l.timeNeeded, 10), 0);
  const timeLabel = `${Math.floor(totalMinutes / 60)}h ${totalMinutes % 60}m`;
  const previewTitles = advancedLessons.slice(0, 3);

  return (
    <div className="bg-white rounded-xl border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 p-6 hover:border-purple-300">
      {/* Level Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 border border-purple-200">
          <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
          Advanced Level
        </span>
        <div className="text-right">
          <div className="text-sm text-gray-500">Total Time</div>
          <div className="text-lg font-semibold text-purple-600">{timeLabel}</div>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900 mb-3">Master Fluent Darija</h3>
      
      {/* Stats */}
      <div className="flex items-center justify-between mb-4 p-3 bg-purple-50 rounded-lg border border-purple-100">
        <div className="text-center w-full">
          <div className="text-2xl font-bold text-purple-600">{lessonCount}</div>
          <div className="text-sm text-purple-700">Lessons</div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-4 leading-relaxed">
        Achieve fluency with complex conversations, cultural expressions, regional dialects, and professional vocabulary for advanced communication.
      </p>

      {/* Learning Objectives */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
          <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
          What you’ll learn:
        </h4>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-purple-500 mr-2 mt-1">✓</span>
            <span className="text-gray-700">Complex conversations and idioms</span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-500 mr-2 mt-1">✓</span>
            <span className="text-gray-700">Cultural expressions and proverbs</span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-500 mr-2 mt-1">✓</span>
            <span className="text-gray-700">Regional dialect variations</span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-500 mr-2 mt-1">✓</span>
            <span className="text-gray-700">Professional and business vocabulary</span>
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
            <div className="text-purple-600 font-medium">+ {lessonCount - 3} more lessons</div>
          )}
        </div>
      </div>

      {/* Action Button */}
      <Link 
        href="/lessons?level=advanced" 
        className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
      >
        Start Learning →
      </Link>
    </div>
  );
};

export default AdvancedCard;