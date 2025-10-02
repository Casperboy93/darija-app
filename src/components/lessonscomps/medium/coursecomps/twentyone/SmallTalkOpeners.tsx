"use client";

import React from 'react';

export default function SmallTalkOpeners() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Small Talk Openers</h3>
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
            <td className="px-4 py-2">How's everything?</td>
            <td className="px-4 py-2">كيداير الأمور؟</td>
            <td className="px-4 py-2">kidair l umor?</td>
            <td className="px-4 py-2">General opener.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Long time no see!</td>
            <td className="px-4 py-2">زمان ما شفناك!</td>
            <td className="px-4 py-2">zman ma shufnak!</td>
            <td className="px-4 py-2">Friendly reunion.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">What are you up to lately?</td>
            <td className="px-4 py-2">شنو كتدير هاد الايام؟</td>
            <td className="px-4 py-2">shnu ktidir had layam?</td>
            <td className="px-4 py-2">Recent activities.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Nice to meet you</td>
            <td className="px-4 py-2">تشرفنا</td>
            <td className="px-4 py-2">tshrafna</td>
            <td className="px-4 py-2">Polite opener.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}