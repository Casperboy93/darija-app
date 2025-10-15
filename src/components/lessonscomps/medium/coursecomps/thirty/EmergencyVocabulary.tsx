"use client";

import React from 'react';

export default function EmergencyVocabulary() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Emergency Vocabulary</h2>
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
              <td className="px-4 py-2">Emergency</td>
              <td className="px-4 py-2">حالة طارئة</td>
              <td className="px-4 py-2">7ala tare'a</td>
              <td className="px-4 py-2">Used in formal contexts.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Ambulance</td>
              <td className="px-4 py-2">أمبولانس</td>
              <td className="px-4 py-2">ambulans</td>
              <td className="px-4 py-2">Loanword; widely understood.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Hospital</td>
              <td className="px-4 py-2">سبيطار</td>
              <td className="px-4 py-2">sbitar</td>
              <td className="px-4 py-2">Colloquial for hospital.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Police</td>
              <td className="px-4 py-2">بوليس</td>
              <td className="px-4 py-2">bulis</td>
              <td className="px-4 py-2">General police force.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Firefighters</td>
              <td className="px-4 py-2">الوقاية المدنية</td>
              <td className="px-4 py-2">lw9aya lmadaniya</td>
              <td className="px-4 py-2">Civil protection services.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Help!</td>
              <td className="px-4 py-2">النجدة!</td>
              <td className="px-4 py-2">nnajda!</td>
              <td className="px-4 py-2">Shouted in emergencies.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Danger</td>
              <td className="px-4 py-2">خطر</td>
              <td className="px-4 py-2">khatar</td>
              <td className="px-4 py-2">Used for warnings.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}