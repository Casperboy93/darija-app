"use client";

import React from 'react';

export default function LessonOverview() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Lesson Overview</h2>
      <p className="text-gray-700 mb-4">
        This lesson prepares you to respond to emergencies and communicate safety needs in Darija:
        core emergency vocabulary, reporting incidents, medical emergencies, and getting police assistance.
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>Use essential emergency and safety vocabulary</li>
        <li>Report incidents clearly and calmly</li>
        <li>Describe symptoms and conditions to medical staff</li>
        <li>Request help from police and security</li>
        <li>Practice realistic emergency dialogues</li>
      </ul>
    </section>
  );
}