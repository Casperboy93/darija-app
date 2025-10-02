"use client";

import React from 'react';

export default function ReportingIncidents() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Reporting Incidents</h2>
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
              <td className="px-4 py-2">I want to report an incident</td>
              <td className="px-4 py-2">بغيت نصرّح بواحد الحادث</td>
              <td className="px-4 py-2">bghit nsarra7 b wa7d l7adeth</td>
              <td className="px-4 py-2">Formal phrasing at stations or offices.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Someone stole my bag</td>
              <td className="px-4 py-2">شي واحد سرق ليا الشيّاشة</td>
              <td className="px-4 py-2">shi wa7d sraq lia sh-shiyasha</td>
              <td className="px-4 py-2">Common theft report; "شيّاشة" is purse/bag.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">I lost my passport</td>
              <td className="px-4 py-2">ضعت ليا الباسبور</td>
              <td className="px-4 py-2">d3t lia l-passpor</td>
              <td className="px-4 py-2">Report at police or consulate.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">There was an accident</td>
              <td className="px-4 py-2">كان واحد الحادثة</td>
              <td className="px-4 py-2">kan wa7d l7adtha</td>
              <td className="px-4 py-2">Use to alert authorities.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">I need a witness statement form</td>
              <td className="px-4 py-2">بغيت فورمولير ديال الشهادة</td>
              <td className="px-4 py-2">bghit formulaire dyal sh-shahada</td>
              <td className="px-4 py-2">Form-related phrase; loan "formulaire" is common.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Can you help me fill this out?</td>
              <td className="px-4 py-2">تقدر تعاونّي نعمر هاد الورقة؟</td>
              <td className="px-4 py-2">t9dar t3awni n3ammer had l-wr9a?</td>
              <td className="px-4 py-2">Request assistance politely.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}