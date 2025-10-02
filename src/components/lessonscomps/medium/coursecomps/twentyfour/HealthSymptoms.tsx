"use client";

import React from 'react';

export default function HealthSymptoms() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Health Symptoms Vocabulary</h3>
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
            <td className="px-4 py-2">I have a fever</td>
            <td className="px-4 py-2">عندي السخانة</td>
            <td className="px-4 py-2">andi sskhana</td>
            <td className="px-4 py-2">Fever symptom.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">I feel dizzy</td>
            <td className="px-4 py-2">كايدوخ ليا الراس</td>
            <td className="px-4 py-2">kaydukh lia rras</td>
            <td className="px-4 py-2">Dizziness.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">I have a headache</td>
            <td className="px-4 py-2">عندي صداع</td>
            <td className="px-4 py-2">andi sda3</td>
            <td className="px-4 py-2">Headache symptom.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">I have a sore throat</td>
            <td className="px-4 py-2">حلقي كيوجعني</td>
            <td className="px-4 py-2">hlqi kywjjani</td>
            <td className="px-4 py-2">Throat pain.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">I’m coughing</td>
            <td className="px-4 py-2">كنكح</td>
            <td className="px-4 py-2">knk7</td>
            <td className="px-4 py-2">Cough.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}