"use client";

import React from 'react';

export default function PharmacyPhrases() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Pharmacy Phrases</h3>
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
            <td className="px-4 py-2">I need medicine for a cold</td>
            <td className="px-4 py-2">بغيت دواء لزكام</td>
            <td className="px-4 py-2">bghit dwa l zkam</td>
            <td className="px-4 py-2">Common request.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Is this prescription required?</td>
            <td className="px-4 py-2">واش خاص وصفة طبية؟</td>
            <td className="px-4 py-2">wash khas wasfa tbbya?</td>
            <td className="px-4 py-2">Prescription check.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">How to take this medicine?</td>
            <td className="px-4 py-2">كيفاش ناخد هاد الدواء؟</td>
            <td className="px-4 py-2">kifash nakhod had dwa?</td>
            <td className="px-4 py-2">Usage instructions.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Are there side effects?</td>
            <td className="px-4 py-2">واش كاينين آثار جانبية؟</td>
            <td className="px-4 py-2">wash kaynin athar janbiya?</td>
            <td className="px-4 py-2">Safety check.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">I’m allergic to penicillin</td>
            <td className="px-4 py-2">عندي حساسية من البينيسيلين</td>
            <td className="px-4 py-2">andi 7sasiya mn l penicillin</td>
            <td className="px-4 py-2">Important note.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}