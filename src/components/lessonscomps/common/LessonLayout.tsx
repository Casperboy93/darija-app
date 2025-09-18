"use client";

import React, { ReactNode } from 'react';
import Link from 'next/link';

interface LessonLayoutProps {
  children: ReactNode;
  title: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  lessonNumber: number;
  previousLesson?: string;
  nextLesson?: string;
}

export default function LessonLayout({
  children,
  title,
  level,
  lessonNumber,
  previousLesson,
  nextLesson
}: LessonLayoutProps) {
  // Define color schemes based on level
  const colorSchemes = {
    beginner: {
      primary: 'green',
      headerBg: 'bg-gradient-to-r from-green-600 to-green-700',
      accentBg: 'bg-green-50',
      accentBorder: 'border-green-200',
      accentText: 'text-green-800',
      buttonBg: 'bg-green-600 hover:bg-green-700'
    },
    intermediate: {
      primary: 'blue',
      headerBg: 'bg-gradient-to-r from-blue-600 to-blue-700',
      accentBg: 'bg-blue-50',
      accentBorder: 'border-blue-200',
      accentText: 'text-blue-800',
      buttonBg: 'bg-blue-600 hover:bg-blue-700'
    },
    advanced: {
      primary: 'purple',
      headerBg: 'bg-gradient-to-r from-purple-600 to-purple-700',
      accentBg: 'bg-purple-50',
      accentBorder: 'border-purple-200',
      accentText: 'text-purple-800',
      buttonBg: 'bg-purple-600 hover:bg-purple-700'
    }
  };

  const colors = colorSchemes[level];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className={`${colors.headerBg} text-white py-8 px-4 sm:px-6 lg:px-8 shadow-md`}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <Link href="/lessons" className="text-white hover:text-gray-200 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Lessons
            </Link>
          </div>
          
          <div className="flex items-center">
            <span className={`bg-white ${colors.accentText} text-xs font-bold px-3 py-1 rounded-full mr-3`}>
              Lesson {lessonNumber}
            </span>
            <h1 className="text-3xl font-bold">{title}</h1>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-4xl mx-auto py-8 px-4">
        {children}
      </div>
      
      {/* Navigation */}
      <div className="max-w-4xl mx-auto py-6 px-4 border-t">
        <div className="flex justify-between items-center">
          {previousLesson ? (
            <Link href={`/lessons/${previousLesson}`} className={`${colors.buttonBg} text-white py-2 px-4 rounded-lg flex items-center`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Previous Lesson
            </Link>
          ) : (
            <div></div>
          )}
          
          {nextLesson ? (
            <Link href={`/lessons/${nextLesson}`} className={`${colors.buttonBg} text-white py-2 px-4 rounded-lg flex items-center`}>
              Next Lesson
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}