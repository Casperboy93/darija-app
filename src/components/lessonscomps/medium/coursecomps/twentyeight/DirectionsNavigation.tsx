"use client";

import React from 'react';

export default function DirectionsNavigation() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Directions & Navigation</h3>
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
            <td className="px-4 py-2">Where is the station?</td>
            <td className="px-4 py-2">فين المحطة؟</td>
            <td className="px-4 py-2">fin l ma7tta?</td>
            <td className="px-4 py-2">Asking location.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Turn left</td>
            <td className="px-4 py-2">دور على ليسار</td>
            <td className="px-4 py-2">dour 3la l yssar</td>
            <td className="px-4 py-2">Navigation.
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Turn right</td>
            <td className="px-4 py-2">دور على ليمن</td>
            <td className="px-4 py-2">dour 3la l ymen</td>
            <td className="px-4 py-2">Navigation.
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Go straight ahead</td>
            <td className="px-4 py-2">سير نيشان</td>
            <td className="px-4 py-2">sir nishan</td>
            <td className="px-4 py-2">Navigation.
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Near / far</td>
            <td className="px-4 py-2">قريب / بعيد</td>
            <td className="px-4 py-2">qrib / b3id</td>
            <td className="px-4 py-2">Distance terms.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}