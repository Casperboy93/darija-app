"use client";

import React from 'react';

export default function LeaseUtilities() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Lease & Utilities</h3>
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
            <td className="px-4 py-2">When does the lease start?</td>
            <td className="px-4 py-2">فاش كيبدأ العقد؟</td>
            <td className="px-4 py-2">fash kaybda l aqd?</td>
            <td className="px-4 py-2">Lease timing.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Is water included?</td>
            <td className="px-4 py-2">واش الماء داخل؟</td>
            <td className="px-4 py-2">wash l ma dakhil?</td>
            <td className="px-4 py-2">Utility inclusion.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">How do I pay electricity?</td>
            <td className="px-4 py-2">كيفاش نخلص الضو؟</td>
            <td className="px-4 py-2">kifash nkhallis ddu?</td>
            <td className="px-4 py-2">Payment method.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">I have a maintenance issue</td>
            <td className="px-4 py-2">كاين مشكل ف الصيانة</td>
            <td className="px-4 py-2">kayn mshkil f ssiyana</td>
            <td className="px-4 py-2">Report problem.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}