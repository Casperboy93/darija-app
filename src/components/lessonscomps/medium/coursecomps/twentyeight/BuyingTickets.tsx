"use client";

import React from 'react';

export default function BuyingTickets() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Buying Tickets</h3>
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
            <td className="px-4 py-2">I want to buy a ticket</td>
            <td className="px-4 py-2">بغيت نشري تيكي</td>
            <td className="px-4 py-2">bghit nshri tiki</td>
            <td className="px-4 py-2">General request.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">One-way</td>
            <td className="px-4 py-2">اتجاه واحد</td>
            <td className="px-4 py-2">itti jah wa7ed</td>
            <td className="px-4 py-2">Single ticket.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Round-trip</td>
            <td className="px-4 py-2">ذهاب وإياب</td>
            <td className="px-4 py-2">dhhab w iyaab</td>
            <td className="px-4 py-2">Return ticket.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">How much is it?</td>
            <td className="px-4 py-2">بشحال الثمن؟</td>
            <td className="px-4 py-2">bshhal thaman?</td>
            <td className="px-4 py-2">Price question.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Departure time</td>
            <td className="px-4 py-2">وقت الانطلاق</td>
            <td className="px-4 py-2">wqt l intilaq</td>
            <td className="px-4 py-2">Schedule.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}