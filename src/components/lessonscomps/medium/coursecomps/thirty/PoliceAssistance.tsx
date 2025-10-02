"use client";

import React from 'react';

export default function PoliceAssistance() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Police & Security Assistance</h2>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">English</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Darija (Arabic)</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Darija (ASCII)</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="px-4 py-2">I need the police</td>
              <td className="px-4 py-2">خاصني البوليس</td>
              <td className="px-4 py-2">khaSni l-bulis</td>
              <td className="px-4 py-2">General request for police help.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Where is the police station?</td>
              <td className="px-4 py-2">فين الكوميسيرية؟</td>
              <td className="px-4 py-2">fin l-komissaria?</td>
              <td className="px-4 py-2">Police station = "komissaria".</td>
            </tr>
            <tr>
              <td className="px-4 py-2">My friend is missing</td>
              <td className="px-4 py-2">صاحبي/صاحبتي تايه(ة)</td>
              <td className="px-4 py-2">Sa7bi/Sa7bti tayh(a)</td>
              <td className="px-4 py-2">Gendered endings; use (a) for feminine.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">I was assaulted</td>
              <td className="px-4 py-2">تعرضت للعنف</td>
              <td className="px-4 py-2">t3arraDt l l-3onf</td>
              <td className="px-4 py-2">Serious incident phrasing.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">I need a translator</td>
              <td className="px-4 py-2">خاصني مترجم</td>
              <td className="px-4 py-2">khaSni m-tarjem</td>
              <td className="px-4 py-2">Request for language assistance.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Can I make a phone call?</td>
              <td className="px-4 py-2">نقدر ندير تيليفون؟</td>
              <td className="px-4 py-2">n9dar ndir tiliFun?</td>
              <td className="px-4 py-2">Ask politely for a call.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}