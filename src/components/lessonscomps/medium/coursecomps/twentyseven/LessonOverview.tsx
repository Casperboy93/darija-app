"use client";

import React from 'react';

export default function LessonOverview() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Lesson Overview</h3>
      <p className="text-gray-700">
        In this lesson, you'll learn practical Darija for shopping and consumer services. 
        You'll cover store vocabulary, bargaining and payment phrases, customer service and returns, 
        and online shopping with delivery.
      </p>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
        <div className="bg-gray-50 border border-gray-200 p-3 rounded">
          <strong>Goals:</strong>
          <ul className="list-disc ml-5 mt-1">
            <li>Use shopping and store vocabulary</li>
            <li>Negotiate prices and discuss payment</li>
            <li>Handle returns and customer support</li>
            <li>Order online and schedule delivery</li>
          </ul>
        </div>
        <div className="bg-gray-50 border border-gray-200 p-3 rounded">
          <strong>Tip:</strong>
          <p className="mt-1">Polite phrases and respectful tone go a long way when bargaining.</p>
        </div>
      </div>
    </div>
  );
}