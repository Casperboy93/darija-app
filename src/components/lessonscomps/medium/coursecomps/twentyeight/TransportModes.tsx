"use client";

import React from 'react';

export default function TransportModes() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Transport Modes</h3>
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
            <td className="px-4 py-2">Bus</td>
            <td className="px-4 py-2">طوبيس</td>
            <td className="px-4 py-2">tobis</td>
            <td className="px-4 py-2">City bus.
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Train</td>
            <td className="px-4 py-2">تران</td>
            <td className="px-4 py-2">tran</td>
            <td className="px-4 py-2">Rail.
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Taxi</td>
            <td className="px-4 py-2">طاكسي</td>
            <td className="px-4 py-2">taksi</td>
            <td className="px-4 py-2">Small/Grand taxis.
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Tram</td>
            <td className="px-4 py-2">ترام</td>
            <td className="px-4 py-2">tram</td>
            <td className="px-4 py-2">City tram.
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Shared ride</td>
            <td className="px-4 py-2">طاكسي مشترك</td>
            <td className="px-4 py-2">taksi mushtarak</td>
            <td className="px-4 py-2">Grand taxi route.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}