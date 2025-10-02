"use client";

import React from 'react';

export default function GovernmentOffices() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Government Offices</h3>
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
            <td className="px-4 py-2">Municipality</td>
            <td className="px-4 py-2">البلدية</td>
            <td className="px-4 py-2">l baladiya</td>
            <td className="px-4 py-2">City office.
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Police station</td>
            <td className="px-4 py-2">مركز الشرطة</td>
            <td className="px-4 py-2">markaz shurta</td>
            <td className="px-4 py-2">Authority office.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Tax office</td>
            <td className="px-4 py-2">مكتب الضرائب</td>
            <td className="px-4 py-2">mktab d dara2ib</td>
            <td className="px-4 py-2">Administration.
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Social security</td>
            <td className="px-4 py-2">الضمان الاجتماعي</td>
            <td className="px-4 py-2">d dman l ijtima3i</td>
            <td className="px-4 py-2">Benefits office.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Court</td>
            <td className="px-4 py-2">المحكمة</td>
            <td className="px-4 py-2">l mahkama</td>
            <td className="px-4 py-2">Legal office.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}