"use client";

import React from 'react';

export default function CitizenServices() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Citizen Services</h3>
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
            <td className="px-4 py-2">I need a certificate</td>
            <td className="px-4 py-2">بغيت شهادة</td>
            <td className="px-4 py-2">bghit shahada</td>
            <td className="px-4 py-2">General request.
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Where can I apply?</td>
            <td className="px-4 py-2">فين نقدر نقدم الطلب؟</td>
            <td className="px-4 py-2">fin nqdr nqdm t talab?</td>
            <td className="px-4 py-2">Application location.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">What documents are required?</td>
            <td className="px-4 py-2">شنو الوثائق المطلوبة؟</td>
            <td className="px-4 py-2">shnu l watha2iq l mtluba?</td>
            <td className="px-4 py-2">Document checklist.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">How long does it take?</td>
            <td className="px-4 py-2">بشحال كتدوم المدة؟</td>
            <td className="px-4 py-2">b shhal katdum l muda?</td>
            <td className="px-4 py-2">Processing time.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Where do I pick it up?</td>
            <td className="px-4 py-2">فين ناخد الوثيقة؟</td>
            <td className="px-4 py-2">fin nakhod l wathiqa?</td>
            <td className="px-4 py-2">Collection point.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}