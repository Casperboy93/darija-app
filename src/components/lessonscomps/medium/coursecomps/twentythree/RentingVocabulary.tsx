"use client";

import React from 'react';

export default function RentingVocabulary() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Renting Vocabulary</h3>
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
            <td className="px-4 py-2">Rent</td>
            <td className="px-4 py-2">كراء</td>
            <td className="px-4 py-2">kra</td>
            <td className="px-4 py-2">Monthly payment.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Apartment</td>
            <td className="px-4 py-2">شقة</td>
            <td className="px-4 py-2">shqa</td>
            <td className="px-4 py-2">Place to live.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Landlord</td>
            <td className="px-4 py-2">مول الدار</td>
            <td className="px-4 py-2">mul ddar</td>
            <td className="px-4 py-2">Owner of the place.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Lease</td>
            <td className="px-4 py-2">عقد الكراء</td>
            <td className="px-4 py-2">aqd l kra</td>
            <td className="px-4 py-2">Rental contract.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Deposit</td>
            <td className="px-4 py-2">ضمانة</td>
            <td className="px-4 py-2">dmanah</td>
            <td className="px-4 py-2">Security deposit.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Utilities</td>
            <td className="px-4 py-2">خدمات</td>
            <td className="px-4 py-2">khadmat</td>
            <td className="px-4 py-2">Water, electricity, internet.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}