"use client";

import React from 'react';

export default function BudgetingPersonalFinance() {
  return (
    <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Budgeting & Personal Finance</h3>
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
            <td className="px-4 py-2">Budget</td>
            <td className="px-4 py-2">ميزانية</td>
            <td className="px-4 py-2">mizaniya</td>
            <td className="px-4 py-2">Plan for income and expenses.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Savings</td>
            <td className="px-4 py-2">ادخار</td>
            <td className="px-4 py-2">iddikhar</td>
            <td className="px-4 py-2">Money set aside.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Expense</td>
            <td className="px-4 py-2">مصروف</td>
            <td className="px-4 py-2">msruf</td>
            <td className="px-4 py-2">Cost of goods/services.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Income</td>
            <td className="px-4 py-2">دخل</td>
            <td className="px-4 py-2">dkhl</td>
            <td className="px-4 py-2">Money received.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Need</td>
            <td className="px-4 py-2">حاجة ضرورية</td>
            <td className="px-4 py-2">haja daruriya</td>
            <td className="px-4 py-2">Essential spending.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Want</td>
            <td className="px-4 py-2">حاجة غير ضرورية</td>
            <td className="px-4 py-2">haja ghair daruriya</td>
            <td className="px-4 py-2">Non-essential spending.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Emergency fund</td>
            <td className="px-4 py-2">صندوق الطوارئ</td>
            <td className="px-4 py-2">snduq t tawari</td>
            <td className="px-4 py-2">For unexpected costs.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Track expenses</td>
            <td className="px-4 py-2">راقب المصاريف</td>
            <td className="px-4 py-2">raqeb l msarif</td>
            <td className="px-4 py-2">Monitor spending.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}