"use client";

import React from 'react';

export default function CommutingProblems() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Commuting Problems</h3>
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
            <td className="px-4 py-2">Delayed</td>
            <td className="px-4 py-2">متأخر</td>
            <td className="px-4 py-2">mt'akhr</td>
            <td className="px-4 py-2">Train/bus delay.
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Canceled</td>
            <td className="px-4 py-2">تلغى</td>
            <td className="px-4 py-2">tlgha</td>
            <td className="px-4 py-2">Service canceled.
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Lost</td>
            <td className="px-4 py-2">توهت</td>
            <td className="px-4 py-2">twhit</td>
            <td className="px-4 py-2">Wrong route.
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Overcrowded</td>
            <td className="px-4 py-2">عامر بزاف</td>
            <td className="px-4 py-2">3amer bzzaf</td>
            <td className="px-4 py-2">Packed transport.
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Traffic</td>
            <td className="px-4 py-2">الزحام</td>
            <td className="px-4 py-2">zz7am</td>
            <td className="px-4 py-2">Heavy traffic.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}