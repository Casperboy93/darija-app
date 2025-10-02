"use client";

import React from 'react';

export default function EverydayVocabulary() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Core Everyday Vocabulary</h3>
      <table className="min-w-full table-auto border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-gray-800">
            <th className="px-4 py-2 text-left">English</th>
            <th className="px-4 py-2 text-left">Darija (Arabic)</th>
            <th className="px-4 py-2 text-left">Darija (ASCII)</th>
            <th className="px-4 py-2 text-left">Notes</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr className="border-t">
            <td className="px-4 py-2">Hello</td>
            <td className="px-4 py-2">سلام</td>
            <td className="px-4 py-2">salam</td>
            <td className="px-4 py-2">Common greeting.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Good morning</td>
            <td className="px-4 py-2">صباح الخير</td>
            <td className="px-4 py-2">sabah lkhir</td>
            <td className="px-4 py-2">Morning greeting.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">How are you?</td>
            <td className="px-4 py-2">كيداير؟</td>
            <td className="px-4 py-2">kidair?</td>
            <td className="px-4 py-2">Informal check-in.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Thank you</td>
            <td className="px-4 py-2">شكرا</td>
            <td className="px-4 py-2">shukran</td>
            <td className="px-4 py-2">Express gratitude.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Please</td>
            <td className="px-4 py-2">عفاك</td>
            <td className="px-4 py-2">afak</td>
            <td className="px-4 py-2">Polite request marker.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Sorry</td>
            <td className="px-4 py-2">سمح ليا</td>
            <td className="px-4 py-2">smeh lia</td>
            <td className="px-4 py-2">Apology.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}