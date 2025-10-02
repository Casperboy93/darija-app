"use client";

import React from 'react';

export default function MakingAppointment() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Making a Medical Appointment</h3>
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
            <td className="px-4 py-2">I want to book an appointment</td>
            <td className="px-4 py-2">بغيت نحجز موعد</td>
            <td className="px-4 py-2">bghit nhjz maw3id</td>
            <td className="px-4 py-2">Opening request.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">With which doctor?</td>
            <td className="px-4 py-2">مع أي طبيب؟</td>
            <td className="px-4 py-2">m3 aay tbbib?</td>
            <td className="px-4 py-2">Reception reply.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Is there availability today?</td>
            <td className="px-4 py-2">واش كاين وقت اليوم؟</td>
            <td className="px-4 py-2">wash kayn waqt lyum?</td>
            <td className="px-4 py-2">Check schedule.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">I prefer the morning</td>
            <td className="px-4 py-2">كنفضل الصباح</td>
            <td className="px-4 py-2">knfdl ssbah</td>
            <td className="px-4 py-2">Preference.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Okay, confirmed.</td>
            <td className="px-4 py-2">مزيان، تأكد.</td>
            <td className="px-4 py-2">mzian, t2kkd.</td>
            <td className="px-4 py-2">Confirmation.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}