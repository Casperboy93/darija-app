"use client";

import React from 'react';

export default function MedicalEmergency() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Medical Emergency</h2>
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
              <td className="px-4 py-2">I need a doctor</td>
              <td className="px-4 py-2">خاصني طبيب</td>
              <td className="px-4 py-2">khaSni tbib</td>
              <td className="px-4 py-2">Urgent request for medical help.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Call an ambulance</td>
              <td className="px-4 py-2">عيّطو للأمبولانس</td>
              <td className="px-4 py-2">3ayto l-ambulans</td>
              <td className="px-4 py-2">Ask bystanders or staff.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">I’m having chest pain</td>
              <td className="px-4 py-2">كنحس بوجع فالصدر</td>
              <td className="px-4 py-2">kn7ess b wja3 f S-Sadr</td>
              <td className="px-4 py-2">Describe symptoms clearly.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">I’m allergic to [peanuts]</td>
              <td className="px-4 py-2">عندي حساسية من [كوكاو]</td>
              <td className="px-4 py-2">3ndi 7sasiya mn [kawkaw]</td>
              <td className="px-4 py-2">Replace item in brackets.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">I need my medication</td>
              <td className="px-4 py-2">خاصني الدوا ديالي</td>
              <td className="px-4 py-2">khaSni d-dwa dyali</td>
              <td className="px-4 py-2">Useful at hospital or pharmacy.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Where is the nearest hospital?</td>
              <td className="px-4 py-2">فين أقرب سبيطار؟</td>
              <td className="px-4 py-2">fin a9rab sbitar?</td>
              <td className="px-4 py-2">Ask for directions.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}