"use client";

import React from 'react';

export default function CustomerServiceReturns() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Customer Service & Returns</h3>
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
            <td className="px-4 py-2">I want to return this</td>
            <td className="px-4 py-2">بغيت نرجّع هادا</td>
            <td className="px-4 py-2">bghit nrj3 hada</td>
            <td className="px-4 py-2">Return request.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">What is your return policy?</td>
            <td className="px-4 py-2">شنو سياسة الإرجاع؟</td>
            <td className="px-4 py-2">shnu siyaset l irja3?</td>
            <td className="px-4 py-2">Policy question.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">It’s damaged</td>
            <td className="px-4 py-2">مخدوم/مكسّر</td>
            <td className="px-4 py-2">mkhsar</td>
            <td className="px-4 py-2">Defect description.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Exchange or refund?</td>
            <td className="px-4 py-2">مبادلة ولا ترجيع الفلوس؟</td>
            <td className="px-4 py-2">mubadala wla trjii3 l flus?</td>
            <td className="px-4 py-2">Resolution options.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Customer support</td>
            <td className="px-4 py-2">خدمة الزبناء</td>
            <td className="px-4 py-2">khidmat zbna2</td>
            <td className="px-4 py-2">Support department.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}