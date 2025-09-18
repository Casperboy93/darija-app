"use client";

import React from 'react';
import Link from 'next/link';

interface LessonCardProps {
  id: number;
  title: string;
  description: string;
  timeNeeded: string;
  slug: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export default function LessonCard({ id, title, description, timeNeeded, slug, level }: LessonCardProps) {
  // Define color schemes based on level
  const colorSchemes = {
    beginner: {
      bg: 'bg-gradient-to-br from-green-50 to-green-100',
      border: 'border-green-200',
      hover: 'hover:border-green-400',
      badge: 'bg-green-100 text-green-800',
      button: 'bg-green-600 hover:bg-green-700',
      icon: 'text-green-600'
    },
    intermediate: {
      bg: 'bg-gradient-to-br from-blue-50 to-blue-100',
      border: 'border-blue-200',
      hover: 'hover:border-blue-400',
      badge: 'bg-blue-100 text-blue-800',
      button: 'bg-blue-600 hover:bg-blue-700',
      icon: 'text-blue-600'
    },
    advanced: {
      bg: 'bg-gradient-to-br from-purple-50 to-purple-100',
      border: 'border-purple-200',
      hover: 'hover:border-purple-400',
      badge: 'bg-purple-100 text-purple-800',
      button: 'bg-purple-600 hover:bg-purple-700',
      icon: 'text-purple-600'
    }
  };

  const colors = colorSchemes[level];

  return (
    <div className={`rounded-xl border ${colors.border} ${colors.bg} ${colors.hover} transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md`}>
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <span className={`${colors.badge} text-xs font-medium px-2.5 py-0.5 rounded-full`}>
            Lesson {id}
          </span>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-3.5 w-3.5 ${colors.icon} mr-1`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span className="text-xs text-gray-600">{timeNeeded}</span>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <Link href={`/lessons/${slug}`} className="block">
          <button className={`${colors.button} text-white w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center`}>
            Start Lesson
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}