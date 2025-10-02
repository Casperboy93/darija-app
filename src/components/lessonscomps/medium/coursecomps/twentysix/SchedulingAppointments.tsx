"use client";

import React from 'react';

export default function SchedulingAppointments() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Scheduling Appointments</h3>
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
            <td className="px-4 py-2">General booking.
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">What dates are available?</td>
            <td className="px-4 py-2">شنو الأيام المتاحة؟</td>
            <td className="px-4 py-2">shnu l ayam l mtaha?</td>
            <td className="px-4 py-2">Check availability.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Morning or afternoon?</td>
            <td className="px-4 py-2">الصباح ولا العشية؟</td>
            <td className="px-4 py-2">ssbah wla l 3shiya?</td>
            <td className="px-4 py-2">Preference.
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Please confirm the appointment</td>
            <td className="px-4 py-2">عفاك أكّد الموعد</td>
            <td className="px-4 py-2">afak akkd l maw3id</td>
            <td className="px-4 py-2">Confirmation request.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">I need to reschedule</td>
            <td className="px-4 py-2">خاصني نبدّل الموعد</td>
            <td className="px-4 py-2">khasni nbdl l maw3id</td>
            <td className="px-4 py-2">Rescheduling.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}