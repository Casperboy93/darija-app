"use client";

import React from 'react';

export default function FindingApartment() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Finding an Apartment</h3>
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
            <td className="px-4 py-2">I'm looking for an apartment</td>
            <td className="px-4 py-2">كنقلب على شقة</td>
            <td className="px-4 py-2">k nqleb ala shqa</td>
            <td className="px-4 py-2">Initial inquiry.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">How much is the rent?</td>
            <td className="px-4 py-2">بشحال الكراء؟</td>
            <td className="px-4 py-2">b shhal l kra?</td>
            <td className="px-4 py-2">Ask price.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Is it furnished?</td>
            <td className="px-4 py-2">واش مفروشة؟</td>
            <td className="px-4 py-2">wash mfrusha?</td>
            <td className="px-4 py-2">Furnished question.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Can I visit it?</td>
            <td className="px-4 py-2">نقدر نزور الشقة؟</td>
            <td className="px-4 py-2">nqdr nzur shqa?</td>
            <td className="px-4 py-2">Viewing request.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}