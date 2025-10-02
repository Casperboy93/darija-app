"use client";

import React from 'react';

export default function LessonOverview() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Lesson Overview</h2>
      <p className="text-gray-700 mb-4">
        In this lesson, you'll learn how to confidently handle dining situations in Darija:
        restaurant vocabulary, ordering food, communicating dietary preferences, making reservations,
        and polite dining etiquette.
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>Use core restaurant terms and phrases</li>
        <li>Order food and drinks naturally</li>
        <li>Explain dietary needs and allergies</li>
        <li>Make, confirm, and cancel reservations</li>
        <li>Practice etiquette and polite expressions</li>
      </ul>
    </section>
  );
}