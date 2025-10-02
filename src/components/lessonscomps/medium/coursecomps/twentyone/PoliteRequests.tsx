"use client";

import React from 'react';

export default function PoliteRequests() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Polite Requests</h3>
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
            <td className="px-4 py-2">Please, can you help me?</td>
            <td className="px-4 py-2">عفاك، تقدر تعاونّي؟</td>
            <td className="px-4 py-2">afak, tqdr tawnni?</td>
            <td className="px-4 py-2">Polite help request.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Could you speak slowly?</td>
            <td className="px-4 py-2">ممكن تهدر بشوية؟</td>
            <td className="px-4 py-2">mumkin thdar b shwiya?</td>
            <td className="px-4 py-2">Request to slow down.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Excuse me</td>
            <td className="px-4 py-2">سمح ليا</td>
            <td className="px-4 py-2">smeh lia</td>
            <td className="px-4 py-2">Polite interruption.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">I need a favor</td>
            <td className="px-4 py-2">خاصني خدمة</td>
            <td className="px-4 py-2">khasni khdma</td>
            <td className="px-4 py-2">Ask for assistance.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}