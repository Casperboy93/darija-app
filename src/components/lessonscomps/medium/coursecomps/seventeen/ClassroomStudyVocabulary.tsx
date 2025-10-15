"use client";

import React from 'react';

export default function ClassroomStudyVocabulary() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
        Classroom and Study Vocabulary
      </h2>
      
      <p className="text-gray-700 mb-6">Essential terms for classroom activities and study materials.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Kitab</p>
            <span className="text-2xl">📖</span>
          </div>
          <p className="text-gray-600">Book</p>
          <p className="text-sm text-gray-500 mt-1">كتاب</p>
          <p className="text-xs text-red-600 mt-2">Textbook or reference</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Daftar</p>
            <span className="text-2xl">📝</span>
          </div>
          <p className="text-gray-600">Notebook</p>
          <p className="text-sm text-gray-500 mt-1">دفتر</p>
          <p className="text-xs text-red-600 mt-2">For taking notes</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Qalam</p>
            <span className="text-2xl">✏️</span>
          </div>
          <p className="text-gray-600">Pen/Pencil</p>
          <p className="text-sm text-gray-500 mt-1">قلم</p>
          <p className="text-xs text-red-600 mt-2">Writing instrument</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Sabura</p>
            <span className="text-2xl">📋</span>
          </div>
          <p className="text-gray-600">Blackboard</p>
          <p className="text-sm text-gray-500 mt-1">سبورة</p>
          <p className="text-xs text-red-600 mt-2">Classroom board</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Imtihan</p>
            <span className="text-2xl">📄</span>
          </div>
          <p className="text-gray-600">Exam</p>
          <p className="text-sm text-gray-500 mt-1">امتحان</p>
          <p className="text-xs text-red-600 mt-2">Test or examination</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Wajib</p>
            <span className="text-2xl">📋</span>
          </div>
          <p className="text-gray-600">Homework</p>
          <p className="text-sm text-gray-500 mt-1">واجب</p>
          <p className="text-xs text-red-600 mt-2">Assignment</p>
        </div>
      </div>
    </div>
  );
}