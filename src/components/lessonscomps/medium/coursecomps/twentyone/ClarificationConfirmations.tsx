"use client";

import React from 'react';

export default function ClarificationConfirmations() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Clarifications & Confirmations</h3>
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
            <td className="px-4 py-2">I didn't understand</td>
            <td className="px-4 py-2">ما فهمتش</td>
            <td className="px-4 py-2">ma fhmtsh</td>
            <td className="px-4 py-2">Ask for clarification.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Can you repeat, please?</td>
            <td className="px-4 py-2">عاود، عفاك</td>
            <td className="px-4 py-2">awed, afak</td>
            <td className="px-4 py-2">Polite repetition request.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">What do you mean?</td>
            <td className="px-4 py-2">شنو كتقصد؟</td>
            <td className="px-4 py-2">shnu k tqsd?</td>
            <td className="px-4 py-2">Clarify meaning.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Do you agree?</td>
            <td className="px-4 py-2">واش متافق؟</td>
            <td className="px-4 py-2">wash mtafq?</td>
            <td className="px-4 py-2">Confirm agreement.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}