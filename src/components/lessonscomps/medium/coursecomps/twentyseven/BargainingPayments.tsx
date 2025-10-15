"use client";

import React from 'react';

export default function BargainingPayments() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Bargaining & Payments</h3>
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
            <td className="px-4 py-2">Can you lower the price?</td>
            <td className="px-4 py-2">تقدر تنقص الثمن؟</td>
            <td className="px-4 py-2">tqdr tnqss thaman?</td>
            <td className="px-4 py-2">Polite bargaining.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">This is too expensive.</td>
            <td className="px-4 py-2">هادا غالي بزاف.</td>
            <td className="px-4 py-2">hada ghali bzzaf.</td>
            <td className="px-4 py-2">Expressing price concern.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Do you accept card?</td>
            <td className="px-4 py-2">كتقبل الكارت؟</td>
            <td className="px-4 py-2">katqbl l kart?</td>
            <td className="px-4 py-2">Payment method.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Cash only</td>
            <td className="px-4 py-2">غير نقدر بالكاش</td>
            <td className="px-4 py-2">ghir nqdr bl cash</td>
            <td className="px-4 py-2">Cash payment.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Final price</td>
            <td className="px-4 py-2">الثمن النهائي</td>
            <td className="px-4 py-2">thaman nihayi</td>
            <td className="px-4 py-2">Agreement.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}